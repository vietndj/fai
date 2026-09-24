import { NextResponse } from 'next/server';
import { getCategories, createPost } from '@/lib/firestore';
import { processImage } from '@/lib/imageProcessor';
import { uploadToStorage } from '@/lib/cloudStorage';
import {
  sendMessage,
  answerCallbackQuery,
  downloadFileBuffer,
} from '@/lib/telegram';
import {
  getTelegramSession,
  setTelegramSession,
  clearTelegramSession,
} from '@/lib/telegramSession';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function generateSlug(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function formatDate(date = new Date()) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function isUserAllowed(userId) {
  const allowedConfig = process.env.TELEGRAM_ALLOWED_USER_ID || process.env.TELEGRAM_ALLOWED_USERS || '';
  const allowedList = allowedConfig
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean);

  if (allowedList.length === 0) return false;
  return allowedList.includes(String(userId));
}

async function safeAnswerCallback(callbackId, text = '', options = {}) {
  try {
    return await answerCallbackQuery(callbackId, text, options);
  } catch (err) {
    console.warn(`[Webhook] Non-fatal callback acknowledgment error:`, err.message);
    return { ok: false, ignored: true };
  }
}

async function safeSendMessage(chatId, text, options = {}) {
  try {
    return await sendMessage(chatId, text, options);
  } catch (err) {
    console.warn(`[Webhook] Non-fatal sendMessage error for ${chatId}:`, err.message);
    return { ok: false, ignored: true };
  }
}

export async function POST(request) {
  try {
    const secretHeader = request.headers.get('x-telegram-bot-api-secret-token');
    const expectedSecret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (!expectedSecret || secretHeader !== expectedSecret) {
      return NextResponse.json({ error: 'Unauthorized secret token' }, { status: 401 });
    }

    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json({ error: 'Bad Request', details: 'Invalid JSON' }, { status: 400 });
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Bad Request', details: 'Payload must be a JSON object' }, { status: 400 });
    }

    const { message, callback_query } = body;
    const sender = message?.from || callback_query?.from;
    const chatId = message?.chat?.id || callback_query?.message?.chat?.id;

    if (!sender || !chatId) {
      return NextResponse.json({ ok: true });
    }

    const userId = sender.id;

    if (!isUserAllowed(userId)) {
      try {
        await safeSendMessage(
          chatId,
          `⛔ <b>Từ chối truy cập</b>\nBạn không có quyền đăng bài lên FAI Web.`,
          { parse_mode: 'HTML' }
        );
      } catch (e) {}
      return NextResponse.json({ ok: true, unauthorized: true });
    }

    // Handle Callback Queries (Inline button clicks)
    if (callback_query) {
      const callbackId = callback_query.id;
      const data = callback_query.data;

      if (data && data.startsWith('cat_')) {
        const categoryId = data.replace('cat_', '');
        const categories = await getCategories('doi-song');
        const selectedCat = categories.find((c) => c.id === categoryId);
        const categoryTitle = selectedCat ? selectedCat.title.replace(/\n/g, ' - ') : categoryId;

        await safeAnswerCallback(callbackId, `Đang xử lý đăng bài vào: ${categoryTitle}...`);

        const session = await getTelegramSession(chatId);
        if (!session || !session.photoFileId || !session.textContent) {
          await safeSendMessage(chatId, '⚠️ Phiên làm việc đã hết hạn hoặc thiếu dữ liệu. Vui lòng gửi lại ảnh.');
          return NextResponse.json({ ok: true });
        }

        await setTelegramSession(chatId, { step: 'PUBLISHING' });
        await safeSendMessage(chatId, '⏳ Đang tối ưu hóa ảnh WebP, đóng dấu logo và xuất bản lên hệ thống...');

        let publicImageUrl = '';
        try {
          const rawPhotoBuffer = await downloadFileBuffer(session.photoFileId);
          const processed = await processImage(rawPhotoBuffer, {
            maxWidth: 1600,
            quality: 82,
            watermark: true,
          });

          const uploaded = await uploadToStorage(
            processed.buffer,
            `telegram-${Date.now()}`,
            'image/webp'
          );
          publicImageUrl = uploaded.url;
        } catch (imgErr) {
          console.error('[Webhook] Failed to process/upload image:', imgErr);
          publicImageUrl = 'https://pub-447bd44dfdac4938912655c855b8631c.r2.dev/fai/posts/default-placeholder.webp';
        }

        const lines = session.textContent.split('\n').filter(l => l.trim() !== '');
        const title = lines[0] || 'Bài viết mới';
        const bodyText = lines.slice(1).join('\n') || title;
        const contentHtml = lines.slice(1).map(line => `<p>${line.trim()}</p>`).join('');
        const excerpt = bodyText.length > 150 ? bodyText.substring(0, 150) + '...' : bodyText;

        const dateStr = formatDate(new Date());
        const slugSuffix = Date.now().toString().slice(-4);
        const slug = `${generateSlug(title)}-${slugSuffix}`;

        const postData = {
          title: title,
          slug,
          categoryId: categoryId,
          date: dateStr,
          image: publicImageUrl,
          excerpt: excerpt,
          contentHtml: contentHtml,
          sourceUrl: '',
          author: 'FAI Editorial',
          readTime: '3 phút',
          order: 0,
          published: true,
          group: 'doi-song',
        };

        const createdPost = await createPost(postData);
        await clearTelegramSession(chatId);

        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const publicUrl = `${baseUrl}/doi-song`;
        const adminUrl = `${baseUrl}/admin/posts/${createdPost.id}`;

        await safeSendMessage(
          chatId,
          `🎉 <b>XUẤT BẢN BÀI VIẾT THÀNH CÔNG!</b>\n\n` +
            `📰 <b>Tiêu đề:</b> ${title}\n` +
            `📂 <b>Chuyên mục:</b> ${categoryTitle}\n` +
            `📅 <b>Ngày đăng:</b> ${dateStr}\n\n` +
            `🌐 <b>Xem bài viết trên web:</b>\n${publicUrl}\n\n` +
            `✏️ <b>Chỉnh sửa bài viết (Admin):</b>\n${adminUrl}`,
          { parse_mode: 'HTML' }
        );

        return NextResponse.json({ ok: true });
      }

      if (data === 'cancel') {
        await safeAnswerCallback(callbackId, 'Đã hủy phiên làm việc.');
        await clearTelegramSession(chatId);
        await safeSendMessage(chatId, '❌ Đã hủy phiên đăng bài.');
        return NextResponse.json({ ok: true });
      }
    }

    if (message) {
      const text = message.text || message.caption || '';
      const session = await getTelegramSession(chatId);

      // Handle URLs (Link Flow)
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const urls = text.match(urlRegex);
      
      if (urls && urls.length > 0) {
        const url = urls[0];
        await safeSendMessage(chatId, `⏳ Nova đã nhận link: ${url}\n🤖 Nova đang cào nội dung bài viết và đăng bài. Xin chờ...`);
        
        try {
          const { exec } = require('child_process');
          const fs = require('fs');
          const path = require('path');
          
          const PARENT_CID = "04a8bdb3-b095-444a-8d95-9e2b03ba7b2a";
          
          const prompt = `/boost\nNhận lệnh từ Telegram Webhook:\nNgười dùng (Chat ID: ${chatId}) yêu cầu đăng bài từ link: ${url}\n\nNhiệm vụ rẽ nhánh chuyên sâu (Tự Động Hóa 100%):\n1. Đọc nội dung bài viết từ link trên.\n2. Tối ưu lại bài viết bằng trí thông minh của bạn. Bọc YouTube vào div.block-video-wrapper, loại bỏ rác. Bọc danh sách vào block-timeline.\n3. Chạy script lưu bài viết vào cơ sở dữ liệu Firebase (collection: 'posts', group: 'doi-song'). Lấy slug của bài vừa tạo.\n4. Bắn tin nhắn phản hồi về lại Telegram bằng curl tới api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage với chat_id là ${chatId} báo đăng thành công kèm link.\n5. Dừng nhánh.`;

          const promptFile = path.join(process.cwd(), `prompt_${Date.now()}.txt`);
          fs.writeFileSync(promptFile, prompt, 'utf-8');

          const reNhanhScript = '/Users/vietmac/Documents/CODE/Quản gia/re_nhanh.py';
          const cmd = `python3 "${reNhanhScript}" --title="[Bot] Đăng bài ${Date.now()}" --parent-cid="${PARENT_CID}" --model="pro" --prompt-file="${promptFile}"`;
          
          exec(cmd, (error) => {
            if (fs.existsSync(promptFile)) fs.unlinkSync(promptFile); 
          });
        } catch (err) {
          console.error('[Webhook] Error triggering Antigravity:', err);
          await safeSendMessage(chatId, `❌ Lỗi kết nối AI cào bài: ${err.message}`);
        }
        return NextResponse.json({ ok: true });
      }

      // Handle Photo
      if (message.photo && Array.isArray(message.photo)) {
        const validPhotos = message.photo.filter((p) => p && typeof p.file_id === 'string');
        if (validPhotos.length === 0) return NextResponse.json({ ok: true });

        const highestPhoto = validPhotos[validPhotos.length - 1];
        const photoFileId = highestPhoto.file_id;
        const caption = message.caption || '';

        if (caption) {
          const categories = await getCategories('doi-song');
          const keyboard = categories.map((cat) => [
            { text: `📂 ${cat.title.replace(/\n/g, ' - ')}`, callback_data: `cat_${cat.id}` }
          ]);
          keyboard.push([{ text: '❌ Hủy bỏ', callback_data: 'cancel' }]);

          await setTelegramSession(chatId, {
            step: 'AWAITING_CATEGORY',
            photoFileId,
            textContent: caption,
            userId,
          });

          await safeSendMessage(
            chatId,
            `📸 <b>Đã nhận đủ ảnh và nội dung!</b>\n\n👇 Vui lòng chọn 1 danh mục bên dưới để đăng bài ngay:`,
            { parse_mode: 'HTML', reply_markup: { inline_keyboard: keyboard } }
          );
        } else {
          await setTelegramSession(chatId, { step: 'AWAITING_TEXT', photoFileId, userId });
          await safeSendMessage(chatId, `📸 <b>Đã nhận ảnh!</b>\n\n✍️ Vui lòng gửi nội dung bài viết ở tin nhắn tiếp theo.`);
        }
        return NextResponse.json({ ok: true });
      }

      // Handle Text while AWAITING_TEXT
      if (session && session.step === 'AWAITING_TEXT' && text) {
        const categories = await getCategories('doi-song');
        const keyboard = categories.map((cat) => [
          { text: `📂 ${cat.title.replace(/\n/g, ' - ')}`, callback_data: `cat_${cat.id}` }
        ]);
        keyboard.push([{ text: '❌ Hủy bỏ', callback_data: 'cancel' }]);

        await setTelegramSession(chatId, {
          step: 'AWAITING_CATEGORY',
          photoFileId: session.photoFileId,
          textContent: text,
          userId,
        });

        await safeSendMessage(
          chatId,
          `✅ <b>Đã nhận nội dung!</b>\n\n👇 Vui lòng chọn 1 danh mục bên dưới để đăng bài ngay:`,
          { parse_mode: 'HTML', reply_markup: { inline_keyboard: keyboard } }
        );
        return NextResponse.json({ ok: true });
      }

      if (text.startsWith('/cancel') || text.startsWith('/huy')) {
        await clearTelegramSession(chatId);
        await safeSendMessage(chatId, '❌ Đã hủy phiên làm việc.');
        return NextResponse.json({ ok: true });
      }

      // Fallback
      await safeSendMessage(
        chatId,
        `💡 <b>Hướng dẫn đăng bài nhanh:</b>\n1. Gửi Ảnh kèm Caption -> Chọn Danh mục -> Đăng\n2. Gửi Ảnh trước, gửi chữ sau -> Chọn Danh mục -> Đăng\n3. Gửi Link -> Hệ thống tự cào và đăng`,
        { parse_mode: 'HTML' }
      );
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[Webhook] Unhandled error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
