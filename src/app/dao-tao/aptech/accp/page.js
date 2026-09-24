import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_ACCP } from '@/data/courses';

export const metadata = {
  title: 'Chương trình Lập trình viên Quốc tế ACCP AI 2026 | FPT Aptech',
  description: 'Chương trình đào tạo Lập trình viên Quốc tế 2 năm ACCP AI tại FPT Aptech. Học nhanh – Đi làm sớm, làm chủ Full-Stack Web, Java Microservices, Mobile Flutter và AI.'
};

export default function AccpPage() {
  return <CourseLayout {...COURSE_ACCP} activePath="/dao-tao/aptech/accp" />;
}
