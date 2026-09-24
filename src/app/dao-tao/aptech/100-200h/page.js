import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_APTECH_100_200H } from '@/data/courses';

export const metadata = {
  title: 'Bộ Khóa Học Lập Trình Ngắn Hạn (100 - 200 Giờ) Tích hợp AI | FPT Aptech',
  description: 'Bộ khóa học lập trình ngắn hạn 100 - 200 giờ tại FPT Aptech: Full Stack Web, BA, Tester và Automation Test tích hợp công nghệ AI.'
};

export default function Aptech100200hPage() {
  return <CourseLayout {...COURSE_APTECH_100_200H} activePath="/dao-tao/aptech/100-200h" />;
}
