import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_APTECH_6THANG } from '@/data/courses';

export const metadata = {
  title: 'Chương trình Lập trình Frontend 6 tháng Tích hợp AI | FPT Aptech',
  description: 'Khóa học Lập trình Frontend 6 tháng cấp tốc tích hợp AI tại FPT Aptech. Làm chủ HTML5, CSS3, JavaScript ES6+, Figma UI/UX, ReactJS và nhận chứng chỉ quốc tế CPISM.'
};

export default function Aptech6ThangPage() {
  return <CourseLayout {...COURSE_APTECH_6THANG} activePath="/dao-tao/aptech/6-thang" />;
}
