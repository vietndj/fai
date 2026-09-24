import CourseLayout from '@/components/course/CourseLayout';
import { COURSE_AI_AGENT } from '@/data/courses';

export const metadata = {
  title: 'Lập Trình AI Agent Chuyên Sâu (6 Tháng - 2 Năm) | FPT Jetking',
  description: 'Chương trình đào tạo Kỹ sư Lập trình AI Agent chuyên sâu đầu tiên tại Việt Nam. Làm chủ Generative AI, LLM, RAG và hệ thống Đa tác tử thông minh Multi-Agent Swarms.'
};

export default function AiAgentPage() {
  return <CourseLayout {...COURSE_AI_AGENT} activePath="/dao-tao/ai-agent" />;
}
