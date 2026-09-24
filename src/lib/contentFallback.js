/**
 * FAI Web Intelligent Content Fallback Pipeline
 * Zero-failure Vietnamese editorial article options generator
 * Strictly adheres to typography constraints and semantic HTML formatting
 */

function clampTitle(text, fallback = 'Bản Tin Đổi Mới Sáng Tạo FAI') {
  let cleaned = String(text || fallback).replace(/\s+/g, ' ').trim();
  if (cleaned.length > 95) {
    cleaned = cleaned.slice(0, 92).trim() + '...';
  }
  return cleaned;
}

function clampExcerpt(text, defaultText = 'Khám phá những góc nhìn chuyên sâu và câu chuyện thực tế về môi trường đào tạo công nghệ, mỹ thuật số thực chiến tại FAI.') {
  let cleaned = String(text || '').replace(/\s+/g, ' ').trim();
  if (cleaned.length < 120) {
    cleaned = (cleaned + ' ' + defaultText).trim();
  }
  if (cleaned.length > 220) {
    cleaned = cleaned.slice(0, 217).trim() + '...';
  }
  return cleaned;
}

function sanitizeHtml(html) {
  return String(html || '')
    .replace(/<h[12][^>]*>/gi, '<h3>')
    .replace(/<\/h[12]>/gi, '</h3>')
    .trim();
}

/**
 * Generate 2 distinct Vietnamese editorial options based on user notes and options
 * @param {string} userNotes - User raw ideas, caption, or article title
 * @param {Object} [options] - Configuration and context metadata
 * @returns {{ option1: Object, option2: Object, domain: string, brand: string, isFallback: boolean, fallbackReason?: string }}
 */
export function generateFallbackArticleOptions(userNotes = '', options = {}) {
  const notes = String(userNotes || '').trim();
  const firstLine = notes.split('\n')[0].replace(/[#*"'`]/g, '').trim();
  const searchCorpus = `${firstLine} ${notes}`.toLowerCase();

  let opt1Title = '';
  let opt2Title = '';
  let opt1Excerpt = '';
  let opt2Excerpt = '';
  let opt1Body = '';
  let opt2Body = '';
  let domain = 'general';
  let brand = options.categoryTitle || 'Viện Đào tạo Quốc tế FPT (FAI)';

  // Specialized Branch 1: Wireframing & UI/UX Design
  if (/wirefram|giao diện|ui[\s/-]?ux|ux[\s/-]?ui|\bui\b|\bux\b|figma|thiết kế/i.test(firstLine) ||
      (/wirefram/i.test(searchCorpus))) {
    domain = 'UI/UX & Product Design';
    brand = 'FPT Arena Multimedia / FAI';
    opt1Title = 'Wireframing Thực Chiến: Thiết Kế Chuẩn UX Từ Góc Nhìn Người Dùng';
    opt2Title = 'Từ Những Nét Vẽ Wireframe Đầu Tiên: Hành Trình Chạm Tới Trải Nghiệm Người Dùng';
    opt1Excerpt = 'Khám phá tư duy thiết kế Wireframe chuẩn UX, đặt người dùng làm trung tâm để tối ưu hóa trải nghiệm sản phẩm số và đáp ứng chuẩn mực thiết kế quốc tế.';
    opt2Excerpt = 'Câu chuyện truyền cảm hứng về những nét vẽ phác thảo đầu tiên, nơi học viên FAI từng bước biến ý tưởng trừu tượng thành giao diện chạm đến cảm xúc người dùng.';

    opt1Body = `<p class="lead">Trong quy trình phát triển sản phẩm công nghệ số, Wireframing không chỉ là bước phác thảo giao diện đơn thuần mà là khung xương định hình toàn bộ trải nghiệm người dùng (User Experience - UX).</p>
<h3>Tư duy thiết kế từ góc nhìn người dùng thực tế</h3>
<p>Một bản Wireframe xuất sắc xuất phát từ sự thấu hiểu sâu sắc hành vi và nhu cầu thực tế của người dùng cuối. Tại FAI, học viên được rèn luyện phương pháp nghiên cứu người dùng bài bản, phân tích luồng tương tác (user flow) và cấu trúc thông tin (information architecture) trước khi đặt bút vẽ từng khối chức năng.</p>
<h3>Quy chuẩn thực chiến từ giảng đường đến doanh nghiệp</h3>
<ul>
  <li><strong>Cấu trúc trực quan rõ ràng:</strong> Phân cấp thông tin mạch lạc, loại bỏ các yếu tố gây nhiễu để người dùng dễ dàng thao tác.</li>
  <li><strong>Tối ưu hóa khả năng thử nghiệm:</strong> Tạo điều kiện cho các vòng lặp phản hồi (feedback loop) diễn ra nhanh chóng giữa designer, developer và khách hàng.</li>
  <li><strong>Tiết kiệm tài nguyên phát triển:</strong> Phát hiện sớm các lỗ hổng trải nghiệm trước khi bước vào giai đoạn lập trình giao diện chi tiết.</li>
</ul>
<blockquote>
  "Thiết kế tốt không phải là sản phẩm trông bắt mắt nhất, mà là sản phẩm giúp người dùng đạt được mục tiêu một cách trực quan và dễ dàng nhất."
  <br><cite>— Ban Chuyên môn Đồ họa & Đa phương tiện FAI</cite>
</blockquote>
<p>Việc làm chủ kỹ năng Wireframing từ sớm chính là tấm vé thông hành vững chắc giúp các bạn trẻ tự tin khẳng định vị thế trong các creative agency và công ty công nghệ hàng đầu.</p>`;

    opt2Body = `<p class="lead">Mỗi sản phẩm công nghệ vĩ đại đều bắt đầu từ những nét phác thảo khiêm tốn trên trang giấy trắng — nơi những ý tưởng sơ khai được ấp ủ bằng tất cả niềm đam mê và khát vọng sáng tạo.</p>
<h3>Vượt qua bỡ ngỡ từ những nét vẽ đầu tiên</h3>
<p>Đối với nhiều tân học viên FAI, việc chuyển hóa một ý tưởng trừu tượng thành khung giao diện cụ thể từng là một thử thách không nhỏ. Nhưng dưới sự hướng dẫn tận tình của các giảng viên dày dạn kinh nghiệm, từng nét vẽ Wireframe đã dần trở nên sống động, phản chiếu câu chuyện và cảm xúc của chính người dùng.</p>
<h3>Niềm vui sáng tạo và tinh thần đồng đội</h3>
<ul>
  <li><strong>Thử nghiệm không sợ sai:</strong> Môi trường cởi mở khuyến khích các bạn trẻ tự do khám phá các góc nhìn thiết kế đột phá.</li>
  <li><strong>Đồng hành cùng mentor:</strong> Nhận được những lời khuyên sắc bén từ các chuyên gia đầu ngành trong từng buổi review đồ án.</li>
  <li><strong>Cảm xúc vỡ òa:</strong> Khoảnh khắc chứng kiến bản phác thảo của mình được người dùng thử nghiệm và yêu thích thực sự là phần thưởng vô giá.</li>
</ul>
<blockquote>
  "Khi nhìn thấy người dùng mỉm cười và sử dụng trơn tru ứng dụng do mình thiết kế từ những nét Wireframe đầu tiên, mình nhận ra đây chính là con đường mình muốn theo đuổi suốt đời."
  <br><cite>— Học viên phân hệ Multimedia FAI</cite>
</blockquote>
<p>Hành trình sáng tạo tại FAI không bao giờ có điểm dừng, bởi mỗi ngày trôi qua là một cơ hội mới để học viên vẽ nên tương lai của chính mình.</p>`;
  }
  // Specialized Branch 3: THPT Gesture AI
  else if (/thpt|cử chỉ|gesture|học sinh/i.test(firstLine) ||
           (/thpt/i.test(searchCorpus) && /cử chỉ|gesture|ai/i.test(searchCorpus))) {
    domain = 'Youth Technology & Gesture AI';
    brand = 'FPT Aptech / FAI';
    opt1Title = 'Ứng Dụng AI Điều Khiển Cử Chỉ: Dấu Ấn Sáng Tạo Thực Chiến Của Giới Trẻ FAI';
    opt2Title = 'Tuổi Trẻ Bản Lĩnh: Khi Học Sinh THPT Chinh Phục Công Nghệ AI Tại FPT Aptech';
    opt1Excerpt = 'Khám phá dự án ứng dụng điều khiển bằng cử chỉ đột phá do học sinh THPT phát triển tại FPT Aptech, minh chứng rõ nét cho năng lực thực chiến và tư duy công nghệ vượt trội.';
    opt2Excerpt = 'Câu chuyện đầy tự hào về những cô cậu học trò THPT dám ước mơ lớn, tự tay lập trình ứng dụng AI điều khiển cử chỉ và tỏa sáng rực rỡ tại sân chơi công nghệ FAI.';

    opt1Body = `<p class="lead">Sự phát triển vượt bậc của công nghệ thị giác máy tính (Computer Vision) đang mở ra những phương thức tương tác người - máy hoàn toàn mới, trong đó điều khiển bằng cử chỉ là một trong những ứng dụng nổi bật nhất.</p>
<h3>Công nghệ thị giác máy tính và ứng dụng tương tác không chạm</h3>
<p>Dự án điều khiển bằng cử chỉ do các bạn trẻ phát triển tại FPT Aptech đã ứng dụng các mô hình học sâu (Deep Learning) nhận diện điểm mốc trên bàn tay theo thời gian thực (real-time hand landmark detection). Hệ thống có khả năng nhận diện chính xác các cử chỉ phức tạp và chuyển hóa thành lệnh điều khiển thiết bị một cách mượt mà.</p>
<h3>Dấu ấn năng lực thực chiến từ độ tuổi học sinh</h3>
<ul>
  <li><strong>Làm chủ giải thuật AI hiện đại:</strong> Tối ưu hóa mô hình mạng nơ-ron để có thể chạy mượt mà ngay trên các thiết bị phần cứng thông thường.</li>
  <li><strong>Khả năng tích hợp hệ thống hoàn chỉnh:</strong> Kết nối trực tiếp giữa thuật toán xử lý hình ảnh và tầng điều khiển giao diện người dùng.</li>
  <li><strong>Tính ứng dụng xã hội cao:</strong> Hỗ trợ người dùng thao tác tiện lợi trong các môi trường đặc thù, mở ra cơ hội hỗ trợ người khuyết tật vận động.</li>
</ul>
<blockquote>
  "Chứng kiến các bạn học sinh THPT tự tay thiết kế và triển khai thành công một hệ thống AI hoàn chỉnh chứng minh rằng: khi được trao đúng phương pháp và môi trường thực chiến, tiềm năng của người trẻ là không có giới hạn."
  <br><cite>— Ban Chuyên môn Công nghệ FPT Aptech</cite>
</blockquote>
<p>Thành công này một lần nữa khẳng định triết lý đào tạo thực hành của FAI, biến niềm đam mê công nghệ tuổi trẻ thành những sản phẩm hữu ích cho xã hội.</p>`;

    opt2Body = `<p class="lead">Ai bảo chỉ những kỹ sư dày dạn kinh nghiệm mới làm được AI? Tại FPT Aptech, những học sinh còn đang ngồi trên ghế nhà trường THPT đã chứng minh điều hoàn toàn ngược lại.</p>
<h3>Khi đam mê công nghệ không đợi tuổi</h3>
<p>Bắt đầu từ sự tò mò với những bộ phim khoa học viễn tưởng về thế giới điều khiển bằng cử chỉ không chạm, các bạn trẻ đã quyết định biến ý tưởng tưởng chừng xa vời ấy thành hiện thực bằng chính kiến thức được học tại FPT Aptech.</p>
<h3>Hành trình từ con số 0 đến sản phẩm công nghệ ấn tượng</h3>
<ul>
  <li><strong>Vượt qua định kiến tuổi tác:</strong> Tự tin làm quen với các khái niệm lập trình và thuật toán máy học phức tạp.</li>
  <li><strong>Sự hỗ trợ tận tình từ mentor FAI:</strong> Thầy cô luôn kiên nhẫn hướng dẫn, sửa từng dòng code và động viên các bạn sau mỗi lần thử nghiệm thất bại.</li>
  <li><strong>Khoảnh khắc kỳ diệu:</strong> Cảm giác vỡ òa khi màn hình máy tính phản hồi chính xác theo từng chuyển động cử chỉ của bàn tay.</li>
</ul>
<blockquote>
  "Chúng em muốn chứng minh rằng học sinh Việt Nam hoàn toàn có thể làm chủ những công nghệ tiên tiến nhất thế giới nếu có đủ đam mê và được học tập trong môi trường thực chiến."
  <br><cite>— Đại diện Nhóm Học sinh THPT FPT Aptech</cite>
</blockquote>
<p>Câu chuyện của các bạn chính là nguồn cảm hứng mạnh mẽ, khích lệ thế hệ trẻ Việt Nam tự tin theo đuổi giấc mơ công nghệ và vươn tầm thế giới.</p>`;
  }
  // Specialized Branch 2: AI-First Software Developer
  else if (/ai-first|software developer|phần mềm|làm chủ ai|lập trình viên/i.test(firstLine) ||
           (/software developer|ai-first/i.test(searchCorpus))) {
    domain = 'AI-First Software Engineering';
    brand = 'FPT Aptech / FAI';
    opt1Title = 'AI-First Software Developer: Tái Định Hình Năng Lực Lập Trình Thực Chiến';
    opt2Title = 'Làm Chủ AI, Mở Lối Tương Lai: Câu Chuyện Bứt Phá Của Lập Trình Viên FAI';
    opt1Excerpt = 'Phân tích tư duy phát triển phần mềm định hướng AI-first, giúp lập trình viên tối ưu hóa hiệu suất, làm chủ các công cụ AI và kiến tạo giá trị đột phá cho doanh nghiệp.';
    opt2Excerpt = 'Từ những bỡ ngỡ ban đầu trước kỷ nguyên trí tuệ nhân tạo, sinh viên FAI chia sẻ hành trình chủ động biến AI thành trợ thủ đắc lực để bứt phá giới hạn cá nhân.';

    opt1Body = `<p class="lead">Làn sóng trí tuệ nhân tạo (AI) đang định hình lại căn bản cách thức phát triển phần mềm toàn cầu, đòi hỏi thế hệ kỹ sư công nghệ phải chuyển dịch tư duy từ lập trình truyền thống sang phương pháp AI-first.</p>
<h3>Tư duy AI-first và chuẩn mực phát triển phần mềm thế hệ mới</h3>
<p>Kỹ sư phát triển phần mềm định hướng AI-first không đơn thuần là người biết sử dụng công cụ sinh mã tự động, mà là người làm chủ kiến trúc hệ thống, biết cách tích hợp các mô hình ngôn ngữ lớn (LLM) và thuật toán máy học vào quy trình giải quyết bài toán nghiệp vụ phức tạp của doanh nghiệp.</p>
<h3>Trụ cột năng lực cốt lõi tại FPT Aptech</h3>
<ul>
  <li><strong>Làm chủ công nghệ và prompt engineering:</strong> Tinh chỉnh và khai thác tối đa sức mạnh của AI trong việc phân tích mã nguồn, phát hiện lỗi và tối ưu hiệu năng.</li>
  <li><strong>Kiến trúc hệ thống thông minh:</strong> Tích hợp linh hoạt các API AI vào ứng dụng web/mobile hiện đại, đảm bảo tính bảo mật và khả năng mở rộng cao.</li>
  <li><strong>Tập trung vào kiến tạo giá trị kinh doanh:</strong> Giải phóng thời gian khỏi các tác vụ lập trình lặp lại để tập trung vào logic sản phẩm và trải nghiệm người dùng.</li>
</ul>
<blockquote>
  "AI không thay thế lập trình viên, nhưng lập trình viên biết làm chủ AI sẽ nhanh chóng thay thế những người dậm chân tại chỗ. FAI trang bị cho sinh viên tư duy đón đầu xu thế đó ngay trên ghế nhà trường."
  <br><cite>— Ban Chuyên môn Công nghệ Thông tin FPT Aptech</cite>
</blockquote>
<p>Với hành trang kiến thức vững chắc và kinh nghiệm làm dự án thực chiến, sinh viên FAI luôn sẵn sàng đáp ứng những tiêu chuẩn tuyển dụng khắt khe nhất của thị trường công nghệ số.</p>`;

    opt2Body = `<p class="lead">Khi trí tuệ nhân tạo bùng nổ, câu hỏi không còn là "AI có lấy mất việc làm của chúng ta không?", mà là "Chúng ta sẽ làm gì để cùng AI tạo nên những kỳ tích mới?".</p>
<h3>Hành trình biến nỗi sợ hãi thành động lực bứt phá</h3>
<p>Nhớ lại những ngày đầu tiếp xúc với các công nghệ AI tiên tiến, không ít bạn trẻ cảm thấy choáng ngợp trước tốc độ thay đổi chóng mặt của công nghệ. Nhưng tại FAI, tinh thần "Học để hiểu - Hiểu để làm được" đã truyền cảm hứng để các bạn biến sự bỡ ngỡ thành khát khao chinh phục đỉnh cao mới.</p>
<h3>Những đêm thức trắng cùng dòng code và niềm tin vươn xa</h3>
<ul>
  <li><strong>Học cách đặt câu hỏi đúng:</strong> Làm chủ tư duy giao tiếp với AI để tìm ra lời giải cho những bài toán hóc búa nhất.</li>
  <li><strong>Tinh thần không ngại thử nghiệm:</strong> Cùng bạn bè trong nhóm đồ án xây dựng các ứng dụng thực tế có khả năng hỗ trợ cộng đồng.</li>
  <li><strong>Tự tin gia nhập thị trường:</strong> Nhận được sự đón nhận nồng nhiệt từ các doanh nghiệp tuyển dụng nhờ tư duy công nghệ sắc bén.</li>
</ul>
<blockquote>
  "Nhờ sự định hướng sát sao của các thầy cô FPT Aptech, mình đã học được cách biến AI thành người đồng đội đắc lực nhất, giúp mình hoàn thành những dự án mà trước đây mình chưa từng dám nghĩ tới."
  <br><cite>— Sinh viên Lập trình Phần mềm FPT Aptech</cite>
</blockquote>
<p>Ngọn lửa đam mê và tinh thần dấn thân ấy sẽ tiếp tục thắp sáng con đường sự nghiệp của các kỹ sư trẻ FAI trên đấu trường công nghệ quốc tế.</p>`;
  }
  // Specialized Branch 4: General FAI Innovation & Campus Life
  else {
    domain = 'FAI Campus & Student Life';
    const cleanTopic = firstLine.length > 45 ? firstLine.slice(0, 42).trim() + '...' : (firstLine || 'Đổi Mới Sáng Tạo FAI');
    opt1Title = clampTitle(`${cleanTopic}: Góc Nhìn Chuyên Sâu & Chuẩn Mực Đào Tạo Thực Chiến`);
    opt2Title = clampTitle(`${cleanTopic} – Hành Trình Bứt Phá Giới Hạn Của Sinh Viên FAI`);
    opt1Excerpt = 'Phân tích toàn diện về chuẩn mực đào tạo thực hành và phương pháp phát triển kỹ năng toàn diện, giúp sinh viên FAI tự tin hội nhập thị trường lao động quốc tế.';
    opt2Excerpt = 'Câu chuyện truyền cảm hứng về ngọn lửa đam mê, tinh thần đồng đội và hành trình vượt ngưỡng đáng nhớ của cộng đồng sinh viên Viện Đào tạo Quốc tế FPT.';

    opt1Body = `<p class="lead">Trong thời đại kinh tế số chuyển mình mạnh mẽ, năng lực thực chiến và khả năng thích ứng linh hoạt là thước đo giá trị hàng đầu cho sự thành công của nguồn nhân lực trẻ.</p>
<h3>Tư duy thực hành và môi trường học tập chuẩn quốc tế</h3>
<p>Tại Viện Đào tạo Quốc tế FPT (FAI), triết lý "Học để hiểu - Hiểu để làm được" được hiện thực hóa qua từng học phần. Sinh viên được cọ xát với các dự án thực tế, tiếp cận công nghệ tiên tiến và rèn luyện tác phong chuyên nghiệp ngay từ ngày đầu nhập học.</p>
<h3>Trụ cột nâng tầm giá trị sinh viên FAI</h3>
<ul>
  <li><strong>Chương trình đào tạo cập nhật liên tục:</strong> Bám sát chuẩn kỹ năng mà các doanh nghiệp công nghệ và truyền thông quốc tế đang tìm kiếm.</li>
  <li><strong>Đội ngũ mentor giàu kinh nghiệm:</strong> Giảng viên là các chuyên gia thực chiến sẵn sàng chia sẻ kinh nghiệm dự án thực tế.</li>
  <li><strong>Cơ hội việc làm rộng mở:</strong> Mạng lưới đối tác doanh nghiệp uy tín cam kết tuyển dụng và đồng hành cùng sự nghiệp sinh viên.</li>
</ul>
<blockquote>
  "FAI không chỉ cung cấp kiến thức, mà trang bị cho sinh viên bản lĩnh tự tin và tư duy đổi mới sáng tạo để vững vàng trước mọi thách thức của thời đại số."
  <br><cite>— Ban Lãnh đạo Viện Đào tạo Quốc tế FPT (FAI)</cite>
</blockquote>
<p>Đó chính là nền tảng vững chắc để các thế hệ sinh viên FAI tự tin sải bước và khẳng định dấu ấn riêng trên bản đồ nhân sự toàn cầu.</p>`;

    opt2Body = `<p class="lead">Mỗi ngày trôi qua tại Viện Đào tạo Quốc tế FPT (FAI) là một trải nghiệm đáng nhớ, nơi tình bạn, lòng nhiệt huyết và đam mê sáng tạo luôn bùng cháy.</p>
<h3>Nơi mỗi cá tính đều tìm thấy bệ phóng tỏa sáng</h3>
<p>Bước chân vào FAI, mỗi sinh viên mang theo những ước mơ và hoài bão riêng. Nhưng trong một môi trường cởi mở, không có khuôn mẫu gò bó, các bạn đã cùng nhau kết nối, sẻ chia và giúp nhau vượt qua những giới hạn của bản thân.</p>
<h3>Khoảnh khắc giảng đường và những bài học vô giá</h3>
<ul>
  <li><strong>Tinh thần đồng đội gắn kết:</strong> Cùng nhau vượt qua những kỳ đồ án căng thẳng để tạo nên những sản phẩm chất lượng.</li>
  <li><strong>Môi trường truyền cảm hứng:</strong> Những buổi workshop, hoạt động ngoại khóa sôi động làm phong phú thêm đời sống sinh viên.</li>
  <li><strong>Trưởng thành qua từng thử thách:</strong> Học cách lắng nghe, chấp nhận thất bại và kiên trì theo đuổi mục tiêu đến cùng.</li>
</ul>
<blockquote>
  "Khoảng thời gian học tập tại FAI đã thay đổi hoàn toàn cách mình nhìn nhận về tương lai. Mình tìm thấy đam mê thực sự và những người bạn tri kỷ cùng chung chí hướng."
  <br><cite>— Sinh viên Viện Đào tạo Quốc tế FPT (FAI)</cite>
</blockquote>
<p>Hành trình FAI Life sẽ luôn là ký ức tươi đẹp và là nguồn động lực vô tận cho các bạn trẻ trên con đường chinh phục những đỉnh cao mới.</p>`;
  }

  return {
    option1: {
      title: clampTitle(opt1Title),
      excerpt: clampExcerpt(opt1Excerpt),
      readTime: '4 phút',
      contentHtml: sanitizeHtml(opt1Body),
    },
    option2: {
      title: clampTitle(opt2Title),
      excerpt: clampExcerpt(opt2Excerpt),
      readTime: '3 phút',
      contentHtml: sanitizeHtml(opt2Body),
    },
    domain,
    brand,
    isFallback: true,
    ...(options.fallbackReason ? { fallbackReason: options.fallbackReason } : {}),
  };
}
