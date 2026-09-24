import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_SKILLKING_18THANG } from '@/data/courses';

export const metadata = {
  title: 'Fullstack Digital Marketing With AI (18 Tháng) | FPT Skillking',
  description: 'Chương trình đào tạo Chuyên gia Digital Marketing Fullstack tích hợp AI 18 tháng chuẩn quốc tế tại FPT Skillking. Làm chủ Social Media, Performance Ads và Omnichannel IMC.'
};

export default function Skillking18ThangPage() {
  return <CourseLayout {...COURSE_SKILLKING_18THANG} activePath="/dao-tao/skillking/18-thang" />;
}
