const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, Timestamp } = require('firebase/firestore');

// ============================================================================
// FIREBASE CONFIGURATION
// ============================================================================
// Replace the placeholder values below with your Firebase project configuration,
// or set the corresponding environment variables in your terminal before running.
// ============================================================================
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDBublC1YNwW4lFfaajSjACmI01NGroxbA",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "faiweb.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "faiweb",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "faiweb.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "869003192234",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:869003192234:web:994bd7bc119bdd50c62dd3"
};

// Initialize Firebase App & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ============================================================================
// DATA DEFINITIONS
// ============================================================================

const categories = [
  {
    id: 'graduation',
    title: 'Lễ tốt nghiệp qua các năm\nLễ tôn vinh SVXS các học kỳ',
    eyebrow: 'Mốc son vinh quang',
    desc: 'Khoảnh khắc ý nghĩa và tự hào, nhìn lại trọn vẹn chặng đường nỗ lực, đánh dấu cột mốc trưởng thành đầy tự hào cùng FAI',
    group: 'doi-song',
    isLight: false,
    order: 1
  },
  {
    id: 'enterprise',
    title: 'Doanh nghiệp & FAI',
    eyebrow: 'Kết nối việc làm thực chiến',
    desc: 'Đồng hành cùng các đối tác công nghệ & sáng tạo hàng đầu, FAI mang đến trải nghiệm "học thật - làm thật", tạo lối tắt vững chắc đưa sinh viên bước thẳng vào thị trường lao động.',
    group: 'doi-song',
    isLight: true,
    order: 2
  },
  {
    id: 'sharing',
    title: 'Nhỏ to cùng chia sẻ - Nói nhỏ nói to',
    eyebrow: 'Góc tâm sự & kinh nghiệm',
    desc: 'Nơi sinh viên chia sẻ bí quyết học tập, vượt qua áp lực đồ án và cân bằng cuộc sống.',
    group: 'doi-song',
    isLight: false,
    order: 3
  },
  {
    id: 'contests',
    title: 'Sân chơi & giải thưởng',
    eyebrow: 'Khai phá tài năng',
    desc: 'Khám phá các cuộc thi học thuật quy mô lớn, đấu trường quốc tế cùng các triển lãm thiết kế thường niên.',
    group: 'doi-song',
    isLight: true,
    order: 4
  },
  {
    id: 'community',
    title: 'FAI & cộng đồng',
    eyebrow: 'Trách nhiệm xã hội & Trải nghiệm',
    desc: 'Chuỗi hoạt động gắn kết, phong trào tình nguyện và ngày hội trải nghiệm công nghệ gắn kết cộng đồng.',
    group: 'doi-song',
    isLight: false,
    order: 5
  }
];

const posts = [
  // Category: graduation (3 posts)
  {
    id: 'le-tot-nghiep-2026-being-beyond',
    categoryId: 'graduation',
    title: 'Lễ Tốt nghiệp 2026 Viện Đào tạo Quốc tế FPT Hà Nội: Khép lại hành trình "Being", sẵn sàng bứt phá đến chân trời "Beyond"',
    date: '06-06-2026',
    image: '/le_tot_nghiep_2026_banner.jpg',
    sourceUrl: 'https://aptech.fpt.edu.vn/le-tot-nghiep-2026-vien-dao-tao-quoc-te-fpt-ha-noi-khep-lai-hanh-trinh-being-san-sang-but-pha-den-chan-troi-beyond.html',
    excerpt: 'Gần 300 tân khoa đến từ FPT Aptech, FPT Arena Multimedia, FPT Skillking và FPT Jetking đã cùng nhau đánh dấu cột mốc trưởng thành tại Lễ Tốt nghiệp 2026 với chủ đề "Beyond Being".',
    order: 1,
    contentHtml: '<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Gần 300 tân khoa đến từ FPT Aptech, FPT Arena Multimedia, FPT Skillking và FPT Jetking đã cùng nhau đánh dấu cột mốc trưởng thành tại Lễ Tốt nghiệp 2026 Viện Đào tạo Quốc tế FPT Hà Nội với chủ đề <strong>"Beyond Being"</strong>.</p><h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">"Beyond Being" – Hành trình trưởng thành để vươn xa</h3><p style="margin-bottom:16px;">Chiều ngày 06/06, Phòng Khánh tiết – Trung tâm Hội nghị Quốc gia đã trở thành nơi lưu giữ những khoảnh khắc đáng nhớ của gần 300 tân khoa thuộc Viện Đào tạo Quốc tế FPT.</p>'
  },
  {
    id: 'le-ton-vinh-svxs-fall-2025-van-mieu',
    categoryId: 'graduation',
    title: 'Lễ tôn vinh sinh viên xuất sắc kỳ Fall 2025 tại Văn Miếu - Quốc Tử Giám: Nơi cội nguồn tri thức, viết tiếp hành trình tương lai',
    date: '04-03-2026',
    image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/03/Anh-1-3-1024x576.webp',
    sourceUrl: 'https://arena.fpt.edu.vn/le-ton-vinh-sinh-vien-xuat-sac-ky-fall-2025-tai-van-mieu-quoc-tu-giam-noi-coi-nguon-tri-thuc-viet-tiep-hanh-trinh-tuong-lai/',
    excerpt: 'Trong không gian linh thiêng của Văn Miếu – Quốc Tử Giám, Viện Đào tạo Quốc tế FPT trang trọng tổ chức Lễ tôn vinh những sinh viên xuất sắc nhất kỳ Fall 2025.',
    order: 2,
    contentHtml: '<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Tối 04/03, trong không gian linh thiêng của <strong>Văn Miếu – Quốc Tử Giám</strong>, Viện Đào tạo Quốc tế FPT đã trang trọng tổ chức <strong>Lễ tôn vinh Sinh viên Xuất sắc học kỳ Fall 2025</strong>.</p>'
  },
  {
    id: 'hbr-holdings-dong-hanh-le-tot-nghiep-fai-2025',
    categoryId: 'graduation',
    title: 'HBR Holdings Đồng Hành Cùng Lễ Tốt Nghiệp Viện Đào Tạo Quốc Tế FPT 2025',
    date: '16-07-2025',
    image: '/hbr_holdings_banner.png',
    sourceUrl: 'https://hbrholdings.vn/hbr-holdings-dong-hanh-cung-le-tot-nghiep-fai-ha-noi-2025',
    excerpt: 'HBR Holdings đồng hành cùng Lễ Tốt nghiệp 2025 Viện Đào tạo Quốc tế FPT - sự kiện tôn vinh thế hệ "Neoformers" trẻ trung, bản lĩnh.',
    order: 3,
    contentHtml: '<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;"><strong>HBR Holdings</strong> hân hạnh đồng hành cùng Lễ Tốt nghiệp Viện Đào tạo Quốc tế FPT.</p>'
  },

  // Category: enterprise (3 posts)
  {
    id: 'fai-career-connect-01',
    categoryId: 'enterprise',
    title: 'FAI Career Connect 01: Kết nối doanh nghiệp, mở rộng cơ hội nghề nghiệp cho sinh viên',
    date: '27-04-2026',
    image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/04/B58-FAI1.webp',
    sourceUrl: 'https://arena.fpt.edu.vn/fai-career-connect-01-ket-noi-doanh-nghiep-mo-rong-co-hoi-nghe-nghiep-cho-sinh-vien/',
    excerpt: 'Viện Đào tạo Quốc tế FPT tổ chức chương trình FAI Career Connect 01 tạo cầu nối trực tiếp giữa sinh viên và các đối tác doanh nghiệp uy tín.',
    order: 1,
    contentHtml: '<p class="lead">Với mong muốn tăng cường liên kết giữa nhà trường và doanh nghiệp, <strong>Viện Đào tạo Quốc tế FPT</strong> chính thức phát động chuỗi sự kiện <strong>FAI Career Connect 01</strong>.</p>'
  },
  {
    id: 'co-well-asia-ky-ket-hop-tac-fpt-aptech',
    categoryId: 'enterprise',
    title: 'CO-WELL Asia ký kết hợp tác với FPT Aptech: Cùng hướng đến một thế hệ lập trình viên chất lượng',
    date: '14-04-2025',
    image: 'https://co-well.vn/wp-content/uploads/2025/04/250415-ky-ket-aptech-feature.jpg',
    sourceUrl: 'https://co-well.vn/co-well-asia-ky-ket-hop-tac-voi-fpt-aptech-cung-huong-den-mot-the-he-lap-trinh-vien-chat-luong/',
    excerpt: 'CO-WELL Asia chính thức ký kết hợp tác chiến lược cùng FPT Aptech.',
    order: 2,
    contentHtml: '<p class="lead">Ngày 14/04/2025, <strong>CO-WELL Asia</strong> chính thức ký kết hợp tác chiến lược với <strong>FPT Aptech Hà Nội</strong>.</p>'
  },
  {
    id: 'fpt-arena-ky-ket-hop-tac-esoft',
    categoryId: 'enterprise',
    title: 'FPT Arena ký kết hợp tác với Esoft: Khẳng định mối quan hệ lâu dài, bền vững',
    date: '20-05-2025',
    image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/04/B58-FAI2.webp',
    sourceUrl: 'https://arena.fpt.edu.vn/fpt-arena-ky-ket-hop-tac-voi-esoft-khang-dinh-moi-quan-he-lau-dai-ben-vung/',
    excerpt: 'FPT Arena Multimedia và Công ty TNHH Esoft Việt Nam thắt chặt mối quan hệ hợp tác 10 năm.',
    order: 3,
    contentHtml: '<p class="lead"><strong>FPT Arena Multimedia</strong> và <strong>Công ty TNHH Esoft Việt Nam</strong> đã chính thức ký kết thỏa thuận hợp tác chiến lược.</p>'
  },

  // Category: sharing (3 posts)
  {
    id: 'hanh-trinh-chinh-phuc-trai-tim-chip',
    categoryId: 'sharing',
    title: 'Hành trình chinh phục "trái tim" Chip: Đồ án tốt nghiệp mang khát vọng thực chiến của sinh viên công nghệ',
    date: '18-05-2026',
    image: 'https://aptech.fpt.edu.vn/wp-content/uploads/2025/10/ATOM-dat-giai-tai-FPT-Hackathon-2025-1-1200x800.jpg',
    sourceUrl: 'https://jetking.fpt.edu.vn/hanh-trinh-chinh-phuc-trai-tim-chip-tot-nghiep-mang-khat-vong-thuc-chien-cua-sinh-vien-cong-nghe/',
    excerpt: 'Không chỉ là một đồ án tốt nghiệp, dự án nghiên cứu quy trình thiết kế vi mạch chuyên sâu của nhóm sinh viên ngành Chip Design tại FPT Jetking đã tái hiện chân thực hành trình tạo ra một con chip theo tiêu chuẩn công nghiệp.',
    order: 1,
    contentHtml: '<p class="lead">Không chỉ là một đồ án tốt nghiệp, dự án nghiên cứu quy trình thiết kế vi mạch chuyên sâu của nhóm sinh viên ngành <strong>Chip Design tại FPT Jetking</strong> đã tái hiện chân thực hành trình tạo ra một con chip theo tiêu chuẩn công nghiệp.</p>'
  },
  {
    id: 'nguyen-ngoc-anh-danh-hieu-svxs',
    categoryId: 'sharing',
    title: 'Nguyễn Ngọc Ánh: Không để tuổi tác giới hạn hành trình chinh phục tri thức và danh hiệu Sinh viên Xuất sắc',
    date: '12-05-2026',
    image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/03/Anh-2-1-1024x576.webp',
    sourceUrl: 'https://arena.fpt.edu.vn/nguyen-ngoc-anh-khong-de-tuoi-tac-gioi-han-hanh-trinh-chinh-phuc-tri-thuc-va-danh-hieu-sinh-vien-xuat-sac/',
    excerpt: 'Sau hơn 6 năm làm việc trong lĩnh vực Marketing, Nguyễn Ngọc Ánh vẫn quyết định quay trở lại giảng đường.',
    order: 2,
    contentHtml: '<p class="lead">Sau hơn 6 năm đi làm trong lĩnh vực Marketing, <strong>Nguyễn Ngọc Ánh</strong> vẫn quyết định tạm gác lại công việc ổn định để quay trở lại giảng đường.</p>'
  },
  {
    id: 'nhom-mlb-cu-dup-giai-thuong',
    categoryId: 'sharing',
    title: 'Game 3D "Háu ăn" và hành trình chinh phục "cú đúp" giải thưởng của nhóm MLB FPT Arena',
    date: '05-05-2026',
    image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/07/Them-tieu-de-4-1024x714.webp',
    sourceUrl: 'https://arena.fpt.edu.vn/hanh-trinh-chinh-phuc-cu-dup-giai-thuong-cua-nhom-mlb-fpt-arena/',
    excerpt: 'Nhóm MLB đến từ FPT Arena Multimedia gặt hái thành công kép với dự án Game 3D "Háu ăn".',
    order: 3,
    contentHtml: '<p class="lead">Nhóm sinh viên <strong>MLB đến từ FPT Arena Multimedia</strong> đã ghi dấu ấn rực rỡ khi xuất sắc giành "cú đúp" giải thưởng lớn.</p>'
  },

  // Category: contests (3 posts)
  {
    id: '100-hrs-2026-just-de-fruits',
    categoryId: 'contests',
    title: '100 giờ bứt phá trên đấu trường sáng tạo quốc tế: Just De Fruits giành Giải Ba tại 100 HRS 2026',
    date: '16-04-2026',
    image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/07/756800711_1040140018772947_3107573404418563662_n-1024x768.webp',
    sourceUrl: 'https://arena.fpt.edu.vn/100-gio-but-pha-tren-dau-truong-sang-tao-quoc-te-just-de-fruits-gianh-giai-ba-tai-100-hrs-2026/',
    excerpt: 'Chỉ trong 100 giờ thử thách liên tục từ đề bài bí mật, nhóm Just De Fruits xuất sắc vượt qua hàng chục đội thi quốc tế.',
    order: 1,
    contentHtml: '<p class="lead">Chỉ trong 100 giờ thử thách liên tục, nhóm <strong>Just De Fruits đến từ FPT Arena Multimedia</strong> đã xuất sắc giành <strong>Giải Ba tại cuộc thi 100 HRS 2026</strong>.</p>'
  },
  {
    id: 'atom-toa-sang-fpt-hackathon-2025',
    categoryId: 'contests',
    title: 'Atom lần thứ hai tỏa sáng tại FPT Hackathon 2025',
    date: '28-11-2025',
    image: 'https://aptech.fpt.edu.vn/wp-content/uploads/2025/10/ATOM-dat-giai-tai-FPT-Hackathon-2025-1-1200x800.jpg',
    sourceUrl: 'https://aptech.fpt.edu.vn/atom-lan-thu-hai-toa-sang-tai-fpt-hackathon-2025.html',
    excerpt: 'Đội tuyển Atom đến từ FPT Aptech lần thứ hai xuất sắc vinh danh tại FPT Hackathon 2025.',
    order: 2,
    contentHtml: '<p class="lead">Vượt qua hàng trăm đội lập trình viên trẻ xuất sắc, đội tuyển <strong>Atom từ FPT Aptech</strong> đã lần thứ hai liên tiếp tỏa sáng.</p>'
  },
  {
    id: 'vietfuture-awards-2025-fpt',
    categoryId: 'contests',
    title: 'Sinh viên Viện Đào tạo Quốc tế FPT bùng nổ sáng tạo tại VietFuture Awards 2025',
    date: '15-12-2025',
    image: '/vietfuture_awards_2025.jpg',
    sourceUrl: 'https://arena.fpt.edu.vn/sinh-vien-vien-dao-tao-quoc-te-fpt-bung-no-sang-tao-tai-vietfuture-awards-2025/',
    excerpt: 'Sau sáu tháng tranh tài cùng hơn 200 đề cử từ khắp cả nước, sinh viên FAI đã ghi dấu ấn mạnh mẽ.',
    order: 3,
    contentHtml: '<p class="lead">Sau 6 tháng tranh tài quyết liệt, sinh viên <strong>Viện Đào tạo Quốc tế FPT (FAI)</strong> đã ghi dấu ấn bùng nổ tại <strong>VietFuture Awards 2025</strong>.</p>'
  },

  // Category: community (3 posts)
  {
    id: 'nu-cuoi-am-2026',
    categoryId: 'community',
    title: 'Nụ cười ấm 2026: Hành trình trải nghiệm xã hội đầy ý nghĩa của sinh viên Viện Đào tạo Quốc tế FPT',
    date: '10-01-2026',
    image: 'https://aptech.fpt.edu.vn/wp-content/uploads/2026/02/Anh-1-1400x788.jpg',
    sourceUrl: 'https://aptech.fpt.edu.vn/nu-cuoi-am-2026-hanh-trinh-trai-nghiem-xa-hoi-day-y-nghia-cua-sinh-vien-vien-dao-tao-quoc-te-fpt.html',
    excerpt: 'Chương trình thiện nguyện thường niên Nụ Cười Ấm 2026 mang yêu thương đến với trẻ em vùng cao.',
    order: 1,
    contentHtml: '<p class="lead">Chương trình tình nguyện thường niên <strong>"Nụ Cười Ấm 2026"</strong> đã mang đến những trải nghiệm xã hội đầy xúc động.</p>'
  },
  {
    id: 'choi-anh-cao-phong-2-ngay-1-dem',
    categoryId: 'community',
    title: '"Chơi ảnh" và những "gia vị" cần thiết: 2 ngày 1 đêm thực chiến săn ảnh tại Cao Phong của sinh viên FAN',
    date: '22-03-2026',
    image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/05/web-3-1024x627.webp',
    sourceUrl: 'https://arena.fpt.edu.vn/choi-anh-va-nhung-gia-vi-can-thiet-2-ngay-1-dem-thuc-chien-san-anh-tai-cao-phong-cua-sinh-vien-fan/',
    excerpt: 'Hành trình 2 ngày 1 đêm thực chiến săn ảnh tại Caofong Glamping Village.',
    order: 2,
    contentHtml: '<p class="lead">Hành trình 2 ngày 1 đêm tại <strong>Caofong Glamping Village</strong> đã mang đến trải nghiệm săn ảnh thực chiến khó quên.</p>'
  },
  {
    id: 'video-trai-nghiem-fai-life',
    categoryId: 'community',
    title: 'Video trải nghiệm sinh viên FAI: Hành trình thanh xuân & Kết nối cộng đồng',
    date: '15-02-2026',
    image: 'https://img.youtube.com/vi/1zBrZkTbPw8/maxresdefault.jpg',
    sourceUrl: 'https://www.youtube.com/watch?v=1zBrZkTbPw8',
    excerpt: 'Thước phim chân thực ghi lại những khoảnh khắc nhiệt huyết của sinh viên FAI.',
    order: 3,
    contentHtml: '<p class="lead">Cùng xem video trải nghiệm sống động ghi lại trọn vẹn những khoảnh khắc đáng nhớ của sinh viên FAI!</p><div style="position:relative;width:100%;aspect-ratio:16/9;margin:20px 0;border-radius:12px;overflow:hidden;"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/1zBrZkTbPw8?autoplay=1" title="Video trải nghiệm sinh viên FAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  }
];

// ============================================================================
// MIGRATION FUNCTION
// ============================================================================

async function migrate() {
  console.log('🚀 Starting migration for Đời sống FAI data...\n');

  try {
    // 1. Create Category documents
    console.log('--- Migrating Categories ---');
    for (const category of categories) {
      console.log(`Creating category: ${category.id}...`);
      const categoryRef = doc(db, 'categories', category.id);
      await setDoc(categoryRef, category);
    }
    console.log(`✅ Successfully created ${categories.length} categories.\n`);

    // 2. Create Post documents
    console.log('--- Migrating Posts ---');
    const now = Timestamp.now();
    for (const post of posts) {
      console.log(`Creating post: ${post.id}...`);
      const postRef = doc(db, 'posts', post.id);
      const postData = {
        id: post.id,
        slug: post.id,
        categoryId: post.categoryId,
        title: post.title,
        date: post.date,
        image: post.image,
        excerpt: post.excerpt,
        contentHtml: post.contentHtml,
        sourceUrl: post.sourceUrl || '',
        published: true,
        order: post.order,
        createdAt: now,
        updatedAt: now
      };
      await setDoc(postRef, postData);
    }
    console.log(`✅ Successfully created ${posts.length} posts.\n`);

    console.log('🎉 Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrate();
