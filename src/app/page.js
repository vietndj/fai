import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ProgramSelector from '@/components/ProgramSelector';
import Counters from '@/components/Counters';
import StudentLife from '@/components/StudentLife';
import Testimonials from '@/components/Testimonials';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FAI - FPT Academy International | Trang chủ tổng hợp',
  description: 'Cổng thông tin tổng hợp của các phân hệ đào tạo quốc tế thuộc tập đoàn FPT bao gồm Arena Multimedia, Aptech, và FPT Skillking.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Banner Carousel Slider */}
        <HeroSlider />

        {/* Dropdown Program filtering list */}
        <ProgramSelector />

        {/* Statistics highlights */}
        <Counters />

        {/* Art Collage for Student Life */}
        <StudentLife />

        {/* Inspiring Alumni Testimonials */}
        <Testimonials />

        {/* News, Events, and Notices */}
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
