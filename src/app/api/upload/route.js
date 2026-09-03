import { NextResponse } from 'next/server';
import { processImage } from '@/lib/imageProcessor';
import { uploadToStorage, deleteFromStorage } from '@/lib/cloudStorage';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { success: false, error: 'Không tìm thấy tệp tải lên (trường "file" là bắt buộc).' },
        { status: 400 }
      );
    }

    // Convert Web File / Blob to Node.js Buffer
    const arrayBuffer = await file.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    // Validate image format
    if (inputBuffer.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Tệp tải lên rỗng.' },
        { status: 400 }
      );
    }

    // Check optional watermark parameter (default true)
    const watermarkParam = formData.get('watermark');
    const shouldWatermark = watermarkParam !== 'false' && watermarkParam !== '0';

    // Optimize and watermark via Sharp pipeline
    const processed = await processImage(inputBuffer, {
      watermark: shouldWatermark,
      quality: 82,
      maxWidth: 1600,
      maxHeight: 1600,
    });

    // Upload optimized WebP buffer to Cloudflare R2
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
    console.error('Lỗi tải ảnh qua /api/upload:', error);
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
