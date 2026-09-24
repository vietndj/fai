/**
 * src/data/courses.js
 * Single Source of Truth for all 11 FAI Course Pages
 * Consumed directly by CourseLayout across all /dao-tao/* routes
 */

// =========================================================================
// 1. FPT APTECH - ACCP (Fullstack 2 Năm)
// =========================================================================
export const COURSE_ACCP = {
  brandKey: 'aptech',
  themeColor: '#f37021',
  bgWatermark: 'FPT APTECH',
  brandBadge: 'FPT APTECH ACCP AI 2026',
  title: 'CHƯƠNG TRÌNH LẬP TRÌNH VIÊN QUỐC TẾ 2 NĂM\nAI ĐA KỸ NĂNG',
  subtitle: 'Đón đầu xu hướng – Nắm bắt cơ hội thực chiến',
  description: [
    'Ngành CNTT Việt Nam đang trong giai đoạn bùng nổ. Theo dự báo của TopDev, từ 2023 – 2026, thị trường sẽ thiếu hụt từ 150.000 – 200.000 lập trình viên. Cơ hội nghề nghiệp vô cùng rộng mở, nhưng sẽ chỉ dành cho những ứng viên sở hữu kỹ năng thực chiến và khả năng ứng dụng công nghệ mới.',
    'Tại FPT Aptech, chúng tôi không ngừng đổi mới để sinh viên luôn đi trước một bước. Chương trình Lập trình Full-Stack tích hợp AI được thiết kế với triết lý: Học nhanh – Đi làm sớm, tối ưu hóa thời gian, tăng cường trải nghiệm thực tế và đáp ứng chính xác nhu cầu khắt khe của doanh nghiệp.'
  ],
  coreHighlightBox: {
    badge: 'ĐIỂM KHÁC BIỆT CỐT LÕI',
    text: 'Mỗi sinh viên được định hướng và thiết kế một lộ trình cá nhân hóa dựa trên kỹ năng, sở thích và mục tiêu nghề nghiệp. Giúp bạn tối ưu thời gian học tập, phát huy tối đa thế mạnh và sẵn sàng hòa nhập ngay vào môi trường doanh nghiệp.'
  },
  bannerImage: {
    src: '/banner_aptech_sub_v2.png',
    alt: 'Chương trình Lập trình viên Quốc tế FPT Aptech ACCP AI',
    width: 1200,
    height: 420
  },
  overviewStats: {
    eyebrow: 'HÀNH TRÌNH TỔNG QUAN',
    title: 'Lộ trình đào tạo tổng quan 2 năm',
    subtitle: 'Một hành trình toàn diện được đúc kết qua những con số biết nói',
    cards: [
      { icon: 'book', value: '26', label: 'Môn học chuẩn quốc tế' },
      { icon: 'clock', value: '04', label: 'Học kỳ chuyên sâu' },
      { icon: 'trophy', value: '04', label: 'Đồ án thực tế (eProject)' },
      { icon: 'briefcase', value: '01', label: 'Portfolio chuyên nghiệp' }
    ],
    durationBanner: {
      eyebrow: 'Tổng thời lượng đào tạo',
      title: '992 Giờ học chuẩn quốc tế',
      totalHours: '992 Giờ',
      breakdown: [
        { label: 'Lý thuyết', value: '386 giờ' },
        { label: 'Thực hành', value: '446 giờ' },
        { label: 'Đồ án thực tế', value: '160 giờ', highlight: true }
      ]
    }
  },
  curriculumType: 'semesters',
  curriculumEyebrow: 'NỘI DUNG ĐÀO TẠO',
  curriculumTitle: 'Chi tiết chương trình học (4 học kỳ)',
  semesters: [
    {
      num: 'HỌC KỲ 01',
      shortTitle: 'AI & Web Foundations',
      fullTitle: 'AI-Driven Web Foundations',
      subTitle: 'Nền tảng Web tích hợp AI',
      desc: 'Xây dựng website responsive tích hợp AI Chatbot hoặc trình tạo nội dung tự động. Kết nối Database cơ bản.',
      coreStack: ['React 18.x', 'Node.js 20', 'SQL Server 2022', 'MongoDB 8.0', 'HTML5/CSS3'],
      aiTools: ['Windsurf', 'Tabnine', 'Framer AI', 'Wix AI'],
      careers: ['Front-end Web Dev (AI-Assisted)', 'Junior Node.js Developer', 'Web Designer (UI/UX)', 'Database Assistant']
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Python, Data & MLOps',
      fullTitle: 'Python, Data & MLOps Essentials',
      subTitle: 'Nền tảng Python, Dữ liệu & MLOps',
      desc: 'Phát triển ứng dụng Python Backend tích hợp AI/NLP, xây dựng Dashboard phân tích dữ liệu trực quan và triển khai trên nền tảng Docker/Kubernetes.',
      coreStack: ['Python 3.x', 'Flask/Django', 'Docker', 'Kubernetes', 'SQL/NoSQL'],
      aiTools: ['OpenAI Tools', 'LangChain & RAG', 'PowerBI (AI)', 'Google Colab'],
      careers: ['Python Web Developer', 'Data Analyst', 'NLP Assistant / AI Dev', 'MLOps Trainee']
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'Java & Mobile AI',
      fullTitle: 'Java Microservices & Mobile with AI',
      subTitle: 'Hệ thống Java Microservices & Mobile AI',
      desc: 'Phát triển hệ thống Microservices quy mô doanh nghiệp tích hợp AI (Backend) và ứng dụng đa nền tảng Flutter (Frontend) với tính năng thông minh.',
      coreStack: ['Java SE 24', 'Spring Boot/Cloud', 'Jakarta EE 10/11', 'Flutter 3.32', 'Dart 3.9'],
      aiTools: ['Vibe Coding (ChatGPT)', 'OpenAI API', 'Hugging Face', 'AI in NetBeans'],
      careers: ['Java Enterprise Developer', 'Mobile App Developer (Flutter)', 'Microservices Engineer', 'Cloud Software Specialist']
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'Enterprise & Capstone',
      fullTitle: 'Enterprise Integration & Capstone Project',
      subTitle: 'Hệ thống Doanh nghiệp & Đồ án Tốt nghiệp',
      desc: 'Thiết kế kiến trúc hệ thống lớn tích hợp AI End-to-End, giải quyết bài toán nghiệp vụ phức tạp và bảo vệ đồ án tốt nghiệp trước hội đồng chuyên gia FPT.',
      coreStack: ['Full Stack AI Architecture', '.NET Core / Next.js', 'CI/CD & DevOps Pipeline', 'Enterprise Security'],
      aiTools: ['Custom AI Agents', 'Copilot Workspace', 'Claude for Code', 'AI Architecture Reviewer'],
      careers: ['Full-Stack AI Software Engineer', 'AI Integration Specialist', 'Solutions Architect Trainee', 'Tech Lead Assistant']
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao học lập trình nên chọn FPT Aptech?',
    desc: 'FPT Aptech mang đến môi trường học tập chuẩn Quốc Tế với chương trình ACCP AI mới nhất. Chúng tôi cam kết giới thiệu việc làm và kết nối trực tiếp sinh viên với hệ sinh thái công nghệ FPT cùng hàng trăm doanh nghiệp công nghệ hàng đầu.',
    items: [
      { icon: 'shield', title: 'Cam kết việc làm hệ sinh thái FPT+', desc: 'Đảm bảo cơ hội việc làm rộng mở tại FPT Software, FPT AI, FPT Smart Cloud và hàng trăm doanh nghiệp công nghệ liên kết.' },
      { icon: 'brain', title: 'Chương trình ACCP AI độc quyền', desc: 'Đón đầu kỷ nguyên AI với giáo trình mới nhất từ Tập đoàn Aptech Ấn Độ, tích hợp AI vào từng môn học từ nền tảng đến chuyên sâu.' },
      { icon: 'zap', title: 'Làm chủ công cụ AI & Vibe Coding mới nhất', desc: 'Ứng dụng thành thạo AI vào quy trình phân tích, viết code, kiểm thử và tối ưu hóa dự án, tăng năng suất làm việc gấp 5 lần.' },
      { icon: 'globe', title: 'Hệ sinh thái học tập 24/7', desc: 'Đặc quyền truy cập các nền tảng học tập dành riêng cho sinh viên FPT: Onlinevarsity, Aptech ProConnect, Coursera, Udemy và kết nối trực tiếp với cộng đồng Dev toàn cầu.' },
      { icon: 'wrench', title: 'Đào tạo đa kỹ năng thực chiến', desc: 'Trang bị trọn bộ kỹ năng từ UI/UX, Frontend, Backend, Mobile đến Data & DevOps, tự tin thích ứng với mọi dự án công nghệ.' },
      { icon: 'folder', title: 'Học qua dự án (Project Based)', desc: 'Thực hành liên tục qua các đồ án (eProject) mỗi học kỳ. Tích hợp ngay công nghệ mới nhất để xây dựng Portfolio cá nhân ấn tượng trước cả khi tốt nghiệp.' }
    ]
  },
  ctaTitle: 'Sẵn sàng trở thành\nLập trình viên Quốc Tế\nAI Đa kỹ năng?',
  ctaDesc: 'Đăng ký nhận tư vấn lộ trình học cá nhân hóa và thông tin học bổng mới nhất từ FPT Aptech',
  ctaButtonText: 'Tư vấn ngay qua Zalo qua Zalo',
  ctaButtonHref: 'https://zalo.me/3164559225263453576',
  formProps: {
    programName: 'FPT Aptech - Fullstack 2 Năm',
    includeCampus: false
  }
};

// =========================================================================
// 2. FPT APTECH - BACKEND 1 NĂM
// =========================================================================
export const COURSE_APTECH_1NAM = {
  brandKey: 'aptech',
  themeColor: '#f37021',
  bgWatermark: 'BACKEND DEV',
  brandBadge: 'FPT APTECH — BACKEND 1 NĂM TÍCH HỢP AI',
  title: 'CHƯƠNG TRÌNH ĐÀO TẠO LẬP TRÌNH BACKEND 1 NĂM\nTÍCH HỢP TRÍ TUỆ NHÂN TẠO (AI)',
  subtitle: 'Chương trình đào tạo Lập trình Backend tích hợp AI chuẩn quốc tế',
  description: [
    'Khóa học Lập trình Backend tích hợp AI tại FPT Aptech là cơ hội để bạn trở thành một Lập Trình Viên Website chuyên nghiệp. Trong vòng 1 năm học tập trung (bao gồm 2 học kỳ), bạn sẽ được trang bị kiến thức từ thiết kế giao diện bắt mắt (Frontend) đến xây dựng và vận hành website (Backend) ứng dụng các công nghệ, kỹ thuật lập trình sát thực tế.',
    'Sinh viên được học chuyên sâu về công nghệ JAVA SE và JavaFX để phát triển các ứng dụng có thể chạy được trên nhiều thiết bị khác nhau, lập trình hướng đối tượng bằng ngôn ngữ C#.'
  ],
  coreHighlightBox: {
    badge: 'ĐIỂM KHÁC BIỆT CỐT LÕI',
    text: 'Đào tạo toàn diện và thực chiến trong 1 năm: Làm chủ trọn vẹn từ thiết kế giao diện Website (Figma, React) đến lập trình Server-side đa nền tảng (PHP Laravel, Python Django, Node.js), ứng dụng Desktop (JavaFX, Swing, C#) và ứng dụng công nghệ AI tạo sinh.'
  },
  bannerImage: {
    src: '/fai_banner_aptech_v2.png',
    alt: 'Chương trình Lập trình viên Backend 1 năm FPT Aptech',
    width: 1200,
    height: 420
  },
  overviewStats: {
    eyebrow: 'HÀNH TRÌNH TỔNG QUAN',
    title: 'Lộ trình đào tạo tổng quan 1 năm',
    subtitle: 'Một hành trình cô đọng, thực chiến trong vòng 1 năm tại FPT Aptech',
    cards: [
      { icon: 'book', value: '22', label: 'Môn học chuẩn quốc tế' },
      { icon: 'clock', value: '02', label: 'Học kỳ chuyên sâu' },
      { icon: 'trophy', value: '02', label: 'Đồ án thực tế (eProject)' },
      { icon: 'briefcase', value: '01', label: 'Portfolio chuyên nghiệp' }
    ]
  },
  curriculumType: 'semesters',
  curriculumEyebrow: 'NỘI DUNG ĐÀO TẠO',
  curriculumTitle: 'Chi tiết 2 học kỳ',
  semesters: [
    {
      num: 'HỌC KỲ 01',
      shortTitle: 'Web Full-stack với React & PHP',
      fullTitle: 'Thiết kế và xây dựng ứng dụng web full-stack với React và PHP',
      subTitle: 'Nền tảng Thiết kế Website, Lập trình Web Full-stack, Database & Kiểm thử',
      desc: 'Học kỳ 1 sẽ trang bị cho sinh viên đầy đủ kỹ năng để tự tin thiết kế và phát triển website chuyên nghiệp với Figma, React, PHP Laravel và SQL Server.',
      subjects: [
        'Applications of AI in Programming',
        'Foundations of Programming with C',
        'Building Next-Level Dynamic Websites',
        'Responsive UI/UX Strategies',
        'GitHub Copilot Beginner to Pro',
        'React for Modern Web Development',
        'Managing Data with SQL Server',
        'Manual and Automation Software Testing with ChatGPT',
        'Modern PHP Applications with Laravel',
        'eProject – Laravel and PHP Application Development'
      ],
      coreStack: ['React.js', 'PHP & Laravel Framework', 'HTML5, CSS3, JavaScript ES6+', 'jQuery & Responsive Web', 'SQL Server Database', 'Figma UI Design'],
      aiTools: ['Applications of AI in Programming', 'GitHub Copilot (AI Coding)', 'ChatGPT in Manual & Automation Testing', 'Cursor / Windsurf AI'],
      careers: ['Lập trình viên Frontend/Backend (Laravel, React, PHP)', 'Chuyên viên phát triển Website', 'Lập trình viên CSDL SQL Server', 'Tester / QA Specialist (AI-Assisted)']
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Desktop (JavaFX) & Web App (Python/NodeJS)',
      fullTitle: 'Xây dựng đa ứng dụng từ desktop app (JavaFX) đến web app (Python / NodeJS), tích hợp AI',
      subTitle: 'Lập trình Đa nền tảng, Ứng dụng Desktop JavaFX, C#, Python Django, Node.js & AI',
      desc: 'Chương trình học kỳ 2 đưa bạn vào thế giới lập trình đa nền tảng với JavaFX, ứng dụng desktop C#, Python Django và Node.js.',
      subjects: [
        'Data Processing with XML and JSON',
        'Distributed Version Control (Git)',
        'Core Java Concepts and Techniques',
        'Search Algorithms in AI with Java',
        'Building Rich Java Applications with JavaFX',
        'Proficient Programming with C#',
        'AI Programming in C#',
        'Programming with Python',
        'Django Framework for Python',
        'Full stack web development and AI with Python (Django)',
        'Server-side Development with NodeJS',
        'Project – Java Desktop Application / Python / NodeJS + AI'
      ],
      coreStack: ['Core Java (Java SE) & OOP', 'JavaFX & Java Swing', 'C# Object-Oriented Programming', 'Python & Django Framework', 'Node.js Server-side Development', 'XML & JSON Data Processing', 'Git Version Control'],
      aiTools: ['Search Algorithms in AI with Java', 'AI Programming in C#', 'Full stack AI with Python Django', 'AI APIs & LLM Backend Integration'],
      careers: ['Lập trình viên Java (Java Core, JavaFX)', 'Lập trình viên C# / .NET Application', 'Lập trình viên Python & Django Backend', 'Lập trình viên Server-side Node.js', 'Kỹ sư phần mềm ứng dụng AI']
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao học lập trình nên chọn FPT Aptech?',
    desc: 'FPT Aptech mang đến môi trường học tập chuẩn Quốc Tế với giáo trình luôn cập nhật sát nhu cầu doanh nghiệp.',
    items: [
      { icon: 'shield', title: 'Cam kết việc làm hệ sinh thái FPT+', desc: 'Đảm bảo cơ hội việc làm rộng mở tại FPT Software, FPT AI, FPT Smart Cloud và hàng trăm doanh nghiệp đối tác.' },
      { icon: 'brain', title: 'Chương trình tích hợp AI chuyên sâu', desc: 'Đón đầu công nghệ tương lai với AI Programming, GitHub Copilot, ChatGPT Testing nâng cao hiệu suất.' },
      { icon: 'zap', title: 'Làm chủ công cụ AI & Vibe Coding mới nhất', desc: 'Ứng dụng thành thạo AI vào quy trình phân tích, viết code, kiểm thử và tối ưu hóa dự án.' },
      { icon: 'globe', title: 'Hệ sinh thái học tập 24/7', desc: 'Đặc quyền truy cập Onlinevarsity, Aptech ProConnect, Coursera, Udemy và kết nối trực tiếp cộng đồng Dev.' },
      { icon: 'wrench', title: 'Đào tạo đa kỹ năng thực chiến', desc: 'Trang bị trọn bộ kỹ năng từ UI/UX, Frontend React, Backend Laravel/NodeJS đến Desktop App C#.' },
      { icon: 'folder', title: 'Học qua đồ án thực tế (eProject)', desc: 'Thực hành liên tục qua các đồ án cuối mỗi học kỳ với sản phẩm hoàn chỉnh để bổ sung Portfolio.' }
    ]
  },
  ctaTitle: 'Sẵn sàng trở thành\nLập trình viên Backend\nChuyên nghiệp?',
  ctaDesc: 'Đăng ký nhận tư vấn lộ trình học 1 năm và thông tin học bổng mới nhất từ FPT Aptech',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/fptaptech',
  formProps: {
    programName: 'FPT Aptech - Backend 1 Năm',
    formTitle: 'BẠN CÓ MUỐN TRỞ THÀNH\nCHUYÊN VIÊN LẬP TRÌNH BACKEND?',
    formSubtitle: 'Đăng ký nhận tư vấn lộ trình 1 năm & học bổng quốc tế DISM',
    campuses: ['Hà Nội']
  }
};

// =========================================================================
// 3. FPT APTECH - FRONTEND 6 THÁNG
// =========================================================================
export const COURSE_APTECH_6THANG = {
  brandKey: 'aptech',
  themeColor: '#f37021',
  bgWatermark: 'FRONTEND DEV',
  brandBadge: 'FPT APTECH — FRONTEND 6 THÁNG TÍCH HỢP AI',
  title: 'CHƯƠNG TRÌNH ĐÀO TẠO LẬP TRÌNH FRONT-END 6 THÁNG\nTÍCH HỢP TRÍ TUỆ NHÂN TẠO (AI)',
  subtitle: 'Chương trình đào tạo Lập trình Frontend tích hợp AI chuẩn quốc tế',
  description: [
    'Bạn muốn biến những ý tưởng sáng tạo thành những trang web đẹp mắt và thu hút? Chương trình đào tạo Lập trình Frontend tích hợp AI của FPT Aptech sẽ giúp bạn tiếp cận những công nghệ mới nhất. Bằng cách sử dụng công nghệ HTML, CSS, JavaScript cùng một số framework hiện đại như React, Next.js, bạn hoàn toàn có thể xây dựng các giao diện website ấn tượng và thân thiện với người dùng. Với 70% thời lượng học là thực hành trên các dự án thực tế cùng sự hỗ trợ tận tình từ đội ngũ giảng viên giàu kinh nghiệm, bạn sẽ tự tin trở thành một Frontend Developer chuyên nghiệp.',
    'Trong khóa đào tạo lập trình Frontend, sinh viên sẽ được học kỹ năng thiết kế website bằng công cụ Figma và lập trình web với PHP-Laravel Framework. Từ đó hiểu rõ cách thiết kế 1 website, phát triển website động chạy được trên các màn hình có kích thước khác nhau.'
  ],
  coreHighlightBox: {
    badge: 'ĐIỂM KHÁC BIỆT CỐT LÕI',
    text: 'Thời gian đào tạo tinh gọn 6 tháng (01 học kỳ) với 70% thời lượng thực hành thực chiến trên đồ án thật. Nắm vững trọn bộ từ thiết kế UI/UX Figma, lập trình giao diện hiện đại (HTML5, CSS3, JavaScript ES6+, React) đến kết nối Backend PHP-Laravel và ứng dụng AI (GitHub Copilot, ChatGPT) vào tối ưu tốc độ phát triển.'
  },
  bannerImage: {
    src: '/fai_banner_aptech_v2.png',
    alt: 'Chương trình Lập trình viên Frontend 6 tháng FPT Aptech',
    width: 1200,
    height: 420
  },
  overviewStats: {
    eyebrow: 'HÀNH TRÌNH TỔNG QUAN',
    title: 'Lộ trình đào tạo tổng quan 6 tháng',
    subtitle: 'Một hành trình tinh gọn, tập trung cao độ trong vòng 6 tháng tại FPT Aptech',
    cards: [
      { icon: 'book', value: '10', label: 'Môn học chuẩn quốc tế' },
      { icon: 'clock', value: '01', label: 'Học kỳ tập trung (6 tháng)' },
      { icon: 'trophy', value: '01', label: 'Đồ án thực tế (eProject)' },
      { icon: 'briefcase', value: '01', label: 'Portfolio Web chuyên nghiệp' }
    ]
  },
  curriculumType: 'subjects',
  curriculumEyebrow: 'NỘI DUNG ĐÀO TẠO',
  curriculumTitle: 'Danh sách các môn học (10 Môn chuẩn quốc tế)',
  curriculumSubtitle: 'Chương trình đào tạo toàn diện trang bị từ tư duy thiết kế UI/UX, lập trình Web Front-end, kiểm thử AI đến kết nối CSDL và Backend',
  subjects: [
    { num: 'MÔN 01', title: 'Applications of AI in Programming', desc: 'Sử dụng các công cụ AI để gỡ lỗi mã của bạn và giải quyết những thách thức mới.', tag: 'AI Fundamentals' },
    { num: 'MÔN 02', title: 'Foundations of Programming with C', desc: 'Giải quyết các vấn đề lập trình căn bản bằng sơ đồ luồng và mã giả.', tag: 'Logic & Algorithm' },
    { num: 'MÔN 03', title: 'Building Next-Level Dynamic Websites', desc: 'Sử dụng HTML5 / CSS3 / JavaScript để phát triển các trang web và ứng dụng tương tác.', tag: 'Core Web Tech' },
    { num: 'MÔN 04', title: 'Responsive UI/UX Strategies', desc: 'Tìm hiểu các nguyên tắc cơ bản của thiết kế UX/UI web hiệu quả trên mọi màn hình.', tag: 'UI/UX & Figma' },
    { num: 'MÔN 05', title: 'GitHub Copilot Beginner to Pro (MOOC)', desc: 'Sử dụng GitHub Copilot AI để tự động tạo mã, viết kiểm thử đơn vị và tối ưu hóa hiệu suất.', tag: 'AI Assisted Coding' },
    { num: 'MÔN 06', title: 'React for Modern Web Development', desc: 'Thiết kế và phát triển các trang web động với thư viện ReactJS hiện đại nhất.', tag: 'ReactJS Modern' },
    { num: 'MÔN 07', title: 'Managing Data with SQL Server', desc: 'Chuẩn hóa dữ liệu thô thành các bảng cơ sở dữ liệu được tổ chức tốt trong SQL Server.', tag: 'Database Architecture' },
    { num: 'MÔN 08', title: 'Software Testing with help of ChatGPT (MOOC)', desc: 'Khám phá cách Kỹ sư QA sử dụng GenAI/ChatGPT để kiểm thử phần mềm thủ công và tự động.', tag: 'AI QA & Testing' },
    { num: 'MÔN 09', title: 'Modern PHP Applications with Laravel', desc: 'Học cách làm việc với Laravel Framework để xây dựng các ứng dụng Web động mạnh mẽ.', tag: 'Backend Integration' },
    { num: 'MÔN 10', title: 'eProject – Laravel & PHP Application Development', desc: 'Phát triển một ứng dụng web phản hồi thực tế hoàn chỉnh dựa trên case study và bảo vệ trước hội đồng.', tag: 'Capstone Project' }
  ],
  certificate: {
    eyebrow: 'BẰNG CẤP & CHỨNG CHỈ QUỐC TẾ',
    title: 'Chứng chỉ sau khi hoàn thành khóa học Lập trình Frontend',
    desc: 'CPISM (Certificate of Proficiency in Information Systems Management) do Tập đoàn Aptech Ấn Độ cấp bằng có giá trị công nhận toàn cầu.',
    note: 'Với chứng chỉ này, sinh viên có thể học nâng cấp thêm 1,5 năm để lấy bằng Advanced Diploma In Software Engineering (ADSE) do Tập đoàn Aptech Ấn Độ cấp.',
    badge: 'CPISM',
    issuer: 'Aptech Worldwide'
  },
  targetCareers: [
    { title: 'Phát triển dự án Web & Frontend App', desc: 'Tham gia phát triển các dự án về Web, xây dựng các chức năng front-end chuyên nghiệp.' },
    { title: 'Triển khai giao diện HTML/CSS/JS', desc: 'Triển khai giao diện theo yêu cầu của khách hàng trên hệ thống website xây dựng sẵn.' },
    { title: 'Phối hợp phát triển liên chức năng', desc: 'Phối hợp nhịp nhàng với Back-end developers và Web designers.' },
    { title: 'Đảm bảo tiêu chuẩn đồ họa & Brand', desc: 'Đảm bảo tiêu chuẩn đồ họa chất lượng cao và tính nhất quán thương hiệu.' },
    { title: 'Tối ưu trải nghiệm người dùng', desc: 'Thu thập ý kiến phản hồi và xây dựng các hướng giải quyết tối ưu cho người dùng.' },
    { title: 'Nghiên cứu & Ứng dụng công nghệ mới', desc: 'Nghiên cứu, cập nhật công nghệ HTML/CSS, Javascript và AI mới nhất.' }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao học lập trình nên chọn FPT Aptech?',
    desc: 'Môi trường học tập chuẩn quốc tế với 25 năm uy tín đào tạo CNTT tại Việt Nam.',
    items: [
      { icon: 'clock', title: 'Thời gian học tập tinh gọn 6 tháng', desc: 'Tập trung vào kỹ năng thực chiến cần thiết nhất để đi làm ngay sau tốt nghiệp.' },
      { icon: 'shield', title: 'Cam kết giới thiệu việc làm FPT+', desc: 'Kết nối mạng lưới đối tác doanh nghiệp phần mềm rộng khắp thuộc hệ sinh thái FPT.' },
      { icon: 'brain', title: 'Tích hợp AI & GitHub Copilot', desc: 'Trang bị kỹ năng làm việc với trợ lý AI giúp nâng cao năng suất viết code gấp 5 lần.' },
      { icon: 'layers', title: 'Làm chủ thiết kế Figma & UI/UX', desc: 'Hiểu tư duy thiết kế trải nghiệm người dùng hiện đại trên đa nền tảng thiết bị.' },
      { icon: 'globe', title: 'Hệ sinh thái học tập quốc tế', desc: 'Truy cập tài nguyên học liệu số Aptech Onlinevarsity và cộng đồng Dev toàn cầu.' },
      { icon: 'folder', title: 'Sở hữu Portfolio đồ án eProject', desc: 'Xây dựng sản phẩm web hoàn thiện để tự tin phỏng vấn tuyển dụng thành công.' }
    ]
  },
  ctaTitle: 'Sẵn sàng trở thành\nChuyên viên\nLập trình Front-end?',
  ctaDesc: 'Đăng ký nhận tư vấn lộ trình học 6 tháng và thông tin học bổng mới nhất từ FPT Aptech',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/fptaptech',
  formProps: {
    programName: 'FPT Aptech - Front end 6 Tháng',
    formTitle: 'BẠN CÓ MUỐN TRỞ THÀNH CHUYÊN VIÊN LẬP TRÌNH FRONT-END?',
    formSubtitle: 'Đăng ký nhận tư vấn lộ trình 6 tháng & học bổng quốc tế CPISM',
    campuses: ['Hà Nội']
  }
};

// =========================================================================
// 4. FPT APTECH - KHÓA NGẮN HẠN (100 - 200 GIỜ)
// =========================================================================
export const COURSE_APTECH_100_200H = {
  brandKey: 'aptech',
  themeColor: '#f37021',
  bgWatermark: '100 - 200H',
  brandBadge: 'FPT APTECH — KHÓA HỌC NGẮN HẠN 100 - 200 GIỜ',
  title: 'BỘ KHÓA HỌC LẬP TRÌNH NGẮN HẠN (100 - 200 GIỜ)\nTÍCH HỢP TRÍ TUỆ NHÂN TẠO (AI)',
  subtitle: 'Học FULL STACK, BA, TESTER, DATA ANALYSIS với AI – cùng khoá học ngắn hạn tại FPT Aptech',
  description: [
    'Tối ưu thời gian và chi phí, đón đầu xu hướng việc làm cùng hệ sinh thái FPT. Chương trình đào tạo các kỹ năng cốt lõi sát với nhu cầu thực tế doanh nghiệp, tích hợp trí tuệ nhân tạo (AI) giúp bạn nhân bản năng suất lập trình và sẵn sàng nhận việc làm ngay sau khóa học.',
    'Chương trình module hóa linh hoạt cho phép học viên lựa chọn học riêng lẻ từng khóa 100 giờ hoặc kết hợp chuỗi 2 khóa để hoàn thiện đầy đủ kỹ năng từ Frontend UI/UX đến Server Backend & DevOps.'
  ],
  coreHighlightBox: {
    badge: 'ĐIỂM KHÁC BIỆT CỐT LÕI',
    text: 'Đi từ giao diện trực quan lên logic phức tạp. Đầu ra: Lập trình viên Full-Stack Web & AI vững chắc tư duy và công cụ thực chiến.'
  },
  bannerImage: {
    src: '/fai_banner_aptech_v2.png',
    alt: 'Bộ khóa học Lập trình ngắn hạn 100-200h FPT Aptech',
    width: 1200,
    height: 420
  },
  overviewStats: {
    cards: [
      { icon: 'clock', value: '100 - 200', label: 'Giờ học linh hoạt' },
      { icon: 'layers', value: '02', label: 'Module chuyên sâu' },
      { icon: 'trophy', value: '02', label: 'Đồ án thực chiến' },
      { icon: 'award', value: '01', label: 'Chứng chỉ chuyên môn Aptech Global' }
    ]
  },
  curriculumType: 'courseModules',
  curriculumEyebrow: 'DANH MỤC 2 KHÓA HỌC CHUYÊN ĐỀ',
  curriculumTitle: 'Lựa chọn chương trình ngắn hạn phù hợp',
  curriculumSubtitle: 'Mỗi khóa học được thiết kế cô đọng, thực chiến cao độ từ 100 đến 200 giờ',
  courses: [
    {
      id: 'khoa-1',
      badge: 'KHOÁ 1 • PHÁT TRIỂN GIAO DIỆN VÀ TRỰC QUAN HOÁ',
      title: 'ReactJS & AI Smart UI: Frontend, BA, Tester với AI',
      durationHighlight: '100H',
      note: 'Khoá học giúp hoàn thiện kỹ năng Frontend với Reactjs và củng cố kỹ năng BA, Tester với AI.',
      modules: [
        { stt: 1, subject: 'Nhập môn Phân tích Nghiệp vụ (BA)', duration: '20 Giờ', role: 'BA / PM', content: 'Thu thập yêu cầu, viết User Story, AI Wireframe và tài liệu đặc tả SRS.' },
        { stt: 2, subject: 'Lập trình hướng đối tượng với Java (JP)', duration: '20 Giờ', role: 'Logic', content: 'Tư duy lập trình OOP, cấu trúc dữ liệu và giải thuật cơ bản trên nền Java.' },
        { stt: 3, subject: 'AI-driven Dynamic Website (DWD)', duration: '24 Giờ', role: 'Frontend', content: 'HTML5, CSS3, JavaScript tương tác, DOM scripting và hỗ trợ sinh mã AI.' },
        { stt: 4, subject: 'Building Intelligent React Interfaces (BIIR)', duration: '24 Giờ', role: 'Frontend', content: 'SPA ReactJS, Hooks, State Management, Mock API và tích hợp Chatbot UI.' },
        { stt: 5, subject: 'Manual Testing & Deployment', duration: '12 Giờ', role: 'QA / DevOps', content: 'Kiểm thử tương thích thiết bị, viết tài liệu Testcase và deploy lên Vercel/Netlify.' }
      ]
    },
    {
      id: 'khoa-2',
      badge: 'KHOÁ 2 • LẬP TRÌNH PHÍA SERVER (BACKEND)',
      title: 'AI Multi-skill Backend : Backend, Automation Test, DevOps với AI',
      durationHighlight: '100H',
      note: 'Bước tiếp nối hoàn hảo cho học viên đã học xong Khoá 1 để hoàn thiện trọn vẹn kỹ năng Backend quy mô doanh nghiệp.',
      modules: [
        { stt: 1, subject: 'Managing Data with SQL & NoSQL (MDD)', duration: '28 Giờ', role: 'Database', content: 'Thiết kế, truy vấn và tối ưu hóa hệ quản trị SQL Server và MongoDB.' },
        { stt: 2, subject: 'Server-side Dev with NodeJS (SDN)', duration: '28 Giờ', role: 'Backend', content: 'Xây dựng RESTful API chuẩn Microservices với ExpressJS và Node.js.' },
        { stt: 3, subject: 'AI Integration & Prompt Engineering', duration: '16 Giờ', role: 'AI Integration', content: 'Tích hợp OpenAI API, LangChain và Vector Database vào dịch vụ backend.' },
        { stt: 4, subject: 'Automation Testing with Postman/Jest', duration: '16 Giờ', role: 'Tester', content: 'Kiểm thử tự động API, viết Integration testcases và xử lý ngoại lệ.' },
        { stt: 5, subject: 'DevOps & Docker Deployment', duration: '12 Giờ', role: 'DevOps', content: 'Đóng gói Docker Container, cấu hình CI/CD pipeline và deploy lên Cloud.' }
      ]
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao nên chọn khóa học ngắn hạn tại FPT Aptech?',
    desc: 'Linh hoạt, thực chiến, tập trung vào kỹ năng doanh nghiệp đang khát nhân lực.',
    items: [
      { icon: 'clock', title: 'Tối ưu thời gian và chi phí', desc: 'Thời lượng tinh gọn 100 - 200 giờ, học nhanh – làm được việc ngay, tiết kiệm tối đa ngân sách.' },
      { icon: 'brain', title: 'Tích hợp AI trong toàn bộ quy trình', desc: 'Ứng dụng AI từ phân tích nghiệp vụ BA, sinh mã React, tích hợp API đến Automation Testing.' },
      { icon: 'layers', title: 'Đa kỹ năng Multi-skill (Full 5)', desc: 'Trang bị trọn vẹn 5 trụ cột năng lực được săn đón: BA, Frontend, Backend, Tester và DevOps.' },
      { icon: 'folder', title: 'Học thực chiến qua sản phẩm thật', desc: '100% nội dung học gắn liền với đồ án thực tế, kiểm thử và deploy trực tiếp lên Cloud.' },
      { icon: 'shield', title: '2 Hình thức học linh hoạt', desc: 'Online hoặc Offline tại cơ sở Hà Nội' },
      { icon: 'award', title: 'Chứng chỉ Quốc tế Aptech Global', desc: 'Hoàn thành khóa học, học viên nhận chứng chỉ chuyên môn uy tín có giá trị tuyển dụng cao.' }
    ]
  },
  ctaTitle: 'Sẵn sàng bứt phá kỹ năng lập trình trong 100 - 200 giờ?',
  ctaDesc: 'Đăng ký nhận tư vấn chi tiết module phù hợp nhất với trình độ hiện tại của bạn',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/fptaptech',
  formProps: {
    programName: 'FPT Aptech - Khóa Ngắn Hạn 100-200h',
    headerTitle: 'NHẬN THÔNG TIN TƯ VẤN BỘ KHÓA HỌC\nLẬP TRÌNH NGẮN HẠN TẠI FPT APTECH (100 - 200 GIỜ)',
    formTitle: 'ĐĂNG KÝ TƯ VẤN KHÓA HỌC LẬP TRÌNH NGẮN HẠN',
    formSubtitle: 'Tối ưu thời gian - Đi làm sớm - Tích lũy kỹ năng thực chiến',
    campuses: ['Hà Nội'],
    courseLabel: 'Bạn đang quan tâm khoá học ngắn hạn nào tại FPT Aptech',
    badges: [
      { value: '2', unit: 'Triệu', title: 'Học bổng "Tân Binh Sáng Tạo"', desc: 'Ưu đãi giảm trực tiếp vào học phí' },
      { value: 'VIP', unit: 'Đặc Quyền', title: 'Đặc quyền VIP tặng Miễn phí tài khoản Coursera + Udemy', desc: 'Truy cập kho học liệu quốc tế không giới hạn trị giá hàng nghìn USD' }
    ],
    courseOptions: [
      'Lập trình Java Fullstack cơ bản & nâng cao',
      'Lập trình Python phân tích dữ liệu & AI',
      'Lập trình Web Front-end với ReactJS & NextJS',
      'Lập trình Backend với Node.js & RESTful API',
      'Lập trình C/C++ & Cấu trúc dữ liệu giải thuật'
    ]
  }
};

// =========================================================================
// 5. FPT ARENA - AMSP (2 NĂM)
// =========================================================================
export const COURSE_ARENA_AMSP = {
  brandKey: 'arena',
  themeColor: '#ffb600',
  badgeTextColor: '#000000',
  bgWatermark: 'FPT ARENA',
  brandBadge: 'FPT ARENA — AMSP 2 NĂM 2026',
  title: 'Arena Multimedia Specialist Program (2 năm)',
  subtitle: 'Đào tạo Chuyên gia Mỹ thuật Đa phương tiện chuẩn Quốc tế',
  description: [
    'Chương trình Chuyên gia Mỹ thuật Đa phương tiện Quốc tế (AMSP) tại FPT Arena là khóa đào tạo toàn diện số 1 Việt Nam về mỹ thuật và kỹ xảo đồ họa số.',
    'Chương trình kéo dài 2 năm gồm 4 học kỳ chuyên sâu bao hàm toàn bộ lĩnh vực công nghiệp sáng tạo: Thiết kế đồ họa 2D & Nhận diện thương hiệu, Làm phim kỹ thuật số & Video kỹ xảo, Hoạt hình 3D Animation và Thiết kế Game Real-time trên Unreal Engine 5.'
  ],
  heroStats: [
    { value: '2 Năm', label: 'Thời gian đào tạo toàn diện 4 học kỳ chuyên sâu.' },
    { value: '4 Học kỳ', label: 'Graphic Design, Filmmaking, 3D Animation, Game Art.' },
    { value: 'ADIM', label: 'Advanced Diploma in Multimedia cấp bởi Aptech Ấn Độ.' }
  ],
  bannerImage: {
    src: '/banner_arena_sub_v2.png',
    alt: 'Chương trình Chuyên gia Mỹ thuật Đa phương tiện FPT Arena AMSP',
    width: 1200,
    height: 420
  },
  curriculumType: 'semesters',
  curriculumEyebrow: 'NỘI DUNG ĐÀO TẠO',
  curriculumTitle: 'Chi tiết 4 học kỳ chuyên sâu',
  semesters: [
    {
      num: 'HỌC KỲ 01',
      shortTitle: 'Graphic Design',
      fullTitle: 'Graphic Design & Digital Branding',
      subTitle: 'Nền tảng Thiết kế Đồ hoạ & Nhận diện Thương hiệu',
      desc: 'Nắm vững các khái niệm thiết yếu của thiết kế đồ họa, nguyên lý thị giác, typography, nhiếp ảnh thương mại và chuẩn in ấn bao bì.',
      coreStack: ['Nguyên lý thị giác & Bố cục thiết kế', 'Nghệ thuật chữ Typography', 'Thiết kế minh họa Vector', 'Xử lý hình ảnh kỹ thuật số', 'Thiết kế ấn phẩm in ấn bao bì', 'Đồ án: Bộ nhận diện thương hiệu'],
      aiTools: ['Adobe Photoshop AI (Firefly)', 'Adobe Illustrator AI Tools', 'Midjourney & DALL-E 3', 'Canva Magic Studio'],
      careers: ['Graphic Designer', 'Brand Identity Designer', 'Digital Media Artist', 'Layout Designer', 'Commercial Photo Editor']
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Filmmaking & 3D Asset',
      fullTitle: 'Digital Filmmaking & 3D Game Asset Design',
      subTitle: 'Làm phim Kỹ thuật số & Thiết kế 3D Game Asset',
      desc: 'Tìm hiểu và thực hành toàn diện quy trình làm phim, biên tập âm thanh - video, motion graphics và dựng hình 3D Game Asset.',
      coreStack: ['Kịch bản phân cảnh Storyboard', 'Quay phim & Biên tập video', 'Biên tập âm thanh số', 'Motion Graphics', 'Dựng hình mô hình 3D Asset Blender/Maya', 'Đồ án: Phim ngắn / 3D Game Asset'],
      aiTools: ['Runway Gen-2 & Gen-3', 'Premiere Pro AI Auto-Reframe', 'After Effects AI Compositing', 'ElevenLabs & Suno AI'],
      careers: ['Video Editor', 'Motion Graphic Designer', '3D Game Asset Modeler', 'Storyboard Artist', 'DOP / Camera Operator Assistant']
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'Advanced 3D & VFX',
      fullTitle: 'Advanced 3D Animation & Digital Compositing',
      subTitle: 'Hoạt hình 3D Chuyên sâu & Kỹ xảo Hình ảnh (VFX)',
      desc: 'Làm chủ toàn bộ quy trình sản xuất hoạt hình 3D chuẩn quốc tế từ Rigging, Animation, Dynamic VFX cho đến kỹ xảo Compositing.',
      coreStack: ['Mô hình hóa nhân vật 3D nâng cao', 'Chất liệu & Ánh sáng Cinema', 'Thiết lập hệ thống xương Rigging', 'Diễn hoạt chuyển động 3D Animation', 'Hiệu ứng Dynamic khói lửa nước', 'Kỹ xảo hình ảnh Compositing', 'Đồ án: Phim Hoạt hình 3D ngắn'],
      aiTools: ['DeepMotion AI MoCap', 'Wonder Dynamics AI VFX', 'Kaedim 3D AI Generator', 'Topaz Video AI Upscaling'],
      careers: ['3D Animator', 'VFX Artist / Compositor', '3D Character Modeler', 'Rigging & Lighting Artist', '3D Generalist']
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'Game Art & 3D',
      fullTitle: 'Real-Time 3D & Game Art',
      subTitle: 'Thiết kế Game 3D Thời gian thực & Meta Engine',
      desc: 'Học nguyên lý thiết kế môi trường và đồ họa game thế hệ mới trên Unity & Unreal Engine 5, sẵn sàng gia nhập Studio Game AAA.',
      coreStack: ['Thiết kế giao diện UI/UX cho Game', 'Quy trình Concept Game Design', 'Thiết kế màn chơi Level Design', 'Unreal Engine 5: Blueprints & Lumen', 'Unity Game Engine', 'Đồ án Tốt nghiệp: Game 3D Thực chiến'],
      aiTools: ['Unreal Engine AI Assistants & Metahuman', 'Luma AI & Gaussian Splatting', 'Blockade Labs Skybox', 'Meshy AI 3D Mesh Generator'],
      careers: ['Game UI/UX Designer', 'Unreal Engine Game Artist', 'Level / Environment Artist', 'Unity 3D Game Artist', '3D Technical Artist']
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao nên chọn FPT Arena Multimedia?',
    desc: '22 năm dẫn đầu đào tạo Mỹ thuật Đa phương tiện chuẩn quốc tế tại Việt Nam.',
    items: [
      { icon: 'shield', title: '22 năm tiên phong đào tạo Multimedia', desc: 'Đơn vị đầu tiên tại Việt Nam đào tạo Multimedia chuẩn quốc tế với hơn 20.000 cựu sinh viên thành danh.' },
      { icon: 'brain', title: 'Giáo trình AMSP tích hợp GenAI', desc: 'Bản quyền từ Aptech Ấn Độ, đón đầu xu hướng với các công nghệ AI tạo sinh trong đồ họa và video.' },
      { icon: 'zap', title: 'Học thuyết Kiến tạo\n(Constructivism)', desc: 'Triết lý "Làm khác để làm tốt", sinh viên học tập chủ động qua đồ án thực tế.' },
      { icon: 'globe', title: 'Bằng Quốc tế Advanced Diploma', desc: 'Chứng chỉ nghề nghiệp toàn cầu của Aptech Ấn Độ, mở rộng cơ hội liên thông quốc tế.' },
      { icon: 'wrench', title: 'Giảng viên chuyên gia thực chiến', desc: '100% giảng viên là Creative Director, Art Director và Lead 3D/VFX Artist trực tiếp dẫn dắt.' },
      { icon: 'folder', title: 'Showcase đồ án & 300+ đối tác Studio', desc: 'Triển lãm đồ án định kỳ và kết nối tuyển dụng trực tiếp vào mạng lưới hơn 300+ Agency & Studio.' }
    ]
  },
  ctaTitle: 'Sẵn sàng trở thành Chuyên gia Mỹ thuật Đa phương tiện?',
  ctaDesc: 'Đăng ký nhận tư vấn lộ trình học cá nhân hóa và thông tin học bổng mới nhất từ FPT Arena Multimedia',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/fptarenaofficial',
  formProps: {
    programName: 'FPT Arena Multimedia - AMSP 2 Năm',
    brand: 'arena',
    campuses: ['Hà Nội', 'Đà Nẵng']
  }
};

// =========================================================================
// 6. FPT ARENA - CHUYÊN SÂU (6 - 18 THÁNG)
// =========================================================================
export const COURSE_ARENA_6_18THANG = {
  brandKey: 'arena',
  themeColor: '#ffb600',
  badgeTextColor: '#000000',
  bgWatermark: '6–18 THÁNG',
  brandBadge: 'FPT ARENA — CHUYÊN SÂU 6–18 THÁNG',
  brandLogo: '/logo_arena.png',
  title: 'Thiết Kế 2D, 3D,\nGame & App Chuyên Sâu',
  description: [
    'Chương trình đào tạo linh hoạt tối ưu thời gian từ 6 đến 18 tháng. Giúp học viên tập trung đào sâu đúng chuyên môn mong muốn: Thiết kế Đồ họa 2D & UI/UX, Kỹ xảo làm phim kỹ thuật số, hoặc Diễn hoạt Hoạt hình 3D & Game Art.'
  ],
  heroStats: [
    { value: '3 Lộ Trình', label: 'Lựa chọn chuyên ngành linh hoạt theo định hướng nghề nghiệp cụ thể.' },
    { value: '6–18 Tháng', label: 'Tối ưu hóa thời gian đào tạo, sớm gia nhập thị trường lao động sáng tạo.' },
    { value: 'DISM / CPISM', label: 'Chứng chỉ quốc tế Aptech chuyên biệt cho từng chuyên ngành đào tạo.' }
  ],
  bannerImage: {
    src: '/banner_arena_sub_v2.png',
    alt: 'Tuyển sinh Arena Chuyên sâu 6-18 tháng',
    width: 1200,
    height: 400
  },
  curriculumType: 'tracks',
  curriculumEyebrow: 'CHƯƠNG TRÌNH ĐÀO TẠO',
  curriculumTitle: '3 Chuyên ngành mũi nhọn linh hoạt',
  curriculumSubtitle: 'Tiết kiệm thời gian, tập trung 100% năng lực vào lĩnh vực đam mê với chứng chỉ quốc tế uy tín.',
  tracks: [
    {
      duration: '6 THÁNG',
      icon: 'palette',
      title: 'Thiết Kế Đồ Họa & UI/UX',
      desc: 'Nắm vững nền tảng mỹ thuật thị giác, thiết kế bộ nhận diện thương hiệu, thiết kế đồ họa truyền thông và trải nghiệm người dùng Web/Mobile App (Figma).',
      skills: ['Adobe Photoshop & Illustrator', 'Thiết kế giao diện Figma UI/UX', 'Đồ án Nhận diện thương hiệu eProject']
    },
    {
      duration: '12 THÁNG',
      icon: 'video',
      title: 'Làm Phim Kỹ Thuật Số & VFX',
      desc: 'Bao gồm toàn bộ kỹ năng đồ họa 2D kết hợp chuyên sâu về quay phim, dựng phim kỹ thuật số, kỹ xảo điện ảnh CGI, âm thanh và chuyển động Motion Graphics.',
      skills: ['Adobe Premiere Pro & Audition', 'Kỹ xảo After Effects & Cinema 4D', 'Đồ án Phim ngắn kỹ thuật số eProject']
    },
    {
      duration: '18 THÁNG',
      icon: 'box',
      title: 'Hoạt Hình 3D & Game Design',
      desc: 'Chuyên sâu về tạo hình nhân vật 3D, rigging khung xương, diễn hoạt animation, môi trường game 3D và dựng hoạt hình kỹ xảo chuyên nghiệp chuẩn Studio.',
      skills: ['Autodesk Maya & Blender 3D', 'Unreal Engine & ZBrush Modeling', 'Đồ án Phim Hoạt hình 3D hoàn chỉnh']
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao nên chọn khóa học chuyên sâu FPT Arena?',
    desc: 'Rút ngắn thời gian, tập trung tối đa vào kỹ năng thực chiến và hoàn thiện Portfolio ấn tượng để đi làm ngay sau từng kỳ học.',
    items: [
      { icon: 'palette', title: 'Thời gian linh hoạt, tối ưu chi phí', desc: 'Lộ trình từ 6 đến 18 tháng được module hóa giúp bạn dễ dàng lựa chọn đúng chuyên ngành mục tiêu mà không mất thời gian học dàn trải.' },
      { icon: 'shield', title: 'Học phí trả góp 0%', desc: 'Hỗ trợ tài chính linh hoạt giúp học viên yên tâm học tập mà không bị áp lực tài chính.' },
      { icon: 'wrench', title: 'Thực chiến cùng chuyên gia', desc: 'Học trực tiếp cùng các Art Director, Lead Animator giàu kinh nghiệm từ các studio lớn.' },
      { icon: 'award', title: 'Chứng chỉ quốc tế Aptech', desc: 'Cấp chứng chỉ nghề nghiệp DISM/CPISM có giá trị công nhận trên toàn cầu.' }
    ]
  },
  ctaTitle: 'Sẵn sàng bứt phá với đam mê Sáng tạo Đa phương tiện?',
  ctaDesc: 'Đăng ký nhận tư vấn lộ trình học chuyên sâu 6–18 tháng và thông tin học bổng mới nhất từ FPT Arena Multimedia',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/fptarenaofficial',
  formProps: {
    programName: 'FPT Arena Chuyên Sâu (6-18 Tháng)',
    brand: 'arena',
    headerTitle: 'NHẬN THÔNG TIN TƯ VẤN\nKHÓA HỌC  6 - 18 THÁNG TẠI FPT ARENA',
    formTitle: 'BẠN CÓ MUỐN NÂNG TẦM TƯ DUY THIẾT KẾ ĐỒ HỌA?',
    formSubtitle: 'Đăng ký nhận tư vấn lộ trình 6 - 18 tháng phù hợp mục tiêu của bạn',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    courseOptions: [
      'Thiết kế đồ họa thương mại (6 tháng)',
      'Thiết kế Web & Kỹ thuật số UI/UX (12 tháng)',
      'Làm phim kỹ thuật số & Hoạt hình 3D (18 tháng)',
      'Thiết kế Game & Hoạt hình 3D (18 tháng)'
    ]
  }
};

// =========================================================================
// 7. FPT ARENA - KHÓA NGẮN HẠN (100 GIỜ)
// =========================================================================
export const COURSE_ARENA_100H = {
  brandKey: 'arena',
  themeColor: '#ffb600',
  badgeTextColor: '#000000',
  bgWatermark: '100 GIỜ',
  brandBadge: 'FPT ARENA — KHÓA NGẮN HẠN 100 GIỜ',
  title: 'Bộ Khóa Học Multimedia\nThực Chiến (100 Giờ)',
  description: [
    'Bộ khóa học Multimedia ngắn hạn 100 giờ tại FPT Arena được thiết kế dạng studio thực chiến dành cho content creator, chủ shop kinh doanh, sinh viên và người đi làm cần nâng cao kỹ năng thiết kế và sản xuất nội dung.',
    'Chương trình huấn luyện với 80% thời lượng là thực hành trên các dự án thực tế giúp học viên hoàn thiện ngay sản phẩm Portfolio thương mại.'
  ],
  heroStats: [
    { value: '100 Giờ', label: 'Tập trung thời lượng vào kỹ năng thực hành theo dự án thực tế.' },
    { value: 'Thực Hành 80%', label: 'Hoàn thiện sản phẩm thương mại ngay trong khóa..' },
    { value: 'Portfolio', label: 'Tự tin ứng tuyển hoặc nhận job Freelance ngay sau tốt nghiệp.' }
  ],
  bannerImage: {
    src: '/banner_arena_sub_v2.png',
    alt: 'Tuyển sinh FPT Arena 100h',
    width: 1200,
    height: 400
  },
  curriculumType: 'shortCourses',
  curriculumEyebrow: 'CHƯƠNG TRÌNH THỰC CHIẾN',
  curriculumTitle: '4 Khóa học Multimedia chuyên sâu',
  curriculumSubtitle: 'Được thiết kế riêng cho người đi làm, sinh viên và những ai muốn tối ưu thời gian học tập, có nghề ngay.',
  shortCourses: [
    {
      badge: 'Khoá 1',
      icon: 'palette',
      title: 'Thiết Kế\nThương Hiệu - Thương Mại',
      desc: 'Thiết kế bộ nhận diện thương hiệu, ấn phẩm quảng cáo, truyền thông & bán hàng đa kênh.',
      subjects: [
        'Concepts of Graphics and Illustrations',
        'Typography Design',
        'Digital Art',
        'Magic with Images'
      ],
      output: 'Graphic Designer, Brand Designer tại Agency và doanh nghiệp.'
    },
    {
      badge: 'Khoá 2',
      icon: 'smartphone',
      title: 'Thiết Kế App/Web UI/UX',
      desc: 'Thiết kế giao diện UI/UX trực quan cho Website, Landing Page & Ứng dụng di động.',
      subjects: [
        'Web Designing Concepts',
        'UI Design Foundations & Applications',
        'Wireframing & Prototype',
        'CMS & UI Design Portfolio'
      ],
      output: 'UI/UX Designer, Web Designer, Product Designer cho dự án số.'
    },
    {
      badge: 'Khoá 3',
      icon: 'film',
      title: 'Làm Video / Clip Sáng Tạo',
      desc: 'Sản xuất và biên tập video ngắn, motion graphics, hoạt hình phục vụ MXH & quảng cáo.',
      subjects: [
        'Concepts of Film Making Now',
        'Creating Motion Graphics',
        'Principles of Animation',
        'Storyboarding & Animation Art'
      ],
      output: 'Video Editor, Motion Designer, Content Creator cho Agency & Studio.'
    },
    {
      badge: 'Khoá 4',
      icon: 'gamepad2',
      title: 'Thiết Kế\nĐồ Họa 3D & Game',
      desc: 'Dựng hình 3D, tạo chất liệu, ánh sáng & phát triển tài nguyên môi trường cho Game.',
      subjects: [
        'Introduction to Blender',
        '3D Asset Modeling',
        'Retopology of 3D Asset',
        'Texturing, Lighting & Rendering'
      ],
      output: '3D Modeler, Game Asset Artist tại các Studio Game & Hoạt hình.'
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao nên chọn khóa học 100 giờ tại FPT Arena?',
    desc: 'Lối đi tắt nhanh nhất để sở hữu kỹ năng sáng tạo đa phương tiện ứng dụng ngay vào công việc.',
    items: [
      { icon: 'clock', title: 'Tối ưu thời gian', desc: 'Chỉ 100 giờ học tập trung giải quyết trọn vẹn 1 chuyên đề kỹ năng cụ thể.' },
      { icon: 'shield', title: 'Học phí trả góp 0%', desc: 'Hỗ trợ thanh toán linh hoạt giúp mọi bạn trẻ dễ dàng tiếp cận.' },
      { icon: 'wrench', title: 'Thực chiến 80%', desc: 'Thực hành liên tục trong phòng Lab chuyên nghiệp cấu hình cao.' },
      { icon: 'award', title: 'Đầu ra đảm bảo', desc: 'Hoàn thành khóa học là có ngay trong tay Portfolio thực tế để tự tin nhận job.' }
    ]
  },
  ctaTitle: 'Sẵn sàng làm chủ kỹ năng Multimedia trong 100 giờ?',
  ctaDesc: 'Đăng ký nhận tư vấn khóa học ngắn hạn và ưu đãi học phí tại FPT Arena Multimedia',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/fptarenaofficial',
  formProps: {
    programName: 'FPT Arena Khóa Ngắn Hạn (100 Giờ)',
    brand: 'arena',
    headerTitle: 'NHẬN THÔNG TIN TƯ VẤN\nKHÓA HỌC NGẮN HẠN 100H & HỌC BỔNG\nTẠI FPT ARENA MULTIMEDIA',
    formTitle: 'BẠN CÓ MUỐN BỨT PHÁ\nKỸ NĂNG MULTIMEDIA CẤP TỐC?',
    formSubtitle: 'Đăng ký nhận tư vấn lộ trình 100 giờ thực chiến và ưu đãi mới nhất',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    courseLabel: 'Bạn đang quan tâm khoá học ngắn hạn nào tại FPT Arena Multimedia',
    badges: [
      { value: '1.5-2M', unit: 'Ưu đãi', title: 'Học bổng "Tân binh sáng tạo"', desc: 'Ưu đãi giảm trực tiếp 1.500.000 VNĐ tại cơ sở Đà Nẵng, 2.000.000 VNĐ tại cơ sở Hà Nội' },
      { value: 'VIP', unit: 'Đặc Quyền', title: 'Đặc quyền VIP', desc: 'Tặng miễn phí tài khoản Coursera + Udemy truy cập không giới hạn' },
      { value: '0đ', unit: 'Công Cụ', title: 'Zero chi phí công cụ', desc: 'Thực chiến 100% bằng công cụ miễn phí, không phát sinh chi phí phần mềm' }
    ],
    courseOptions: [
      'Thiết Kế\nThương Hiệu - Thương Mại (100h)',
      'Thiết Kế App/Web UI/UX (100h)',
      'Làm Video/Clip Sáng Tạo (100h)',
      'Thiết Kế Cho Game & 3D (100h)'
    ]
  }
};

// =========================================================================
// 8. FPT SKILLKING - 18 THÁNG
// =========================================================================
export const COURSE_SKILLKING_18THANG = {
  brandKey: 'skillking',
  themeColor: '#09529c',
  bgWatermark: '18 THÁNG',
  brandBadge: 'FPT SKILLKING — 18 THÁNG',
  title: 'Fullstack Digital Marketing\nWith AI (18 Tháng)',
  subtitle: 'Đào tạo Chuyên gia Digital Marketing Fullstack tích hợp AI chuẩn Quốc tế',
  description: [
    'Khóa đào tạo Full-stack Digital Marketing tại FPT Skillking cung cấp cho học viên kiến thức thực hành và tất cả kỹ năng cần có về Digital Marketing theo chuẩn Ấn Độ kết hợp AI tiên tiến nhất.',
    'Chương trình kéo dài 18 tháng gồm 3 học kỳ chuyên sâu tạo nền tảng chắc chắn từ vị trí thực tập sinh đến chuyên viên Marketing số toàn diện.'
  ],
  heroStats: [
    { value: '18 Tháng', label: '3 học kỳ chuyên sâu đưa bạn trở thành Marketer toàn diện.' },
    { value: 'Ứng dụng AI', label: 'Ứng dụng AI tăng gấp 5 lần hiệu suất sáng tạo và tối ưu chiến dịch.' },
    { value: 'Bằng Quốc Tế', label: 'Cấp bằng Advanced Diploma in Digital Marketing chuẩn quốc tế.' }
  ],
  bannerImage: {
    src: '/banner_skillking_sub_v2.png',
    alt: 'Tuyển sinh FPT Skillking 18 tháng',
    width: 1200,
    height: 400
  },
  overviewStats: {
    cards: [
      { icon: 'clock', value: '18 Tháng', label: 'Thời gian đào tạo tinh gọn' },
      { icon: 'sparkles', value: '100%', label: 'Tích hợp công cụ AI mới nhất' },
      { icon: 'trophy', value: '03', label: 'Đồ án thực chiến doanh nghiệp' },
      { icon: 'briefcase', value: 'Top 1', label: 'Cam kết hỗ trợ việc làm FPT+' }
    ]
  },
  curriculumType: 'semesters',
  curriculumEyebrow: 'NỘI DUNG ĐÀO TẠO',
  curriculumTitle: 'Chi tiết 3 học kỳ chuyên sâu',
  semesters: [
    {
      num: 'Học kỳ 01',
      shortTitle: 'Social Media Executive',
      fullTitle: 'Social Media Executive - Sáng tạo & hiệu suất Social Media',
      subTitle: 'Nền tảng Marketing, Tư duy Social Media & AI Content',
      desc: 'Sinh viên được cung cấp kiến thức nền tảng về marketing và tư duy về Social Media. Tạo ra và đánh giá các chiến lược tiếp thị kỹ thuật số toàn diện.',
      coreStack: ['Elements of Digital Marketing', 'Market Research using AI', 'Design for Digital Marketing', 'Content Marketing using AI', 'Social Media Marketing', 'Affiliate Marketing', 'Project – AI-Powered Social Strategy'],
      careers: ['Content Marketing Executive', 'Social Media Executive', 'Content Creator', 'Digital Marketing Assistant', 'AI Content Specialist']
    },
    {
      num: 'Học kỳ 02',
      shortTitle: 'Digital Performance',
      fullTitle: 'Digital Performance Executive - Search Marketing & Phân tích dữ liệu',
      subTitle: 'Quảng cáo trả phí Meta/Google, SEO Onpage/Offpage & GA4',
      desc: 'Học viên quản lý chiến dịch quảng cáo Google hiệu quả, tối ưu hóa website nâng cao thứ hạng tìm kiếm và phân tích dữ liệu trên GA4 và Looker Studio.',
      coreStack: ['Performance Marketing', 'Website Building with AI', 'SEO Onpage & Offpage', 'Google Analytics & Looker Studio', 'SEM using AI', 'Project – Search Growth & Analytics'],
      careers: ['SEO Specialist', 'SEM Specialist', 'Website Manager', 'Data Analyst', 'Performance Marketing Executive']
    },
    {
      num: 'Học kỳ 03',
      shortTitle: 'Full Stack Digital Marketing/ Multi-Channel Marketing Strategy',
      fullTitle: 'Full Stack Digital Marketing/ Multi-Channel Marketing Strategy/ Multi-Channel Marketing Strategy',
      subTitle: 'Chiến lược thương hiệu, CRM, E-Commerce & IMC tổng thể',
      desc: 'Hoàn thiện chân dung Full-stack Digital Marketing với kiến thức định vị thương hiệu, vận hành sàn TMĐT, CRM tự động hóa và kế hoạch IMC đa kênh.',
      coreStack: ['Branding & Positioning', 'CRM Automation', 'Email Marketing with AI', 'Omnichannel and IMC', 'E-Commerce Marketing', 'Project – Multi-Channel Strategy'],
      careers: ['Full-stack Digital Marketer', 'Multi-Channel Strategist', 'E-Commerce Marketing Manager', 'IMC Planner', 'AI Marketing Specialist']
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao học Digital Marketing nên chọn FPT Skillking?',
    desc: 'Hệ thống đào tạo Digital Marketing quốc tế đầu tiên tại Việt Nam.',
    items: [
      { icon: 'shield', title: 'Bằng cấp quốc tế Advanced Diploma', desc: 'Có giá trị toàn cầu, mở rộng cơ hội làm việc tại các tập đoàn đa quốc gia.' },
      { icon: 'brain', title: 'Giáo trình chuẩn quốc tế tích hợp AI', desc: 'Cập nhật liên tục các công cụ GenAI tối ưu quy trình marketing.' },
      { icon: 'briefcase', title: 'Kết nối hỗ trợ việc làm FPT+', desc: 'Mạng lưới hàng trăm doanh nghiệp và agency marketing hàng đầu.' },
      { icon: 'star', title: 'Tiên phong đào tạo Digital Marketing (vị trí số 1)', desc: 'Đơn vị đầu tiên tại Việt Nam đào tạo Fullstack Digital Marketing chuẩn Quốc Tế.' },
      { icon: 'users', title: 'Giảng viên chuyên gia thực chiến', desc: '100% giảng viên là CMO, Manager, Leader Marketing doanh nghiệp top đầu trực tiếp dẫn dắt.' },
      { icon: 'wrench', title: 'Phương pháp đào tạo LXP hiện đại', desc: 'Học qua dự án thực tế, thực hành trực tiếp trên ngân sách quảng cáo thật.' }
    ]
  },
  ctaTitle: 'Sẵn sàng làm chủ\nDigital Marketing với AI?',
  ctaDesc: 'Đăng ký nhận tư vấn lộ trình 18 tháng và học bổng mới nhất từ FPT Skillking',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/fptskillkingofficial',
  formProps: {
    programName: 'FPT Skillking - 18 Tháng',
    brand: 'skillking',
    campuses: ['Hà Nội', 'Đà Nẵng']
  }
};

// =========================================================================
// 9. FPT SKILLKING - KHÓA NGẮN HẠN (100 GIỜ)
// =========================================================================
export const COURSE_SKILLKING_100H = {
  brandKey: 'skillking',
  themeColor: '#09529c',
  bgWatermark: '100 GIỜ',
  brandBadge: 'FPT SKILLKING — KHÓA NGẮN HẠN 100 GIỜ',
  title: 'Bộ Khóa Học Digital Marketing\nThực Chiến (100 Giờ)',
  description: [
    'Bạn không cần học một chương trình dài để làm được Digital Marketing. Tại Skillking, bạn có thể chọn từng khóa ngắn theo đúng nhu cầu, mỗi khóa tập trung vào 1 kỹ năng cốt lõi và có đầu ra nghề nghiệp rõ ràng.',
    'Bộ khoá học ngắn hạn đào tạo Digital Marketing tích hợp AI mới nhất từ FPT Skillking: Vững chắc sự nghiệp – Làm chủ công nghệ – Tự tin vào ngành.'
  ],
  heroStats: [
    { value: '100 Giờ', label: 'Tập trung 100% vào kỹ năng thực chiến ra số, tối ưu chi phí quảng cáo.' },
    { value: 'Thực Hành', label: 'Trực tiếp vận hành chiến dịch trên Google Ads, Meta Ads và TikTok Ads.' },
    { value: 'Chứng Chỉ', label: 'Cấp chứng nhận hoàn thành khóa đào tạo chuyên đề từ FPT Skillking.' }
  ],
  bannerImage: {
    src: '/banner_skillking_sub_v2.png',
    alt: 'Tuyển sinh FPT Skillking 100h',
    width: 1200,
    height: 400
  },
  curriculumType: 'shortCourses',
  curriculumEyebrow: 'CHƯƠNG TRÌNH THỰC CHIẾN',
  curriculumTitle: 'Chương trình học ngắn hạn Digital Marketing tại FPT Skillking',
  curriculumSubtitle: 'Giải pháp tối ưu cho chủ shop kinh doanh, người làm marketing và các bạn trẻ muốn có việc làm ngay.',
  shortCourses: [
    {
      badge: 'Khoá 1',
      icon: 'trendingup',
      title: 'Social Media Creator & Ads Performance',
      desc: 'Xây dựng quy trình content social đa nền tảng, thiết lập và tối ưu chiến dịch quảng cáo Meta / TikTok.',
      subjects: [
        'AI Copywriting & Storytelling',
        'AI Visual Design for Marketers',
        'Social Media Operations',
        'Capstone Project – Performance Ads'
      ],
      output: 'Bộ creative template, ngân hàng nội dung và kế hoạch tối ưu chiến dịch Meta & TikTok Ads.'
    },
    {
      badge: 'Khoá 2',
      icon: 'search',
      title: 'Google Mastery: SEO & Google Ads',
      desc: 'Chiến lược tăng trưởng thứ hạng tìm kiếm đo lường được thông qua SEO chuyên sâu và Google Ads.',
      subjects: [
        'AI Website & Landing Page Builder',
        'SEO Mastery & Keyword Mapping',
        'Google Ads & SEM using AI',
        'Capstone Project – Search Growth'
      ],
      output: 'Hệ thống Website/Landing Page, bộ từ khóa SEO và cấu trúc chiến dịch Google Ads hoàn chỉnh.'
    },
    {
      badge: 'Khoá 3',
      icon: 'video',
      title: 'S-Commerce & TikTok Shop Mastery',
      desc: 'Xây dựng hệ thống thương mại điện tử mạng xã hội hoàn chỉnh từ nghiên cứu sản phẩm đến chuyển đổi.',
      subjects: [
        'Winning Product Research & Setup',
        'Practical E-Commerce Operations',
        'Boosting Sales with PACE Model',
        'TikTok Livestream & Conversion'
      ],
      output: 'Gian hàng chuẩn SEO, trang sản phẩm tối ưu, kế hoạch livestream và kịch bản tăng trưởng doanh số.'
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao nên chọn khóa học 100 giờ tại FPT Skillking?',
    desc: 'Giải pháp thực chiến ngắn gọn giúp bứt phá doanh số nhanh chóng.',
    items: [
      { icon: 'clock', title: '100 giờ thực chiến cấp tốc', desc: 'Rút gọn lộ trình, học đúng trọng tâm kỹ năng thị trường đang cần.' },
      { icon: 'shield', title: 'Hỗ trợ trả góp học phí 0%', desc: 'Thủ tục nhanh gọn, giảm gánh nặng tài chính cho người học.' },
      { icon: 'wrench', title: 'Cầm tay chỉ việc 1-1', desc: 'Thực hành trực tiếp trên tài khoản quảng cáo và sản phẩm thật.' },
      { icon: 'award', title: 'Chứng nhận uy tín từ FPT Skillking', desc: 'Bảo chứng năng lực thực chiến trước nhà tuyển dụng.' }
    ]
  },
  ctaTitle: 'Sẵn sàng bứt phá doanh số với Digital Marketing 100h?',
  ctaDesc: 'Đăng ký nhận tư vấn lộ trình 100 giờ thực chiến và ưu đãi mới nhất từ FPT Skillking',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/fptskillkingofficial',
  formProps: {
    programName: 'FPT Skillking Khóa Ngắn Hạn (100 Giờ)',
    brand: 'skillking',
    headerTitle: 'NHẬN THÔNG TIN TƯ VẤN KHÓA HỌC NGẮN HẠN 100H & HỌC BỔNG TẠI FPT SKILLKING',
    formTitle: 'BẠN CÓ MUỐN BỨT PHÁ KỸ NĂNG DIGITAL MARKETING CẤP TỐC?',
    formSubtitle: 'Đăng ký nhận tư vấn lộ trình 100 giờ thực chiến và ưu đãi mới nhất',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    courseLabel: 'Bạn đang quan tâm khoá học ngắn hạn nào tại FPT Skillking',
    badges: [
      { value: '1.5', unit: 'Triệu', title: 'Học bổng Short Course', desc: 'Ưu đãi trừ thẳng vào học phí' },
      { value: 'VIP', unit: 'Đặc Quyền', title: 'Đặc quyền VIP tặng Miễn phí tài khoản Coursera + Udemy', desc: 'Truy cập kho học liệu quốc tế không giới hạn trị giá hàng nghìn USD' }
    ],
    courseOptions: [
      'Social Media Creator & Ads Performance',
      'Google Mastery: SEO & Google Ads',
      'S-Commerce & TikTok Shop Mastery'
    ]
  }
};

// =========================================================================
// 10. FPT JETKING - CHIP DESIGN (2 NĂM)
// =========================================================================
export const COURSE_CHIP_DESIGN = {
  brandKey: 'chip-design',
  themeColor: '#dc2626',
  bgWatermark: 'SEMICONDUCTOR',
  brandBadge: 'FPT JETKING — CHIP DESIGN 2026',
  brandLogo: '/logo_jetking.png',
  title: 'Thiết Kế Vi Mạch Bán Dẫn\nQuốc Tế (2 Năm)',
  subtitle: 'Chương trình đào tạo Kỹ sư Thiết kế Vi mạch Bán dẫn tích hợp AI đầu tiên tại Việt Nam',
  description: [
    'Chương trình Kỹ sư Thiết kế Vi mạch Bán dẫn Quốc tế tại FPT Jetking được thiết kế nhằm đón đầu chiến lược phát triển công nghiệp bán dẫn quốc gia.',
    'Sinh viên được đào tạo bài bản trong 2 năm từ nguyên lý vật lý bán dẫn, ngôn ngữ mô tả phần cứng Verilog/SystemVerilog đến thực hành thiết kế vật lý trên bộ công cụ EDA bản quyền tiêu chuẩn công nghiệp của Synopsys và Cadence.'
  ],
  heroStats: [
    { value: '2 Năm', label: 'Đào tạo chuyên sâu theo chuẩn công nghiệp bán dẫn quốc tế.' },
    { value: 'HDSE', label: 'Higher Diploma in Semiconductor Engineering cấp bởi Jetking Ấn Độ.' },
    { value: 'Synopsys & Cadence', label: 'Thực hành 100% trên bộ công cụ EDA bản quyền hàng đầu thế giới.' }
  ],
  bannerImage: {
    src: '/banner_chip_design_sub_v2.png',
    alt: 'Tuyển sinh Thiết kế Vi mạch Bán dẫn FPT Jetking',
    width: 1200,
    height: 420
  },
  overviewStats: {
    cards: [
      { icon: 'cpu', value: '4', label: 'Học kỳ chuyên sâu' },
      { icon: 'clock', value: '2 Năm', label: 'Thời gian đào tạo' },
      { icon: 'award', value: 'HDSE', label: 'Bằng quốc tế giá trị toàn cầu' },
      { icon: 'layers', value: '100%', label: 'Thực hành EDA Synopsys & Cadence' }
    ]
  },
  curriculumType: 'semesters',
  curriculumEyebrow: 'NỘI DUNG ĐÀO TẠO',
  curriculumTitle: 'Chi tiết 4 học kỳ chuyên sâu',
  semesters: [
    {
      num: 'HỌC KỲ 01',
      shortTitle: 'Programming & Electronic Circuits',
      fullTitle: 'Programming Elements and Electronic Circuits',
      subTitle: 'Mạch điện tử và lập trình vi điều khiển',
      desc: 'Nền tảng lập trình C/C++, phân tích mạch tương tự và số, lập trình vi điều khiển ARM Cortex tích hợp AI-driven design cơ bản.',
      coreStack: ['C/C++ Programming Fundamentals', 'Electronics Fundamentals & Circuit Analysis', 'Semiconductor Physics & Digital Logic', 'Microcontroller Programming', 'Projects'],
      aiTools: ['AI Driven Digital Logic Module', 'C/C++ Embedded AI Assistants', 'Circuit Simulation Tools'],
      careers: ['Chuyên viên lập trình điều khiển tự động hóa', 'Chuyên viên lập trình nhúng']
    },
    {
      num: 'HỌC KỲ 02',
      shortTitle: 'Chip Architecture Framework',
      fullTitle: 'Chip Architecture Framework',
      subTitle: 'Kiến trúc và qui trình thiết kế vi mạch',
      desc: 'Hiểu rõ kiến trúc bộ vi xử lý RISC-V, hệ thống truyền thông mạch, quy trình chuyển đổi ý tưởng sang thông số kỹ thuật vi mạch (SPEC).',
      coreStack: ['Communication Systems & Linear Circuits', 'Analog, Digital Design & Architecture', 'Familiarizing with chip industry & IC design', 'Digital Circuit Design & FPGA', 'Projects'],
      aiTools: ['Apply AI in Chip Design (30 giờ)', 'SPEC Generation AI Tools', 'System Architecture Modeling'],
      careers: ['Chuyên viên phân tích và lập thiết kế vi mạch', 'Chuyên viên mô tả SPEC', 'Chuyên viên phân tích thiết kế']
    },
    {
      num: 'HỌC KỲ 03',
      shortTitle: 'HDL and EDA Tools',
      fullTitle: 'HDL and EDA Tools',
      subTitle: 'Mô tả phần cứng HDL và công cụ thiết kế vi mạch EDA',
      desc: 'Thực hành thiết kế mã RTL và Testbench kiểm thử với Verilog/VHDL, tổng hợp mạch và thiết kế vật lý trên công cụ EDA chuyên nghiệp.',
      coreStack: ['Data Structure & Algorithms', 'CAD Tools for IC Design', 'VLSI - Physical Design', 'Chip Verification and Emulator', 'Projects'],
      aiTools: ['Advanced AI in EDA Tools (30 giờ)', 'Synopsys Design Compiler AI', 'Calibre Physical Verification'],
      careers: ['Chuyên viên thiết kế RTL (RTL Designer)', 'Chuyên viên kiểm tra và sửa lỗi (Verifier)', 'Chuyên viên thiết kế vật lý (Physical Designer)']
    },
    {
      num: 'HỌC KỲ 04',
      shortTitle: 'Chip Design',
      fullTitle: 'Chip Design (SoC / ASIC / FPGA)',
      subTitle: 'Thiết kế vi mạch – SoC/ASIC/ FPGA',
      desc: 'Hiện thực hóa thiết kế vi mạch tích hợp bộ tăng tốc xử lý AI trên chip FPGA/ASIC, tối ưu hóa năng lượng và bảo vệ đồ án tốt nghiệp.',
      coreStack: ['Advanced Digital Design & FPGA based Design', 'AI-Accelerated Systems on SoC FPGA', 'Optimizing signal processing on FPGA', 'Power Management & Automation', 'Projects'],
      aiTools: ['AI/ML Engine in Chip Design', 'Cloud-accelerated EDA Synthesis', 'Edge AI Hardware Optimization'],
      careers: ['Chuyên viên thiết kế Chip ASIC', 'Chuyên viên thiết kế Chip FPGA', 'Kỹ sư kiểm thử vi mạch']
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao nên chọn Thiết kế Vi mạch tại FPT Jetking?',
    desc: 'Cái nôi đào tạo kỹ sư bán dẫn chất lượng cao chuẩn quốc tế.',
    items: [
      { icon: 'shield', title: 'Bằng cấp Higher Diploma quốc tế', desc: 'Bằng HDSE giá trị toàn cầu cấp bởi học viện Jetking Ấn Độ.' },
      { icon: 'cpu', title: 'Công cụ EDA bản quyền thế giới', desc: 'Thực hành trực tiếp trên Synopsys, Cadence - 2 chuẩn công nghiệp hàng đầu.' },
      { icon: 'briefcase', title: 'Cơ hội việc làm rộng mở', desc: 'Kết nối trực tiếp vào các tập đoàn vi mạch hàng đầu tại VN và khu vực.' },
      { icon: 'zap', title: 'Tích hợp AI xuyên suốt 4 kỳ', desc: 'Ứng dụng AI tối ưu hóa quy trình thiết kế và tăng tốc hiệu năng chip.' }
    ]
  },
  ctaTitle: 'Sẵn sàng trở thành Kỹ sư Thiết kế Vi mạch Bán dẫn Quốc tế?',
  ctaDesc: 'Đăng ký nhận tư vấn lộ trình học và thông tin học bổng mới nhất từ FPT Jetking',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/jetkingfpt',
  formProps: {
    programName: 'FPT Jetking Thiết Kế Vi Mạch Bán Dẫn',
    brand: 'chip-design',
    headerTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT JETKING CHIP DESIGN',
    formTitle: 'BẠN CÓ MUỐN TRỞ THÀNH KỸ SƯ THIẾT KẾ VI MẠCH BÁN DẪN?',
    formSubtitle: 'Đăng ký nhận tư vấn lộ trình Thiết kế Vi Mạch Bán Dẫn Quốc Tế 2 năm',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    badges: [
      { value: '8', unit: 'Triệu', title: 'Học bổng Kỹ sư Bán dẫn Tương lai', desc: 'Hỗ trợ sinh viên ngành kỹ thuật & công nghệ chuyển đổi' },
      { value: 'VIP', unit: 'Đặc Quyền', title: 'Đặc quyền VIP tặng Miễn phí tài khoản Coursera + Udemy', desc: 'Truy cập kho học liệu quốc tế không giới hạn trị giá hàng nghìn USD' }
    ]
  }
};

// =========================================================================
// 11. FPT JETKING - AI AGENT (6 THÁNG - 2 NĂM)
// =========================================================================
export const COURSE_AI_AGENT = {
  brandKey: 'ai-agent',
  themeColor: '#7c3aed',
  bgWatermark: 'AI AGENT',
  brandBadge: 'FPT JETKING — AI AGENT 2026',
  brandLogo: '/logo_jetking.png',
  title: 'Lập Trình AI Agent Chuyên Sâu\n(6 Tháng - 2 Năm)',
  subtitle: 'Đón đầu làn sóng Generative AI & Multi-Agent Systems tiên phong tại Việt Nam',
  description: [
    'Chương trình đào tạo Kỹ sư Lập trình AI Agent chuyên sâu tại FPT Jetking là chương trình tiên phong tại Việt Nam đào tạo bài bản về Generative AI, Large Language Models và các hệ thống Đa tác tử thông minh (Multi-AI Agent Swarm).',
    'Lộ trình linh hoạt 4 học kỳ với các điểm ra trường (Exit) sau 6, 12, 18 hoặc 24 tháng phù hợp với mục tiêu phát triển của từng học viên.'
  ],
  heroStats: [
    { value: '6–24 Tháng', label: '4 điểm exit linh hoạt: 6, 12, 18 hoặc 24 tháng theo nhu cầu.' },
    { value: 'Higher Diploma', label: 'Bằng cấp quốc tế AI Systems Engineering từ Jetking Ấn Độ.' },
    { value: 'Multi-Agent', label: 'Thực hành 100% trên các framework GenAI & Agent tự hành tiên tiến.' }
  ],
  bannerImage: {
    src: '/banner_ai_agent_sub_v2.png',
    alt: 'Tuyển sinh Lập trình AI Agent FPT Jetking',
    width: 1200,
    height: 420
  },
  overviewStats: {
    cards: [
      { icon: 'bot', value: '4', label: 'Học kỳ linh hoạt (Exit 6 - 24 tháng)' },
      { icon: 'clock', value: '6–24 Tháng', label: 'Thời gian đào tạo' },
      { icon: 'award', value: 'Higher Diploma', label: 'Chứng chỉ chuyên sâu / Bằng quốc tế' },
      { icon: 'brain', value: '100%', label: 'Dự án thực chiến AI Agent' }
    ]
  },
  curriculumType: 'semesters',
  curriculumEyebrow: 'NỘI DUNG ĐÀO TẠO',
  curriculumTitle: 'Chi tiết 4 học kỳ chuyên sâu',
  semesters: [
    {
      num: 'Học kỳ 01',
      shortTitle: 'Data Science & AI Agent',
      fullTitle: 'Foundations for Data Science, AI Agent & Machine Learning',
      subTitle: 'Nền tảng dữ liệu và tư duy AI Agent',
      desc: 'Sinh viên nắm vững kiến thức cơ bản về lập trình Python, toán học thống kê cho máy học và thực hành xây dựng AI Chatbot đầu tiên.',
      coreStack: ['AI Programming with Python', 'Math & Statistics for ML', 'Data Manipulation & Visualization', 'Fundamentals of AI Agents', 'Machine Learning Fundamentals'],
      aiTools: ['Xây dựng AI Chatbot hỗ trợ khách hàng doanh nghiệp', 'Python Data Science Libraries'],
      careers: ['Phân tích dữ liệu', 'Kỹ thuật viên xử lý dữ liệu', 'Lập trình viên Python sơ cấp', 'Lập trình AI Chatbot']
    },
    {
      num: 'Học kỳ 02',
      shortTitle: 'Analytics & Vision Agent',
      fullTitle: 'Advanced Analytics, AI Agent, and Business Intelligence',
      subTitle: 'Phân tích dữ liệu & AI Agent thị giác',
      desc: 'Nắm vững kiến trúc mạng nơ-ron sâu (Deep Learning), Computer Vision nhận diện hình ảnh/video thời gian thực và xây dựng mô hình dự báo.',
      coreStack: ['Databases and SQL for Data Science', 'Advanced Data Science Algorithms', 'Business Intelligence Analytics', 'AI Agents: Architecture & Applications', 'Computer Vision with Python', 'Advanced ML Methods'],
      aiTools: ['Computer Vision Agent Deployment', 'Ứng dụng dự đoán trong doanh nghiệp'],
      careers: ['Chuyên viên phân tích dữ liệu kinh doanh', 'Kỹ sư học máy sơ cấp', 'Chuyên viên phát triển mô hình dự báo', 'Chuyên viên tư vấn giải pháp AI']
    },
    {
      num: 'Học kỳ 03',
      shortTitle: 'AI Agent Systems & NLP',
      fullTitle: 'AI Agent systems, Deep Learning & Data Engineering',
      subTitle: 'AI Agent ngôn ngữ & Trí tuệ doanh nghiệp',
      desc: 'Xây dựng tác tử xử lý ngôn ngữ tự nhiên thông minh (NLP Agent), kiến trúc RAG (Retrieval-Augmented Generation) và dữ liệu lớn.',
      coreStack: ['Artificial Intelligence & Deep Learning', 'Intelligent Agents in NLP', 'Advanced Natural Language Processing', 'Time Series Analysis', 'Big Data Engineering'],
      aiTools: ['Ứng dụng NLP giải quyết bài toán kinh doanh thực tế', 'RAG Vector Database Pipeline'],
      careers: ['Kỹ sư xử lý ngôn ngữ tự nhiên (NLP)', 'Chuyên viên phát triển trợ lý ảo', 'Kỹ sư thiết kế câu lệnh (Prompt Engineer)', 'Kỹ sư dữ liệu lớn']
    },
    {
      num: 'Học kỳ 04',
      shortTitle: 'Multi-Agent Systems & GenAI',
      fullTitle: 'Advanced AI Agent Systems Techniques, Research',
      subTitle: 'Kiến trúc hệ thống & Vận hành hệ thống AI tự hành',
      desc: 'Thiết kế và triển khai hệ thống đa tác nhân tự hành (Multi-Agent Swarm), tinh chỉnh mô hình mã nguồn mở (LLM Fine-tuning) và đạo đức AI.',
      coreStack: ['Generative AI & Advanced Applications', 'Reinforcement Learning & AI Ethics', 'Research Methodology & Data Governance', 'AI Agents with LLMs', 'Multi-AI Agent Swarm Systems'],
      aiTools: ['Hệ thống AI Agent đa nhiệm hoạt động độc lập trên Cloud', 'LLM Fine-tuning Frameworks'],
      careers: ['Kiến trúc sư hệ thống AI Agent', 'Chuyên gia khoa học dữ liệu GenAI', 'Kỹ sư nghiên cứu hệ thống đa tác nhân', 'Chuyên viên triển khai AI Cloud']
    },
    {
      id: 'khoa-3',
      badge: 'KHOÁ 3 • WEB & AI MULTI-SKILL DEVELOPER',
      title: 'Web & AI Multi-skill Developer (200h)',
      durationHighlight: '200H',
      note: 'Lộ trình toàn diện kết hợp chuyên sâu cả Frontend và Backend, trang bị đầy đủ kỹ năng của một Full-Stack Web & AI Developer.',
      modules: [
        { stt: 1, subject: 'Phân tích Nghiệp vụ & Giao diện (BA & UI)', duration: '40 Giờ', role: 'BA / Frontend', content: 'Tổng hợp từ khóa 1: Thu thập yêu cầu, HTML5, CSS3, ReactJS và tích hợp AI.' },
        { stt: 2, subject: 'Lập trình Hướng đối tượng & CSDL', duration: '48 Giờ', role: 'Logic / DB', content: 'Java OOP, thiết kế và tối ưu hệ quản trị CSDL SQL Server & MongoDB.' },
        { stt: 3, subject: 'Xây dựng RESTful API & AI Backend', duration: '44 Giờ', role: 'Backend', content: 'Node.js, ExpressJS và ứng dụng OpenAI API / LangChain vào hệ thống.' },
        { stt: 4, subject: 'Kiểm thử Phần mềm (Manual & Automation)', duration: '28 Giờ', role: 'Tester', content: 'Kiểm thử tương thích, viết Testcase, Postman/Jest và xử lý ngoại lệ.' },
        { stt: 5, subject: 'Triển khai dự án (DevOps)', duration: '40 Giờ', role: 'DevOps', content: 'Thực hiện đồ án thực tế, đóng gói Docker, CI/CD và deploy lên Cloud.' }
      ]
    }
  ],
  whyChooseUs: {
    eyebrow: 'ĐẶC QUYỀN ĐÀO TẠO',
    title: 'Tại sao nên học AI Agent tại FPT Jetking?',
    desc: 'Chương trình đào tạo kỹ sư AI Agent chuyên sâu đầu tiên tại Việt Nam.',
    items: [
      { icon: 'shield', title: 'Bằng cấp Higher Diploma quốc tế', desc: 'Chứng chỉ nghề nghiệp toàn cầu từ Jetking Ấn Độ.' },
      { icon: 'bot', title: 'Thực hành Multi-Agent tiên phong', desc: 'Làm chủ các framework xây dựng mạng lưới AI tự hành mới nhất.' },
      { icon: 'briefcase', title: 'Cam kết hỗ trợ việc làm FPT+', desc: 'Kết nối mạng lưới các công ty thành viên tập đoàn FPT.' },
      { icon: 'zap', title: 'Lộ trình Exit 4 chặng linh hoạt', desc: 'Có thể đi làm sớm sau 6, 12 hoặc 18 tháng học tập.' }
    ]
  },
  ctaTitle: 'Sẵn sàng trở thành Kỹ sư Lập trình AI Agent Tiên phong?',
  ctaDesc: 'Đăng ký nhận tư vấn lộ trình học và thông tin học bổng mới nhất từ FPT Jetking',
  ctaButtonText: 'Tư vấn ngay qua Zalo',
  ctaButtonHref: 'https://zalo.me/jetkingfpt',
  formProps: {
    programName: 'FPT Jetking Chuyên Gia AI Agent',
    brand: 'ai-agent',
    headerTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT JETKING AI AGENT',
    formTitle: 'BẠN CÓ MUỐN TRỞ THÀNH KỸ SƯ AI AGENT TIÊN PHONG?',
    formSubtitle: 'Đăng ký nhận tư vấn lộ trình Lập trình Hệ thống AI Agent',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    badges: [
      { value: '8', unit: 'Triệu', title: 'Học bổng Tiên phong AI Agent', desc: 'Quỹ ươm mầm chuyên gia phát triển hệ sinh thái AI tự hành' },
      { value: 'VIP', unit: 'Đặc Quyền', title: 'Đặc quyền VIP tặng Miễn phí tài khoản Coursera + Udemy', desc: 'Truy cập kho học liệu quốc tế không giới hạn trị giá hàng nghìn USD' }
    ]
  }
};
