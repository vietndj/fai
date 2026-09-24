import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_ARENA_6_18THANG } from '@/data/courses';

export const metadata = {
  title: 'Thiết Kế 2D, 3D, Game & App Chuyên Sâu (6–18 Tháng) | FPT Arena',
  description: 'Lộ trình đào tạo Multimedia chuyên sâu linh hoạt từ 6 đến 18 tháng tại FPT Arena: Thiết kế Đồ họa & UI/UX, Làm phim & VFX, Hoạt hình 3D & Game Design.'
};

export default function Arena618ThangPage() {
  return <CourseLayout {...COURSE_ARENA_6_18THANG} activePath="/dao-tao/arena/6-18-thang" />;
}
