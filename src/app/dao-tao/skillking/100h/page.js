import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_SKILLKING_100H } from '@/data/courses';

export const metadata = {
  title: 'Bộ Khóa Học Digital Marketing Thực Chiến (100 Giờ) | FPT Skillking',
  description: '3 Khóa học ngắn hạn Digital Marketing 100 giờ tại FPT Skillking: Social Media Creator & Ads, Google Mastery SEO & SEM, S-Commerce & TikTok Shop.'
};

export default function Skillking100hPage() {
  return <CourseLayout {...COURSE_SKILLKING_100H} activePath="/dao-tao/skillking/100h" />;
}
