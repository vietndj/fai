'use client';

import { useState } from 'react';
import Image from 'next/image';

const programs = {
  ALL: [
    { name: 'Mỹ thuật đa phương tiện', school: 'Arena Multimedia', url: '/dao-tao#arena' },
    { name: 'Thiết kế đồ họa chuyên nghiệp', school: 'Arena Multimedia', url: '/dao-tao#arena' },
    { name: 'Kỹ xảo điện ảnh kỹ thuật số', school: 'Arena Multimedia', url: '/dao-tao#arena' },
    { name: 'Thiết kế Game & Hoạt hình 3D', school: 'Arena Multimedia', url: '/dao-tao#arena' },
    { name: 'Lập trình viên Quốc tế (ADSE)', school: 'Aptech', url: '/dao-tao#aptech' },
    { name: 'Lập trình chuyên sâu Java / .NET', school: 'Aptech', url: '/dao-tao#aptech' },
    { name: 'Chuyên gia Trí tuệ Nhân tạo (AI)', school: 'Aptech', url: '/dao-tao#aptech' },
    { name: 'Khoa học dữ liệu (Data Science)', school: 'Aptech', url: '/dao-tao#aptech' },
    { name: 'Chuyên viên Digital Marketing', school: 'Skillking', url: '/dao-tao#skillking' },
    { name: 'Quản trị Quảng cáo số (Ads Management)', school: 'Skillking', url: '/dao-tao#skillking' },
    { name: 'Chiến lược Nội dung (Content Marketing)', school: 'Skillking', url: '/dao-tao#skillking' },
    { name: 'Tối ưu hóa tìm kiếm (SEO & Website)', school: 'Skillking', url: '/dao-tao#skillking' },
  ],
  ARENA: [
    { name: 'Mỹ thuật đa phương tiện', school: 'Arena Multimedia', url: '/dao-tao#arena' },
    { name: 'Thiết kế đồ họa chuyên nghiệp', school: 'Arena Multimedia', url: '/dao-tao#arena' },
    { name: 'Kỹ xảo điện ảnh kỹ thuật số', school: 'Arena Multimedia', url: '/dao-tao#arena' },
    { name: 'Thiết kế Game & Hoạt hình 3D', school: 'Arena Multimedia', url: '/dao-tao#arena' },
  ],
  APTECH: [
    { name: 'Lập trình viên Quốc tế (ADSE)', school: 'Aptech', url: '/dao-tao#aptech' },
    { name: 'Lập trình chuyên sâu Java / .NET', school: 'Aptech', url: '/dao-tao#aptech' },
    { name: 'Chuyên gia Trí tuệ Nhân tạo (AI)', school: 'Aptech', url: '/dao-tao#aptech' },
    { name: 'Khoa học dữ liệu (Data Science)', school: 'Aptech', url: '/dao-tao#aptech' },
  ],
  SKILLKING: [
    { name: 'Chuyên viên Digital Marketing', school: 'Skillking', url: '/dao-tao#skillking' },
    { name: 'Quản trị Quảng cáo số (Ads Management)', school: 'Skillking', url: '/dao-tao#skillking' },
    { name: 'Chiến lược Nội dung (Content Marketing)', school: 'Skillking', url: '/dao-tao#skillking' },
    { name: 'Tối ưu hóa tìm kiếm (SEO & Website)', school: 'Skillking', url: '/dao-tao#skillking' },
  ]
};

export default function ProgramSelector() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [isOpen, setIsOpen] = useState(false);

  const getDropdownLabel = () => {
    switch (activeTab) {
      case 'ALL': return 'Tất cả chương trình đào tạo';
      case 'ARENA': return 'Phân hệ Arena Multimedia';
      case 'APTECH': return 'Phân hệ Aptech';
      case 'SKILLKING': return 'Phân hệ FPT Skillking';
      default: return 'Tất cả chương trình';
    }
  };

  const getSchoolImage = (school) => {
    if (school === 'Arena Multimedia') return '/fai_card_arena.png';
    if (school === 'Aptech') return '/fai_card_aptech.png';
    return '/fai_card_skillking.png';
  };

  return (
    <section className="section bg-light-gray">
      <div className="container">
        <div className="program-selector-header">
          <div>
            <span className="subtitle">Chương trình học chuẩn quốc tế</span>
            <h2 className="section-title" style={{ margin: 0 }}>Hãy bắt đầu tương lai ngay bây giờ</h2>
          </div>

          {/* Selector Dropdown like Thang Long */}
          <div className="custom-dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
              <span>{getDropdownLabel()}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={isOpen ? 'rotate' : ''}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>

            {isOpen && (
              <div className="dropdown-menu-list">
                <button onClick={() => { setActiveTab('ALL'); setIsOpen(false); }}>Tất cả chương trình đào tạo</button>
                <button onClick={() => { setActiveTab('ARENA'); setIsOpen(false); }}>Phân hệ Arena Multimedia</button>
                <button onClick={() => { setActiveTab('APTECH'); setIsOpen(false); }}>Phân hệ Aptech (Lập trình viên)</button>
                <button onClick={() => { setActiveTab('SKILLKING'); setIsOpen(false); }}>Phân hệ FPT Skillking (Marketing)</button>
              </div>
            )}
          </div>
        </div>

        {/* Tab content list in grid layout */}
        <div className="programs-grid">
          {programs[activeTab].map((prog, idx) => (
            <a key={idx} href={prog.url} className="program-card-item">
              <div className="card-image-header">
                <Image 
                  src={getSchoolImage(prog.school)} 
                  alt={prog.school} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className="card-info-box">
                <span className="card-school-tag">{prog.school}</span>
                <h3 className="card-program-title">{prog.name}</h3>
                <span className="card-action-link">
                  Xem chi tiết
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
