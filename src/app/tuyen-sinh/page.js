'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import { 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Laptop, 
  Sparkles,
  Send,
  UserCheck
} from 'lucide-react';

// Danh mục 11 chương trình đào tạo chính thức FAI 2026
const TRAINING_PROGRAMS_2026 = [
  {
    brand: 'FPT Aptech',
    programs: [
      'Lập trình Fullstack 2 năm - FPT Aptech',
      'Lập trình Back end 1 năm - FPT Aptech',
      'Lập trình Front end 6 tháng - FPT Aptech',
      'Bộ khóa học Lập trình ngắn hạn (100 - 200 giờ) - FPT Aptech',
    ]
  },
  {
    brand: 'FPT Arena Multimedia',
    programs: [
      'Arena Multimedia Specialist Program (2 năm) - FPT Arena Multimedia',
      'Thiết kế 2D, 3D, Game và App (6–18 tháng) - FPT Arena Multimedia',
      'Bộ khóa học Multimedia ngắn hạn (100 giờ) - FPT Arena Multimedia',
    ]
  },
  {
    brand: 'FPT Skillking',
    programs: [
      'Fullstack Digital Marketing With AI (18 tháng) - FPT Skillking',
      'Bộ khóa học Digital Marketing ngắn hạn (100 giờ) - FPT Skillking',
    ]
  },
  {
    brand: 'FPT Jetking',
    programs: [
      'Thiết kế vi mạch bán dẫn quốc tế tích hợp AI (2 năm) - FPT Jetking',
      'Lập trình AI Agent (6 tháng - 2 năm) - FPT Jetking',
    ]
  }
];

// Danh mục Học bổng & Ưu đãi 2026 phân theo 4 thương hiệu
const SCHOLARSHIP_BRANDS = {
  aptech: {
    id: 'aptech',
    name: 'FPT Aptech',
    tagline: 'Đào tạo Lập trình viên Quốc tế',
    themeColor: '#f37021',
    accentBg: 'rgba(243, 112, 33, 0.08)',
    borderColor: 'rgba(243, 112, 33, 0.25)',
    items: [
      {
        title: 'Học bổng tài năng',
        value: '14 Triệu',
        amount: '14.000.000 VNĐ',
        desc: 'Dành cho thí sinh có thành tích học tập xuất sắc hoặc thể hiện đam mê lập trình công nghệ vượt trội.',
        badge: 'HỌC BỔNG XUẤT SẮC'
      },
      {
        title: 'Khuyến khích nhập học',
        value: '10 Triệu',
        amount: '10.000.000 VNĐ',
        desc: 'Ưu đãi trừ trực tiếp vào học phí khi hoàn tất thủ tục nhập học sớm các đợt mở lớp mới năm 2026.',
        badge: 'NHẬP HỌC SỚM'
      },
      {
        title: 'Ưu đãi chuyển ngành',
        value: '6 Triệu',
        amount: '6.000.000 VNĐ',
        desc: 'Chính sách trợ lực đặc quyền dành riêng cho người đi làm và sinh viên chuyển hướng sang ngành Lập trình.',
        badge: 'DÀNH CHO NGƯỜI CHUYỂN NGÀNH'
      },
      {
        title: 'Học bổng "Tân binh sáng tạo"',
        value: '2 Triệu',
        amount: '2.000.000 VNĐ',
        desc: 'Quỹ hỗ trợ tân sinh viên gia nhập các chuyên ngành Lập trình Fullstack và Backend.',
        badge: 'QUỸ TÂN BINH'
      }
    ]
  },
  arena: {
    id: 'arena',
    name: 'FPT Arena Multimedia',
    tagline: 'Mỹ thuật Đa phương tiện & Kỹ xảo Đồ họa',
    themeColor: '#ffb600',
    accentBg: 'rgba(255, 182, 0, 0.1)',
    borderColor: 'rgba(255, 182, 0, 0.3)',
    items: [
      {
        title: 'Học bổng tài năng',
        value: '14 Triệu',
        amount: '14.000.000 VNĐ',
        desc: 'Dành cho thí sinh có năng khiếu mỹ thuật, đồ họa, video hoặc portfolio sáng tạo nổi bật.',
        badge: 'HỌC BỔNG XUẤT SẮC'
      },
      {
        title: 'Khuyến khích nhập học',
        value: '10 Triệu',
        amount: '10.000.000 VNĐ',
        desc: 'Ưu đãi trừ trực tiếp vào học phí khi hoàn tất thủ tục đăng ký sớm trong kỳ tuyển sinh.',
        badge: 'NHẬP HỌC SỚM'
      },
      {
        title: 'Ưu đãi chuyển ngành',
        value: '6 Triệu',
        amount: '6.000.000 VNĐ',
        desc: 'Dành riêng cho người đi làm muốn đổi việc, theo đuổi đam mê thiết kế Multimedia, 2D/3D & Game.',
        badge: 'DÀNH CHO NGƯỜI CHUYỂN NGÀNH'
      },
      {
        title: 'Học bổng "Tân binh sáng tạo"',
        value: '1.5 - 2 Triệu',
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
    accentBg: 'rgba(9, 82, 156, 0.08)',
    borderColor: 'rgba(9, 82, 156, 0.25)',
    items: [
      {
        title: 'Học bổng tài năng',
        value: '14 Triệu',
        amount: '14.000.000 VNĐ',
        desc: 'Dành cho thí sinh đam mê Digital Marketing và có tư duy kinh doanh trực tuyến đột phá cùng AI.',
        badge: 'HỌC BỔNG XUẤT SẮC'
      },
      {
        title: 'Khuyến khích nhập học',
        value: '10 Triệu',
        amount: '10.000.000 VNĐ',
        desc: 'Ưu đãi trừ trực tiếp vào học phí cho các suất đăng ký nhập học sớm trong các đợt khai giảng.',
        badge: 'NHẬP HỌC SỚM'
      },
      {
        title: 'Ưu đãi chuyển ngành',
        value: '6 Triệu',
        amount: '6.000.000 VNĐ',
        desc: 'Hỗ trợ chuyển đổi sự nghiệp toàn diện sang Tiếp thị số đa kênh tích hợp trí tuệ nhân tạo.',
        badge: 'DÀNH CHO NGƯỜI CHUYỂN NGÀNH'
      },
      {
        title: 'Học bổng "Tân binh sáng tạo"',
        value: '1.5 - 2 Triệu',
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
    accentBg: 'rgba(220, 38, 38, 0.08)',
    borderColor: 'rgba(220, 38, 38, 0.25)',
    items: [
      {
        title: 'Học bổng tài năng Chip Design',
        value: '8 Triệu',
        amount: '8.000.000 VNĐ',
        desc: 'Dành cho học viên theo học ngành Thiết kế vi mạch bán dẫn quốc tế tích hợp AI 2 năm.',
        badge: 'CHIP DESIGN QUỐC TẾ'
      },
      {
        title: 'Học bổng tài năng AI Agent',
        value: '8 Triệu',
        amount: '8.000.000 VNĐ',
        desc: 'Dành cho học viên theo học ngành Lập trình AI Agent chuyên sâu đón đầu làn sóng Generative AI.',
        badge: 'AI AGENT TIÊN PHONG'
      }
    ]
  }
};

// Thông tin tài khoản ngân hàng học phí 2026
const TUITION_ACCOUNTS = [
  {
    campusKey: 'HN',
    campusName: 'Cơ sở Hà Nội',
    badge: 'HÀ NỘI CAMPUS',
    accountNumber: '00006969813',
    accountName: 'Trường Đại học FPT',
    bankName: 'Ngân hàng Tiên Phong (TPBank) chi nhánh Hà Nội',
    shortBank: 'TPBank',
    transferSyntax: 'FAIHN_hotensinhvien_HP HK 1',
    syntaxExample: 'FAIHN_NguyenVanAn_HP HK 1',
    address: 'Toà nhà FPT, Phố Dịch Vọng Hậu, Cầu Giấy, Hà Nội'
  },
  {
    campusKey: 'DN',
    campusName: 'Cơ sở Đà Nẵng',
    badge: 'ĐÀ NẴNG CAMPUS',
    accountNumber: '03557714109',
    accountName: 'Phân hiệu trường Đại học FPT tại TP Đà Nẵng',
    bankName: 'Ngân hàng Tiên Phong (TPBank) chi nhánh Đà Nẵng',
    shortBank: 'TPBank',
    transferSyntax: 'FAIDN_hotensinhvien_HP HK 1',
    syntaxExample: 'FAIDN_TranThiBinh_HP HK 1',
    address: 'Khu đô thị công nghệ FPT Đà Nẵng, P. Hòa Hải, Q. Ngũ Hành Sơn, TP. Đà Nẵng'
  }
];

export default function TuyenSinh() {
  // State quản lý tab học bổng
  const [activeBrand, setActiveBrand] = useState('aptech');

  // State sao chép clipboard
  const [copiedField, setCopiedField] = useState(null);

  // State Form tuyển sinh trực tuyến
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    campus: 'Hà Nội',
    program: 'Lập trình Fullstack 2 năm - FPT Aptech',
    agreeTerms: true
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Xử lý sao chép 1-chạm
  const handleCopy = (text, fieldId) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(fieldId);
        setTimeout(() => setCopiedField(null), 2200);
      }).catch(() => {
        fallbackCopy(text, fieldId);
      });
    } else {
      fallbackCopy(text, fieldId);
    }
  };

  const fallbackCopy = (text, fieldId) => {
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      // ignore
    }
  };

  // Thay đổi input form
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Validation form client-side
  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Vui lòng nhập họ và tên';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Họ và tên tối thiểu 2 ký tự';
    }

    const phoneRegex = /^(0[35789])[0-9]{8}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      errors.phone = 'Số điện thoại không hợp lệ (cần 10 chữ số hợp lệ)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Vui lòng nhập địa chỉ email';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Địa chỉ email không đúng định dạng';
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = 'Bạn cần đồng ý với Quy định bảo vệ dữ liệu cá nhân của FPT';
    }

    return errors;
  };

  // Submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      // Gửi data sang Apps Script nếu có
      const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec';
      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Tuyển sinh 2026',
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          campus: formData.campus,
          course: formData.program,
          submittedAt: new Date().toISOString()
        })
      });
    } catch (err) {
      console.warn('Form post warning:', err);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      campus: 'Hà Nội',
      program: 'Lập trình Fullstack 2 năm - FPT Aptech',
      agreeTerms: true
    });
    setFormErrors({});
  };

  const currentBrandData = SCHOLARSHIP_BRANDS[activeBrand] || SCHOLARSHIP_BRANDS.aptech;

  return (
    <div className="admissions-page-container" style={{ backgroundColor: '#ffffff', color: '#1a2332', fontFamily: 'var(--font-sans)' }}>
      <style>{`
        @media (max-width: 992px) {
          .admissions-steps-grid,
          .admissions-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .admissions-steps-col,
          .admissions-dossier-col,
          .admissions-contact-col,
          .admissions-form-col {
            grid-column: span 12 !important;
            width: 100% !important;
          }
        }
      `}</style>
      <main className="sub-page-main" style={{ padding: 0 }}>
        
        {/* ========================================================
            BLOCK 1: HERO HEADER SECTION
            ======================================================== */}
        <section 
          className="admissions-hero-section" 
          style={{ 
            padding: '70px 0 60px 0', 
            backgroundColor: '#ffffff',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '960px' }}>
              <span 
                className="section-eyebrow" 
                style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 800, 
                  fontSize: '0.85rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.14em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(232, 116, 30, 0.08)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  marginBottom: '16px'
                }}
              >
                <Sparkles size={14} /> QUY CHẾ TUYỂN SINH 2026
              </span>
              
              <h1 
                style={{ 
                  fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', 
                  fontWeight: 500, 
                  color: 'var(--secondary)', 
                  lineHeight: '1.2', 
                  margin: '0 0 18px 0',
                  letterSpacing: '-0.02em'
                }}
              >
                Quy chế tuyển sinh &amp; Điều kiện nhập học 2026
              </h1>
              
              <p 
                style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.75', 
                  margin: '0 0 32px 0',
                  maxWidth: '780px'
                }}
              >
                Thông tin chi tiết về đối tượng tuyển sinh, chính sách xét tuyển thẳng, chế độ học bổng và thủ tục nhập học chính thức năm 2026 tại Viện Đào tạo Quốc tế FPT (FAI).
              </p>

              {/* Quick Navigation Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                <a 
                  href="#thong-tin"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    backgroundColor: 'var(--bg-cream)',
                    border: '1px solid #e2e8f0',
                    color: 'var(--secondary)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <UserCheck size={14} style={{ color: 'var(--primary)' }} /> Đối tượng tuyển sinh
                </a>
                <a 
                  href="#phuong-thuc"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    backgroundColor: 'var(--bg-cream)',
                    border: '1px solid #e2e8f0',
                    color: 'var(--secondary)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <CheckCircle2 size={14} style={{ color: 'var(--primary)' }} /> Xét tuyển thẳng
                </a>
                <a 
                  href="#ho-so"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    backgroundColor: 'var(--bg-cream)',
                    border: '1px solid #e2e8f0',
                    color: 'var(--secondary)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FileText size={14} style={{ color: 'var(--primary)' }} /> Quy trình &amp; Hồ sơ
                </a>
                <a 
                  href="#hoc-bong"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    backgroundColor: 'var(--bg-cream)',
                    border: '1px solid #e2e8f0',
                    color: 'var(--secondary)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Award size={14} style={{ color: 'var(--primary)' }} /> Học bổng 4 thương hiệu
                </a>
                <a 
                  href="#hoc-phi"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    backgroundColor: 'var(--bg-cream)',
                    border: '1px solid #e2e8f0',
                    color: 'var(--secondary)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Copy size={14} style={{ color: 'var(--primary)' }} /> Chính sách học phí
                </a>
                <a 
                  href="#dang-ky"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(232, 116, 30, 0.25)'
                  }}
                >
                  <Send size={14} /> Đăng ký trực tuyến
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            BLOCK 2: ĐỐI TƯỢNG TUYỂN SINH (#thong-tin / #doi-tuong)
            ======================================================== */}
        <section 
          id="thong-tin"
          style={{ 
            padding: '90px 0', 
            background: 'linear-gradient(135deg, #050c1a 0%, #0D2137 100%)',
            color: '#ffffff',
            position: 'relative'
          }}
        >
          {/* Duplicate anchor for legacy compatibility */}
          <span id="doi-tuong" style={{ position: 'absolute', top: 0, left: 0, opacity: 0, pointerEvents: 'none' }} />

          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }}>
              
              <div style={{ gridColumn: 'span 12' }} className="admissions-branding">
                <span 
                  className="section-eyebrow" 
                  style={{ 
                    color: 'var(--primary)', 
                    fontWeight: 800, 
                    fontSize: '0.85rem', 
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase'
                  }}
                >
                  01/ ĐỐI TƯỢNG TUYỂN SINH
                </span>
                <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#ffffff', lineHeight: '1.25', marginTop: '12px', marginBottom: '14px' }}>
                  Cơ hội rộng mở cho người đam mê
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '820px', margin: 0 }}>
                  Viện Đào tạo Quốc tế FPT chào đón tất cả các ứng viên mong muốn sở hữu kỹ năng chuyên môn thực chiến quốc tế, không giới hạn độ tuổi hay chuyên ngành nền tảng.
                </p>
              </div>

              {/* 3 Group Cards */}
              <div style={{ gridColumn: 'span 12' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                  
                  {/* Card 1: Học sinh tốt nghiệp THPT */}
                  <div 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)', 
                      border: '1px solid rgba(255, 255, 255, 0.08)', 
                      borderRadius: '20px', 
                      padding: '32px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.2s ease, border-color 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(232,116,30,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <GraduationCap size={24} style={{ color: 'var(--primary)' }} />
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                        Học sinh tốt nghiệp THPT
                      </h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                        Các bạn chuẩn bị thi tốt nghiệp hoặc đã tốt nghiệp THPT, mong muốn học thẳng chương trình nghề quốc tế chuẩn mực, rút ngắn thời gian đào tạo và sớm gia nhập thị trường việc làm toàn cầu.
                      </p>
                    </div>
                    <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                      ✓ Đào tạo 2 năm lấy bằng quốc tế
                    </div>
                  </div>

                  {/* Card 2: Sinh viên Đại học & Cao đẳng */}
                  <div 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)', 
                      border: '1px solid rgba(255, 255, 255, 0.08)', 
                      borderRadius: '20px', 
                      padding: '32px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.2s ease, border-color 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(56,189,248,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Laptop size={24} style={{ color: '#38bdf8' }} />
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                        Sinh viên Đại học &amp; Cao đẳng
                      </h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                        Sinh viên đang học hoặc đã tốt nghiệp các trường Cao đẳng, Đại học muốn bổ sung kiến thức thực tế chuyên sâu, rèn luyện kỹ năng thực hành Lab và đồ án thực chiến (project-based learning) để nâng cao lợi thế cạnh tranh.
                      </p>
                    </div>
                    <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                      ✓ Tối ưu thời gian, học song song linh hoạt
                    </div>
                  </div>

                  {/* Card 3: Người đi làm chuyển ngành (ĐỐI TƯỢNG ĐẶC BIỆT ĐƯỢC NHẤN MẠNH) */}
                  <div 
                    style={{ 
                      background: 'linear-gradient(145deg, rgba(232, 116, 30, 0.12) 0%, rgba(13, 33, 55, 0.6) 100%)', 
                      border: '2px solid rgba(232, 116, 30, 0.45)', 
                      borderRadius: '20px', 
                      padding: '32px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      boxShadow: '0 10px 30px rgba(232, 116, 30, 0.15)'
                    }}
                  >
                    <div style={{ position: 'absolute', top: '-13px', right: '20px', backgroundColor: 'var(--primary)', color: '#ffffff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>
                      ƯU ĐÃI ĐẾN 6 TRIỆU
                    </div>

                    <div>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(232,116,30,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Briefcase size={24} style={{ color: 'var(--primary)' }} />
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                        Người đi làm chuyển ngành
                      </h3>
                      <p style={{ color: '#ffffff', fontSize: '0.94rem', lineHeight: '1.7', margin: 0, fontWeight: 500 }}>
                        Muốn thay đổi công việc hiện tại, tìm kiếm nghề truyền cảm hứng và thu nhập lý tưởng. FAI cung cấp lộ trình tinh gọn, giờ học linh hoạt (buổi tối / cuối tuần) giúp bạn tự tin làm chủ nghề mới trong các lĩnh vực Lập trình, Multimedia, Digital Marketing hoặc Bán dẫn &amp; AI.
                      </p>
                    </div>
                    <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(232,116,30,0.25)', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={16} /> Hỗ trợ gói học bổng chuyển ngành 6.000.000 VNĐ
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            BLOCK 3: PHƯƠNG THỨC XÉT TUYỂN THẲNG (#phuong-thuc)
            ======================================================== */}
        <section 
          id="phuong-thuc"
          style={{ 
            padding: '90px 0', 
            backgroundColor: '#F8FAFC', 
            color: 'var(--secondary)',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '850px', marginBottom: '50px' }}>
              <span 
                className="section-eyebrow" 
                style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 800, 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase' 
                }}
              >
                02/ PHƯƠNG THỨC TUYỂN SINH 2026
              </span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '12px', marginBottom: '16px' }}>
                Xét tuyển thẳng, không thi tuyển
              </h2>
              <div 
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(232, 116, 30, 0.1)',
                  borderLeft: '4px solid var(--primary)',
                  padding: '12px 18px',
                  borderRadius: '0 12px 12px 0',
                  color: 'var(--secondary)',
                  fontSize: '1rem',
                  fontWeight: 700
                }}
              >
                <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>Xét tuyển trực tiếp, KHÔNG CẦN thi tuyển</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginTop: '16px' }}>
                Năm 2026, Viện Đào tạo Quốc tế FPT chính thức áp dụng cơ chế xét tuyển trực tiếp, xóa bỏ toàn bộ bài kiểm tra năng lực đầu vào. Thí sinh chỉ cần lựa chọn một trong hai phương thức đăng ký thuận tiện dưới đây:
              </p>
            </div>

            {/* 2 Direct Admission Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              
              {/* Form Online */}
              <div 
                style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '24px', 
                  padding: '40px 32px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px rgba(13, 33, 55, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: 'rgba(232,116,30,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Laptop size={28} style={{ color: 'var(--primary)' }} />
                    </div>
                    <span style={{ backgroundColor: '#ecfdf5', color: '#047857', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                      XÉT TUYỂN ONLINE
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px' }}>
                    1. Đăng ký xét tuyển Online
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '20px' }}>
                    Đăng ký nhập học trực tuyến tại website chính thức của Viện Đào tạo Quốc tế FPT. <strong>Xét tuyển trực tiếp, KHÔNG CẦN thi tuyển.</strong>
                  </p>

                  <ul style={{ padding: 0, margin: '0 0 24px 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
                      <Check size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} /> Điền form đăng ký xét tuyển 1-chạm
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
                      <Check size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} /> Nộp ảnh chụp CCCD và hồ sơ trực tuyến
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
                      <Check size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} /> Nhận kết quả xét duyệt &amp; thư trúng tuyển trong 24h
                    </li>
                  </ul>
                </div>

                <a 
                  href="#dang-ky"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '14px 24px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                >
                  Điền Form Đăng Ký Online <ArrowRight size={16} />
                </a>
              </div>

              {/* Đăng ký Trực tiếp */}
              <div 
                style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '24px', 
                  padding: '40px 32px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px rgba(13, 33, 55, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: 'rgba(9,82,156,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Building2 size={28} style={{ color: '#09529c' }} />
                    </div>
                    <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                      XÉT TUYỂN TRỰC TIẾP
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px' }}>
                    2. Đăng ký trực tiếp tại cơ sở
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '20px' }}>
                    Đăng ký nhập học trực tiếp tại các văn phòng tuyển sinh của FAI tại Hà Nội và Đà Nẵng. <strong>Xét tuyển trực tiếp, KHÔNG CẦN thi tuyển.</strong>
                  </p>

                  <ul style={{ padding: 0, margin: '0 0 24px 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
                      <Check size={16} style={{ color: '#09529c', flexShrink: 0 }} /> Tham quan phòng Lab, Studio đồ họa &amp; cơ sở vật chất
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
                      <Check size={16} style={{ color: '#09529c', flexShrink: 0 }} /> Nhận tư vấn 1-1 về lộ trình học nghề phù hợp nhất
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
                      <Check size={16} style={{ color: '#09529c', flexShrink: 0 }} /> Hoàn tất thủ tục nộp hồ sơ &amp; giữ chỗ ngay trong ngày
                    </li>
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a 
                    href="tel:02473008855"
                    style={{
                      flex: 1,
                      minWidth: '130px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(13,33,55,0.06)',
                      color: 'var(--secondary)',
                      fontWeight: 700,
                      textDecoration: 'none',
                      fontSize: '0.85rem'
                    }}
                  >
                    <Phone size={14} style={{ color: 'var(--primary)' }} /> HN: 024 7300 8855
                  </a>
                  <a 
                    href="tel:02367308826"
                    style={{
                      flex: 1,
                      minWidth: '130px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(13,33,55,0.06)',
                      color: 'var(--secondary)',
                      fontWeight: 700,
                      textDecoration: 'none',
                      fontSize: '0.85rem'
                    }}
                  >
                    <Phone size={14} style={{ color: 'var(--primary)' }} /> ĐN: 0236 730 8826
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            BLOCK 4: QUY TRÌNH 4 BƯỚC & HỒ SƠ RÚT GỌN (#ho-so)
            ======================================================== */}
        <section 
          id="ho-so"
          style={{ 
            padding: '90px 0', 
            backgroundColor: '#070a10', 
            color: '#ffffff'
          }}
        >
          <div className="container">
            <div className="admissions-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'start' }}>
              
              {/* Left Column: 4-Step Process */}
              <div style={{ gridColumn: 'span 12' }} className="admissions-steps-head">
                <span 
                  className="section-eyebrow" 
                  style={{ 
                    color: 'var(--primary)', 
                    fontWeight: 800, 
                    fontSize: '0.85rem', 
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase'
                  }}
                >
                  03/ QUY TRÌNH &amp; THỦ TỤC
                </span>
                <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#ffffff', lineHeight: '1.25', marginTop: '12px', marginBottom: '30px' }}>
                  4 Bước gia nhập FAI năm 2026
                </h2>
              </div>

              <div style={{ gridColumn: 'span 7' }} className="admissions-steps-col">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  
                  {/* Step 1 */}
                  <div style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '22px 24px' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>01</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>
                        Đăng ký tư vấn &amp; xét tuyển
                      </h4>
                      <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                        Thí sinh đăng ký trực tuyến tại website hoặc đến văn phòng tuyển sinh FAI để nhận hướng dẫn chi tiết về các ngành đào tạo.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 (Updated direct admission) */}
                  <div style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '22px 24px' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>02</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>
                        Tư vấn xét tuyển trực tiếp
                      </h4>
                      <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                        Chuyên viên tư vấn hỗ trợ thẩm định hồ sơ trực tiếp, <strong>xét tuyển thẳng không cần thi tuyển</strong> và thiết kế lộ trình học tập tối ưu.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '22px 24px' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>03</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>
                        Phỏng vấn hướng nghiệp &amp; Xét học bổng
                      </h4>
                      <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                        Đánh giá mức độ định hướng, chọn chuyên ngành mong muốn và xét duyệt các suất học bổng tài năng hoặc ưu đãi chuyển ngành từ 2 đến 14 triệu đồng.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '22px 24px' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>04</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>
                        Hoàn thiện thủ tục nhập học
                      </h4>
                      <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                        Nộp bộ hồ sơ rút gọn 03 giấy tờ, đóng học phí qua tài khoản TPBank chính thức của cơ sở và nhận thông báo lịch khai giảng khóa mới.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Exact 3-item Dossier */}
              <div style={{ gridColumn: 'span 5' }} className="admissions-dossier-col">
                <div 
                  style={{ 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.08)', 
                    borderRadius: '24px', 
                    padding: '36px 30px'
                  }}
                >
                  <div style={{ display: 'inline-block', backgroundColor: 'rgba(232, 116, 30, 0.2)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '14px' }}>
                    TỐI GIẢN &amp; NHANH CHÓNG
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 10px 0' }}>
                    Hồ sơ nhập học 2026
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '24px' }}>
                    Quy chế năm 2026 đã rút gọn tối đa thủ tục hành chính, thí sinh chỉ cần chuẩn bị đúng <strong>03 loại giấy tờ</strong> sau:
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    {/* Item 1 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <FileText size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.92rem', color: '#ffffff', marginBottom: '3px' }}>
                          01 Phiếu đăng ký nhập học
                        </strong>
                        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
                          Theo mẫu chuẩn có sẵn của Viện Đào tạo FAI (phát trực tiếp hoặc cấp online).
                        </span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <FileText size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.92rem', color: '#ffffff', marginBottom: '3px' }}>
                          01 Bản sao công chứng CCCD
                        </strong>
                        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
                          Bản sao có chứng thực của cơ quan có thẩm quyền (hoặc bản scan rõ nét).
                        </span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <FileText size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.92rem', color: '#ffffff', marginBottom: '3px' }}>
                          01 Cam kết sinh viên đã đọc &quot;Những điều sinh viên cần biết&quot;
                        </strong>
                        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
                          Ký cam kết tuân thủ nội quy và chuẩn đào tạo của FAI.
                        </span>
                      </div>
                    </div>

                  </div>

                  <div style={{ marginTop: '22px', padding: '14px', borderRadius: '12px', backgroundColor: 'rgba(232, 116, 30, 0.08)', border: '1px dashed rgba(232, 116, 30, 0.3)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ShieldCheck size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.45' }}>
                      Đã loại bỏ hoàn toàn yêu cầu nộp bằng tốt nghiệp THPT, học bạ công chứng và ảnh thẻ cũ.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            BLOCK 5: HỌC BỔNG VÀ ƯU ĐÃI NHẬP HỌC 2026 (#hoc-bong)
            ======================================================== */}
        <section 
          id="hoc-bong"
          style={{ 
            padding: '95px 0', 
            backgroundColor: '#ffffff', 
            color: 'var(--secondary)',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto' }}>
              <span 
                className="section-eyebrow" 
                style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 800, 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase' 
                }}
              >
                04/ CHÍNH SÁCH HỌC BỔNG 2026
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '12px', marginBottom: '14px' }}>
                Học bổng &amp; Ưu đãi nhập học 2026
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                Quỹ học bổng phát triển tài năng trẻ và hỗ trợ chuyển đổi nghề nghiệp của 4 thương hiệu đào tạo trực thuộc Viện Đào tạo Quốc tế FPT.
              </p>
            </div>

            {/* Brand Tab Switcher */}
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '12px', 
                marginBottom: '40px',
                flexWrap: 'wrap'
              }}
            >
              {Object.values(SCHOLARSHIP_BRANDS).map((brand) => {
                const isActive = activeBrand === brand.id;
                return (
                  <button
                    key={brand.id}
                    type="button"
                    onClick={() => setActiveBrand(brand.id)}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '40px',
                      border: isActive ? `2px solid ${brand.themeColor}` : '2px solid #e2e8f0',
                      backgroundColor: isActive ? brand.themeColor : '#ffffff',
                      color: isActive ? '#ffffff' : 'var(--secondary)',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: isActive ? `0 8px 20px ${brand.themeColor}33` : 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span>{brand.name}</span>
                    <span 
                      style={{ 
                        backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : '#f1f5f9', 
                        color: isActive ? '#ffffff' : '#64748b',
                        padding: '2px 8px', 
                        borderRadius: '20px', 
                        fontSize: '0.78rem',
                        fontWeight: 700 
                      }}
                    >
                      {brand.items.length} ưu đãi
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Brand Header Banner */}
            <div 
              style={{ 
                maxWidth: '1160px', 
                margin: '0 auto 30px auto', 
                padding: '20px 26px', 
                borderRadius: '16px', 
                backgroundColor: currentBrandData.accentBg, 
                border: `1px solid ${currentBrandData.borderColor}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: currentBrandData.themeColor, margin: '0 0 4px 0' }}>
                  Học bổng &amp; Ưu đãi {currentBrandData.name}
                </h3>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569' }}>
                  {currentBrandData.tagline}
                </p>
              </div>

              <a 
                href="#dang-ky"
                style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  backgroundColor: currentBrandData.themeColor,
                  color: '#ffffff',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: `0 4px 12px ${currentBrandData.themeColor}40`
                }}
              >
                Nhận tư vấn học bổng <ArrowRight size={14} />
              </a>
            </div>

            {/* Scholarship Cards Grid */}
            <div 
              style={{ 
                maxWidth: '1160px', 
                margin: '0 auto', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                gap: '24px' 
              }}
            >
              {currentBrandData.items.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    padding: '30px 24px',
                    boxShadow: '0 8px 24px rgba(13, 33, 55, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div>
                    <span 
                      style={{ 
                        display: 'inline-block',
                        fontSize: '0.72rem', 
                        fontWeight: 800, 
                        letterSpacing: '0.08em',
                        color: currentBrandData.themeColor,
                        backgroundColor: currentBrandData.accentBg,
                        padding: '4px 10px',
                        borderRadius: '8px',
                        marginBottom: '16px'
                      }}
                    >
                      {item.badge}
                    </span>

                    <div style={{ marginBottom: '14px' }}>
                      <span 
                        style={{ 
                          display: 'block', 
                          fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', 
                          fontWeight: 900, 
                          color: currentBrandData.themeColor,
                          lineHeight: '1.1'
                        }}
                      >
                        {item.value}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>
                        {item.amount}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '10px', lineHeight: '1.35' }}>
                      {item.title}
                    </h4>

                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                    <a 
                      href="#dang-ky"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: currentBrandData.themeColor,
                        textDecoration: 'none'
                      }}
                    >
                      Đăng ký xét tuyển suất này <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================
            BLOCK 6: CHÍNH SÁCH HỌC PHÍ 2026 (#hoc-phi)
            ======================================================== */}
        <section 
          id="hoc-phi"
          style={{ 
            padding: '95px 0', 
            backgroundColor: '#F8FAFC', 
            color: 'var(--secondary)',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto 45px auto', textAlign: 'center' }}>
              <span 
                className="section-eyebrow" 
                style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 800, 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase' 
                }}
              >
                05/ CHÍNH SÁCH HỌC PHÍ
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '12px', marginBottom: '16px' }}>
                Thông tin chuyển khoản học phí chính thức 2026
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                Để đảm bảo quyền lợi và tính chính xác khi nộp học phí, Viện Đào tạo Quốc tế FPT hướng dẫn thông tin chuyển khoản tại các cơ sở (Hà Nội &amp; Đà Nẵng) như sau. Học viên lưu ý chọn đúng tài khoản tương ứng với cơ sở đang theo học:
              </p>
            </div>

            {/* 2 Banking Cards */}
            <div 
              style={{ 
                maxWidth: '1160px', 
                margin: '0 auto', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
                gap: '30px' 
              }}
            >
              {TUITION_ACCOUNTS.map((acc) => (
                <div 
                  key={acc.campusKey}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    border: '1px solid #e2e8f0',
                    padding: '36px 32px',
                    boxShadow: '0 12px 36px rgba(13, 33, 55, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Header Card */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--primary)', backgroundColor: 'rgba(232, 116, 30, 0.1)', padding: '4px 10px', borderRadius: '8px' }}>
                          {acc.badge}
                        </span>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', margin: '8px 0 0 0' }}>
                          {acc.campusName}
                        </h3>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#7c3aed', display: 'block' }}>
                          {acc.shortBank}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Ngân hàng Tiên Phong</span>
                      </div>
                    </div>

                    {/* Info rows */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      
                      {/* Đơn vị thụ hưởng */}
                      <div>
                        <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                          Đơn vị thụ hưởng (Tên tài khoản)
                        </span>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--secondary)', display: 'block' }}>
                          {acc.accountName}
                        </strong>
                      </div>

                      {/* Số tài khoản & Copy */}
                      <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                              Số tài khoản chính thức
                            </span>
                            <span style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.05em', fontFamily: 'monospace' }}>
                              {acc.accountNumber}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(acc.accountNumber, `stk-${acc.campusKey}`)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '8px 14px',
                              borderRadius: '10px',
                              border: copiedField === `stk-${acc.campusKey}` ? '1px solid #16a34a' : '1px solid #cbd5e1',
                              backgroundColor: copiedField === `stk-${acc.campusKey}` ? '#dcfce7' : '#ffffff',
                              color: copiedField === `stk-${acc.campusKey}` ? '#15803d' : 'var(--secondary)',
                              fontWeight: 700,
                              fontSize: '0.82rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {copiedField === `stk-${acc.campusKey}` ? (
                              <><Check size={14} /> Đã chép</>
                            ) : (
                              <><Copy size={14} /> Sao chép</>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Ngân hàng & Chi nhánh */}
                      <div>
                        <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                          Ngân hàng &amp; Chi nhánh
                        </span>
                        <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>
                          {acc.bankName}
                        </span>
                      </div>

                      {/* Cú pháp chuyển khoản & Copy */}
                      <div style={{ backgroundColor: '#fff7ed', padding: '16px', borderRadius: '14px', border: '1px solid #ffedd5' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                          <div>
                            <span style={{ fontSize: '0.78rem', color: '#c2410c', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>
                              Cú pháp chuyển khoản chuẩn
                            </span>
                            <code style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--secondary)', display: 'block', marginTop: '4px', wordBreak: 'break-all' }}>
                              {acc.transferSyntax}
                            </code>
                            <span style={{ fontSize: '0.78rem', color: '#9a3412', display: 'block', marginTop: '4px' }}>
                              Ví dụ: {acc.syntaxExample}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(acc.transferSyntax, `syntax-${acc.campusKey}`)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '8px 12px',
                              borderRadius: '10px',
                              border: copiedField === `syntax-${acc.campusKey}` ? '1px solid #16a34a' : '1px solid #fdba74',
                              backgroundColor: copiedField === `syntax-${acc.campusKey}` ? '#dcfce7' : '#ffffff',
                              color: copiedField === `syntax-${acc.campusKey}` ? '#15803d' : '#c2410c',
                              fontWeight: 700,
                              fontSize: '0.8rem',
                              cursor: 'pointer',
                              flexShrink: 0,
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {copiedField === `syntax-${acc.campusKey}` ? (
                              <><Check size={14} /> Đã chép</>
                            ) : (
                              <><Copy size={14} /> Sao chép</>
                            )}
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                    <span>Tài khoản chính thức được FPT xác thực</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Caution Banner */}
            <div 
              style={{ 
                maxWidth: '1160px', 
                margin: '36px auto 0 auto', 
                padding: '20px 24px', 
                borderRadius: '16px', 
                backgroundColor: 'rgba(232, 116, 30, 0.06)', 
                border: '1px solid rgba(232, 116, 30, 0.2)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px'
              }}
            >
              <AlertCircle size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--secondary)', marginBottom: '4px' }}>
                  Lưu ý quan trọng khi nộp học phí:
                </strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>
                  Học viên bắt buộc chọn đúng số tài khoản ngân hàng tương ứng với cơ sở đang theo học (Hà Nội hoặc Đà Nẵng). Vui lòng ghi chính xác cú pháp chuyển khoản (thay <em>hotensinhvien</em> bằng Họ và tên không dấu của học viên) để phòng Kế toán Viện Đào tạo FPT đối soát và xuất biên lai kịp thời.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Hidden FAQ target anchor to prevent broken links from Megamenu */}
        <span id="faq" style={{ position: 'relative', top: '-120px', visibility: 'hidden', display: 'block' }} />

        {/* ========================================================
            BLOCK 7: ĐĂNG KÝ TUYỂN SINH TRỰC TUYẾN & LIÊN HỆ (#dang-ky)
            ======================================================== */}
        <section 
          id="dang-ky"
          style={{ 
            padding: '95px 0', 
            backgroundColor: '#ffffff', 
            color: 'var(--secondary)',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div className="container">
            <div className="admissions-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '50px', alignItems: 'start' }}>
              
              {/* Left Column: Direct Contact Info */}
              <div style={{ gridColumn: 'span 5' }} className="admissions-contact-col">
                <span 
                  className="section-eyebrow" 
                  style={{ 
                    color: 'var(--primary)', 
                    fontWeight: 800, 
                    fontSize: '0.85rem', 
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase' 
                  }}
                >
                  06/ LIÊN HỆ TUYỂN SINH
                </span>
                
                <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.25', marginTop: '12px', marginBottom: '16px' }}>
                  Tư vấn chương trình tuyển sinh 2026
                </h2>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '32px' }}>
                  Đội ngũ cố vấn tuyển sinh Viện Đào tạo Quốc tế FPT luôn sẵn sàng đồng hành, tư vấn hướng nghiệp 1-1 và hỗ trợ bạn hoàn thiện hồ sơ xét tuyển nhanh nhất.
                </p>

                {/* Hotlines Card */}
                <div 
                  style={{ 
                    backgroundColor: 'var(--secondary)', 
                    borderRadius: '20px', 
                    padding: '28px 24px', 
                    color: '#ffffff',
                    boxShadow: '0 15px 35px rgba(13, 33, 55, 0.12)',
                    marginBottom: '28px'
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, display: 'block', marginBottom: '12px' }}>
                    ĐƯỜNG DÂY NÓNG TƯ VẤN TRỰC TIẾP
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* HN */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                      <div>
                        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>Cơ sở Hà Nội:</span>
                        <a href="tel:02473008855" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none' }}>
                          024 7300 8855
                        </a>
                      </div>
                      <a href="tel:02473008855" style={{ backgroundColor: 'rgba(232, 116, 30, 0.2)', color: 'var(--primary)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>
                        Gọi ngay
                      </a>
                    </div>

                    {/* DN */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>Cơ sở Đà Nẵng:</span>
                        <a href="tel:02367308826" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none' }}>
                          0236 730 8826
                        </a>
                      </div>
                      <a href="tel:02367308826" style={{ backgroundColor: 'rgba(232, 116, 30, 0.2)', color: 'var(--primary)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>
                        Gọi ngay
                      </a>
                    </div>
                  </div>
                </div>

                {/* Additional info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#475569' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={18} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.78rem', color: '#94a3b8' }}>Email tiếp nhận:</span>
                      <a href="mailto:fai@fpt.edu.vn" style={{ color: 'var(--secondary)', fontWeight: 700, textDecoration: 'none' }}>
                        fai@fpt.edu.vn
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#475569' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Clock size={18} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.78rem', color: '#94a3b8' }}>Giờ làm việc:</span>
                      <strong style={{ color: 'var(--secondary)' }}>8:00 - 21:00 hàng ngày</strong>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Online Registration Form */}
              <div style={{ gridColumn: 'span 7' }} className="admissions-form-col">
                <div 
                  style={{ 
                    backgroundColor: '#ffffff', 
                    borderRadius: '24px', 
                    padding: '40px 36px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 15px 40px rgba(13, 33, 55, 0.06)'
                  }}
                >
                  <div style={{ marginBottom: '26px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      XÉT TUYỂN TRỰC TIẾP
                    </span>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', margin: '4px 0 6px 0' }}>
                      Đăng ký xét tuyển trực tuyến 2026
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                      Điền thông tin bên dưới để giữ suất học bổng và nhận liên hệ hướng dẫn thủ tục nhập học.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                      <div style={{ width: '68px', height: '68px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                        <CheckCircle2 size={40} style={{ color: '#16a34a' }} />
                      </div>
                      <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '8px' }}>
                        Đăng ký xét tuyển thành công!
                      </h4>
                      <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '460px', margin: '0 auto 24px auto' }}>
                        Cảm ơn bạn <strong>{formData.fullName}</strong>. Hồ sơ đăng ký chương trình <strong>{formData.program}</strong> tại cơ sở <strong>{formData.campus}</strong> đã được ghi nhận. Chuyên viên tuyển sinh FAI sẽ liên hệ trong vòng 24 giờ.
                      </p>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        style={{
                          padding: '12px 28px',
                          borderRadius: '12px',
                          backgroundColor: 'var(--secondary)',
                          color: '#ffffff',
                          fontWeight: 700,
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.9rem'
                        }}
                      >
                        Gửi thêm đăng ký mới
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      
                      {/* Họ và tên */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          Họ và tên thí sinh <span style={{ color: '#dc2626' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Ví dụ: Nguyễn Văn An"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            border: formErrors.fullName ? '1.5px solid #dc2626' : '1px solid #cbd5e1',
                            backgroundColor: '#f8fafc',
                            fontSize: '0.95rem',
                            outline: 'none',
                            color: '#0f172a',
                            boxSizing: 'border-box'
                          }}
                        />
                        {formErrors.fullName && (
                          <span style={{ display: 'block', color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>
                            {formErrors.fullName}
                          </span>
                        )}
                      </div>

                      {/* Điện thoại & Email */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                        
                        {/* Số điện thoại */}
                        <div>
                          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                            Số điện thoại <span style={{ color: '#dc2626' }}>*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Ví dụ: 0912 345 678"
                            value={formData.phone}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              borderRadius: '12px',
                              border: formErrors.phone ? '1.5px solid #dc2626' : '1px solid #cbd5e1',
                              backgroundColor: '#f8fafc',
                              fontSize: '0.95rem',
                              outline: 'none',
                              color: '#0f172a',
                              boxSizing: 'border-box'
                            }}
                          />
                          {formErrors.phone && (
                            <span style={{ display: 'block', color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>
                              {formErrors.phone}
                            </span>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                            Địa chỉ Email <span style={{ color: '#dc2626' }}>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Ví dụ: an.nguyen@gmail.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              borderRadius: '12px',
                              border: formErrors.email ? '1.5px solid #dc2626' : '1px solid #cbd5e1',
                              backgroundColor: '#f8fafc',
                              fontSize: '0.95rem',
                              outline: 'none',
                              color: '#0f172a',
                              boxSizing: 'border-box'
                            }}
                          />
                          {formErrors.email && (
                            <span style={{ display: 'block', color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>
                              {formErrors.email}
                            </span>
                          )}
                        </div>

                      </div>

                      {/* Cơ sở dự tuyển */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                          Cơ sở đăng ký học tập <span style={{ color: '#dc2626' }}>*</span>
                        </label>
                        <div style={{ display: 'flex', gap: '14px' }}>
                          {['Hà Nội', 'Đà Nẵng'].map((campusName) => {
                            const isSelected = formData.campus === campusName;
                            return (
                              <label
                                key={campusName}
                                style={{
                                  flex: 1,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '8px',
                                  padding: '12px 16px',
                                  borderRadius: '12px',
                                  border: isSelected ? '2px solid var(--primary)' : '1px solid #cbd5e1',
                                  backgroundColor: isSelected ? 'rgba(232, 116, 30, 0.08)' : '#f8fafc',
                                  cursor: 'pointer',
                                  fontWeight: isSelected ? 800 : 600,
                                  color: isSelected ? 'var(--primary)' : '#475569',
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <input
                                  type="radio"
                                  name="campus"
                                  value={campusName}
                                  checked={isSelected}
                                  onChange={handleInputChange}
                                  style={{ accentColor: 'var(--primary)' }}
                                />
                                Cơ sở {campusName}
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Dropdown 11 Chương trình đào tạo chuẩn */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          Chương trình đào tạo quan tâm <span style={{ color: '#dc2626' }}>*</span>
                        </label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '13px 16px',
                            borderRadius: '12px',
                            border: '1px solid #cbd5e1',
                            backgroundColor: '#f8fafc',
                            fontSize: '0.92rem',
                            outline: 'none',
                            color: '#0f172a',
                            boxSizing: 'border-box',
                            cursor: 'pointer'
                          }}
                        >
                          {TRAINING_PROGRAMS_2026.map((group, gIdx) => (
                            <optgroup key={gIdx} label={group.brand}>
                              {group.programs.map((prog, pIdx) => (
                                <option key={pIdx} value={prog}>
                                  {prog}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>

                      {/* Checkbox điều khoản bảo vệ dữ liệu cá nhân bắt buộc */}
                      <div>
                        <label 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            gap: '10px', 
                            cursor: 'pointer',
                            fontSize: '0.83rem',
                            color: '#475569',
                            lineHeight: '1.55'
                          }}
                        >
                          <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleInputChange}
                            style={{ 
                              marginTop: '3px', 
                              accentColor: 'var(--primary)',
                              width: '16px',
                              height: '16px',
                              cursor: 'pointer'
                            }}
                          />
                          <span>
                            Đồng ý để dữ liệu cá nhân của Anh/Chị được thu thập trên trang này, được xử lý và lưu trữ bởi Tổ chức giáo dục FPT cho mục đích và theo điều kiện đã được công bố tại Quy định bảo vệ dữ liệu cá nhân của Tổ chức giáo dục FPT{' '}
                            <a
                              href="https://fpt.edu.vn/thu-vien-anh/11140"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ 
                                color: 'var(--primary)', 
                                textDecoration: 'underline', 
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '2px'
                              }}
                            >
                              tại đây <ExternalLink size={12} />
                            </a>
                            .
                          </span>
                        </label>
                        {formErrors.agreeTerms && (
                          <span style={{ display: 'block', color: '#dc2626', fontSize: '0.8rem', marginTop: '6px' }}>
                            {formErrors.agreeTerms}
                          </span>
                        )}
                      </div>

                      {/* Nút gửi form */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          padding: '16px 24px',
                          borderRadius: '12px',
                          backgroundColor: isSubmitting ? '#94a3b8' : 'var(--primary)',
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '1rem',
                          border: 'none',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 8px 24px rgba(232, 116, 30, 0.3)',
                          marginTop: '8px'
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <div 
                              style={{ 
                                width: '18px', 
                                height: '18px', 
                                border: '2px solid #ffffff', 
                                borderTopColor: 'transparent', 
                                borderRadius: '50%', 
                                animation: 'spin 0.8s linear infinite' 
                              }} 
                            />
                            <span>Đang gửi hồ sơ xét tuyển...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Gửi hồ sơ đăng ký xét tuyển 2026</span>
                          </>
                        )}
                      </button>

                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
