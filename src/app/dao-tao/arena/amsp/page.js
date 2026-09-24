import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_ARENA_AMSP } from '@/data/courses';

export const metadata = {
  title: 'Arena Multimedia Specialist Program (AMSP 2 Năm) | FPT Arena',
  description: 'Chương trình đào tạo Chuyên gia Mỹ thuật Đa phương tiện Quốc tế 2 năm tại FPT Arena. Làm chủ Thiết kế 2D, Làm phim Kỹ thuật số, Hoạt hình 3D và Game Art Unreal Engine.'
};

export default function ArenaAmspPage() {
  return <CourseLayout {...COURSE_ARENA_AMSP} activePath="/dao-tao/arena/amsp" />;
}
