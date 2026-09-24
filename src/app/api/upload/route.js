import { NextResponse } from 'next/server';
import { processImage } from '@/lib/imageProcessor';
import { uploadToStorage, deleteFromStorage } from '@/lib/cloudStorage';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB

export async function POST(request) {
  // 1. Parse multipart FormData with try/catch to handle malformed or empty payloads gracefully
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Dữ liệu yêu cầu không hợp lệ hoặc thiếu multipart/form-data.',
      },
      { status: 400 }
    );
  }

  const file = formData.get('file');

  if (!file || typeof file === 'string') {
    return NextResponse.json(
      { success: false, error: 'Không tìm thấy tệp tải lên (trường "file" là bắt buộc).' },
      { status: 400 }
    );
  }

  // 2. Validate file size before allocating memory buffer (prevent OOM / heap exhaustion)
  if (typeof file.size === 'number' && file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { success: false, error: 'Dung lượng tệp vượt quá giới hạn cho phép (tối đa 25MB).' },
      { status: 400 }
    );
  }

  if (typeof file.size === 'number' && file.size === 0) {
    return NextResponse.json(
      { success: false, error: 'Tệp tải lên rỗng.' },
      { status: 400 }
    );
  }

  // 3. Validate MIME type if declared
  if (file.type && !file.type.startsWith('image/')) {
    return NextResponse.json(
      { success: false, error: 'Tệp tải lên không phải là định dạng hình ảnh hợp lệ.' },
      { status: 400 }
    );
  }

  // 4. Convert Web File to Node Buffer
  const arrayBuffer = await file.arrayBuffer();
  const inputBuffer = Buffer.from(arrayBuffer);

  if (inputBuffer.length === 0) {
    return NextResponse.json(
      { success: false, error: 'Tệp tải lên rỗng.' },
      { status: 400 }
    );
  }

  // 5. Check optional watermark parameter (default true)
  const watermarkParam = formData.get('watermark');
  const shouldWatermark = watermarkParam !== 'false' && watermarkParam !== '0';

  // 6. Optimize and watermark via Sharp pipeline with format error catching
  let processed;
  try {
    processed = await processImage(inputBuffer, {
      watermark: shouldWatermark,
      quality: 82,
      maxWidth: 1600,
      maxHeight: 1600,
    });
  } catch (err) {
    const msg = err.message || '';
    if (
      msg.includes('unsupported image format') ||
      msg.includes('Input buffer') ||
      msg.includes('Input file') ||
      msg.includes('VipsForeignLoad')
    ) {
      return NextResponse.json(
        {
          success: false,
          error: 'Tệp tải lên không phải là định dạng hình ảnh hợp lệ.',
        },
        { status: 400 }
      );
    }
    // Re-throw unexpected server errors to outer catch
    throw err;
  }

  // 7. Upload optimized WebP buffer to Cloudflare R2
  try {
    const originalName = file.name || 'image';
    const uploadResult = await uploadToStorage(processed.buffer, originalName, 'image/webp');

    return NextResponse.json({
      success: true,
      url: uploadResult.url,
      key: uploadResult.key,
      sizeBytes: processed.sizeBytes,
      size: processed.sizeBytes,
      format: processed.format,
      width: processed.width,
      height: processed.height,
    });
  } catch (error) {
    console.error('Lỗi tải ảnh lên Cloudflare R2:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Xử lý và tải ảnh lên máy chủ thất bại.',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const target = searchParams.get('key') || searchParams.get('url');

    if (!target) {
      return NextResponse.json(
        { success: false, error: 'Thiếu tham số key hoặc url cần xóa.' },
        { status: 400 }
      );
    }

    await deleteFromStorage(target);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lỗi xóa ảnh qua /api/upload:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Xóa ảnh thất bại.' },
      { status: 500 }
    );
  }
}
