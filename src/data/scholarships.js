/**
 * src/data/scholarships.js
 * Quỹ học bổng và ưu đãi tuyển sinh 2026 theo 4 thương hiệu đào tạo FAI
 * (FPT Aptech, FPT Arena Multimedia, FPT Skillking, FPT Jetking)
 */

export const SCHOLARSHIP_BRANDS = {
  aptech: {
    id: 'aptech',
    name: 'FPT Aptech',
    tagline: 'Đào tạo Lập trình viên Quốc tế',
    themeColor: '#f37021',
    accentColor: '#d85d0d',
    accentBg: 'rgba(243, 112, 33, 0.08)',
    borderColor: 'rgba(243, 112, 33, 0.25)',
    gradientBg: 'linear-gradient(135deg, #f37021 0%, #d85d0d 100%)',
    campuses: ['Hà Nội'],
    items: [
      {
        id: 'aptech-tai-nang',
        title: 'Học bổng tài năng',
        value: '14',
        unit: 'Triệu',
        amount: '14.000.000 VNĐ',
        desc: 'Dành cho thí sinh có thành tích học tập xuất sắc hoặc thể hiện đam mê lập trình công nghệ vượt trội.',
        badge: 'HỌC BỔNG XUẤT SẮC',
        tags: ['C++', 'JAVA']
      },
      {
        id: 'aptech-nhap-hoc-som',
        title: 'Khuyến khích nhập học',
        value: '10',
        unit: 'Triệu',
        amount: '10.000.000 VNĐ',
        desc: 'Ưu đãi trừ trực tiếp vào học phí khi hoàn tất thủ tục nhập học sớm các đợt mở lớp mới năm 2026.',
        badge: 'NHẬP HỌC SỚM',
        tags: ['FULLSTACK', 'AI POWERED']
      },
      {
        id: 'aptech-chuyen-nganh',
        title: 'Ưu đãi chuyển ngành',
        value: '6',
        unit: 'Triệu',
        amount: '6.000.000 VNĐ',
        desc: 'Chính sách trợ lực đặc quyền dành riêng cho người đi làm và sinh viên chuyển hướng sang ngành Lập trình.',
        badge: 'DÀNH CHO NGƯỜI CHUYỂN NGÀNH',
        tags: ['PYTHON', 'DATABASE']
      },
      {
        id: 'aptech-tan-binh',
        title: 'Học bổng "Tân binh sáng tạo"',
        value: '2',
        unit: 'Triệu',
        amount: '2.000.000 VNĐ',
        desc: 'Quỹ hỗ trợ tân sinh viên gia nhập các chuyên ngành Lập trình Fullstack và Backend.',
        badge: 'QUỸ TÂN BINH',
        tags: ['TÂN SINH VIÊN']
      }
    ]
  },
  arena: {
    id: 'arena',
    name: 'FPT Arena Multimedia',
    tagline: 'Mỹ thuật Đa phương tiện & Kỹ xảo Đồ họa',
    themeColor: '#ffb600',
    accentColor: '#f59e0b',
    accentBg: 'rgba(255, 182, 0, 0.1)',
    borderColor: 'rgba(255, 182, 0, 0.3)',
    gradientBg: 'linear-gradient(135deg, #ffb600 0%, #d97706 100%)',
    btnTextColor: '#000000',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    items: [
      {
        id: 'arena-tai-nang',
        title: 'Học bổng tài năng',
        value: '14',
        unit: 'Triệu',
        amount: '14.000.000 VNĐ',
        desc: 'Dành cho thí sinh có năng khiếu mỹ thuật, đồ họa, video hoặc portfolio sáng tạo nổi bật.',
        badge: 'HỌC BỔNG XUẤT SẮC'
      },
      {
        id: 'arena-nhap-hoc-som',
        title: 'Khuyến khích nhập học',
        value: '10',
        unit: 'Triệu',
        amount: '10.000.000 VNĐ',
        desc: 'Ưu đãi trừ trực tiếp vào học phí khi hoàn tất thủ tục đăng ký sớm trong kỳ tuyển sinh.',
        badge: 'NHẬP HỌC SỚM'
      },
      {
        id: 'arena-chuyen-nganh',
        title: 'Ưu đãi chuyển ngành',
        value: '6',
        unit: 'Triệu',
        amount: '6.000.000 VNĐ',
        desc: 'Dành riêng cho người đi làm muốn đổi việc, theo đuổi đam mê thiết kế Multimedia, 2D/3D & Game.',
        badge: 'DÀNH CHO NGƯỜI CHUYỂN NGÀNH'
      },
      {
        id: 'arena-tan-binh',
        title: 'Học bổng "Tân binh sáng tạo"',
        value: '1.5 - 2',
        unit: 'Triệu',
        amount: '1.500.000 – 2.000.000 VNĐ',
        desc: 'Khuyến khích tân sinh viên hoàn tất hồ sơ sớm vào các chuyên ngành Mỹ thuật số.',
        badge: 'QUỸ TÂN BINH'
      }
    ]
  },
  skillking: {
    id: 'skillking',
    name: 'FPT Skillking',
    tagline: 'Digital Marketing Thực chiến với AI',
    themeColor: '#09529c',
    accentColor: '#0284c7',
    accentBg: 'rgba(9, 82, 156, 0.08)',
    borderColor: 'rgba(9, 82, 156, 0.25)',
    gradientBg: 'linear-gradient(135deg, #09529c 0%, #0284c7 100%)',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    items: [
      {
        id: 'skillking-tai-nang',
        title: 'Học bổng tài năng',
        value: '14',
        unit: 'Triệu',
        amount: '14.000.000 VNĐ',
        desc: 'Dành cho thí sinh đam mê Digital Marketing và có tư duy kinh doanh trực tuyến đột phá cùng AI.',
        badge: 'HỌC BỔNG XUẤT SẮC'
      },
      {
        id: 'skillking-nhap-hoc-som',
        title: 'Khuyến khích nhập học',
        value: '10',
        unit: 'Triệu',
        amount: '10.000.000 VNĐ',
        desc: 'Ưu đãi trừ trực tiếp vào học phí cho các suất đăng ký nhập học sớm trong các đợt khai giảng.',
        badge: 'NHẬP HỌC SỚM'
      },
      {
        id: 'skillking-chuyen-nganh',
        title: 'Ưu đãi chuyển ngành',
        value: '6',
        unit: 'Triệu',
        amount: '6.000.000 VNĐ',
        desc: 'Hỗ trợ chuyển đổi sự nghiệp toàn diện sang Tiếp thị số đa kênh tích hợp trí tuệ nhân tạo.',
        badge: 'DÀNH CHO NGƯỜI CHUYỂN NGÀNH'
      },
      {
        id: 'skillking-tan-binh',
        title: 'Học bổng "Tân binh sáng tạo"',
        value: '1.5 - 2',
        unit: 'Triệu',
        amount: '1.500.000 – 2.000.000 VNĐ',
        desc: 'Quỹ tài trợ tân binh đăng ký khóa Fullstack Digital Marketing With AI.',
        badge: 'QUỸ TÂN BINH'
      }
    ]
  },
  jetking: {
    id: 'jetking',
    name: 'FPT Jetking',
    tagline: 'Thiết kế Vi mạch Bán dẫn & AI Agent',
    themeColor: '#dc2626',
    accentColor: '#b91c1c',
    accentBg: 'rgba(220, 38, 38, 0.08)',
    borderColor: 'rgba(220, 38, 38, 0.25)',
    gradientBg: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    items: [
      {
        id: 'jetking-chip-design',
        title: 'Học bổng tài năng Chip Design',
        value: '8',
        unit: 'Triệu',
        amount: '8.000.000 VNĐ',
        desc: 'Dành cho học viên theo học ngành Thiết kế vi mạch bán dẫn quốc tế tích hợp AI 2 năm.',
        badge: 'CHIP DESIGN QUỐC TẾ'
      },
      {
        id: 'jetking-ai-agent',
        title: 'Học bổng tài năng AI Agent',
        value: '8',
        unit: 'Triệu',
        amount: '8.000.000 VNĐ',
        desc: 'Dành cho học viên theo học ngành Lập trình AI Agent chuyên sâu đón đầu làn sóng Generative AI.',
        badge: 'AI AGENT TIÊN PHONG'
      }
    ]
  }
};

// Preset cấu hình cho Form Section (ScholarshipFormSection)
export const BRAND_FORM_PRESETS = {
  aptech: {
    ...SCHOLARSHIP_BRANDS.aptech,
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN\nVỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026\nTẠI FPT APTECH',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH\nLẬP TRÌNH VIÊN QUỐC TẾ?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình học & học bổng 2026',
    campuses: ['Hà Nội'],
    badges: [
      {
        value: '14',
        unit: 'Triệu',
        title: 'Học bổng Tài năng Lập trình viên',
        desc: 'Dành cho thí sinh đạt kết quả cao trong kỳ thi đánh giá năng lực',
        tags: ['C++', 'JAVA']
      },
      {
        value: '10',
        unit: 'Triệu',
        title: 'Khuyến khích Nhập học sớm',
        desc: 'Ưu đãi dành cho học viên hoàn tất thủ tục nhập học sớm 2026',
        tags: ['FULLSTACK', 'AI POWERED']
      },
      {
        value: '6',
        unit: 'Triệu',
        title: 'Ưu đãi Chuyển ngành Công nghệ',
        desc: 'Dành riêng cho sinh viên ngoài ngành muốn học nghề lập trình',
        tags: ['PYTHON', 'DATABASE']
      }
    ]
  },
  arena: {
    ...SCHOLARSHIP_BRANDS.arena,
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT ARENA',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH CHUYÊN GIA MULTIMEDIA?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình Mỹ thuật đa phương tiện Quốc tế',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    badges: [
      {
        value: '14',
        unit: 'Triệu',
        title: 'Học bổng tài năng',
        desc: 'Quỹ học bổng dành cho tài năng thiết kế mỹ thuật đa phương tiện'
      },
      {
        value: '10',
        unit: 'Triệu',
        title: 'Khuyến khích nhập học sớm',
        desc: 'Ưu đãi trừ trực tiếp vào học phí khi hoàn tất thủ tục sớm'
      },
      {
        value: '6',
        unit: 'Triệu',
        title: 'Ưu đãi chuyển ngành',
        desc: 'Hỗ trợ đặc biệt cho sinh viên & người đi làm đổi ngành sang Multimedia'
      }
    ]
  },
  skillking: {
    ...SCHOLARSHIP_BRANDS.skillking,
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN\nVỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026\nTẠI FPT SKILLKING',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH CHUYÊN GIA DIGITAL MARKETING?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình học & ưu đãi học bổng 2026',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    badges: [
      {
        value: '14',
        unit: 'Triệu',
        title: 'Học bổng tài năng',
        desc: 'Quỹ học bổng dành cho tài năng Digital Marketing xuất sắc'
      },
      {
        value: '10',
        unit: 'Triệu',
        title: 'Khuyến khích nhập học sớm',
        desc: 'Ưu đãi trừ trực tiếp vào học phí khi hoàn tất thủ tục sớm'
      },
      {
        value: '6',
        unit: 'Triệu',
        title: 'Ưu đãi chuyển ngành',
        desc: 'Hỗ trợ đặc biệt cho sinh viên & người đi làm đổi ngành sang Digital Marketing'
      }
    ]
  },
  'chip-design': {
    ...SCHOLARSHIP_BRANDS.jetking,
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT JETKING CHIP DESIGN',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH KỸ SƯ THIẾT KẾ VI MẠCH BÁN DẪN?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình Thiết kế Vi Mạch Bán Dẫn Quốc Tế 2 năm',
    campuses: ['Hà Nội'],
    badges: [
      {
        value: '8',
        unit: 'Triệu',
        title: 'Học bổng Kỹ sư Bán dẫn Tương lai',
        desc: 'Hỗ trợ sinh viên ngành kỹ thuật & công nghệ chuyển đổi'
      },
      {
        value: 'VIP',
        unit: 'Đặc Quyền',
        title: 'Đặc quyền VIP tặng Miễn phí tài khoản Coursera + Udemy',
        desc: 'Truy cập kho học liệu quốc tế không giới hạn trị giá hàng nghìn USD'
      },
      {
        value: 'LAB',
        unit: 'Chuẩn Quốc Tế',
        title: 'Thực hành LAB EDA Synopsys & Cadence',
        desc: 'Phòng thực hành chuẩn quốc tế với bản quyền công cụ thiết kế chip'
      }
    ]
  },
  'ai-agent': {
    ...SCHOLARSHIP_BRANDS.jetking,
    defaultHeaderTitle: 'NHẬN THÔNG TIN TƯ VẤN VỀ CHƯƠNG TRÌNH HỌC & HỌC BỔNG 2026 TẠI FPT JETKING AI AGENT',
    defaultFormTitle: 'BẠN CÓ MUỐN TRỞ THÀNH KỸ SƯ AI AGENT TIÊN PHONG?',
    defaultFormSubtitle: 'Đăng ký nhận tư vấn lộ trình Lập trình Hệ thống AI Agent',
    campuses: ['Hà Nội', 'Đà Nẵng'],
    badges: [
      {
        value: '8',
        unit: 'Triệu',
        title: 'Học bổng Tiên phong AI Agent',
        desc: 'Quỹ ươm mầm chuyên gia phát triển hệ sinh thái AI tự hành'
      },
      {
        value: 'VIP',
        unit: 'Đặc Quyền',
        title: 'Đặc quyền VIP tặng Miễn phí tài khoản Coursera + Udemy',
        desc: 'Truy cập kho học liệu quốc tế không giới hạn trị giá hàng nghìn USD'
      }
    ]
  }
};

// Backward-compatible alias
export const BRAND_PRESETS = BRAND_FORM_PRESETS;
