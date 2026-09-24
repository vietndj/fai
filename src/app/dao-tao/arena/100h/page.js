import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_ARENA_100H } from '@/data/courses';

export const metadata = {
  title: 'Bộ Khóa Học Multimedia Thực Chiến (100 Giờ) | FPT Arena',
  description: '4 Khóa học Multimedia chuyên sâu 100 giờ tại FPT Arena: Thiết kế Thương hiệu, Thiết kế App/Web UI/UX, Làm Video sáng tạo và Thiết kế Đồ họa 3D & Game.'
};

export default function Arena100hPage() {
  return <CourseLayout {...COURSE_ARENA_100H} activePath="/dao-tao/arena/100h" />;
}
