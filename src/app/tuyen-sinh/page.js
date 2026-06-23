'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ArrowRight, UserCheck, Award, FileText, ClipboardList, Settings, CheckCircle2 } from 'lucide-react';

export default function TuyenSinh() {
  return (
    <div className="admissions-page-container" style={{ backgroundColor: '#ffffff', color: '#1a2332' }}>
      <Header />

      <main className="sub-page-main" style={{ padding: 0 }}>
        
        {/* BLOCK 1: Hero Header Section - White Background - Proportional Height */}
        <section 
          className="admissions-hero-section" 
          style={{ 
            padding: '180px 0 80px 0', 
            minHeight: '45vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="container">
            <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              QUY CHẾ TUYỂN SINH 2026
            </span>
            <h1 style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)', fontWeight: 800, fontFamily: 'var(--font-sans)', color: 'var(--secondary)', marginTop: '20px', lineHeight: '1.25' }}>
              Quy chế tuyển sinh & Điều kiện nhập học
            </h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', marginTop: '20px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Thông tin chi tiết về đối tượng xét tuyển, môn thi năng lực đầu vào và hồ sơ thủ tục nhập học chính thức tại Viện Đào tạo Quốc tế FPT (FAI).
            </p>
          </div>
        </section>

        {/* BLOCK 2: Đối tượng tuyển sinh - Dark Navy Background - Proportional Height */}
        <section 
          id="doi-tuong"
          style={{ 
            padding: '100px 0', 
            background: 'linear-gradient(135deg, #050c1a 0%, #0D2137 100%)',
            color: '#ffffff',
            minHeight: '75vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '50px', alignItems: 'center' }}>
              
              <div style={{ gridColumn: 'span 5' }} className="admissions-branding">
                <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800 }}>01/ ĐỐI TƯỢNG TUYỂN SINH</span>
                <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#ffffff', lineHeight: '1.2', marginTop: '15px' }}>
                  Cơ hội rộng mở cho người đam mê
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: '1.75', marginTop: '25px' }}>
                  Viện Đào tạo Quốc tế FPT chào đón tất cả các ứng viên mong muốn sở hữu kỹ năng chuyên môn thực chiến quốc tế, không giới hạn độ tuổi hay chuyên ngành nền tảng.
                </p>
              </div>

              <div style={{ gridColumn: 'span 7' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '30px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <UserCheck size={20} style={{ color: 'var(--primary)' }} /> Học sinh tốt nghiệp THPT
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                      Các bạn chuẩn bị thi tốt nghiệp hoặc đã tốt nghiệp THPT, mong muốn học thẳng chương trình nghề quốc tế chuẩn mực, rút ngắn thời gian và đi làm sớm.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '30px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Award size={20} style={{ color: 'var(--primary)' }} /> Sinh viên Đại học & Cao đẳng
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                      Sinh viên đang học hoặc đã tốt nghiệp các trường Cao đẳng, Đại học muốn bổ sung kiến thức thực tế chuyên sâu, rèn luyện kỹ năng thực hành Lab toàn diện để sẵn sàng làm việc.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '30px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Settings size={20} style={{ color: 'var(--primary)' }} /> Người đi làm chuyển ngành
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>
                      Cá nhân đang làm việc trong các lĩnh vực khác muốn chuyển đổi định hướng nghề nghiệp sang ngành Lập trình (Aptech), Mỹ thuật số (Arena) hoặc Tiếp thị số (Skillking).
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 3: Phương thức tuyển sinh - Light Cream Background - Proportional Height */}
        <section 
          id="phuong-thuc"
          style={{ 
            padding: '100px 0', 
            backgroundColor: '#F8F5F0', 
            color: 'var(--secondary)',
            minHeight: '75vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '50px', alignItems: 'center' }}>
              
              <div style={{ gridColumn: 'span 7' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  <div style={{ background: '#ffffff', border: '1px solid rgba(13,33,55,0.04)', borderRadius: '16px', padding: '35px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.01)' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(232,116,30,0.08)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <strong>EN</strong>
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px' }}>Môn 1: Tiếng Anh</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.65', margin: 0 }}>
                      Bài thi đọc hiểu trắc nghiệm Tiếng Anh (không kiểm tra ngữ pháp phức tạp), nhằm đánh giá khả năng đọc và khai thác tài liệu chuyên ngành bằng Anh ngữ.
                    </p>
                  </div>
                  <div style={{ background: '#ffffff', border: '1px solid rgba(13,33,55,0.04)', borderRadius: '16px', padding: '35px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.01)' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(26,110,216,0.08)', color: '#1a6ed8', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <strong>IQ</strong>
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '12px' }}>Môn 2: Sáng Tạo / Logic</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.65', margin: 0 }}>
                      Bài thi tư duy logic (dành cho Aptech) hoặc cảm nhận thẩm mỹ &amp; óc sáng tạo (dành cho Arena/Skillking) để đánh giá tố chất phù hợp với ngành học.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ gridColumn: 'span 5' }} className="admissions-exam-info">
                <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800 }}>02/ PHƯƠNG THỨC &amp; BÀI TEST</span>
                <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.2', marginTop: '15px' }}>
                  Kiểm tra năng lực đầu vào
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75', marginTop: '25px' }}>
                  Thí sinh tham gia tuyển sinh tại FAI sẽ thực hiện 02 môn kiểm tra năng lực độc quyền để được tư vấn lộ trình học tập tối ưu nhất.
                </p>
                <div style={{ marginTop: '30px', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '20px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} /> Chấp nhận xét tuyển thẳng đối với thí sinh có Portfolio cá nhân xuất sắc.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 4: Quy trình & Hồ sơ - Dark Gray Background - Proportional Height */}
        <section 
          id="ho-so"
          style={{ 
            padding: '100px 0', 
            backgroundColor: '#070a10', 
            color: '#ffffff',
            minHeight: '75vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '50px', alignItems: 'start' }}>
              
              {/* Left Column: Flow */}
              <div style={{ gridColumn: 'span 6' }}>
                <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800 }}>03/ QUY TRÌNH TUYỂN SINH</span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', lineHeight: '1.25', marginTop: '15px', marginBottom: '40px' }}>
                  4 Bước gia nhập FAI
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>01</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 5px 0' }}>Đăng ký tư vấn</h4>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>Thí sinh điền thông tin đăng ký trực tuyến hoặc nhận tư vấn 1-1 tại văn phòng tuyển sinh.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>02</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 5px 0' }}>Kiểm tra năng lực</h4>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>Làm bài kiểm tra đầu vào (Tiếng Anh &amp; Sáng tạo/Logic) hoặc nộp hồ sơ xét tuyển thẳng.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>03</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 5px 0' }}>Phỏng vấn hướng nghiệp</h4>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>Gặp gỡ Hội đồng chuyên môn để đánh giá mức độ định hướng, chọn chuyên ngành và nhận học bổng.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>04</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 5px 0' }}>Hoàn thiện nhập học</h4>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>Nộp hồ sơ giấy tờ chính thức và đóng học phí để nhận lịch khai giảng học kỳ mới.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dossier Checklist */}
              <div style={{ gridColumn: 'span 6' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '45px 40px' }}>
                  <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800 }}>THỦ TỤC HỒ SƠ</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginTop: '10px', marginBottom: '25px' }}>
                    Hồ sơ nhập học bao gồm
                  </h3>
                  
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ display: 'flex', alignItems: 'start', gap: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
                      <FileText size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>01 Phiếu đăng ký nhập học (theo mẫu có sẵn của Viện Đào tạo FAI)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'start', gap: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
                      <FileText size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>02 Bản sao công chứng Bằng tốt nghiệp THPT hoặc Giấy chứng nhận tốt nghiệp tạm thời (đối với học sinh mới thi xong)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'start', gap: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
                      <FileText size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>02 Bản sao Học bạ THPT (có công chứng)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'start', gap: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
                      <FileText size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>01 Bản sao CCCD hoặc Giấy khai sinh (có công chứng)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'start', gap: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
                      <FileText size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>04 Ảnh thẻ kích thước 3x4 (chụp trong vòng 6 tháng gần nhất)</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 5: Call to Registration - White Background - Proportional Height */}
        <section 
          className="admissions-cta-section" 
          style={{ 
            padding: '120px 0', 
            backgroundColor: '#ffffff', 
            color: 'var(--secondary)',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            textAlign: 'center',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              TƯ VẤN XÉT TUYỂN TRỰC TIẾP
            </span>
            
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '20px', marginBottom: '10px' }}>
              Khởi đầu đam mê công nghệ cùng FAI
            </h2>
            
            <p style={{ maxWidth: '650px', color: 'var(--text-muted)', margin: '0 auto 40px auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Bạn có bất kỳ câu hỏi nào về thủ tục xét tuyển, bài thi năng lực đầu vào hoặc chế độ học bổng? Đội ngũ cố vấn tuyển sinh luôn sẵn sàng đồng hành hỗ trợ bạn.
            </p>

            <div style={{ display: 'inline-block', background: 'var(--secondary)', padding: '30px 60px', borderRadius: '24px', boxShadow: '0 20px 50px rgba(13,33,55,0.08)' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 5px 0', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em' }}>
                ĐƯỜNG DÂY NÓNG TƯ VẤN NHANH
              </p>
              <a href="tel:19006000" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: 'var(--primary)', display: 'block', textDecoration: 'none', lineHeight: '1' }}>
                1900 6000
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '50px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <Clock size={18} style={{ color: 'var(--primary)' }} />
                <span>Thời gian hỗ trợ: 8:00 - 21:00 hàng ngày</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <Mail size={18} style={{ color: 'var(--primary)' }} />
                <span>Email: fai@fpt.edu.vn</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
