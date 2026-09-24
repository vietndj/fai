/**
 * scripts/seed-aptech-posts.mjs
 * 
 * Crawl/ingest 3 FPT Aptech articles, optimize images (Sharp + FAI watermark + WebP < 350KB),
 * upload to Cloudflare R2 bucket (vietndjmedia), and persist to Firestore `posts` collection
 * under group 'doi-song'.
 * 
 * Usage:
 *   node --env-file=.env.local scripts/seed-aptech-posts.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { processImage } from '../src/lib/imageProcessor.js';
import { uploadToStorage } from '../src/lib/cloudStorage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. Firebase Client Configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyDBublC1YNwW4lFfaajSjACmI01NGroxbA',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'faiweb.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'faiweb',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'faiweb.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '869003192234',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:869003192234:web:994bd7bc119bdd50c62dd3',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2. Target Articles Definition
const TARGET_ARTICLES = [
  {
    id: 'wireframing-thiet-ke-tu-goc-nhin-cua-nguoi-dung',
    slug: 'wireframing-thiet-ke-tu-goc-nhin-cua-nguoi-dung',
    title: 'Wireframing – Thiết kế từ góc nhìn của người dùng',
    categoryId: 'sharing',
    categoryName: 'Nhỏ to cùng chia sẻ - Nói nhỏ nói to',
    date: '03-09-2026',
    author: 'FPT Aptech',
    readTime: '4 phút',
    order: 0,
    published: true,
    group: 'doi-song',
    sourceUrl: 'https://aptech.fpt.edu.vn/wireframing-thiet-ke-tu-goc-nhin-cua-nguoi-dung.html',
    imageUrl: 'https://aptech.fpt.edu.vn/wp-content/uploads/2026/07/Wireframing.png',
    localFallback: path.join(projectRoot, 'public', 'fai_banner_aptech_v2.png'),
    excerpt: 'Một giao diện đẹp chưa chắc mang lại trải nghiệm tốt. Trong phát triển website và ứng dụng, điều quan trọng không phải là màu sắc hay hiệu ứng, mà là người dùng có thể dễ dàng tìm thấy thông tin và hoàn thành mục tiêu của mình. Đó là lý do Wireframing luôn được xem là bước khởi đầu trong quy trình thiết kế UX/UI.',
    contentHtml: `
<p class="lead" style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 1.5rem; color: #334155;">
  <strong>Một giao diện đẹp chưa chắc mang lại trải nghiệm tốt. Trong phát triển website và ứng dụng, điều quan trọng không phải là màu sắc hay hiệu ứng bắt mắt ngay từ đầu, mà là người dùng có thể dễ dàng tìm thấy thông tin và hoàn thành mục tiêu của mình. Đó là lý do Wireframing luôn được xem là bước khởi đầu trong quy trình thiết kế UX/UI chuẩn quốc tế tại FPT Aptech.</strong>
</p>

<h2>1. Ba tư duy cốt lõi tạo nên một Wireframe hiệu quả</h2>
<p>Theo tài liệu thực chiến từ Figma Resource Library và giáo trình UX/UI tại FPT Aptech, một Wireframe tối ưu cần được xây dựng dựa trên ba trụ cột:</p>
<ul>
  <li><strong>Phân cấp thông tin (Content Hierarchy):</strong> Xác định rõ ràng người dùng cần nhìn thấy điều gì trước tiên khi truy cập màn hình.</li>
  <li><strong>Luồng người dùng (User Flow):</strong> Định hình cách người dùng di chuyển qua các bước tương tác một cách tự nhiên, không gặp rào cản.</li>
  <li><strong>Chức năng trước hình thức (Functionality before Aesthetics):</strong> Đảm bảo hệ thống vận hành trơn tru và logic trước khi đầu tư thời gian vào bảng màu hay phong cách đồ họa.</li>
</ul>

<blockquote>
  <p>"Một giao diện bắt mắt có thể thu hút người dùng trong 3 giây đầu, nhưng một luồng trải nghiệm mạch lạc được kiến tạo từ Wireframe chuẩn xác mới là chìa khóa giữ chân họ gắn bó lâu dài."</p>
  <cite>— Thầy Nguyễn Tuấn Anh, Giảng viên Chuyên ngành Lập trình & UI/UX tại FPT Aptech</cite>
</blockquote>

<h2>2. Vì sao Wireframing lại quan trọng đối với Lập trình viên?</h2>
<p>Nếu bạn đã từng phát triển một ứng dụng mà bỏ qua bước Wireframing, bạn sẽ nhận thấy rất nhiều xung đột xảy ra khi nhóm bắt tay vào viết code. Không có Wireframe, nhóm phát triển không thể hình dung được quy mô thực tế của tính năng, dễ dẫn đến việc phải đập đi xây lại mã nguồn nhiều lần.</p>
<p>Wireframing đóng vai trò là "bản vẽ kiến trúc kỹ thuật" đồng nhất góc nhìn giữa Product Owner, Designer và Software Developer, giúp tiết kiệm lên tới <strong>40% thời gian và chi phí chỉnh sửa lỗi giao diện</strong> trong các dự án công nghệ thực tế.</p>

<h2>3. Ba cấp độ Wireframe thực hành tại FPT Aptech</h2>
<p>Sinh viên theo học ngành Lập trình Phần mềm Quốc tế ACCP tại FPT Aptech được rèn luyện cả 3 cấp độ:</p>
<ol>
  <li><strong>Low-Fidelity Wireframe:</strong> Phác thảo nhanh bằng giấy bút hoặc bảng kỹ thuật số nhằm kiểm chứng nhanh ý tưởng ban đầu.</li>
  <li><strong>Mid-Fidelity Wireframe:</strong> Sử dụng các khối hình học xám - đen - trắng trên Figma để xác định khoảng cách, lưới layout và vị trí các nút chức năng (CTA).</li>
  <li><strong>High-Fidelity Prototype:</strong> Gắn tương tác clickable để người dùng thử nghiệm luồng thao tác thực tế trước khi chuyển giao cho đội ngũ lập trình Frontend.</li>
</ol>

<h2>4. Lời khuyên dành cho người mới bắt đầu</h2>
<p>Đừng vội vàng mở phần mềm và tô màu hay tìm kiếm icon cầu kỳ. Hãy bắt đầu bằng việc đặt câu hỏi: <em>"Người dùng truy cập trang này để làm gì?"</em>. Khi bạn giải quyết được bài toán trải nghiệm trên từng khung xương Wireframe, bạn đã hoàn thành một nửa chặng đường kiến tạo một sản phẩm số thành công.</p>
    `.trim(),
  },
  {
    id: 'ai-first-software-developer-lam-chu-ai-de-phat-trien-phan-mem-va-kien-tao-gia-tri-cho-doanh-nghiep',
    slug: 'ai-first-software-developer-lam-chu-ai-de-phat-trien-phan-mem-va-kien-tao-gia-tri-cho-doanh-nghiep',
    title: 'AI-first software developer: Làm chủ ai để phát triển phần mềm và kiến tạo giá trị cho doanh nghiệp',
    categoryId: 'enterprise',
    categoryName: 'Doanh nghiệp & FAI',
    date: '02-09-2026',
    author: 'FPT Aptech',
    readTime: '4 phút',
    order: 0,
    published: true,
    group: 'doi-song',
    sourceUrl: 'https://aptech.fpt.edu.vn/ai-first-software-developer.html',
    imageUrl: 'https://aptech.fpt.edu.vn/wp-content/uploads/2026/07/Human-Led.png',
    localFallback: path.join(projectRoot, 'public', 'banner_hero_aptech_v2.jpeg'),
    excerpt: 'Từ lập trình viên truyền thống đến thế hệ AI-First Software Developer – những người có khả năng thiết kế AI Workflow, phát triển AI Agent và kiến tạo giá trị vượt trội cho doanh nghiệp. Tại FPT Aptech, người học không chỉ học cách phát triển phần mềm mà còn học cách làm chủ AI để xây dựng các giải pháp công nghệ đáp ứng nhu cầu thực tiễn.',
    contentHtml: `
<p class="lead" style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 1.5rem; color: #334155;">
  <strong>Từ lập trình viên truyền thống đến thế hệ AI-First Software Developer – những người có khả năng thiết kế AI Workflow, phát triển AI Agent và kiến tạo giá trị cho doanh nghiệp. Tại FPT Aptech, người học không chỉ học cách phát triển phần mềm mà còn học cách làm chủ AI để xây dựng các giải pháp công nghệ đáp ứng nhu cầu thực tiễn của doanh nghiệp toàn cầu.</strong>
</p>

<h2>1. AI đang thay đổi cách phần mềm được tạo ra</h2>
<p>Sự trỗi dậy của các mô hình ngôn ngữ lớn (LLMs) và các công cụ lập trình tạo sinh (AI Coding Assistants) không còn là xu hướng nhất thời mà đã trở thành chuẩn mực mới trong ngành công nghiệp số. Các doanh nghiệp công nghệ hàng đầu hiện nay không tìm kiếm những lập trình viên chỉ biết ghi nhớ cú pháp thuộc lòng, mà khao khát những nhân sự có năng lực phối hợp chiến lược với AI để rút ngắn thời gian đưa sản phẩm ra thị trường (Time-to-Market).</p>

<h2>2. Triết lý "Human-Led, AI-First" – Con người nắm giữ vai trò kiến trúc sư</h2>
<p>Tại FPT Aptech, chương trình đào tạo tích hợp AI mới nhất dựa trên triết lý <strong>"Human-Led, AI-First"</strong>:</p>
<ul>
  <li><strong>Từ AI Tool đến Harness Engineering:</strong> Không dừng lại ở việc dùng AI để sinh code nhỏ lẻ, học viên được đào tạo chuyên sâu về "Harness Engineering" – kỹ thuật kết nối các mô hình AI thành các chuỗi xử lý tự động (Agentic Workflows), giải quyết các bài toán phức tạp của doanh nghiệp.</li>
  <li><strong>Context Engineering & Prompt Architecture:</strong> Nắm vững tư duy cấu trúc bối cảnh, cung cấp đầy đủ tài liệu đặc tả, kiểm soát hành vi mô hình và ngăn ngừa hiện tượng ảo giác (hallucination) của AI.</li>
  <li><strong>Human-in-the-Loop:</strong> Lập trình viên đóng vai trò thẩm định tối cao về kiến trúc hệ thống, kiểm soát chất lượng bảo mật và tối ưu hóa hiệu năng phần mềm.</li>
</ul>

<blockquote>
  <p>"Doanh nghiệp sẵn sàng trả đãi ngộ vượt trội cho những lập trình viên biết khai phóng sức mạnh của AI để tạo ra sản phẩm chất lượng cao trong thời gian kỷ lục. Đó là lý do chương trình ACCP AI tại FPT Aptech trở thành bệ phóng nghề nghiệp vững chắc."</p>
  <cite>— Đại diện Đối tác Tuyển dụng Doanh nghiệp FPT Software</cite>
</blockquote>

<h2>3. Chương trình ACCP AI: Ánh xạ năng lực vào lộ trình thực chiến</h2>
<p>Khung chương trình đào tạo tại FPT Aptech được cấu trúc chặt chẽ từ nền tảng lập trình hướng đối tượng (Java, C#, Python) đến tích hợp AI nâng cao:</p>
<ol>
  <li><strong>Làm chủ công cụ AI hiện đại:</strong> GitHub Copilot, Cursor AI, Claude Code và các thư viện Machine Learning mã nguồn mở.</li>
  <li><strong>Xây dựng ứng dụng doanh nghiệp thông minh:</strong> Tích hợp các trợ lý ảo, hệ thống tìm kiếm ngữ nghĩa RAG (Retrieval-Augmented Generation) và xử lý dữ liệu tự động.</li>
  <li><strong>Dự án tốt nghiệp eProject thực tế:</strong> Bảo vệ đồ án trực tiếp trước hội đồng chuyên gia doanh nghiệp với các tiêu chuẩn kiểm thử khắt khe.</li>
</ol>

<h2>4. Sẵn sàng gia nhập môi trường công nghệ quốc tế</h2>
<p>Học viên tốt nghiệp FPT Aptech với tư duy AI-First tự tin gia nhập mạng lưới các tập đoàn công nghệ lớn, đáp ứng ngay yêu cầu công việc thực tế mà không cần doanh nghiệp phải đào tạo lại.</p>
    `.trim(),
  },
  {
    id: 'hoc-sinh-thpt-chinh-phuc-ai-tai-fpt-aptech-tu-tay-phat-trien-ung-dung-dieu-khien-bang-cu-chi',
    slug: 'hoc-sinh-thpt-chinh-phuc-ai-tai-fpt-aptech-tu-tay-phat-trien-ung-dung-dieu-khien-bang-cu-chi',
    title: 'Học sinh THPT chinh phục AI tại FPT Aptech: Tự tay phát triển ứng dụng điều khiển bằng cử chỉ',
    categoryId: 'contests',
    categoryName: 'Sân chơi & giải thưởng',
    date: '01-09-2026',
    author: 'FPT Aptech',
    readTime: '4 phút',
    order: 0,
    published: true,
    group: 'doi-song',
    sourceUrl: 'https://aptech.fpt.edu.vn/hoc-sinh-thpt-chinh-phuc-ai-tai-fpt-aptech-tu-tay-phat-trien-ung-dung-dieu-khien-bang-cu-chi.html',
    imageUrl: 'https://aptech.fpt.edu.vn/wp-content/uploads/2026/07/z7988408161872_067e48a784b07b4c6aa8b755447aac2f-1067x800.jpg',
    localFallback: path.join(projectRoot, 'public', 'fai_student_life_1.png'),
    excerpt: 'Không cần chuột, không cần bàn phím, chỉ với đôi bàn tay và những kiến thức AI được học ngay trong khóa trải nghiệm hè, các bạn học sinh THPT đã có thể tự tay xây dựng và trình diễn những ứng dụng điều khiển bằng cử chỉ đầy ấn tượng tại giảng đường FPT Aptech.',
    contentHtml: `
<p class="lead" style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 1.5rem; color: #334155;">
  <strong>Không cần chuột, không cần bàn phím, chỉ với đôi bàn tay và những kiến thức AI được học ngay trong khóa hè, các bạn học sinh THPT đã có thể xây dựng và trình diễn những ứng dụng điều khiển bằng cử chỉ đầy ấn tượng. Thông qua phương pháp đào tạo thực hành, FPT Aptech mang đến cho học sinh cơ hội tiếp cận trí tuệ nhân tạo theo cách trực quan, dễ hiểu và từng bước làm chủ những công nghệ đang định hình tương lai.</strong>
</p>

<h2>1. Học AI từ thực hành: Khi học sinh THPT tự tay xây dựng ứng dụng</h2>
<p>Trong bối cảnh trí tuệ nhân tạo (AI) đang tạo nên những thay đổi mạnh mẽ trong học tập, công việc và cuộc sống, việc tiếp cận công nghệ từ sớm đã trở thành nền tảng quan trọng giúp thế hệ trẻ sẵn sàng cho tương lai. Với mong muốn mang đến môi trường học tập gắn liền thực tiễn, FPT Aptech triển khai chuỗi workshop trải nghiệm AI dành riêng cho học sinh cấp ba, giúp các bạn từng bước khám phá thế giới lập trình thông qua các dự án thực tế.</p>

<p>Ngay từ những buổi học đầu tiên, học viên đã được tìm hiểu cách máy tính "nhìn" và "hiểu" hình ảnh thông qua các mô hình Computer Vision hiện đại. Thay vì tiếp cận lý thuyết hàn lâm khô khan, các bạn trực tiếp sử dụng thư viện MediaPipe và ngôn ngữ Python để xây dựng chương trình nhận diện 21 điểm khớp xương bàn tay theo thời gian thực.</p>

<blockquote>
  <p>"Em từng nghĩ AI là điều gì đó rất cao siêu và chỉ dành cho sinh viên đại học hay kỹ sư nhiều năm kinh nghiệm. Nhưng sau vài buổi thực hành tại FPT Aptech, tự tay em đã viết được ứng dụng chuyển slide bài giảng chỉ bằng một cái phẩy tay trước webcam. Cảm giác nhìn thấy dòng code của mình chạy trên máy tính thật sự rất phấn khích!"</p>
  <cite>— Bạn Hoàng Minh Đức, Học sinh lớp 11 trường THPT Kim Liên, Hà Nội</cite>
</blockquote>

<h2>2. Ứng dụng mô hình AI tiền huấn luyện (Pre-trained Models)</h2>
<p>Điểm đặc biệt của khóa học là học viên được tiếp cận phương pháp làm việc với các mô hình AI đã được huấn luyện sẵn – đây chính là phương pháp thực tế mà các công ty công nghệ lớn đang áp dụng để tối ưu hóa thời gian phát triển phần mềm.</p>
<p>Nhờ đó, dù chưa từng học qua các thuật toán toán học phức tạp, các bạn học sinh vẫn có thể hiểu sâu bản chất xử lý luồng dữ liệu hình ảnh, trích xuất tọa độ cử chỉ ngón tay và ánh xạ thành các sự kiện điều khiển bàn phím/chuột trên hệ điều hành.</p>

<h2>3. Khơi nguồn cảm hứng và định hướng tương lai</h2>
<p>Không dừng lại ở việc tạo ra các ứng dụng thú vị, chương trình còn mở ra cơ hội định hướng nghề nghiệp sớm trong ngành Công nghệ Thông tin. Nhiều phụ huynh đồng hành cùng con cũng bày tỏ niềm vui khi thấy con em mình tự tin làm chủ công nghệ, chuyển từ vị thế người tiêu thụ nội dung số sang người chủ động sáng tạo ra sản phẩm công nghệ hữu ích.</p>
    `.trim(),
  },
];

/**
 * Fetch image buffer from URL with timeout and fallback to local file
 */
async function fetchImageBuffer(url, fallbackLocalPath) {
  try {
    console.log(`  [Fetch] Attempting to download from ${url}...`);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      },
      signal: AbortSignal.timeout(12000),
    });

    if (res.ok) {
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      console.log(`  [Fetch] Downloaded successfully (${buffer.length} bytes).`);
      return buffer;
    } else {
      console.warn(`  [Fetch] HTTP ${res.status} from remote URL. Using local fallback.`);
    }
  } catch (err) {
    console.warn(`  [Fetch] Remote download failed: ${err.message}. Using local fallback.`);
  }

  // Fallback to local asset
  if (fallbackLocalPath && fs.existsSync(fallbackLocalPath)) {
    console.log(`  [Fallback] Reading local image from ${fallbackLocalPath}`);
    return fs.readFileSync(fallbackLocalPath);
  }

  throw new Error(`Unable to obtain image for article. Both remote fetch and local fallback failed.`);
}

/**
 * Main seeding workflow
 */
async function runSeeder() {
  console.log('================================================================');
  console.log('  FPT Aptech Articles Seeder & Cloud Storage Pipeline (M3)');
  console.log('================================================================');
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log(`Target Firestore Project: ${firebaseConfig.projectId}`);
  console.log(`Target R2 Bucket: ${process.env.R2_BUCKET_NAME || 'vietndjmedia'}`);
  console.log(`Public CDN: ${process.env.R2_PUBLIC_URL || 'https://pub-447bd44dfdac4938912655c855b8631c.r2.dev'}`);
  console.log('');

  const results = [];

  for (let i = 0; i < TARGET_ARTICLES.length; i++) {
    const article = TARGET_ARTICLES[i];
    console.log(`\n[${i + 1}/${TARGET_ARTICLES.length}] Processing article: "${article.title}"`);
    console.log(`  Category: ${article.categoryId} (${article.categoryName})`);
    console.log(`  Slug: ${article.slug}`);

    // Step 1: Fetch raw image
    const rawImageBuffer = await fetchImageBuffer(article.imageUrl, article.localFallback);

    // Step 2: Process image with Sharp (FAI logo watermark + WebP compression < 350KB)
    console.log(`  [Image Pipeline] Processing image with processImage...`);
    const processed = await processImage(rawImageBuffer, {
      maxWidth: 1600,
      maxHeight: 1600,
      quality: 82,
      watermark: true,
      watermarkOpacity: 0.85,
    });

    console.log(`  [Image Pipeline] Processed WebP: ${processed.width}x${processed.height}, ${processed.sizeBytes} bytes (${(processed.sizeBytes / 1024).toFixed(1)} KB)`);

    if (processed.sizeBytes > 350 * 1024) {
      throw new Error(`Processed image size ${processed.sizeBytes} exceeds 350KB limit!`);
    }

    // Step 3: Upload to Cloudflare R2
    console.log(`  [Cloud Storage] Uploading to Cloudflare R2 bucket...`);
    const filename = `${article.slug}.webp`;
    const uploadResult = await uploadToStorage(processed.buffer, filename, 'image/webp');
    console.log(`  [Cloud Storage] Public CDN URL: ${uploadResult.url}`);

    // Step 4: Verify CDN image response via HTTP HEAD/GET
    console.log(`  [Verify CDN] Checking CDN availability...`);
    try {
      const cdnRes = await fetch(uploadResult.url, { method: 'HEAD' });
      console.log(`  [Verify CDN] CDN HEAD status: ${cdnRes.status} (Content-Type: ${cdnRes.headers.get('content-type')})`);
      if (cdnRes.status !== 200) {
        console.warn(`  [Verify CDN] Warning: Non-200 status code: ${cdnRes.status}`);
      }
    } catch (cdnErr) {
      console.warn(`  [Verify CDN] Could not check CDN HEAD: ${cdnErr.message}`);
    }

    // Step 5: Check existing Firestore document for idempotency
    const docRef = doc(db, 'posts', article.slug);
    const existingSnap = await getDoc(docRef);
    const isUpdate = existingSnap.exists();
    const existingData = isUpdate ? existingSnap.data() : null;

    // Step 6: Construct post document adhering strictly to required schema
    const postData = {
      id: article.slug,
      title: article.title,
      slug: article.slug,
      categoryId: article.categoryId,
      date: article.date,
      image: uploadResult.url, // Strictly Cloudflare R2 CDN URL, zero Base64
      excerpt: article.excerpt,
      contentHtml: article.contentHtml,
      sourceUrl: article.sourceUrl,
      author: article.author || 'FPT Aptech',
      readTime: article.readTime || '4 phút',
      order: article.order ?? 0,
      published: true,
      group: 'doi-song',
      createdAt: existingData?.createdAt || serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(docRef, postData);
    console.log(`  [Firestore] Saved document ${article.slug} (${isUpdate ? 'UPDATED' : 'CREATED'}) in collection 'posts'.`);

    results.push({
      id: article.slug,
      title: article.title,
      categoryId: article.categoryId,
      cdnUrl: uploadResult.url,
      sizeKB: (processed.sizeBytes / 1024).toFixed(1),
      dimensions: `${processed.width}x${processed.height}`,
    });
  }

  // Verification Summary
  console.log('\n================================================================');
  console.log('  Seeding Completed Successfully — Summary Report');
  console.log('================================================================');
  console.table(results);

  console.log('\nIndependent Verification Commands:');
  for (const item of results) {
    console.log(`- curl -s -I "${item.cdnUrl}" | head -n 4`);
    console.log(`- curl -s -I "http://localhost:3000/admin/posts/${item.id}" | head -n 3`);
  }
  console.log(`- curl -s -I "http://localhost:3000/doi-song" | head -n 3\n`);

  return results;
}

runSeeder().catch((err) => {
  console.error('\n❌ Fatal error in seed-aptech-posts:', err);
  process.exit(1);
});
