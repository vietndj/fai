import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Liên hệ - FAI FPT',
  description: 'Liên hệ tư vấn tuyển sinh và hỗ trợ đào tạo tại các cơ sở FAI Hà Nội, Đà Nẵng, và TP. Hồ Chí Minh.',
};

export default function LienHe() {
  return (
    <>
      <Header />
      <main className="sub-page-main">
        {/* Banner Section */}
        <section className="sub-page-hero">
          <div className="container">
            <span className="sub-hero-tag">LIÊN HỆ</span>
            <h1 className="sub-hero-title">Kết nối với FAI</h1>
            <p className="sub-hero-desc">Đội ngũ tư vấn tuyển sinh và hỗ trợ đào tạo luôn sẵn sàng giải đáp thắc mắc của bạn.</p>
          </div>
        </section>

        {/* Content Structure like Thang Long subpages */}
        <div className="container sub-page-layout">
          {/* Main Content Area: Form & Campus Info */}
          <div className="sub-content-body">
            <section className="sub-section">
              <h2 className="sub-section-title">Gửi thông tin liên hệ</h2>
              <form className="contact-form-box">
                <div className="form-row-two">
                  <div className="form-group">
                    <label>Họ và tên *</label>
                    <input type="text" placeholder="Nhập họ tên của bạn" required />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại *</label>
                    <input type="tel" placeholder="Nhập số điện thoại" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" placeholder="Nhập email liên hệ" required />
                </div>
                <div className="form-group">
                  <label>Chương trình quan tâm *</label>
                  <select defaultValue="">
                    <option value="" disabled>-- Vui lòng chọn phân hệ --</option>
                    <option value="arena">Arena Multimedia (Thiết kế)</option>
                    <option value="aptech">Aptech Computer Education (Lập trình)</option>
                    <option value="skillking">FPT Skillking (Digital Marketing)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Lời nhắn của bạn</label>
                  <textarea rows="5" placeholder="Để lại câu hỏi hoặc yêu cầu tư vấn..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Gửi thông tin tư vấn</button>
              </form>
            </section>

            {/* Campus details list */}
            <section className="sub-section">
              <h2 className="sub-section-title">Hệ thống cơ sở đào tạo</h2>
              <div className="campus-info-grid">
                <div className="campus-item-card">
                  <h4>Cơ sở Hà Nội</h4>
                  <p><strong>Địa chỉ:</strong> Số 8 Tôn Thất Thuyết, Mỹ Đình, Nam Từ Liêm, Hà Nội</p>
                  <p><strong>Hotline:</strong> 024 7300 8855</p>
                </div>
                <div className="campus-item-card">
                  <h4>Cơ sở Đà Nẵng</h4>
                  <p><strong>Địa chỉ:</strong> 130 Điện Biên Phủ, Thanh Khê, Đà Nẵng</p>
                  <p><strong>Hotline:</strong> 0236 7300 8855</p>
                </div>
                <div className="campus-item-card">
                  <h4>Cơ sở TP. Hồ Chí Minh</h4>
                  <p><strong>Địa chỉ:</strong> 391A Nam Kỳ Khởi Nghĩa, Võ Thị Sáu, Quận 3, TP.HCM</p>
                  <p><strong>Hotline:</strong> 028 7300 8855</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Panel */}
          <aside className="sub-sidebar">
            <div className="sidebar-index-card">
              <h4>HOTLINE HỖ TRỢ</h4>
              <p style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', margin: '15px 0' }}>1900 6000</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Thời gian làm việc từ 8:00 - 21:00 hàng ngày kể cả Thứ 7 và Chủ Nhật.</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
