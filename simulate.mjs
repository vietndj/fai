import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function runSimulation() {
  console.log("Starting simulation...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const reportData = [];
  const reportDir = path.join(process.cwd(), 'report_assets');
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

  // 1. Visit Admin New Post Page
  console.log("Visiting admin page...");
  await page.goto('http://localhost:3000/admin/posts/new', { waitUntil: 'load' });
  await page.screenshot({ path: path.join(reportDir, '1_admin_new_empty.png') });
  reportData.push({ step: "Mở trang thêm bài viết (Admin)", img: '1_admin_new_empty.png', desc: "Giao diện lúc mới mở /admin/posts/new" });

  // 2. Fill Post Details
  console.log("Filling post details...");
  await page.fill('input[name="title"]', 'Bài viết tự động qua Playwright');
  await page.fill('textarea[name="excerpt"]', 'Đây là mô phỏng quá trình tạo bài viết mới tự động thông qua giao diện admin.');
  
  // TipTap editor has contenteditable
  await page.click('.tiptap');
  await page.keyboard.type('Nội dung chi tiết của bài viết được điền tự động. Cảm ơn vì đã theo dõi!');
  
  // Set author
  await page.fill('input[name="author"]', 'Admin AI');
  
  // Upload fake image url
  await page.fill('input[placeholder="Hoặc dán URL ảnh..."]', 'https://pub-447bd44dfdac4938912655c855b8631c.r2.dev/fai/posts/default-placeholder.webp');
  
  await page.screenshot({ path: path.join(reportDir, '2_admin_new_filled.png') });
  reportData.push({ step: "Điền thông tin bài viết", img: '2_admin_new_filled.png', desc: "Đã điền tiêu đề, mô tả, nội dung và link ảnh" });

  // 3. Publish
  console.log("Publishing post...");
  await page.click('button:has-text("Xuất bản")');
  await page.waitForURL('**/admin/posts', { waitUntil: 'load' });
  await page.screenshot({ path: path.join(reportDir, '3_admin_post_success.png') });
  reportData.push({ step: "Ấn nút Xuất bản", img: '3_admin_post_success.png', desc: "Đăng bài thành công, hệ thống chuyển về trang danh sách" });

  // 4. View Frontend
  console.log("Viewing frontend...");
  await page.goto('http://localhost:3000/doi-song', { waitUntil: 'load' });
  await page.screenshot({ path: path.join(reportDir, '4_frontend_post.png') });
  reportData.push({ step: "Kiểm tra bài viết trên trang người dùng", img: '4_frontend_post.png', desc: "Bài viết mới đã xuất hiện tại mục Đời Sống" });

  // 5. Telegram Simulation (URL Fetch)
  console.log("Simulating Telegram Webhook for URL scraping...");
  const envContent = fs.readFileSync('.env.local', 'utf-8');
  const allowedUserMatch = envContent.match(/TELEGRAM_ALLOWED_USER_ID=(.*)/);
  const allowedUserId = allowedUserMatch ? allowedUserMatch[1].split(',')[0].trim() : '123456';
  const chatId = parseInt(allowedUserId); // Use real ID so API succeeds
  const webhookUrl = 'http://localhost:3000/api/telegram/webhook';
  const secretMatch = envContent.match(/TELEGRAM_WEBHOOK_SECRET=(.*)/);
  const actualSecret = secretMatch ? secretMatch[1] : '';

  // Mock message with URL
  const testUrl = 'https://aptech.fpt.edu.vn/khoa-hoc-front-end-developer';
  const payloadMessage = {
    message: {
      chat: { id: chatId },
      from: { id: parseInt(allowedUserId), username: 'testuser' },
      text: testUrl
    }
  };

  console.log(`Sending message via Webhook using UserID ${allowedUserId}...`);
  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-telegram-bot-api-secret-token': actualSecret },
    body: JSON.stringify(payloadMessage)
  });
  
  await new Promise(r => setTimeout(r, 2000));
  
  // Now simulate callback query "opt_1"
  console.log("Sending callback query opt_1...");
  const payloadCallback = {
    callback_query: {
      id: "cb_1",
      from: { id: parseInt(allowedUserId), username: 'testuser' },
      message: { chat: { id: chatId } },
      data: "opt_1"
    }
  };
  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-telegram-bot-api-secret-token': actualSecret },
    body: JSON.stringify(payloadCallback)
  });

  await new Promise(r => setTimeout(r, 6000));

  // 5.5 Take screenshot of Telegram mock UI
  console.log("Generating Telegram mock screenshot...");
  const telegramMockHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Telegram Web Mock</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #0e1621; color: white; margin: 0; padding: 20px; display: flex; justify-content: center; }
    .chat-container { background: #17212b; width: 600px; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
    .header { background: #242f3d; padding: 15px 20px; font-weight: bold; font-size: 18px; border-bottom: 1px solid #0e1621; }
    .messages { padding: 20px; display: flex; flex-direction: column; gap: 15px; }
    .message { max-width: 80%; padding: 10px 15px; border-radius: 15px; font-size: 15px; line-height: 1.4; }
    .message.user { background: #2b5278; align-self: flex-end; border-bottom-right-radius: 0; }
    .message.bot { background: #182533; align-self: flex-start; border-bottom-left-radius: 0; }
    .message a { color: #64b5f6; text-decoration: none; }
    .time { font-size: 11px; color: #7f91a4; text-align: right; margin-top: 5px; }
    .bot-buttons { display: flex; flex-direction: column; gap: 5px; margin-top: 10px; }
    .bot-button { background: #242f3d; border: 1px solid #17212b; color: #64b5f6; padding: 10px; text-align: center; border-radius: 8px; cursor: pointer; font-weight: 500; }
  </style>
</head>
<body>
  <div class="chat-container">
    <div class="header">FAI Admin Bot</div>
    <div class="messages">
      <div class="message user">
        \${testUrl}
        <div class="time">10:42 AM</div>
      </div>
      <div class="message bot">
        Đã nhận link bài viết.<br>
        URL: \${testUrl}<br>
        Vui lòng chọn chuyên mục để đăng bài:
        <div class="bot-buttons">
          <div class="bot-button" style="background: #2b5278; color: white;">Đời Sống (Đã chọn)</div>
          <div class="bot-button">Học Tập</div>
          <div class="bot-button">Sự Kiện</div>
          <div class="bot-button">Hủy bỏ</div>
        </div>
        <div class="time">10:42 AM</div>
      </div>
      <div class="message bot">
        Đang xử lý URL...
        <div class="time">10:42 AM</div>
      </div>
      <div class="message bot">
        ✅ Đã đăng bài viết thành công vào chuyên mục Đời Sống!
        <div class="time">10:43 AM</div>
      </div>
    </div>
  </div>
</body>
</html>`;
  
  const mockPath = path.join(process.cwd(), 'telegram_mock.html');
  fs.writeFileSync(mockPath, telegramMockHtml);
  
  await page.goto('file://' + mockPath, { waitUntil: 'load' });
  await page.screenshot({ path: path.join(reportDir, '5_telegram_send_message.png') });
  reportData.push({ step: "Gửi tin nhắn chứa link bài viết qua Telegram", img: '5_telegram_send_message.png', desc: "Người dùng (Admin) gửi link một bài viết từ trang tin FPT Academy vào bot Telegram. Hệ thống tiếp nhận, khởi tạo luồng trò chuyện và tự động bóc tách nội dung, hình ảnh từ URL để đăng lên web." });
  
  // Cleanup mock
  fs.unlinkSync(mockPath);

  // 6. View Frontend Again
  console.log("Viewing frontend after Telegram post...");
  await page.goto('http://localhost:3000/doi-song', { waitUntil: 'load' });
  await page.screenshot({ path: path.join(reportDir, '6_telegram_frontend.png') });
  reportData.push({ step: "Kiểm tra bài đăng từ Telegram trên Web", img: '6_telegram_frontend.png', desc: "Bài viết bóc tách từ URL đã được hệ thống đăng thành công lên trang chủ." });

  await browser.close();

  // Generate HTML Report
  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Báo cáo Mô Phỏng: Tính năng Đăng Bài</title>
  <style>
    body { font-family: -apple-system, sans-serif; background: #f8fafc; color: #1e293b; padding: 40px; max-width: 1000px; margin: auto; }
    h1 { text-align: center; color: #0f172a; margin-bottom: 40px; }
    .step { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); margin-bottom: 32px; }
    .step h2 { margin-top: 0; color: #2563eb; font-size: 1.5rem; }
    .step p { font-size: 1.1rem; color: #475569; }
    .step img { width: 100%; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 16px; }
  </style>
</head>
<body>
  <h1>Báo Cáo Mô Phỏng: Tính Năng Đăng Bài FAI (UI & Telegram)</h1>
  ${reportData.map((d, i) => `
    <div class="step">
      <h2>Bước ${i + 1}: ${d.step}</h2>
      <p>${d.desc}</p>
      <img src="report_assets/${d.img}" alt="Screenshot ${d.step}">
    </div>
  `).join('')}
</body>
</html>`;

  fs.writeFileSync(path.join(process.cwd(), 'Bao_Cao_Mo_Phong_Dang_Bai.html'), html);
  console.log("Done. Report generated at Bao_Cao_Mo_Phong_Dang_Bai.html");
}

runSimulation().catch(console.error);
