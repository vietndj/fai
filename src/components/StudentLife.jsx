import Image from 'next/image';

export default function StudentLife() {
  return (
    <section className="section student-life-section">
      <div className="container student-life-grid">
        {/* Left Intro Panel */}
        <div className="student-life-intro">
          <span className="subtitle">Trải nghiệm & Sáng tạo</span>
          <h2 className="section-title">Đời sống sinh viên FAI</h2>
          <p className="intro-desc">
            Tại FAI, việc học không giới hạn trong phòng Lab. Bạn được nhúng mình vào môi trường năng động với các hoạt động teambuilding, ngày hội công nghệ, các cuộc thi Hackathon và sự kiện sáng tạo liên kết trực tiếp với doanh nghiệp lớn.
          </p>
          <ul className="info-checklist">
            <li>Sân chơi học thuật & Hackathon đỉnh cao</li>
            <li>Câu lạc bộ Thể thao, Nghệ thuật sôi động</li>
            <li>Workshop & Show diễn đồ án sáng tạo hàng kỳ</li>
            <li>Chương trình kiến tập doanh nghiệp từ năm nhất</li>
          </ul>
          <a href="#" className="btn btn-secondary">Xem thêm hoạt động</a>
        </div>

        {/* Right Art Collage Panel */}
        <div className="collage-container">
          <div className="collage-grid">
            <div className="collage-item large-1">
              <Image src="/fai_student_life_1.png" alt="Student Life 1" fill style={{ objectFit: 'cover' }} className="collage-img" />
              <div className="img-hover-overlay">
                <span>Học nhóm sáng tạo tại thư viện</span>
              </div>
            </div>
            <div className="collage-item small-1">
              <Image src="/fai_banner_arena.png" alt="Student Life 2" fill style={{ objectFit: 'cover' }} className="collage-img" />
              <div className="img-hover-overlay">
                <span>Vẽ bảng vẽ Wacom cảm ứng</span>
              </div>
            </div>
            <div className="collage-item small-2">
              <Image src="/fai_banner_aptech.png" alt="Student Life 3" fill style={{ objectFit: 'cover' }} className="collage-img" />
              <div className="img-hover-overlay">
                <span>Thực hành Code tại Lab</span>
              </div>
            </div>
            <div className="collage-item large-2">
              <Image src="/fai_student_life_2.png" alt="Student Life 4" fill style={{ objectFit: 'cover' }} className="collage-img" />
              <div className="img-hover-overlay">
                <span>Lễ tốt nghiệp vinh danh sinh viên</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
