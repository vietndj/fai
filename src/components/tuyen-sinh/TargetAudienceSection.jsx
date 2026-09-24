import { 
  GraduationCap, 
  Laptop, 
  Briefcase, 
  CheckCircle2 
} from 'lucide-react';

export default function TargetAudienceSection() {
  return (
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
            <span className="fai-section-eyebrow">
              01/ ĐỐI TƯỢNG TUYỂN SINH
            </span>
            <h2 className="fai-section-heading-light">
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
                className="fai-card-glass-dark"
                style={{ 
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
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
                className="fai-card-glass-dark"
                style={{ 
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
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
  );
}
