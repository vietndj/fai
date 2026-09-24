import { NextResponse } from 'next/server';
import { getCategories, createPost } from '@/lib/firestore';
import { processImage } from '@/lib/imageProcessor';
import { uploadToStorage } from '@/lib/cloudStorage';
import {
  sendMessage,
  answerCallbackQuery,
  downloadFileBuffer,
} from '@/lib/telegram';
import { generateArticleOptions } from '@/lib/gemini';
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

  // If no allowed users configured, block all for safety
  if (allowedList.length === 0) return false;
  return allowedList.includes(String(userId));
}

// Safe wrapper around answerCallbackQuery to guarantee zero unhandled rejections
async function safeAnswerCallback(callbackId, text = '', options = {}) {
  try {
    return await answerCallbackQuery(callbackId, text, options);
  } catch (err) {
    console.warn(`[Webhook] Non-fatal callback acknowledgment error for ${callbackId}:`, err.message);
    return { ok: false, ignored: true };
  }
}

// Safe wrapper around sendMessage to prevent Telegram API errors from aborting business logic
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
    // 1. Validate Telegram Secret Token header
    const secretHeader = request.headers.get('x-telegram-bot-api-secret-token');
    const expectedSecret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (!expectedSecret || secretHeader !== expectedSecret) {
      console.warn('[Webhook] Rejected unauthorized secret token:', secretHeader);
      return NextResponse.json({ error: 'Unauthorized secret token' }, { status: 401 });
    }

    // 2. Parse Telegram Update body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.warn('[Webhook] Malformed JSON payload received:', parseError.message);
      return NextResponse.json(
        { error: 'Bad Request', details: 'Invalid JSON payload' },
        { status: 400 }
      );
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        { error: 'Bad Request', details: 'Payload must be a JSON object' },
        { status: 400 }
      );
    }

    const { message, callback_query } = body;

    // Extract sender information
    const sender = message?.from || callback_query?.from;
    const chatId = message?.chat?.id || callback_query?.message?.chat?.id;

    if (!sender || !chatId) {
      return NextResponse.json({ ok: true });
    }

    const userId = sender.id;

    // 3. Check sender whitelist
    if (!isUserAllowed(userId)) {
      console.warn(`[Webhook] Unauthorized sender attempt: ${userId} (${sender.username || sender.first_name})`);
      try {
        await safeSendMessage(
          chatId,
          `⛔ <b>Từ chối truy cập</b>\nBạn không có quyền đăng bài lên FAI Web.\nID của bạn: <code>${userId}</code>\nVui lòng liên hệ ban quản trị để được cấp quyền.`,
          { parse_mode: 'HTML' }
        );
      } catch (sendErr) {
        console.warn(`[Webhook] Could not send rejection message to chatId ${chatId}:`, sendErr.message);
      }
      return NextResponse.json({ ok: true, unauthorized: true });
    }

    // 4. Handle Callback Queries (Inline button clicks)
    if (callback_query) {
      const callbackId = callback_query.id;
      const data = callback_query.data;

      // a. Category Selection Callback (e.g., cat_graduation, cat_enterprise)
      if (data && data.startsWith('cat_')) {
        const categoryId = data.replace('cat_', '');
        const categories = await getCategories('doi-song');
        const selectedCat = categories.find((c) => c.id === categoryId);
        const categoryTitle = selectedCat ? selectedCat.title.replace(/\n/g, ' - ') : categoryId;

        await safeAnswerCallback(callbackId, `Đã chọn: ${categoryTitle}`);

        await setTelegramSession(chatId, {
          step: 'AWAITING_PHOTO_CONTENT',
          selectedCategoryId: categoryId,
          selectedCategoryTitle: categoryTitle,
          userId,
        });

        await safeSendMessage(
          chatId,
          `✅ Đã chọn chuyên mục: <b>${categoryTitle}</b>\n\n` +
            `📸 Bây giờ, bạn hãy gửi <b>1 bức ảnh đại diện</b> kèm <b>ý tưởng / ghi chú sơ lược</b> trong phần chú thích (caption) của ảnh.\n\n` +
            `<i>(Gemini 2.5 Flash sẽ dựa trên ảnh và ghi chú để tự động tạo 2 phương án bài viết hoàn chỉnh)</i>`,
          { parse_mode: 'HTML' }
        );

        return NextResponse.json({ ok: true });
      }

      // b. Option Selection Callback (opt_1 or opt_2)
      if (data === 'opt_1' || data === 'opt_2') {
        const session = await getTelegramSession(chatId);
        if (!session || !session.generatedOptions) {
          await safeAnswerCallback(callbackId, 'Phiên đã hết hạn.');
          try {
            await safeSendMessage(
              chatId,
              '⚠️ Phiên làm việc đã hết hạn hoặc không tìm thấy bài viết. Vui lòng gửi lệnh /dangbai để bắt đầu lại.'
            );
          } catch (sendErr) {
            console.warn('[Webhook] Could not send expired session notice:', sendErr.message);
          }
          return NextResponse.json({ ok: true });
        }

        if (session.step === 'PUBLISHING') {
          await safeAnswerCallback(callbackId, 'Đang xuất bản bài viết, vui lòng đợi...');
          return NextResponse.json({ ok: true });
        }

        await setTelegramSession(chatId, { step: 'PUBLISHING' });
        await safeAnswerCallback(callbackId, 'Đang tối ưu ảnh và xuất bản bài viết...');

        const selectedOption = data === 'opt_1'
          ? session.generatedOptions.option1
          : session.generatedOptions.option2;

        if (!selectedOption) {
          await safeSendMessage(chatId, '⚠️ Không tìm thấy phương án được chọn. Vui lòng thử lại.');
          return NextResponse.json({ ok: true });
        }

        // Notify user about image processing
        await safeSendMessage(chatId, '⏳ Đang tối ưu hóa ảnh WebP, đóng dấu logo FAI và xuất bản lên hệ thống...');

        // Process and upload image
        let publicImageUrl = '';
        if (session.photoFileId || session.photoUrl) {
          try {
            let rawPhotoBuffer;
            if (session.photoUrl) {
              const imgRes = await fetch(session.photoUrl);
              rawPhotoBuffer = Buffer.from(await imgRes.arrayBuffer());
            } else {
              rawPhotoBuffer = await downloadFileBuffer(session.photoFileId);
            }
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
        }

        // Save post into Firestore
        const dateStr = formatDate(new Date());
        const slugSuffix = Date.now().toString().slice(-4);
        const slug = `${generateSlug(selectedOption.title)}-${slugSuffix}`;

        const postData = {
          title: selectedOption.title,
          slug,
          categoryId: session.selectedCategoryId || 'sharing',
          date: dateStr,
          image: publicImageUrl,
          excerpt: selectedOption.excerpt,
          contentHtml: selectedOption.contentHtml,
          sourceUrl: '',
          author: 'FAI Editorial',
          readTime: selectedOption.readTime || '3 phút',
          order: 0,
          published: true,
          group: 'doi-song',
        };

        const createdPost = await createPost(postData);

        // Clear session
        await clearTelegramSession(chatId);

        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const publicUrl = `${baseUrl}/doi-song`;
        const adminUrl = `${baseUrl}/admin/posts/${createdPost.id}`;

        await safeSendMessage(
          chatId,
          `🎉 <b>XUẤT BẢN BÀI VIẾT THÀNH CÔNG!</b>\n\n` +
            `📰 <b>Tiêu đề:</b> ${selectedOption.title}\n` +
            `📂 <b>Chuyên mục:</b> ${session.selectedCategoryTitle || session.selectedCategoryId}\n` +
            `⏱ <b>Thời gian đọc:</b> ${selectedOption.readTime}\n` +
            `📅 <b>Ngày đăng:</b> ${dateStr}\n\n` +
            `🌐 <b>Xem bài viết trên web:</b>\n${publicUrl}\n\n` +
            `✏️ <b>Chỉnh sửa bài viết (Admin):</b>\n${adminUrl}`,
          { parse_mode: 'HTML' }
        );

        return NextResponse.json({ ok: true });
      }

      // c. Cancel Callback
      if (data === 'cancel') {
        await safeAnswerCallback(callbackId, 'Đã hủy phiên làm việc.');
        await clearTelegramSession(chatId);
        await safeSendMessage(chatId, '❌ Đã hủy phiên đăng bài. Bạn có thể gõ /dangbai bất cứ lúc nào để bắt đầu lại.');
        return NextResponse.json({ ok: true });
      }
    }

    // 5. Handle Text Messages and Commands
    if (message) {
      const text = message.text || message.caption || '';

      // a. Commands: /start, /dangbai, /help
      if (text.startsWith('/start') || text.startsWith('/dangbai')) {
        const categories = await getCategories('doi-song');

        if (!categories || categories.length === 0) {
          await safeSendMessage(chatId, '⚠️ Hiện chưa có danh mục nào thuộc nhóm Đời Sống trong cơ sở dữ liệu.');
          return NextResponse.json({ ok: true });
        }

        const keyboard = categories.map((cat) => [
          {
            text: `📂 ${cat.title.replace(/\n/g, ' - ')}`,
            callback_data: `cat_${cat.id}`,
          },
        ]);

        await setTelegramSession(chatId, {
          step: 'AWAITING_CATEGORY',
          userId,
        });

        await safeSendMessage(
          chatId,
          `👋 <b>Chào mừng bạn đến với Cổng Xuất Bản FAI Web!</b>\n\n` +
            `Vui lòng chọn 1 chuyên mục thuộc <b>Đời Sống FAI</b> bên dưới để bắt đầu:`,
          {
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: keyboard,
            },
          }
        );

        return NextResponse.json({ ok: true });
      }

      // b. Photo Received
      if (message.photo && Array.isArray(message.photo)) {
        const validPhotos = message.photo.filter((p) => p && typeof p.file_id === 'string');

        if (validPhotos.length === 0) {
          return NextResponse.json({ ok: true });
        }

        const session = await getTelegramSession(chatId);

        // Pick highest resolution photo
        const highestPhoto = validPhotos[validPhotos.length - 1];
        const photoFileId = highestPhoto.file_id;
        const userNotes = message.caption || text || '';

        await safeSendMessage(
          chatId,
          `⏳ <b>Đang đọc thông tin và khởi tạo bài viết...</b>\n` +
            `Hệ thống đang phân tích nội dung và sáng tạo 2 phương án bài viết hoàn chỉnh. Vui lòng chờ 2-5 giây!`,
          { parse_mode: 'HTML' }
        );

        let photoBuffer = null;
        try {
          photoBuffer = await downloadFileBuffer(photoFileId);
        } catch (dlErr) {
          console.warn('[Webhook] Non-fatal photo download error, proceeding with notes:', dlErr.message);
        }

        let optionsResult;
        try {
          optionsResult = await generateArticleOptions(photoBuffer, 'image/jpeg', userNotes);
        } catch (genErr) {
          console.error('[Webhook] Generation failed:', genErr);
          await safeSendMessage(
            chatId,
            `❌ Lỗi tạo bài viết: ${genErr.message}\n` +
              `Vui lòng thử lại với hình ảnh hoặc nội dung khác.`
          );
          return NextResponse.json({ ok: true });
        }

        // Save generated options in session
        await setTelegramSession(chatId, {
          step: 'AWAITING_OPTION_SELECTION',
          photoFileId,
          userNotes,
          generatedOptions: optionsResult,
        });

        const opt1 = optionsResult.option1;
        const opt2 = optionsResult.option2;

        const modeBadge = optionsResult.isFallback
          ? ' (Chế độ Biên tập Tự động FAI)'
          : '';

        // Display 2 options cleanly without unsupported HTML tags
        const previewMessage =
          `🤖 <b>FAI Web AI Editor</b> đã tạo xong 2 phương án bài viết${modeBadge}:\n\n` +
          `━━━━━━━━━━━━━━━━━━━━\n` +
          `🌟 <b>PHƯƠNG ÁN 1 (Thực chiến & Chuyên môn)</b>\n` +
          `📌 <b>Tiêu đề:</b> ${opt1.title}\n` +
          `⏱ <b>Thời gian đọc:</b> ${opt1.readTime}\n` +
          `📖 <b>Tóm tắt:</b> <i>${opt1.excerpt}</i>\n\n` +
          `━━━━━━━━━━━━━━━━━━━━\n` +
          `🚀 <b>PHƯƠNG ÁN 2 (Cảm hứng & Đời sống FAI)</b>\n` +
          `📌 <b>Tiêu đề:</b> ${opt2.title}\n` +
          `⏱ <b>Thời gian đọc:</b> ${opt2.readTime}\n` +
          `📖 <b>Tóm tắt:</b> <i>${opt2.excerpt}</i>\n` +
          `━━━━━━━━━━━━━━━━━━━━\n\n` +
          `👇 <b>Bấm chọn phương án bạn muốn xuất bản:</b>`;

        await safeSendMessage(chatId, previewMessage, {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: '1️⃣ Chọn Phương Án 1', callback_data: 'opt_1' },
                { text: '2️⃣ Chọn Phương Án 2', callback_data: 'opt_2' },
              ],
              [
                { text: '❌ Hủy bỏ', callback_data: 'cancel' },
              ],
            ],
          },
        });

        return NextResponse.json({ ok: true });
      }

      // c. Handle URLs
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const urls = text.match(urlRegex);
      
      if (urls && urls.length > 0) {
        const url = urls[0];
        await safeSendMessage(chatId, `⏳ Đã nhận link: ${url}\n🤖 Đang kích hoạt Trí tuệ Hệ thống (Antigravity) trên Mac để bóc tách, tái cấu trúc UI/UX và đăng bài tự động...`);
        
try {
          const { exec } = require('child_process');
          const fs = require('fs');
          const path = require('path');
          
          const PARENT_CID = "0387482b-fd18-4d6b-9623-866b80e58244";
          
          const prompt = `/boost
Nhận lệnh từ Telegram Webhook:
Người dùng (Chat ID: ${chatId}) yêu cầu đăng bài từ link: ${url}

Nhiệm vụ rẽ nhánh chuyên sâu (Tự Động Hóa 100%):
1. Đọc nội dung bài viết từ link trên (dùng curl hoặc script js, có thể tái sử dụng src/lib/scraper.js để lấy HTML thô).
2. Tối ưu lại bài viết bằng trí thông minh của bạn. Hãy bọc YouTube vào div.block-video-wrapper, loại bỏ rác, tạo timeline/highlight theo đúng chuẩn UI/UX đã thống nhất.
3. Giữ nguyên 100% link ảnh gốc (hotlink), TUYỆT ĐỐI KHÔNG tải ảnh về hay up lên R2. Chạy script lưu bài viết vào cơ sở dữ liệu Firebase (collection: 'posts', group: 'doi-song'). Lấy slug của bài vừa tạo.
4. Bắn tin nhắn phản hồi về lại Telegram bằng cách gọi lệnh curl hoặc script NodeJS tới https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage:
   Gửi text: "✅ Đã xử lý xong!\n🌐 Xem bài viết tại: https://fai.fpt.edu.vn/doi-song/<slug>"
   (TUYỆT ĐỐI dùng domain https://fai.fpt.edu.vn, KHÔNG dùng localhost).
5. Hoàn tất thì dừng nhánh. Không cần hỏi lại.`;

          const promptFile = path.join(process.cwd(), `prompt_${Date.now()}.txt`);
          fs.writeFileSync(promptFile, prompt, 'utf-8');

          const reNhanhScript = '/Users/vietmac/Documents/CODE/Quản gia/re_nhanh.py';
          const cmd = `python3 "${reNhanhScript}" --title="[Bot] Đăng bài ${Date.now()}" --parent-cid="${PARENT_CID}" --model="pro" --prompt-file="${promptFile}"`;
          
          exec(cmd, (error, stdout, stderr) => {
            if (fs.existsSync(promptFile)) fs.unlinkSync(promptFile); 
          });

        } catch (err) {
          console.error('[Webhook] Error triggering Antigravity:', err);
          await safeSendMessage(chatId, `❌ Lỗi kết nối Antigravity: \${err.message}`);
        }
        return NextResponse.json({ ok: true });
      }

      // d. If user sends plain text without photo while in AWAITING_PHOTO_CONTENT
      const session = await getTelegramSession(chatId);
      if (session && session.step === 'AWAITING_PHOTO_CONTENT') {
        await safeSendMessage(
          chatId,
          `📸 Vui lòng gửi kèm <b>1 bức ảnh đại diện</b> (kèm chú thích ý tưởng) để hệ thống phân tích hình ảnh và tạo bài viết chuẩn xác nhất.`,
          { parse_mode: 'HTML' }
        );
        return NextResponse.json({ ok: true });
      }

      // Default fallback guidance
      await sendMessage(
        chatId,
        `💡 Gõ lệnh <b>/dangbai</b> để chọn chuyên mục và bắt đầu quy trình tạo bài viết tự động với AI, hoặc gửi 1 URL để bóc tách bài viết!`,
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
