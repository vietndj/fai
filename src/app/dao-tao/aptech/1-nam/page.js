import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_APTECH_1NAM } from '@/data/courses';

export const metadata = {
  title: 'Chương trình Lập trình Backend 1 năm Tích hợp AI | FPT Aptech',
  description: 'Khóa học Lập trình Backend 1 năm tích hợp AI chuẩn quốc tế tại FPT Aptech. Làm chủ React, PHP Laravel, JavaFX, C# và Python Django trong 2 học kỳ.'
};

export default function Aptech1NamPage() {
  return <CourseLayout {...COURSE_APTECH_1NAM} activePath="/dao-tao/aptech/1-nam" />;
}
