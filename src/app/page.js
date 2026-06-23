import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import TrustBar from '@/components/TrustBar';
import Counters from '@/components/Counters';
import ProgramBeau from '@/components/ProgramBeau';
import BoldCTABlock from '@/components/BoldCTABlock';
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

        {/* beau.vn style: 3 programs — large title + content list */}
        <ProgramBeau />

        {/* Big orange CTA block — animated gradient */}
        <BoldCTABlock />

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
