'use client';

import Image from 'next/image';

export default function ImageGallerySection() {
  const images = [
    '/images/tuyen-sinh/DAT00009.webp',
    '/images/tuyen-sinh/DAT00243.webp',
    '/images/tuyen-sinh/DAT00035.webp',
    '/images/tuyen-sinh/DAT00179.webp'
  ];

  return (
    <section className="fai-section" style={{ padding: '60px 0', backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="fai-section-eyebrow">Trải nghiệm môi trường FPT</span>
          <h2 className="fai-section-heading" style={{ margin: '0 auto', maxWidth: '600px' }}>
            Không gian học tập thực chiến, tiêu chuẩn quốc tế
          </h2>
          <p className="fai-section-description" style={{ margin: '15px auto 0' }}>
            Hình ảnh thực tế ghi lại những khoảnh khắc học tập, thực hành và tương tác của sinh viên FAI cùng đội ngũ giảng viên chuyên gia.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {images.map((img, i) => (
            <div key={i} style={{ position: 'relative', height: '300px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} className="fai-card-glass-dark">
              <Image src={img} alt={`Hình ảnh lớp học thực tế tại Viện đào tạo quốc tế FPT ${i}`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 25vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
