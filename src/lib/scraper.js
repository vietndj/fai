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
    
    // Extract main content - simplistic approach, can be tailored for FPT Academy
    let contentHtml = '';
    // Look for common article containers
    const articleContainer = $('article, .post-content, .entry-content, .content-detail, #main-content');
    if (articleContainer.length > 0) {
      contentHtml = articleContainer.html();
    } else {
      // Fallback: grab all paragraphs
      let paragraphs = [];
      $('p').each((i, el) => {
        paragraphs.push(`<p>${$(el).html()}</p>`);
      });
      contentHtml = paragraphs.join('\n');
    }

    const excerpt = $('meta[name="description"]').attr('content') || 
                   $('meta[property="og:description"]').attr('content') || 
                   $(contentHtml).text().slice(0, 150) + '...';

    return {
      title: title.slice(0, 100), // Limit title length
      image,
      contentHtml,
      excerpt: excerpt.slice(0, 200),
      readTime: '4 phút', // Mock read time
      sourceUrl: url
    };
  } catch (error) {
    console.error("Scraping error:", error);
    throw error;
  }
}
