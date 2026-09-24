import { 
  CheckCircle2, 
  Laptop, 
  Building2, 
  Check, 
  ArrowRight, 
  Phone, 
  FileText, 
  ShieldCheck 
} from 'lucide-react';
import { HOTLINES } from '@/data/contacts';

export default function AdmissionMethodSection() {
  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .admissions-steps-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .admissions-steps-col,
          .admissions-dossier-col {
            grid-column: span 12 !important;
            width: 100% !important;
          }
        }
      `}</style>

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
            <span className="fai-section-eyebrow">
              02/ PHƯƠNG THỨC TUYỂN SINH 2026
            </span>
            <h2 className="fai-section-heading">
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
              className="fai-card-elevated"
              style={{ 
                padding: '40px 32px', 
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
                  <span className="fai-badge fai-badge-success">
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
                className="fai-btn-primary"
              >
                Điền Form Đăng Ký Online <ArrowRight size={16} />
              </a>
            </div>

            {/* Đăng ký Trực tiếp */}
            <div 
              className="fai-card-elevated"
              style={{ 
                padding: '40px 32px', 
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
                  <span className="fai-badge" style={{ backgroundColor: '#eff6ff', color: '#1d4ed8' }}>
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
                  href={HOTLINES.hn.tel}
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
                  <Phone size={14} style={{ color: 'var(--primary)' }} /> HN: {HOTLINES.hn.display}
                </a>
                <a 
                  href={HOTLINES.dn.tel}
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
                  <Phone size={14} style={{ color: 'var(--primary)' }} /> ĐN: {HOTLINES.dn.display}
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
              <span className="fai-section-eyebrow">
                03/ QUY TRÌNH &amp; THỦ TỤC
              </span>
              <h2 className="fai-section-heading-light">
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
                className="fai-card-glass-dark"
                style={{ 
                  padding: '36px 30px'
                }}
              >
                <div className="fai-badge fai-badge-primary" style={{ marginBottom: '14px' }}>
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
    </>
  );
}
