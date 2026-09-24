import Footer from '@/components/Footer';
import HeroSection from '@/components/tuyen-sinh/HeroSection';
import TargetAudienceSection from '@/components/tuyen-sinh/TargetAudienceSection';
import AdmissionMethodSection from '@/components/tuyen-sinh/AdmissionMethodSection';
import ScholarshipTabSection from '@/components/tuyen-sinh/ScholarshipTabSection';
import TuitionBankSection from '@/components/tuyen-sinh/TuitionBankSection';
import OnlineRegistrationSection from '@/components/tuyen-sinh/OnlineRegistrationSection';

export const metadata = {
  title: 'Quy chế tuyển sinh & Điều kiện nhập học 2026 | Viện Đào tạo Quốc tế FPT',
  description: 'Thông tin chi tiết về đối tượng tuyển sinh, chính sách xét tuyển thẳng, chế độ học bổng và thủ tục nhập học chính thức năm 2026 tại Viện Đào tạo Quốc tế FPT (FAI).',
  openGraph: {
    title: 'Quy chế tuyển sinh & Điều kiện nhập học 2026 | FAI',
    description: 'Xét tuyển thẳng, không thi tuyển. Học bổng tài năng đến 14 triệu cho các ngành CNTT, Thiết kế, Digital Marketing, Bán dẫn & AI.'
  }
};

export default function TuyenSinhPage() {
  return (
    <div 
      className="admissions-page-container" 
      style={{ 
        backgroundColor: '#ffffff', 
        color: '#1a2332', 
        fontFamily: 'var(--font-sans)' 
      }}
    >
      <main className="sub-page-main" style={{ padding: 0 }}>
        <HeroSection />
        <TargetAudienceSection />
        <AdmissionMethodSection />
        <ScholarshipTabSection />
        <TuitionBankSection />
        <OnlineRegistrationSection />
      </main>

      <Footer />
    </div>
  );
}
