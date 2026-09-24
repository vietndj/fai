/**
 * src/data/programs.js
 * Single Source of Truth for 11 FAI Training Programs (2026)
 * Covers Aptech, Arena, Skillking, and Jetking brands.
 */

export * from './courses';

export const TRAINING_PROGRAMS_2026 = [
  {
    brand: 'FPT Aptech',
    brandId: 'aptech',
    programs: [
      'Lập trình Fullstack 2 năm - FPT Aptech',
      'Lập trình Back end 1 năm - FPT Aptech',
      'Lập trình Front end 6 tháng - FPT Aptech',
      'Bộ khóa học Lập trình ngắn hạn (100 - 200 giờ) - FPT Aptech',
    ]
  },
  {
    brand: 'FPT Arena Multimedia',
    brandId: 'arena',
    programs: [
      'Arena Multimedia Specialist Program (2 năm) - FPT Arena Multimedia',
      'Thiết kế 2D, 3D, Game và App (6–18 tháng) - FPT Arena Multimedia',
      'Bộ khóa học Multimedia ngắn hạn (100 giờ) - FPT Arena Multimedia',
    ]
  },
  {
    brand: 'FPT Skillking',
    brandId: 'skillking',
    programs: [
      'Fullstack Digital Marketing With AI (18 tháng) - FPT Skillking',
      'Bộ khóa học Digital Marketing ngắn hạn (100 giờ) - FPT Skillking',
    ]
  },
  {
    brand: 'FPT Jetking',
    brandId: 'jetking',
    programs: [
      'Thiết kế vi mạch bán dẫn quốc tế tích hợp AI (2 năm) - FPT Jetking',
      'Lập trình AI Agent (6 tháng - 2 năm) - FPT Jetking',
    ]
  }
];

// Danh mục chi tiết từng chương trình đào tạo phục vụ Megamenu, Switchers, CourseLayout và Dynamic Routing
export const programsByBrand = {
  aptech: {
    brandId: 'aptech',
    brandName: 'FPT Aptech',
    tagline: 'Đào tạo Lập trình viên Quốc tế',
    logo: '/logo_aptech.png',
    color: '#f37021',
    route: '/dao-tao/aptech',
    programs: [
      {
        id: 'aptech-accp',
        name: 'Lập trình Fullstack 2 năm',
        fullName: 'Lập trình Fullstack 2 năm - FPT Aptech',
        duration: '2 năm',
        slug: 'accp',
        route: '/dao-tao/aptech/accp',
        degree: 'Advanced Diploma in Software Engineering (ADSE)',
        description: 'Đào tạo Lập trình viên Quốc tế Full-stack tích hợp AI thực chiến từ Web, Python, Data/MLOps, Java Microservices đến Enterprise Capstone.',
        targetAudience: 'Học sinh THPT, sinh viên CNTT, người đi làm chuyển ngành công nghệ.',
        semesters: [
          {
            title: 'Học kỳ 1: Web Foundations & AI',
            desc: 'Nền tảng kiến trúc web hiện đại, UI/UX Responsive, JavaScript ES6+, AI Co-pilot hỗ trợ lập trình.'
          },
          {
            title: 'Học kỳ 2: Python, Data & MLOps',
            desc: 'Lập trình Python chuyên sâu, xử lý dữ liệu lớn, xây dựng pipeline Machine Learning và mô hình AI thực hành.'
          },
          {
            title: 'Học kỳ 3: Java Microservices & Mobile AI Flutter',
            desc: 'Kiến trúc hệ thống doanh nghiệp Microservices với Spring Boot, phát triển ứng dụng di động Flutter đa nền tảng.'
          },
          {
            title: 'Học kỳ 4: Enterprise Integration & Capstone Project',
            desc: 'Tích hợp giải pháp phần mềm doanh nghiệp phức hợp, DevOps CI/CD, đồ án tốt nghiệp thực tế bảo vệ trước hội đồng doanh nghiệp.'
          }
        ]
      },
      {
        id: 'aptech-1-nam',
        name: 'Lập trình Back end 1 năm',
        fullName: 'Lập trình Back end 1 năm - FPT Aptech',
        duration: '1 năm',
        slug: '1-nam',
        route: '/dao-tao/aptech/1-nam',
        degree: 'Diploma in Information Systems Management (DISM)',
        description: 'Đào tạo chuyên sâu kiến trúc Backend, CSDL SQL Server, Web Fullstack với React & PHP/Laravel, Desktop JavaFX, C# và Python/Node.js.',
        targetAudience: 'Sinh viên CNTT cần thực chiến, người muốn đi làm nhanh trong 12 tháng.',
        semesters: [
          {
            title: 'Học kỳ 1: Web Fullstack React & PHP Laravel',
            desc: 'Làm chủ giao diện ReactJS, cơ sở dữ liệu SQL Server và hệ thống dịch vụ backend hoàn chỉnh với PHP Laravel.'
          },
          {
            title: 'Học kỳ 2: Desktop & Enterprise Backend Engine',
            desc: 'Phát triển ứng dụng desktop JavaFX, C# .NET, lập trình dịch vụ microservices Node.js kết hợp Python AI API.'
          }
        ]
      },
      {
        id: 'aptech-6-thang',
        name: 'Lập trình Front end 6 tháng',
        fullName: 'Lập trình Front end 6 tháng - FPT Aptech',
        duration: '6 tháng',
        slug: '6-thang',
        route: '/dao-tao/aptech/6-thang',
        degree: 'Certificate of Proficiency in Information Systems Management (CPISM)',
        description: 'Lộ trình tinh gọn 70% thực hành làm chủ UI/UX Figma, ReactJS hiện đại, kết nối SQL Server, Backend PHP Laravel và kiểm thử với ChatGPT/Copilot.',
        targetAudience: 'Người mới bắt đầu, người chuyển nghề cấp tốc, người cần có việc làm sau 6 tháng.',
        semesters: [
          {
            title: 'Giai đoạn 1: UI/UX & Responsive Web Foundations',
            desc: 'HTML5, CSS3, JavaScript ES6+, tư duy bố cục thiết kế Figma, xây dựng giao diện tương thích đa thiết bị.'
          },
          {
            title: 'Giai đoạn 2: Modern Frontend Framework & AI Automation',
            desc: 'Phát triển ứng dụng web tương tác cao với ReactJS, tích hợp RESTful API, tối ưu hóa hiệu năng và kiểm thử với trợ lý AI.'
          }
        ]
      },
      {
        id: 'aptech-100-200h',
        name: 'Bộ khóa học Lập trình ngắn hạn (100 - 200 giờ)',
        fullName: 'Bộ khóa học Lập trình ngắn hạn (100 - 200 giờ) - FPT Aptech',
        duration: '100 - 200 giờ',
        slug: '100-200h',
        route: '/dao-tao/aptech/100-200h',
        degree: 'Chứng chỉ chuyên môn FPT Aptech',
        description: 'Module hóa linh hoạt đa kỹ năng (BA, Frontend, Backend, Automation Tester, DevOps) tích hợp AI để giải quyết nhanh lỗ hổng kỹ năng doanh nghiệp.',
        targetAudience: 'Lập trình viên bổ sung kỹ năng, QA/Tester học tự động hóa, người chuyển việc cấp tốc.',
        semesters: [
          {
            title: 'Module Chuyên sâu 100h: Frontend & UI Mastery',
            desc: 'Tập trung chuyên biệt ReactJS/NextJS thực chiến, Business Analysis cơ bản và kiểm thử tự động.'
          },
          {
            title: 'Module Chuyên sâu 100h: Backend & AI Integration',
            desc: 'Lập trình API Node.js/Python, cơ sở dữ liệu MongoDB/PostgreSQL, đóng gói Docker và kết nối AI API.'
          }
        ]
      }
    ]
  },
  arena: {
    brandId: 'arena',
    brandName: 'FPT Arena Multimedia',
    tagline: 'Mỹ thuật Đa phương tiện & Kỹ xảo Đồ họa',
    logo: '/logo_arena.png',
    color: '#ffb600',
    route: '/dao-tao/arena',
    programs: [
      {
        id: 'arena-amsp',
        name: 'Arena Multimedia Specialist Program (2 năm)',
        fullName: 'Arena Multimedia Specialist Program (2 năm) - FPT Arena Multimedia',
        duration: '2 năm',
        slug: 'amsp',
        route: '/dao-tao/arena/amsp',
        degree: 'Advanced Diploma in Multimedia (ADIM)',
        description: 'Đào tạo Chuyên gia Mỹ thuật Đa phương tiện chuẩn quốc tế: Thiết kế đồ họa 2D, Làm phim KTS, Hoạt hình 3D VFX và Game 3D Real-time trên Unreal Engine 5.',
        targetAudience: 'Học sinh tốt nghiệp THPT, người đam mê sáng tạo, designer muốn chuẩn hóa bằng quốc tế.',
        semesters: [
          {
            title: 'Học kỳ 1: Graphic Design & Digital Branding',
            desc: 'Nguyên lý thị giác, typography, màu sắc, nhận diện thương hiệu, xử lý ảnh Photoshop, minh họa Illustrator và dàn trang InDesign.'
          },
          {
            title: 'Học kỳ 2: Digital Filmmaking & 3D Game Asset',
            desc: 'Kỹ thuật quay dựng phim kỹ thuật số, kịch bản phân cảnh, Premiere Pro, hiệu ứng After Effects, tạo hình asset 3D cơ bản.'
          },
          {
            title: 'Học kỳ 3: Advanced 3D Animation & VFX Compositing',
            desc: 'Mô hình hóa nhân vật 3D chuyên sâu, rigging, diễn hoạt chuyển động với Maya/Blender và kỹ xảo điện ảnh VFX compositing.'
          },
          {
            title: 'Học kỳ 4: Real-Time 3D & Game Art Unreal Engine 5',
            desc: 'Thiết kế môi trường game thế giới mở, ánh sáng thời gian thực Lumen/Nanite trong Unreal Engine 5, đồ án hoàn chỉnh.'
          }
        ]
      },
      {
        id: 'arena-6-18-thang',
        name: 'Thiết kế 2D, 3D, Game và App (6–18 tháng)',
        fullName: 'Thiết kế 2D, 3D, Game và App (6–18 tháng) - FPT Arena Multimedia',
        duration: '6–18 tháng',
        slug: '6-18-thang',
        route: '/dao-tao/arena/6-18-thang',
        degree: 'Chứng chỉ Chuyên ngành FPT Arena',
        description: 'Lộ trình chuyên ngành mũi nhọn linh hoạt: Thiết kế Đồ họa 2D & UI/UX (6 tháng), Làm phim kỹ thuật số & VFX (12 tháng), hoặc Hoạt hình 3D & Game Design (18 tháng).',
        targetAudience: 'Người chuyển ngành cần đi làm nhanh theo từng mảng chuyên môn cụ thể.',
        semesters: [
          {
            title: 'Track 6 tháng: Thiết kế Đồ họa Thương mại & UI/UX',
            desc: 'Làm chủ bộ công cụ Adobe Creative Cloud và Figma thiết kế giao diện ứng dụng di động chuẩn người dùng.'
          },
          {
            title: 'Track 12 tháng: Kỹ thuật số, Quay dựng & Kỹ xảo VFX',
            desc: 'Quay phim chuyên nghiệp, xử lý hậu kỳ âm thanh, kỹ xảo điện ảnh và sản xuất video thương mại viral.'
          },
          {
            title: 'Track 18 tháng: Hoạt hình 3D & Thiết kế Game Art',
            desc: 'Dựng hình không gian 3 chiều, diễn hoạt cử động sống động và xuất bản nội dung tương tác game 3D.'
          }
        ]
      },
      {
        id: 'arena-100h',
        name: 'Bộ khóa học Multimedia ngắn hạn (100 giờ)',
        fullName: 'Bộ khóa học Multimedia ngắn hạn (100 giờ) - FPT Arena Multimedia',
        duration: '100 giờ',
        slug: '100h',
        route: '/dao-tao/arena/100h',
        degree: 'Chứng chỉ Chuyên đề FPT Arena',
        description: 'Đào tạo thực chiến 80% thực hành làm Project ngay từ ngày đầu, có ngay sản phẩm Portfolio để đi làm hoặc nhận dự án Freelance.',
        targetAudience: 'Content creators, chủ shop kinh doanh, sinh viên marketing cần kỹ năng thiết kế/video nhanh.',
        semesters: [
          {
            title: 'Chuyên đề 100h Thực hành Studio',
            desc: 'Huấn luyện 1-kèm-1 theo dự án thực tế, hoàn thiện sản phẩm thương mại ngay trong khóa học.'
          }
        ]
      }
    ]
  },
  skillking: {
    brandId: 'skillking',
    brandName: 'FPT Skillking',
    tagline: 'Digital Marketing Thực chiến với AI',
    logo: '/logo_skillking.png',
    color: '#09529c',
    route: '/dao-tao/skillking',
    programs: [
      {
        id: 'skillking-18-thang',
        name: 'Fullstack Digital Marketing With AI (18 tháng)',
        fullName: 'Fullstack Digital Marketing With AI (18 tháng) - FPT Skillking',
        duration: '18 tháng',
        slug: '18-thang',
        route: '/dao-tao/skillking/18-thang',
        degree: 'Advanced Diploma in Digital Marketing',
        description: 'Khóa học Digital Marketing toàn diện số 1 VN theo chuẩn Ấn Độ kết hợp AI: Social Media, Performance Ads, SEO/SEM, Data Studio, CRM, E-Commerce và IMC đa kênh.',
        targetAudience: 'Sinh viên khối ngành kinh tế/marketing, người đi làm chuyển ngành, chủ doanh nghiệp.',
        semesters: [
          {
            title: 'Học kỳ 1: Social Media Executive & AI Content Creator',
            desc: 'Nghiên cứu thị trường, chân dung khách hàng, sáng tạo nội dung đa kênh với Generative AI, xây kênh TikTok, Facebook, YouTube.'
          },
          {
            title: 'Học kỳ 2: Digital Performance Executive & Growth Marketing',
            desc: 'Quảng cáo trả phí Meta Ads, Google Ads tối ưu chuyển đổi, SEO Onpage/Offpage lên top bền vững, phân tích dữ liệu Google Analytics 4.'
          },
          {
            title: 'Học kỳ 3: Full Stack Digital Marketer & Omnichannel Strategy',
            desc: 'Xây dựng chiến lược IMC tổng thể, tự động hóa Marketing Automation CRM, vận hành sàn thương mại điện tử và bảo vệ đồ án trước chuyên gia.'
          }
        ]
      },
      {
        id: 'skillking-100h',
        name: 'Bộ khóa học Digital Marketing ngắn hạn (100 giờ)',
        fullName: 'Bộ khóa học Digital Marketing ngắn hạn (100 giờ) - FPT Skillking',
        duration: '100 giờ',
        slug: '100h',
        route: '/dao-tao/skillking/100h',
        degree: 'Chứng chỉ Chuyên đề FPT Skillking',
        description: 'Khóa học ngắn hạn cấp tốc tập trung 100% vào kỹ năng thực chiến ra số, tối ưu chi phí quảng cáo và vận hành bán hàng đa kênh.',
        targetAudience: 'Chủ shop online, người kinh doanh thực chiến, nhân viên marketing cần tăng trưởng doanh thu.',
        semesters: [
          {
            title: 'Chuyên đề 100h Thực chiến ra đơn',
            desc: 'Thực hành trực tiếp trên tài khoản quảng cáo thật và shop bán hàng thật với sự hướng dẫn của chuyên gia digital.'
          }
        ]
      }
    ]
  },
  jetking: {
    brandId: 'jetking',
    brandName: 'FPT Jetking',
    tagline: 'Thiết kế Vi mạch Bán dẫn & AI Agent',
    logo: '/logo_jetking.png',
    color: '#dc2626',
    route: '/dao-tao/chip-design',
    programs: [
      {
        id: 'jetking-chip-design',
        name: 'Thiết kế vi mạch bán dẫn quốc tế tích hợp AI (2 năm)',
        fullName: 'Thiết kế vi mạch bán dẫn quốc tế tích hợp AI (2 năm) - FPT Jetking',
        duration: '2 năm',
        slug: 'chip-design',
        route: '/dao-tao/chip-design',
        degree: 'Higher Diploma in Semiconductor Engineering (HDSE)',
        description: 'Đào tạo Kỹ sư Thiết kế vi mạch bán dẫn quốc tế tích hợp AI, thực hành bản quyền công cụ EDA Synopsys & Cadence, thiết kế ASIC/SoC/FPGA.',
        targetAudience: 'Sinh viên ngành kỹ thuật (Điện tử, Tự động hóa, CNTT, Vật lý), người muốn vào ngành bán dẫn.',
        semesters: [
          {
            title: 'Học kỳ 1: Mạch điện tử & Lập trình vi điều khiển',
            desc: 'Nguyên lý bán dẫn, phân tích mạch tương tự & số, lập trình C nhúng trên vi điều khiển ARM Cortex.'
          },
          {
            title: 'Học kỳ 2: Kiến trúc & Quy trình thiết kế vi mạch',
            desc: 'Quy trình thiết kế VLSI, kiến trúc bộ vi xử lý RISC-V, ngôn ngữ mô tả phần cứng HDL Verilog/SystemVerilog.'
          },
          {
            title: 'Học kỳ 3: EDA Tools & Physical Design Synopsys/Cadence',
            desc: 'Thực hành mô phỏng logic, tổng hợp RTL, floorplanning, placement, clock tree synthesis (CTS) và routing trên công cụ EDA bản quyền.'
          },
          {
            title: 'Học kỳ 4: Thiết kế vi mạch SoC/ASIC/FPGA & AI Accelerator',
            desc: 'Hiện thực hóa kiến trúc phần cứng tăng tốc xử lý AI trên chip FPGA, xác minh kiểm thử vi mạch và đồ án tốt nghiệp chuẩn công nghiệp.'
          }
        ]
      },
      {
        id: 'jetking-ai-agent',
        name: 'Lập trình AI Agent (6 tháng - 2 năm)',
        fullName: 'Lập trình AI Agent (6 tháng - 2 năm) - FPT Jetking',
        duration: '6 tháng - 2 năm',
        slug: 'ai-agent',
        route: '/dao-tao/ai-agent',
        degree: 'Chứng chỉ Chuyên sâu / Higher Diploma AI Systems',
        description: 'Đào tạo Kỹ sư AI Agent chuyên sâu: Data Science, Machine Learning, Computer Vision, NLP, GenAI, Large Language Models và hệ thống Multi-AI Agent tự hành.',
        targetAudience: 'Lập trình viên đón đầu làn sóng Generative AI, người muốn phát triển trợ lý ảo và tự động hóa.',
        semesters: [
          {
            title: 'Học kỳ 1 (Exit 6 tháng): Foundations Data Science & AI Agent',
            desc: 'Nền tảng toán học cho AI, lập trình Python khoa học dữ liệu, xây dựng chatbot và tác tử thông minh cơ bản.'
          },
          {
            title: 'Học kỳ 2 (Exit 12 tháng): Advanced Analytics & Vision Agent',
            desc: 'Mô hình học sâu Deep Learning, Computer Vision nhận diện hình ảnh/video thời gian thực, triển khai mô hình Edge AI.'
          },
          {
            title: 'Học kỳ 3 (Exit 18 tháng): NLP Agent & Large Language Models',
            desc: 'Xử lý ngôn ngữ tự nhiên hiện đại, tinh chỉnh mô hình mã nguồn mở (Fine-tuning LLM), kiến trúc RAG (Retrieval-Augmented Generation).'
          },
          {
            title: 'Học kỳ 4 (Exit 24 tháng): Multi-Agent Systems & GenAI Ecosystem',
            desc: 'Xây dựng hệ thống đa tác tử tự hành (Multi-Agent Swarm), tự động hóa quy trình nghiệp vụ phức hợp và đồ án triển khai thực tế.'
          }
        ]
      }
    ]
  }
};

// Sub-course dropdown options cho các khóa chuyên sâu và ngắn hạn
export const aptechShortCourseOptions = [
  'Lập trình Java Fullstack cơ bản & nâng cao',
  'Lập trình Python phân tích dữ liệu & AI',
  'Lập trình Web Front-end với ReactJS & NextJS',
  'Lập trình Backend với Node.js & RESTful API',
  'Lập trình C/C++ & Cấu trúc dữ liệu giải thuật'
];

export const arenaSpecializationOptions = [
  'Thiết kế đồ họa thương mại (6 tháng)',
  'Thiết kế Web & Kỹ thuật số UI/UX (12 tháng)',
  'Làm phim kỹ thuật số & Hoạt hình 3D (18 tháng)',
  'Thiết kế Game & Hoạt hình 3D (18 tháng)'
];

export const arenaShortCourseOptions = [
  'Thiết Kế Thương Hiệu - Thương Mại (100h)',
  'Thiết Kế App/Web UI/UX (100h)',
  'Làm Video/Clip Sáng Tạo (100h)',
  'Thiết Kế Cho Game & 3D (100h)'
];

export const skillkingShortCourseOptions = [
  'Social Media Creator & Ads Performance',
  'Google Mastery: SEO & Google Ads',
  'S-Commerce & TikTok Shop Mastery'
];

// Switcher items chuẩn dùng trực tiếp cho các component Switcher
export const aptechSwitcherItems = [
  { label: 'Lập trình Fullstack 2 năm', href: '/dao-tao/aptech/accp', path: '/dao-tao/aptech/accp' },
  { label: 'Lập trình Back end 1 năm', href: '/dao-tao/aptech/1-nam', path: '/dao-tao/aptech/1-nam' },
  { label: 'Lập trình Front end 6 tháng', href: '/dao-tao/aptech/6-thang', path: '/dao-tao/aptech/6-thang' },
  { label: 'Bộ khóa học Lập trình ngắn hạn (100 - 200 giờ)', href: '/dao-tao/aptech/100-200h', path: '/dao-tao/aptech/100-200h' },
];

export const arenaSwitcherItems = [
  { label: 'Arena Multimedia Specialist (2 năm)', href: '/dao-tao/arena/amsp', path: '/dao-tao/arena/amsp' },
  { label: 'Thiết kế 2D, 3D, Game & App (6–18 tháng)', href: '/dao-tao/arena/6-18-thang', path: '/dao-tao/arena/6-18-thang' },
  { label: 'Bộ khóa học Multimedia ngắn hạn (100 giờ)', href: '/dao-tao/arena/100h', path: '/dao-tao/arena/100h' },
];

export const skillkingSwitcherItems = [
  { label: 'Fullstack Digital Marketing With AI (18 tháng)', href: '/dao-tao/skillking/18-thang', path: '/dao-tao/skillking/18-thang' },
  { label: 'Bộ khóa học Digital Marketing ngắn hạn (100 giờ)', href: '/dao-tao/skillking/100h', path: '/dao-tao/skillking/100h' },
];

export const jetkingSwitcherItems = [
  { label: 'Thiết kế Vi mạch Bán dẫn AI (2 năm)', href: '/dao-tao/chip-design', path: '/dao-tao/chip-design' },
  { label: 'Lập trình AI Agent (6 tháng - 2 năm)', href: '/dao-tao/ai-agent', path: '/dao-tao/ai-agent' },
];

// Flat list of all 11 programs
export const ALL_PROGRAMS = Object.values(programsByBrand).flatMap(b => b.programs);
