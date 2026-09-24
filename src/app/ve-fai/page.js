import AboutHeroSection from '@/components/ve-fai/AboutHeroSection';
import AboutPhilosophyStatsSection from '@/components/ve-fai/AboutPhilosophyStatsSection';
import AboutValuesSection from '@/components/ve-fai/AboutValuesSection';
import AboutTimelineSection from '@/components/ve-fai/AboutTimelineSection';
import AboutProgramsSection from '@/components/ve-fai/AboutProgramsSection';
import AboutCTASection from '@/components/ve-fai/AboutCTASection';
import AboutContactBannerSection from '@/components/ve-fai/AboutContactBannerSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Về FAI - Viện Đào Tạo Quốc Tế FPT',
  description: 'Khám phá 27 năm hình thành và phát triển của Viện Đào tạo Quốc tế FPT (FAI) cùng hệ sinh thái đào tạo công nghệ, thiết kế và marketing số hàng đầu.',
  openGraph: {
    title: 'Về FAI - Viện Đào Tạo Quốc Tế FPT',
    description: '27 năm kiến tạo nguồn nhân lực chất lượng cao sẵn sàng làm việc toàn cầu tại Tập đoàn FPT.'
  }
};

export default function VeFaiPage() {
  return (
    <div className="about-page-container" style={{ backgroundColor: '#ffffff', color: '#1a2332', fontFamily: 'var(--font-sans)' }}>
      <main className="sub-page-main" style={{ padding: 0 }}>
        {/* SECTION 1: Dynamic Typewriter Hero with Antigravity Particles */}
        <AboutHeroSection />

        {/* SECTION 2: FAI Philosophy & Animated Numbers */}
        <AboutPhilosophyStatsSection />

        {/* SECTION 3: Sứ Mệnh, Tầm Nhìn & Văn Hoá FPT Education */}
        <AboutValuesSection />

        {/* SECTION 4: High-Tech Cyber Timeline */}
        <AboutTimelineSection />

        {/* SECTION 5: Mạng lưới Chương trình Đào tạo */}
        <AboutProgramsSection />

        {/* SECTION 6: Hợp tác Doanh nghiệp CTA */}
        <AboutCTASection />

        {/* SECTION 7: Gia nhập FAI Banner */}
        <AboutContactBannerSection />
      </main>

      <Footer />
    </div>
  );
}
