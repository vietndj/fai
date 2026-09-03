'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ArrowRight, Building2, Globe, Heart } from 'lucide-react';

const aptechCampuses = [
  {
    city: "Hà Nội",
    name: "FPT Aptech - Trụ sở Xuân Phương",
    address: "Cổng số 1, Nhà E, Toà nhà FPT Polytechnic, 13 Phan Tây Nhạc, Phường Xuân Phương, TP Hà Nội",
    hotline: "0833 999 810",
    email: "aptech.hn@fpt.edu.vn"
  },
  {
    city: "Hà Nội",
    name: "FPT Aptech - Cơ sở Cầu Giấy",
    address: "8 Tôn Thất Thuyết, Phường Cầu Giấy, TP Hà Nội",
    hotline: "0833 999 810",
    email: "aptech.hn@fpt.edu.vn"
  },
  {
    city: "TP. Hồ Chí Minh",
    name: "FPT Aptech - Cơ sở Tân Sơn Nhất",
    address: "21 Bis Hậu Giang, Phường Tân Sơn Nhất, TP HCM",
    hotline: "0834 999 810",
    email: "aptech.hcm@fpt.edu.vn"
  },
  {
    city: "TP. Hồ Chí Minh",
    name: "FPT Aptech - Cơ sở Hạnh Thông",
    address: "84A Nguyên Hồng, P. Hạnh Thông, TP HCM",
    hotline: "0834 999 810",
    email: "aptech.hcm@fpt.edu.vn"
  }
];

const arenaCampuses = [
  {
    city: "Hà Nội",
    name: "FPT Arena - Cơ sở Ba Đình",
    address: "264 Đội Cấn, Phường Ba Đình, TP Hà Nội",
    hotline: "024 7300 8855",
    email: "farena.hn@fpt.edu.vn"
  },
  {
    city: "Hà Nội",
    name: "FPT Arena - Cơ sở Hai Bà Trưng",
    address: "94 Lương Yên, Phường Bạch Đằng, TP Hà Nội",
    hotline: "024 7300 8855",
    email: "farena.hn@fpt.edu.vn"
  },
  {
    city: "Hà Nội",
    name: "FPT Arena - Cơ sở Xuân Phương",
    address: "Cổng số 1, Nhà E, Toà nhà FPT Polytechnic, 13 Phan Tây Nhạc, Phường Xuân Phương, TP Hà Nội",
    hotline: "024 7300 8855",
    email: "farena.hn@fpt.edu.vn"
  },
  {
    city: "Đà Nẵng",
    name: "FPT Arena - Cơ sở Hải Châu",
    address: "130 Đống Đa, Phường Hải Châu, TP Đà Nẵng",
    hotline: "0236 730 8826",
    email: "farena.dn@fpt.edu.vn"
  },
  {
    city: "TP Hồ Chí Minh",
    name: "FPT Arena - Cơ sở Tân Sơn Nhất",
    address: "21 Bis Hậu Giang, Phường Tân Sơn Nhất, TP Hồ Chí Minh",
    hotline: "028 7300 8866",
    email: "farena.hcm@fpt.edu.vn"
  },
  {
    city: "TP Hồ Chí Minh",
    name: "FPT Arena - Cơ sở Hạnh Thông",
    address: "84A Nguyên Hồng, Phường Hạnh Thông, TP Hồ Chí Minh",
    hotline: "028 7300 8866",
    email: "farena.hcm@fpt.edu.vn"
  },
  {
    city: "Cần Thơ",
    name: "FPT Arena - Cơ sở Cái Khế",
    address: "55 Cách Mạng Tháng 8, Phường Cái Khế, TP Cần Thơ",
    hotline: "0292 730 8806",
    email: "farena.ct@fpt.edu.vn"
  }
];

const skillkingCampuses = [
  {
    city: "Hà Nội",
    name: "FPT Skillking - Cơ sở Hai Bà Trưng",
    address: "94 Lương Yên, Phường Bạch Đằng, TP Hà Nội",
    hotline: "024 7300 8855",
    email: "skillking.hn@fpt.edu.vn"
  },
  {
    city: "Hà Nội",
    name: "FPT Skillking - Cơ sở Xuân Phương",
    address: "Cổng số 1, Nhà E, Toà nhà FPT Polytechnic, 13 Phan Tây Nhạc, Phường Xuân Phương, TP Hà Nội",
    hotline: "024 7300 8855",
    email: "skillking.hn@fpt.edu.vn"
  },
  {
    city: "Đà Nẵng",
    name: "FPT Skillking - Cơ sở Hải Châu",
    address: "130 Đống Đa, Phường Hải Châu, TP Đà Nẵng",
    hotline: "0236 730 8826",
    email: "skillking.dn@fpt.edu.vn"
  },
  {
    city: "TP Hồ Chí Minh",
    name: "FPT Skillking - Cơ sở Tân Sơn Nhất",
    address: "21 Bis Hậu Giang, Phường Tân Sơn Nhất, TP Hồ Chí Minh",
    hotline: "028 7300 8866",
    email: "skillking.hcm@fpt.edu.vn"
  },
  {
    city: "TP Hồ Chí Minh",
    name: "FPT Skillking - Cơ sở Hạnh Thông",
    address: "84A Nguyên Hồng, Phường Hạnh Thông, TP Hồ Chí Minh",
    hotline: "028 7300 8866",
    email: "skillking.hcm@fpt.edu.vn"
  },
  {
    city: "Cần Thơ",
    name: "FPT Skillking - Cơ sở Cái Khế",
    address: "55 Cách Mạng Tháng 8, Phường Cái Khế, TP Cần Thơ",
    hotline: "0292 730 8806",
    email: "skillking.ct@fpt.edu.vn"
  }
];

const jetkingCampuses = [
  {
    city: "Hà Nội",
    name: "FPT Jetking - Cơ sở Xuân Phương",
    address: "Cổng số 1, Nhà E, Toà nhà FPT Polytechnic, 13 Phan Tây Nhạc, Phường Xuân Phương, TP Hà Nội.",
    hotline: "0833 999 810",
    email: "jetking.hn@fpt.edu.vn"
  },
  {
    city: "Đà Nẵng",
    name: "FPT Jetking - Cơ sở Hải Châu",
    address: "130 Đống Đa, Phường Hải Châu, TP Đà Nẵng.",
    hotline: "0941 173 530",
    email: "jetking.dn@fpt.edu.vn"
  },
  {
    city: "TP. Hồ Chí Minh",
    name: "FPT Jetking - Cơ sở Hạnh Thông",
    address: "84A Nguyên Hồng, P. Hạnh Thông, TP HCM",
    hotline: "0834 999 810",
    email: "jetking.hcm@fpt.edu.vn"
  },
  {
    city: "TP. Hồ Chí Minh",
    name: "FPT Jetking - Cơ sở Tân Sơn Nhất",
    address: "21 Bis Hậu Giang, Phường Tân Sơn Nhất, TP HCM.",
    hotline: "0834 999 810",
    email: "jetking.hcm@fpt.edu.vn"
  }
];

export default function LienHe() {
  return (
    <div className="contact-page-container" style={{ backgroundColor: "#ffffff", color: "#1a2332" }}>
      
      <main className="contact-main" style={{ padding: 0 }}>
        
        {/* BLOCK 1: Hero Section - White Background - Compact Height */}
        <section 
          className="contact-hero-section" 
          style={{ 
            padding: "88px 0 80px 0", 
            position: "relative", 
            overflow: "hidden",
            minHeight: "45vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#ffffff"
          }}
        >
          <div className="container">
            <div style={{ maxWidth: "950px" }}>
              <span className="section-eyebrow" style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                MẠNG LƯỚI KẾT NỐI FAI
              </span>
              <h1 style={{ fontSize: "clamp(2.3rem, 5.5vw, 4rem)", color: "var(--secondary)", lineHeight: "1.25", fontWeight: 500, marginTop: "20px", fontFamily: "var(--font-heading-medium)" }}>
                Hệ thống Campus thực chiến toàn quốc
              </h1>
              <p style={{ maxWidth: "720px", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.75", marginTop: "25px" }}>
                Chào mừng bạn đến với Viện Đào Tạo Quốc Tế FPT. Lựa chọn ngành học của bạn và kết nối trực tiếp với cơ sở gần nhất để trải nghiệm không gian học tập chuẩn quốc tế.
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "15px", marginTop: "40px", flexWrap: "wrap" }}>
              <a href="#aptech" style={{ padding: "12px 24px", borderRadius: "30px", background: "rgba(243,112,33,0.1)", color: "#f37021", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", border: "1px solid rgba(243,112,33,0.25)", transition: "all 0.2s ease" }}>FPT Aptech</a>
              <a href="#arena" style={{ padding: "12px 24px", borderRadius: "30px", background: "rgba(255,182,0,0.12)", color: "#d97706", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", border: "1px solid rgba(255,182,0,0.35)", transition: "all 0.2s ease" }}>FPT Arena Multimedia</a>
              <a href="#skillking" style={{ padding: "12px 24px", borderRadius: "30px", background: "rgba(41,169,225,0.12)", color: "#0284c7", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", border: "1px solid rgba(41,169,225,0.3)", transition: "all 0.2s ease" }}>FPT Skillking</a>
              <a href="#jetking" style={{ padding: "12px 24px", borderRadius: "30px", background: "rgba(237,35,42,0.1)", color: "#ed232a", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", border: "1px solid rgba(237,35,42,0.25)", transition: "all 0.2s ease" }}>FPT Jetking</a>
            </div>
          </div>
        </section>

        {/* BLOCK 2: FPT Aptech Campuses - Dark Warm Background */}
        <section 
          id="aptech"
          className="contact-program-section" 
          style={{ 
            padding: "100px 0", 
            background: "linear-gradient(135deg, #0f0702 0%, #1c0e04 100%)",
            color: "#ffffff",
            minHeight: "75vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <div className="container">
            <div className="contact-grid">
              
              {/* Left branding */}
              <div className="contact-col-left">
                <span className="section-eyebrow" style={{ color: "#f37021", fontWeight: 800 }}>FPT APTECH</span>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.2vw, 2.4rem)", fontWeight: 800, color: "#ffffff", lineHeight: "1.2", marginTop: "10px", whiteSpace: "nowrap", textWrap: "unset" }}>
                  LẬP TRÌNH VIÊN QUỐC TẾ
                </h2>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: "1.7", marginTop: "20px" }}>
                  Là đơn vị đào tạo công nghệ đầu tiên của Tập đoàn FPT từ năm 1999 liên kết với Tập đoàn Công nghệ thông tin toàn cầu Aptech Ấn Độ, với kinh nghiệm đào tạo 27 năm tại Việt Nam chương trình Lập trình tại FPT Aptech tích hợp AI được thiết kế giúp bạn học nhanh – đi làm sớm, tối ưu thời gian, tăng trải nghiệm thực tế và đáp ứng đúng nhu cầu của doanh nghiệp
                </p>
                <div style={{ marginTop: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                  <p style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "rgba(255,255,255,0.8)" }}>
                    <Globe size={16} style={{ color: "#f37021" }} /> 
                    <a href="https://aptech.fpt.edu.vn/" target="_blank" rel="noreferrer" style={{ color: "#ffffff", textDecoration: "underline" }}>
                      aptech.fpt.edu.vn
                    </a>
                  </p>
                </div>
              </div>

              {/* Right Address Grid */}
              <div className="contact-col-right">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                  {aptechCampuses.map((camp, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        background: "rgba(255,255,255,0.03)", 
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                        padding: "24px",
                        transition: "all 0.3s ease"
                      }}
                      className="contact-card-dark"
                    >
                      <span style={{ fontSize: "0.75rem", fontWeight: 800, padding: "4px 10px", background: "rgba(243,112,33,0.18)", color: "#f37021", borderRadius: "4px", textTransform: "uppercase" }}>
                        {camp.city}
                      </span>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginTop: "12px", marginBottom: "12px" }}>
                        {camp.name}
                      </h3>
                      
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", display: "flex", gap: "8px", margin: 0, lineHeight: "1.5" }}>
                          <MapPin size={16} style={{ color: "#f37021", flexShrink: 0, marginTop: "2px" }} />
                          {camp.address}
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", display: "flex", gap: "8px", margin: 0 }}>
                          <Phone size={16} style={{ color: "#f37021", flexShrink: 0 }} />
                          Hotline: {camp.hotline}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 3: FPT Arena Multimedia Campuses - Light Cream Background */}
        <section 
          id="arena"
          className="contact-program-section" 
          style={{ 
            padding: "100px 0", 
            backgroundColor: "#ffffff", 
            color: "var(--secondary)",
            minHeight: "75vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            borderTop: "1px solid rgba(0,0,0,0.05)"
          }}
        >
          <div className="container">
            <div className="contact-grid">
              
              {/* Left branding */}
              <div className="contact-col-left">
                <span className="section-eyebrow" style={{ color: "#d97706", fontWeight: 800 }}>FPT ARENA MULTIMEDIA</span>
                <h2 style={{ fontSize: "clamp(1.35rem, 2.1vw, 2.4rem)", fontWeight: 800, color: "var(--secondary)", lineHeight: "1.2", marginTop: "10px", whiteSpace: "nowrap", textWrap: "unset" }}>
                  THIẾT KẾ MỸ THUẬT ĐA PHƯƠNG TIỆN
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginTop: "20px" }}>
                  Được thành lập vào tháng 7/2004 trên cơ sở hợp tác giữa Tập đoàn FPT và Tập đoàn CNTT toàn cầu Aptech (Ấn Độ), FPT Arena Multimedia là hệ thống đào tạo Mỹ thuật đa phương tiện, tiên phong đưa khái niệm Multimedia đến với thế hệ trẻ Việt Nam. Với chương trình đào tạo bám sát nhu cầu của doanh nghiệp, FPT Arena Multimedia giúp học viên phát triển tư duy sáng tạo, xây dựng năng lực nghề nghiệp trong lĩnh vực thiết kế đa phương tiện.
                </p>
                <div style={{ marginTop: "30px", borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "20px" }}>
                  <p style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                    <Globe size={16} style={{ color: "#d97706" }} /> 
                    <a href="https://arena.fpt.edu.vn/" target="_blank" rel="noreferrer" style={{ color: "var(--secondary)", textDecoration: "underline" }}>
                      arena.fpt.edu.vn
                    </a>
                  </p>
                </div>
              </div>

              {/* Right Address Grid */}
              <div className="contact-col-right">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                  {arenaCampuses.map((camp, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        background: "#F8FAFC", 
                        border: "1px solid rgba(13, 33, 55, 0.06)",
                        borderRadius: "16px",
                        padding: "24px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                        transition: "all 0.3s ease"
                      }}
                      className="contact-card-light"
                    >
                      <span style={{ fontSize: "0.72rem", fontWeight: 800, padding: "4px 10px", background: "rgba(217, 119, 6, 0.1)", color: "#d97706", borderRadius: "4px", textTransform: "uppercase" }}>
                        {camp.city}
                      </span>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--secondary)", marginTop: "12px", marginBottom: "12px" }}>
                        {camp.name}
                      </h3>
                      
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", gap: "8px", margin: 0, lineHeight: "1.5" }}>
                          <MapPin size={15} style={{ color: "#d97706", flexShrink: 0, marginTop: "2px" }} />
                          {camp.address}
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", gap: "8px", margin: 0 }}>
                          <Phone size={15} style={{ color: "#d97706", flexShrink: 0 }} />
                          Hotline: {camp.hotline}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 4: FPT Skillking Campuses - Dark Blue/Cyan Background */}
        <section 
          id="skillking"
          className="contact-program-section" 
          style={{ 
            padding: "100px 0", 
            backgroundColor: "#041019", 
            color: "#ffffff",
            minHeight: "75vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <div className="container">
            <div className="contact-grid">
              
              {/* Left branding */}
              <div className="contact-col-left">
                <span className="section-eyebrow" style={{ color: "#29a9e1", fontWeight: 800 }}>FPT SKILLKING</span>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.2vw, 2.4rem)", fontWeight: 800, color: "#ffffff", lineHeight: "1.2", marginTop: "10px", whiteSpace: "nowrap", textWrap: "unset" }}>
                  DIGITAL MARKETING ỨNG DỤNG AI
                </h2>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: "1.7", marginTop: "20px" }}>
                  FPT Skillking là hệ thống đào tạo Digital Marketing được thành lập năm 2018, trên cơ sở hợp tác giữa Tập đoàn FPT và Tập đoàn Jetking (Ấn Độ), cung cấp chương trình học theo định hướng thực tiễn, trang bị cho học viên kiến thức từ nền tảng đến chuyên sâu trong lĩnh vực tiếp thị số. Chương trình đào tạo tại FPT Skillking ứng dụng AI vào quá trình giảng dạy và thực hành, giúp học viên nâng cao năng lực công nghệ, phát triển tư duy chiến lược và đáp ứng yêu cầu của doanh nghiệp trong kỷ nguyên số.
                </p>
                <div style={{ marginTop: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                  <p style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "rgba(255,255,255,0.8)" }}>
                    <Globe size={16} style={{ color: "#29a9e1" }} /> 
                    <a href="https://skillking.fpt.edu.vn/" target="_blank" rel="noreferrer" style={{ color: "#ffffff", textDecoration: "underline" }}>
                      skillking.fpt.edu.vn
                    </a>
                  </p>
                </div>
              </div>

              {/* Right Address Grid */}
              <div className="contact-col-right">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                  {skillkingCampuses.map((camp, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        background: "rgba(255,255,255,0.03)", 
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                        padding: "24px",
                        transition: "all 0.3s ease"
                      }}
                      className="contact-card-dark"
                    >
                      <span style={{ fontSize: "0.75rem", fontWeight: 800, padding: "4px 10px", background: "rgba(41,169,225,0.18)", color: "#29a9e1", borderRadius: "4px", textTransform: "uppercase" }}>
                        {camp.city}
                      </span>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginTop: "12px", marginBottom: "12px" }}>
                        {camp.name}
                      </h3>
                      
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", display: "flex", gap: "8px", margin: 0, lineHeight: "1.5" }}>
                          <MapPin size={16} style={{ color: "#29a9e1", flexShrink: 0, marginTop: "2px" }} />
                          {camp.address}
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", display: "flex", gap: "8px", margin: 0 }}>
                          <Phone size={16} style={{ color: "#29a9e1", flexShrink: 0 }} />
                          Hotline: {camp.hotline}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 5: FPT Jetking Campuses - Dark Crimson/Black Background */}
        <section 
          id="jetking"
          className="contact-program-section" 
          style={{ 
            padding: "100px 0", 
            backgroundColor: "#140304", 
            color: "#ffffff",
            minHeight: "75vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <div className="container">
            <div className="contact-grid">
              
              {/* Left branding */}
              <div className="contact-col-left">
                <span className="section-eyebrow" style={{ color: "#ed232a", fontWeight: 800 }}>FPT JETKING</span>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.2vw, 2.4rem)", fontWeight: 800, color: "#ffffff", lineHeight: "1.2", marginTop: "10px", whiteSpace: "nowrap", textWrap: "unset" }}>
                  CHIP DESIGN VÀ AI AGENT
                </h2>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: "1.7", marginTop: "20px" }}>
                  Để đáp ứng nhu cầu nhân lực công nghệ chất lượng cao tại Việt Nam, FPT Jetking tiên phong triển khai hai chương trình đào tạo chuẩn quốc tế: Thiết kế vi mạch bán dẫn và Lập trình AI Agent. Trong khi chương trình Thiết kế vi mạch (hợp tác cùng Jetking Ấn Độ) trang bị kỹ năng thiết kế tích hợp AI nhằm giải quyết bài toán thiếu hụt kỹ sư nền tảng cho các lĩnh vực IoT và 5G; thì chương trình Lập trình AI Agent giúp học viên làm chủ công nghệ lõi, đón đầu làn sóng 97 triệu việc làm mới vào năm 2027. Cả hai chương trình đều chú trọng vào kiến thức và kỹ năng thực hành thực tiễn, giúp người học tự tin nắm bắt những cơ hội nghề nghiệp bứt phá trong kỷ nguyên trí tuệ nhân tạo.
                </p>
                <div style={{ marginTop: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                  <p style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "rgba(255,255,255,0.8)" }}>
                    <Globe size={16} style={{ color: "#ed232a" }} /> 
                    <a href="https://jetking.fpt.edu.vn/" target="_blank" rel="noreferrer" style={{ color: "#ffffff", textDecoration: "underline" }}>
                      jetking.fpt.edu.vn
                    </a>
                  </p>
                </div>
              </div>

              {/* Right Address Grid */}
              <div className="contact-col-right">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                  {jetkingCampuses.map((camp, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        background: "rgba(255,255,255,0.03)", 
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                        padding: "24px",
                        transition: "all 0.3s ease"
                      }}
                      className="contact-card-dark"
                    >
                      <span style={{ fontSize: "0.75rem", fontWeight: 800, padding: "4px 10px", background: "rgba(237,35,42,0.18)", color: "#ed232a", borderRadius: "4px", textTransform: "uppercase" }}>
                        {camp.city}
                      </span>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginTop: "12px", marginBottom: "12px" }}>
                        {camp.name}
                      </h3>
                      
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", display: "flex", gap: "8px", margin: 0, lineHeight: "1.5" }}>
                          <MapPin size={16} style={{ color: "#ed232a", flexShrink: 0, marginTop: "2px" }} />
                          {camp.address}
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", display: "flex", gap: "8px", margin: 0 }}>
                          <Phone size={16} style={{ color: "#ed232a", flexShrink: 0 }} />
                          Hotline: {camp.hotline}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 6: Support & Hotline Hub - White Background - Compact Height */}
        <section 
          className="contact-hotline-section" 
          style={{ 
            padding: "60px 0", 
            backgroundColor: "#ffffff", 
            color: "var(--secondary)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            borderTop: "1px solid rgba(0, 0, 0, 0.05)"
          }}
        >
          {/* subtle design background */}
          <div style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,33,55,0.02) 0%, transparent 60%)",
            top: "-20%",
            left: "-10%",
            pointerEvents: "none"
          }} />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <span className="section-eyebrow" style={{ color: "var(--primary)", opacity: 1, fontWeight: 800, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              TỔNG ĐÀI HỖ TRỢ TOÀN QUỐC
            </span>
            
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 2.8rem)", fontWeight: 800, color: "var(--secondary)", marginTop: "12px", marginBottom: "8px", fontFamily: "var(--font-sans)" }}>
              Chúng tôi luôn sẵn sàng hỗ trợ
            </h2>
            
            <p style={{ maxWidth: "650px", color: "var(--text-muted)", margin: "0 auto 25px auto", fontSize: "1.05rem", lineHeight: "1.7" }}>
              Thời gian làm việc từ 8:00 - 21:00 hàng ngày, kể cả Thứ 7 và Chủ Nhật. Liên hệ ngay để được hỗ trợ thủ tục nhập học và tư vấn hướng nghiệp miễn phí.
            </p>

            <div style={{ display: "inline-block", background: "#0D2137", padding: "25px 40px", borderRadius: "24px", boxShadow: "0 20px 50px rgba(13,33,55,0.08)" }}>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", margin: "0 0 10px 0", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.1em" }}>
                HOTLINE HỖ TRỢ NHANH
              </p>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <a href="tel:02473008855" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--primary)", textDecoration: "none", lineHeight: "1" }}>
                  024 7300 8855
                </a>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.8rem" }}>|</span>
                <a href="tel:02367308826" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--primary)", textDecoration: "none", lineHeight: "1" }}>
                  0236 730 8826
                </a>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem", color: "var(--text-muted)" }}>
                <Clock size={18} style={{ color: "var(--primary)" }} />
                <span>Giờ làm việc: 8:00 - 21:00</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem", color: "var(--text-muted)" }}>
                <Heart size={18} style={{ color: "var(--primary)", fill: "currentColor" }} />
                <span>Đồng hành cùng học viên 24/7</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
