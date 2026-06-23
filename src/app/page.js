import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import TrustBar from '@/components/TrustBar';
import Counters from '@/components/Counters';
import ProgramSelector from '@/components/ProgramSelector';
import BoldCTABlock from '@/components/BoldCTABlock';
import TechTerminal from '@/components/TechTerminal';
import PartnerMarquee from '@/components/PartnerMarquee';
import StudentLife from '@/components/StudentLife';
import Testimonials from '@/components/Testimonials';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FAI — FPT Academy International | 18 Năm Đào Tạo Quốc Tế',
  description: 'Cổng thông tin tổng hợp của hệ thống đào tạo quốc tế FPT — Aptech, Arena Multimedia và FPT Skillking. 18 năm dẫn đầu ngành công nghệ & sáng tạo Việt Nam.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Full-screen hero with brand statement */}
        <HeroSlider />

        {/* Trust ribbon: FPT + NIIT + 18 years */}
        <TrustBar />

        {/* 6 stats with counting animation */}
        <Counters />

        {/* 3 pillar cards with 3D tilt: Aptech | Arena | Skillking */}
        <ProgramSelector />

        {/* Big orange CTA block — animated gradient */}
        <BoldCTABlock />

        {/* VS Code terminal — what you'll learn */}
        <TechTerminal />

        {/* Partner logos marquee carousel */}
        <PartnerMarquee />

        {/* Bento grid student life */}
        <StudentLife />

        {/* Quote + CTA — animated navy gradient */}
        <Testimonials />

        {/* News & Events */}
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
