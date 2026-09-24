import * as cheerio from 'cheerio';

export async function scrapeArticle(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const html = await res.text();
    const $ = cheerio.load(html);

    const title = $('title').text().trim() || $('meta[property="og:title"]').attr('content') || '';
    const image = $('meta[property="og:image"]').attr('content') || '';
    
    // TỐI ƯU LOGIC BÓC TÁCH (Advanced Scraping Logic for UX/UI)
    
    // 1. Loại bỏ toàn bộ form rác, iframe quảng cáo
    $('form, .wpcf7, iframe[src*="forms"], iframe[src*="docs.google.com/forms"], .fb-page, .widget, header, .entry-header, h1.entry-title').remove();
    
    // 2. Loại bỏ toàn bộ CSS inline (style="...") để tránh vỡ layout và kế thừa chuẩn CSS của web FAI
    $('*').removeAttr('style');
    
    // 3. Xử lý phần thân bài viết
    let contentHtml = '';
    const articleContainer = $('article, .post-content, .entry-content, .content-detail, #main-content').first();
    
    if (articleContainer.length > 0) {
      // 4. Xóa rác, liên hệ dư thừa ở đuôi bài viết
      const elements = articleContainer.children();
      for (let i = elements.length - 1; i >= 0; i--) {
        const el = $(elements[i]);
        const text = el.text().trim().toLowerCase();
        if (
          text.includes('mọi thắc mắc') || 
          text.includes('viện đào tạo quốc tế fpt') || 
          text.includes('địa chỉ:') || 
          text.includes('hotline:') || 
          text.includes('điện thoại:') ||
          text.includes('liên hệ:') ||
          text.includes('thông tin liên hệ')
        ) {
          el.remove(); // Cắt bỏ các đoạn footer text rác
        } else {
          // Gặp đoạn văn dài hơn 100 chữ => đây là nội dung chính, dừng việc cắt đuôi
          if (text.length > 100) break;
        }
      }
      
      // 5. Tối ưu UI Khối (Blocks)
      // a. Xóa các đoạn paragraph trống
      articleContainer.find('p').each((i, el) => {
        if (!$(el).text().replace(/\s|\xa0/g, '').trim() && $(el).find('img').length === 0 && $(el).find('iframe').length === 0) {
          $(el).remove();
        }
      });

      // b. Làm nổi bật đoạn mở đầu (Lead Paragraph)
      const firstP = articleContainer.find('p').first();
      if (firstP.length > 0 && firstP.text().length > 50) {
        firstP.addClass('lead'); // Class .lead đã có ở globals.css cho phông chữ to, sang trọng hơn
      }
      
      // c. Tối ưu ảnh: Khắc phục lazy-load và bọc chuẩn <figure>
      articleContainer.find('img').each((i, el) => {
        const $el = $(el);
        
        // 1. Phá vỡ lazy-load: Lấy link thật từ data-src hoặc data-lazy-src
        const realSrc = $el.attr('data-src') || $el.attr('data-lazy-src') || $el.attr('data-srcset');
        if (realSrc) {
          $el.attr('src', realSrc.split(' ')[0]); // Lấy URL đầu tiên nếu là srcset
        }
        
        $el.removeAttr('width').removeAttr('height').removeAttr('loading').removeAttr('srcset').removeAttr('data-src');
        $el.addClass('rounded-xl shadow-md my-6 w-full object-cover');
        
        // 2. Chuyển <p><img></p> thành <figure><img></figure> để chuẩn UI/UX
        const parent = $el.parent();
        if (parent[0] && parent[0].tagName.toLowerCase() === 'p') {
          // Nếu p chỉ chứa mỗi img này (hoặc có khoảng trắng), thì thay luôn p thành figure
          if (parent.text().trim() === '') {
             parent.replaceWith($('<figure class="image-editorial"></figure>').append($el));
          }
        }
      });
      
      contentHtml = articleContainer.html();
    } else {
      // Fallback nếu web không dùng class phổ thông
      let paragraphs = [];
      $('p').each((i, el) => {
        const text = $(el).text().trim().toLowerCase();
        if (
          text.includes('mọi thắc mắc') || 
          text.includes('viện đào tạo quốc tế fpt') || 
          text.includes('địa chỉ:') || 
          text.includes('hotline:')
        ) {
          return false;
        }
        paragraphs.push(`<p>${$(el).html()}</p>`);
      });
      contentHtml = paragraphs.join('\n');
    }

    // Tự động tìm link youtube thô và chuyển thành iframe
    contentHtml = contentHtml.replace(
      /<p>\s*(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*))\s*<\/p>/g,
      '<div class="block-video-wrapper"><iframe src="https://www.youtube.com/embed/$2" frameborder="0" allowfullscreen></iframe></div>'
    );
    // Hoặc link đứng trơ không có <p>
    contentHtml = contentHtml.replace(
      /(?<!src=")(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*))/g,
      '<div class="block-video-wrapper"><iframe src="https://www.youtube.com/embed/$2" frameborder="0" allowfullscreen></iframe></div>'
    );


    const excerpt = $('meta[name="description"]').attr('content') || 
                   $('meta[property="og:description"]').attr('content') || 
                   $(contentHtml).text().slice(0, 150) + '...';

    return {
      title: title.slice(0, 100),
      image,
      contentHtml,
      excerpt: excerpt.slice(0, 200),
      readTime: '4 phút',
      sourceUrl: url
    };
  } catch (error) {
    console.error("Scraping error:", error);
    throw error;
  }
}
