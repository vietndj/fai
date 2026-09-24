/**
 * Google Gemini 2.5 Flash Multimodal Article Generator
 * Generates 2 distinct editorial article options from image and user notes
 */

import { GoogleGenAI, Type } from '@google/genai';
import { generateFallbackArticleOptions } from './contentFallback.js';

const DEFAULT_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

const ARTICLE_OPTIONS_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    option1: {
      type: Type.OBJECT,
      description: 'Phương án 1: Trải nghiệm & Cảm hứng đời sống sinh viên FAI',
      properties: {
        title: { type: Type.STRING, description: 'Tiêu đề bài viết hấp dẫn, dưới 100 ký tự' },
        excerpt: { type: Type.STRING, description: 'Tóm tắt ngắn gọn 1-2 câu (120-220 ký tự)' },
        readTime: { type: Type.STRING, description: 'Thời gian đọc ước tính (ví dụ: 3 phút)' },
        contentHtml: {
          type: Type.STRING,
          description: 'Nội dung Semantic HTML hoàn chỉnh (chứa h3, p, blockquote, ul, li), không dùng markdown hay h1',
        },
      },
      required: ['title', 'excerpt', 'readTime', 'contentHtml'],
    },
    option2: {
      type: Type.OBJECT,
      description: 'Phương án 2: Thực chiến, Nghề nghiệp & Công nghệ FAI',
      properties: {
        title: { type: Type.STRING, description: 'Tiêu đề bài viết chuyên nghiệp, dưới 100 ký tự' },
        excerpt: { type: Type.STRING, description: 'Tóm tắt ngắn gọn 1-2 câu (120-220 ký tự)' },
        readTime: { type: Type.STRING, description: 'Thời gian đọc ước tính (ví dụ: 4 phút)' },
        contentHtml: {
          type: Type.STRING,
          description: 'Nội dung Semantic HTML hoàn chỉnh (chứa h3, p, blockquote, ul, li), không dùng markdown hay h1',
        },
      },
      required: ['title', 'excerpt', 'readTime', 'contentHtml'],
    },
  },
  required: ['option1', 'option2'],
};

const SYSTEM_INSTRUCTION = `Bạn là Trưởng ban Biên tập kiêm Chuyên gia Copywriting cấp cao của Viện Đào tạo Quốc tế FPT (FAI) — quản lý các chương trình: FPT Aptech, FPT Arena Multimedia, FPT Skillking và FPT Jetking.

Nhiệm vụ: Phân tích hình ảnh thực tế và ghi chú sơ lược từ cộng tác viên, sau đó tạo ra CHÍNH XÁC 2 PHƯƠNG ÁN BÀI VIẾT HOÀN CHỈNH mang 2 góc nhìn và phong cách tự sự khác biệt:

1. PHƯƠNG ÁN 1 (option1): Trải nghiệm & Cảm hứng (Storytelling, FAI Life)
- Phong cách: Giàu cảm xúc, chân thực, ấm áp, đậm chất đời sống sinh viên FAI ("Một cộng đồng - nhiều hành trình - không có khuôn mẫu", "Học để hiểu - Hiểu để làm được").
- Trọng tâm: Không khí sự kiện, cảm xúc tân khoa/sinh viên, tình bạn bè, thầy trò, vượt qua thử thách học tập.

2. PHƯƠNG ÁN 2 (option2): Thực chiến, Nghề nghiệp & Công nghệ (Professional & Action-Oriented)
- Phong cách: Sắc sảo, chuyên nghiệp, truyền cảm hứng nghề nghiệp, mang đậm chất công nghệ và kỹ năng tương lai (AI, vi mạch bán dẫn, mỹ thuật đa phương tiện số, lập trình fullstack, digital marketing).
- Trọng tâm: Giá trị sản phẩm đồ án, năng lực làm việc thực tế với doanh nghiệp, cơ hội nghề nghiệp và bài học đúc kết.

QUY TẮC NỘI DUNG (CHO CẢ 2 PHƯƠNG ÁN):
- Tiêu đề (title): Hấp dẫn, báo chí, dưới 100 ký tự.
- Tóm tắt (excerpt): Súc tích 1-2 câu (120-220 ký tự).
- Thời gian đọc (readTime): Ước tính số phút (ví dụ: "3 phút", "4 phút").
- Nội dung (contentHtml): Bài viết hoàn chỉnh 350 - 550 từ định dạng Semantic HTML:
  + Dùng <h3> cho tiêu đề các tiểu mục (tuyệt đối KHÔNG dùng <h1> hoặc <h2> vì trang đã có).
  + Dùng <p> cho từng đoạn văn rõ ràng, mạch lạc.
  + Dùng <blockquote> cho trích dẫn phát biểu tâm đắc của nhân vật/chuyên gia.
  + Dùng <ul>, <li> khi có danh sách điểm nhấn hoặc lưu ý.
  + Dùng <strong>, <em> để tạo điểm nhấn tự nhiên.
  + Tuyệt đối KHÔNG bọc mã trong khối \`\`\`html hay markdown thừa, chỉ trả về chuỗi HTML chuẩn bên trong JSON.`;

/**
 * Generate 2 distinct article options using Gemini 2.5 Flash
 * @param {Buffer|Uint8Array|null} photoBuffer - Raw image buffer (optional)
 * @param {string|null} mimeType - Image MIME type (e.g. 'image/jpeg', 'image/png')
 * @param {string} userNotes - User's raw ideas or draft notes
 * @param {Object} [options] - Additional options (model, apiKey)
 * @returns {Promise<{ option1: ArticleOption, option2: ArticleOption }>}
 */
export async function generateArticleOptions(photoBuffer, mimeType, userNotes = '', options = {}) {
  const apiKey = (options.apiKey || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '').trim();
  if (!apiKey) {
    console.warn('[Gemini] GEMINI_API_KEY is not configured. Seamlessly engaging Intelligent Fallback Content Pipeline.');
    return generateFallbackArticleOptions(userNotes, options);
  }

  try {
    const modelName = options.model || DEFAULT_MODEL;
    const ai = new GoogleGenAI({ apiKey });

    const contents = [];

    // Multimodal image attachment
    if (photoBuffer && (Buffer.isBuffer(photoBuffer) || photoBuffer instanceof Uint8Array)) {
      const rawBuffer = Buffer.isBuffer(photoBuffer) ? photoBuffer : Buffer.from(photoBuffer);
      contents.push({
        inlineData: {
          data: rawBuffer.toString('base64'),
          mimeType: mimeType || 'image/jpeg',
        },
      });
    }

    const promptText = `Hãy phân tích hình ảnh đính kèm (nếu có) và thông tin ghi chú sau để viết 2 bài viết hoàn chỉnh:\n\n` +
      `GHI CHÚ / Ý TƯỞNG CỦA TÁC GIẢ:\n"""\n${userNotes || 'Không có ghi chú cụ thể, hãy bám sát vào hình ảnh thực tế của FAI'}\n"""\n\n` +
      `Hãy tạo 2 phương án theo đúng cấu trúc JSON đã chỉ định.`;

    contents.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: modelName,
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: 'application/json',
        responseSchema: ARTICLE_OPTIONS_SCHEMA,
        temperature: 0.7,
      },
    });

    const rawText = response.text;
    if (!rawText) {
      throw new Error('Empty response received from Gemini 2.5 Flash');
    }

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      // Attempt cleaning if markdown backticks slipped through
      const cleaned = rawText.replace(/^```json\s*/, '').replace(/\s*```$/, '').trim();
      parsed = JSON.parse(cleaned);
    }

    // Handle case where options might be wrapped in an array
    let option1 = parsed.option1;
    let option2 = parsed.option2;

    if (!option1 && Array.isArray(parsed.options) && parsed.options.length >= 2) {
      option1 = parsed.options[0];
      option2 = parsed.options[1];
    }

    if (!option1 || !option2) {
      throw new Error('Gemini output did not return both option1 and option2');
    }

    return {
      option1: {
        title: String(option1.title || '').trim(),
        excerpt: String(option1.excerpt || '').trim(),
        readTime: String(option1.readTime || '3 phút').trim(),
        contentHtml: String(option1.contentHtml || '').trim(),
      },
      option2: {
        title: String(option2.title || '').trim(),
        excerpt: String(option2.excerpt || '').trim(),
        readTime: String(option2.readTime || '4 phút').trim(),
        contentHtml: String(option2.contentHtml || '').trim(),
      },
      isFallback: false,
    };
  } catch (apiError) {
    console.warn(`[Gemini] Gemini API call failed (${apiError.message}). Seamlessly engaging Intelligent Fallback Content Pipeline.`);
    return generateFallbackArticleOptions(userNotes, { ...options, fallbackReason: apiError.message });
  }
}

export { generateFallbackArticleOptions };
