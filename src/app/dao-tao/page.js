import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Chương trình Đào tạo - FAI FPT',
  description: 'Khám phá các chuyên ngành đào tạo quốc tế: Arena Multimedia, Aptech Computer Education, và FPT Skillking.',
};

export default function DaoTao() {
  return (
    <>
      <Header />
      <main className="sub-page-main">
        {/* Banner Section */}
        <section className="sub-page-hero">
          <div className="container">
            <span className="sub-hero-tag">HỆ THỐNG ĐÀO TẠO</span>
            <h1 className="sub-hero-title">Chương trình đào tạo chuẩn quốc tế</h1>
            <p className="sub-hero-desc">Giáo trình thực chiến 90% thời lượng thực hành, cập nhật theo xu thế công nghiệp số mới nhất.</p>
          </div>
        </section>

        {/* Content Structure like Thang Long subpages */}
        <div className="container sub-page-layout">
          {/* Main Content Area */}
          <div className="sub-content-body">
            
            {/* Section 1: Arena Multimedia */}
            <section id="arena" className="sub-section">
              <h2 className="sub-section-title">Phân hệ Arena Multimedia (Mỹ thuật đa phương tiện)</h2>
              <div className="rich-text-content">
                <p>
                  Chương trình đào tạo Chuyên gia Mỹ thuật Đa phương tiện (AMSP) của Arena Multimedia kéo dài 2 năm, chia thành 4 học kỳ chuyên sâu:
                </p>
                <div className="semester-box">
                  <h5>Học kỳ 1: Graphic Design (Thiết kế đồ họa)</h5>
                  <p>Học về nguyên lý thị giác, thiết kế ấn phẩm truyền thông, biên tập ảnh số và tư duy bố cục chữ.</p>
                </div>
                <div className="semester-box">
                  <h5>Học kỳ 2: Web & UI/UX Design (Thiết kế Web và Trải nghiệm người dùng)</h5>
                  <p>Học về thiết kế giao diện ứng dụng di động, thiết kế website tương thích đa thiết bị.</p>
                </div>
                <div className="semester-box">
                  <h5>Học kỳ 3: Filmmaking & Video Editing (Làm phim kỹ thuật số)</h5>
                  <p>Học về biên kịch, quay phim chuyên nghiệp, biên tập âm thanh và hậu kỳ video quảng cáo.</p>
                </div>
                <div className="semester-box">
                  <h5>Học kỳ 4: 3D Animation & Game Design (Hoạt hình 3D và Thiết kế Game)</h5>
                  <p>Học dựng hình 3D nhân vật, tạo chuyển động 3D và thiết kế không gian game chuẩn Unreal Engine.</p>
                </div>
              </div>
            </section>

            {/* Section 2: Aptech */}
            <section id="aptech" className="sub-section">
              <h2 className="sub-section-title">Phân hệ Aptech Computer Education (Lập trình viên Quốc tế)</h2>
              <div className="rich-text-content">
                <p>
                  Chương trình Lập trình viên Quốc tế (ADSE) kéo dài 2 năm, tập trung vào lập trình thực chiến, chuyển giao công nghệ mới nhất:
                </p>
                <div className="semester-box">
                  <h5>Học kỳ 1: Lập trình cơ bản & Cơ sở dữ liệu</h5>
                  <p>Làm quen với cấu trúc giải thuật, ngôn ngữ C, HTML5, CSS3, Javascript và cơ sở dữ liệu SQL Server.</p>
                </div>
                <div className="semester-box">
                  <h5>Học kỳ 2: Lập trình hướng đối tượng chuyên sâu</h5>
                  <p>Học phát triển ứng dụng Java SE chuyên sâu và thiết kế hệ thống phần mềm doanh nghiệp.</p>
                </div>
                <div className="semester-box">
                  <h5>Học kỳ 3: Phát triển ứng dụng Web & Di động</h5>
                  <p>Học lập trình Web bằng React, Node.js, phát triển ứng dụng Android/iOS chất lượng cao.</p>
                </div>
                <div className="semester-box">
                  <h5>Học kỳ 4: Công nghệ đám mây & Trí tuệ nhân tạo (AI/ML)</h5>
                  <p>Học về phát triển Cloud Computing (AWS/Azure) và tích hợp các module máy học, trí tuệ nhân tạo vào sản phẩm.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Skillking */}
            <section id="skillking" className="sub-section">
              <h2 className="sub-section-title">Phân hệ FPT Skillking (Digital Marketing chuyên sâu)</h2>
              <div className="rich-text-content">
                <p>
                  Chương trình đào tạo Chuyên gia Tiếp thị số chuẩn quốc tế kéo dài 2 năm, đi từ cơ bản đến quản trị chiến dịch số nâng cao:
                </p>
                <div className="semester-box">
                  <h5>Học kỳ 1: Social Media & Content Strategy</h5>
                  <p>Học viết nội dung thu hút, thiết kế hình ảnh tiếp thị và quản trị fanpage Facebook/Tiktok/Instagram.</p>
                </div>
                <div className="semester-box">
                  <h5>Học kỳ 2: Search Engine Optimization (SEO) & Web Audit</h5>
                  <p>Học tối ưu hóa từ khóa đưa website lên top Google tìm kiếm, phân tích traffic và tối ưu hóa website doanh nghiệp.</p>
                </div>
                <div className="semester-box">
                  <h5>Học kỳ 3: Paid Ads (Quảng cáo trả phí) & Lead Generation</h5>
                  <p>Học thiết lập và chạy chiến dịch Google Ads, Facebook Ads, Tiktok Ads để đem về khách hàng tiềm năng.</p>
                </div>
                <div className="semester-box">
                  <h5>Học kỳ 4: Digital Marketing Management (Quản trị chiến dịch tổng thể)</h5>
                  <p>Học phân tích dữ liệu kinh doanh, lập ngân sách tiếp thị tổng thể và xây dựng thương hiệu số bền vững.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Side Navigation Index Bar like Thang Long */}
          <aside className="sub-sidebar">
            <div className="sidebar-index-card">
              <h4>MỤC LỤC</h4>
              <ul className="sidebar-index-list">
                <li><a href="#arena">Phân hệ Arena Multimedia</a></li>
                <li><a href="#aptech">Phân hệ Aptech (IT)</a></li>
                <li><a href="#skillking">Phân hệ FPT Skillking (Marketing)</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
