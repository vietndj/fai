import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Tuyển sinh 2026 - FAI FPT',
  description: 'Thông tin tuyển sinh, quỹ học bổng tài năng FAI, chính sách học phí và liên hệ tư vấn 1:1.',
};

export default function TuyenSinh() {
  return (
    <>
      <Header />
      <main className="sub-page-main">
        {/* Banner Section */}
        <section className="sub-page-hero">
          <div className="container">
            <span className="sub-hero-tag">TUYỂN SINH 2026</span>
            <h1 className="sub-hero-title">Đồng hành cùng đam mê công nghệ</h1>
            <p className="sub-hero-desc">Quy chế xét tuyển linh hoạt, xét học bạ THPT hoặc điểm thi tốt nghiệp cùng nhiều suất học bổng giá trị.</p>
          </div>
        </section>

        {/* Content Structure like Thang Long subpages */}
        <div className="container sub-page-layout">
          {/* Main Content Area */}
          <div className="sub-content-body">
            
            {/* Section 1: Thông tin tuyển sinh */}
            <section id="thong-tin" className="sub-section">
              <h2 className="sub-section-title">Quy chế Tuyển sinh 2026</h2>
              <div className="rich-text-content">
                <p>Năm học 2026, Viện Đào tạo Quốc tế FPT thông báo chỉ tiêu xét tuyển cho 3 phân hệ đào tạo:</p>
                <ul className="styled-list">
                  <li><strong>Đối tượng tuyển sinh:</strong> Học sinh tốt nghiệp THPT, sinh viên các trường Đại học/Cao đẳng mong muốn học nghề thực chiến, và người đi làm muốn chuyển ngành.</li>
                  <li><strong>Phương thức tuyển sinh:</strong> Xét tuyển hồ sơ (xét học bạ THPT) kết hợp phỏng vấn tư duy ngành học hoặc làm bài test logic đầu vào.</li>
                  <li><strong>Hồ sơ đăng ký:</strong> CMND/CCCD photo, học bạ THPT photo, và form đăng ký tuyển sinh của FAI.</li>
                </ul>
              </div>
            </section>

            {/* Section 2: Học bổng */}
            <section id="hoc-bong" className="sub-section">
              <h2 className="sub-section-title">Học bổng & Quỹ hỗ trợ nhập học</h2>
              <div className="rich-text-content">
                <p>Nhằm chắp cánh đam mê số, FAI triển khai chương trình học bổng "Kiến tạo số 2026" với nhiều mức ưu đãi hấp dẫn:</p>
                <div className="semester-box">
                  <h5>Học bổng Tài năng (10% - 50% học phí)</h5>
                  <p>Dành cho các thí sinh có thành tích xuất sắc trong học tập THPT, đạt giải thưởng sáng tạo hoặc thể hiện tư duy logic xuất sắc qua vòng thi tuyển học bổng riêng của FAI.</p>
                </div>
                <div className="semester-box">
                  <h5>Ưu đãi "Nhập học sớm" (Early Bird)</h5>
                  <p>Tặng ngay bộ quà tặng balo, áo thun FAI và giảm trực tiếp 3.000.000đ vào học phí học kỳ đầu tiên cho các học viên làm thủ tục nhập học trước ngày 31/07/2026.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Học phí */}
            <section id="hoc-phi" className="sub-section">
              <h2 className="sub-section-title">Chính sách học phí</h2>
              <div className="rich-text-content">
                <p>Học phí tại FAI được đóng theo từng học kỳ (mỗi học kỳ kéo dài 6 tháng). FAI cam kết học phí không tăng trong suốt thời gian học:</p>
                <ul className="styled-list">
                  <li>Học phí đã bao gồm toàn bộ giáo trình gốc chuẩn quốc tế, tài khoản thực hành Lab trực tuyến, và phí thi chứng chỉ cuối kỳ.</li>
                  <li>FAI có chính sách liên kết với ngân hàng hỗ trợ trả góp học phí lãi suất 0% giúp giảm nhẹ gánh nặng tài chính cho gia đình học viên.</li>
                </ul>
              </div>
            </section>

            {/* Section 4: FAQ */}
            <section id="faq" className="sub-section">
              <h2 className="sub-section-title">Câu hỏi thường gặp (FAQ)</h2>
              <div className="rich-text-content">
                <div className="semester-box">
                  <h5>Q: Bằng tốt nghiệp tại FAI có giá trị thế nào?</h5>
                  <p>A: Sau khi tốt nghiệp, học viên được cấp bằng chuyên ngành quốc tế (Advanced Diploma) trực tiếp từ Aptech Ấn Độ hoặc Arena Multimedia Ấn Độ. Bằng cấp có giá trị toàn cầu, dễ dàng liên thông lên các đại học quốc tế liên kết.</p>
                </div>
                <div className="semester-box">
                  <h5>Q: Chưa biết gì về máy tính hoặc vẽ có học được Arena/Aptech không?</h5>
                  <p>A: Chương trình học tại FAI được thiết kế từ con số 0. Học viên sẽ được dạy từ những bước cơ bản nhất như vẽ tay, tư duy bố cục, hoặc tư duy giải thuật rồi mới nâng cao dần.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Side Navigation Index Bar like Thang Long */}
          <aside className="sub-sidebar">
            <div className="sidebar-index-card">
              <h4>MỤC LỤC</h4>
              <ul className="sidebar-index-list">
                <li><a href="#thong-tin">Quy chế xét tuyển</a></li>
                <li><a href="#hoc-bong">Học bổng tài năng</a></li>
                <li><a href="#hoc-phi">Chính sách học phí</a></li>
                <li><a href="#faq">Câu hỏi thường gặp</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
