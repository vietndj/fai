import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_CHIP_DESIGN } from '@/data/courses';

export const metadata = {
  title: 'Thiết Kế Vi Mạch Bán Dẫn Quốc Tế (2 Năm) | FPT Jetking',
  description: 'Chương trình đào tạo Kỹ sư Thiết kế Vi mạch Bán dẫn tích hợp AI đầu tiên tại Việt Nam. Thực hành 100% trên bộ công cụ EDA bản quyền Synopsys và Cadence.'
};

export default function ChipDesignPage() {
  return <CourseLayout {...COURSE_CHIP_DESIGN} activePath="/dao-tao/chip-design" />;
}
