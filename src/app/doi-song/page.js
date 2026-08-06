'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, X, ArrowRight, BookOpen, Coffee, Award, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const corePillars = [
  {
    tag: 'HỌC',
    title: 'Học để hiểu - Hiểu để làm được!',
    desc: 'Tiếp cận kiến thức chuyên môn, cập nhật xu hướng và rèn luyện năng lực thông qua các project thực chiến.',
    image: '/fai_pillar_1.jpg'
  },
  {
    tag: 'LÀM',
    title: 'Học từ thực tế, làm ra sản phẩm, ứng dụng vào công việc',
    desc: 'Biến kiến thức thành project, sản phẩm, portfolio và những trải nghiệm có thể ứng dụng vào công việc.',
    image: '/fai_pillar_2.jpg'
  },
  {
    tag: 'TRẢI NGHIỆM',
    title: 'Không chỉ đi học - Hãy sống trọn FAI Life',
    desc: 'Từ workshop, talkshow, cuộc thi đến thể thao, hoạt động cộng đồng và những sân chơi mới - mỗi trải nghiệm là một cơ hội để thử sức, kết nối và khám phá phiên bản khác của chính mình.',
    image: '/fai_pillar_3.jpg'
  },
  {
    tag: 'KẾT NỐI',
    title: 'Mở rộng Network - Mở rộng cơ hội',
    desc: 'Kết nối với doanh nghiệp, chuyên gia, nhà tuyển dụng và cộng đồng FAI để cập nhật cơ hội việc làm và phát triển nghề nghiệp liên tục.',
    image: '/fai_pillar_4.jpg'
  }
];

const categoryBlocks = [
  {
    id: 'graduation',
    title: 'Lễ tốt nghiệp qua các năm\nLễ tôn vinh SVXS các học kỳ',
    eyebrow: 'Mốc son vinh quang',
    desc: 'Khoảnh khắc ý nghĩa và tự hào, nhìn lại trọn vẹn chặng đường nỗ lực, đánh dấu cột mốc trưởng thành đầy tự hào cùng FAI',
    isLight: false,
    posts: [
      {
        id: 'le-tot-nghiep-2026-being-beyond',
        title: 'Lễ Tốt nghiệp 2026 Viện Đào tạo Quốc tế FPT Hà Nội: Khép lại hành trình “Being”, sẵn sàng bứt phá đến chân trời “Beyond”',
        date: '06-06-2026',
        image: '/le_tot_nghiep_2026_banner.jpg',
        sourceUrl: 'https://aptech.fpt.edu.vn/le-tot-nghiep-2026-vien-dao-tao-quoc-te-fpt-ha-noi-khep-lai-hanh-trinh-being-san-sang-but-pha-den-chan-troi-beyond.html',
        excerpt: 'Gần 300 tân khoa đến từ FPT Aptech, FPT Arena Multimedia, FPT Skillking và FPT Jetking đã cùng nhau đánh dấu cột mốc trưởng thành tại Lễ Tốt nghiệp 2026 với chủ đề “Beyond Being”.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Gần 300 tân khoa đến từ FPT Aptech, FPT Arena Multimedia, FPT Skillking và FPT Jetking đã cùng nhau đánh dấu cột mốc trưởng thành tại Lễ Tốt nghiệp 2026 Viện Đào tạo Quốc tế FPT Hà Nội với chủ đề <strong>“Beyond Being”</strong>.</p>
<p style="margin-bottom:16px;">Diễn ra tại Trung tâm Hội nghị Quốc gia, sự kiện không chỉ là ngày vinh danh những nỗ lực bền bỉ trong suốt hành trình học tập mà còn là điểm khởi đầu cho một chặng đường mới, nơi mỗi người trẻ sẵn sàng vượt qua giới hạn của bản thân để chinh phục những cơ hội rộng mở phía trước.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">“Beyond Being” – Hành trình trưởng thành để vươn xa</h3>
<p style="margin-bottom:16px;">Chiều ngày 06/06, Phòng Khánh tiết – Trung tâm Hội nghị Quốc gia đã trở thành nơi lưu giữ những khoảnh khắc đáng nhớ của gần 300 tân khoa thuộc Viện Đào tạo Quốc tế FPT. Sau hơn 700 ngày học tập, trải nghiệm và không ngừng hoàn thiện bản thân, các sinh viên đã chính thức khép lại một chương thanh xuân đầy ý nghĩa để bước sang giai đoạn mới của cuộc đời.</p>
<p style="margin-bottom:16px;">Lấy chủ đề <em>“Beyond Being – Trưởng thành để vươn xa”</em>, lễ tốt nghiệp năm nay tái hiện hành trình phát triển của các sinh viên từ những ngày đầu bỡ ngỡ bước chân vào giảng đường cho đến khi đủ bản lĩnh, tri thức và sự tự tin để chinh phục những mục tiêu lớn hơn.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Khoảnh khắc thiêng liêng và nghi thức vắt dải mũ</h3>
<p style="margin-bottom:16px;">Một trong những phần được mong chờ nhất của chương trình là nghi thức trao bằng tốt nghiệp và vắt dải mũ cử nhân. Tấm bằng trên tay và dải mũ được chuyển sang vị trí mới tượng trưng cho việc hoàn thành hành trình sinh viên, mở ra một chặng đường trưởng thành hơn với nhiều cơ hội rộng mở.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Vinh danh gương mặt Academic Excellence tiêu biểu</h3>
<p style="margin-bottom:12px;">Danh hiệu Academic Excellence năm 2026 đã được trao cho các cá nhân xuất sắc đại diện cho 4 chuyên ngành đào tạo:</p>
<ul style="margin-bottom:20px;padding-left:20px;line-height:1.8;">
  <li><strong>Lại Quốc Huy</strong> – Academic Excellence FPT Jetking</li>
  <li><strong>Nguyễn Hoa Vinh</strong> – Academic Excellence FPT Skillking</li>
  <li><strong>Dương Đình Thứ</strong> – Academic Excellence FPT Aptech</li>
  <li><strong>Vũ Mai Linh</strong> – Academic Excellence FPT Arena Multimedia</li>
</ul>`
      },
      {
        id: 'le-ton-vinh-svxs-fall-2025-van-mieu',
        title: 'Lễ tôn vinh sinh viên xuất sắc kỳ Fall 2025 tại Văn Miếu - Quốc Tử Giám: Nơi cội nguồn tri thức, viết tiếp hành trình tương lai',
        date: '04-03-2026',
        image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/03/Anh-1-3-1024x576.webp',
        sourceUrl: 'https://arena.fpt.edu.vn/le-ton-vinh-sinh-vien-xuat-sac-ky-fall-2025-tai-van-mieu-quoc-tu-giam-noi-coi-nguon-tri-thuc-viet-tiep-hanh-trinh-tuong-lai/',
        excerpt: 'Trong không gian linh thiêng của Văn Miếu – Quốc Tử Giám, Viện Đào tạo Quốc tế FPT trang trọng tổ chức Lễ tôn vinh những sinh viên xuất sắc nhất kỳ Fall 2025.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Tối 04/03, trong không gian linh thiêng của <strong>Văn Miếu – Quốc Tử Giám</strong>, Viện Đào tạo Quốc tế FPT (bao gồm FPT Aptech, FPT Arena, FPT Skillking, FPT Jetking) đã trang trọng tổ chức <strong>Lễ tôn vinh Sinh viên Xuất sắc học kỳ Fall 2025</strong>.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Tôn vinh trí tuệ và tinh thần hiếu học tại nơi cội nguồn tri thức</h3>
<p style="margin-bottom:16px;">Văn Miếu – Quốc Tử Giám từ lâu đã là biểu tượng của tinh thần hiếu học, tôn sư trọng đạo và tri thức Việt Nam. Việc lựa chọn không gian văn hóa lịch sử này làm nơi tôn vinh các cá nhân có thành tích học tập xuất sắc không chỉ mang lại niềm tự hào toàn diện cho mỗi sinh viên mà còn nhắc nhở thế hệ trẻ về trách nhiệm tiếp nối truyền thống hiếu học của cha ông.</p>
<p style="margin-bottom:16px;">Tại buổi lễ, hàng chục cá nhân xuất sắc đoạt danh hiệu <em>Cử nhân Ong Vàng (Best Student)</em> và <em>Top Sinh viên Xuất sắc các chuyên ngành</em> đã bước lên bục vinh danh trong niềm hạnh phúc và vỡ òa của thầy cô, bạn bè và gia đình.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Hành trình nỗ lực không ngừng nghỉ</h3>
<p style="margin-bottom:16px;">Để đạt được danh hiệu cao quý này, các bạn sinh viên đã trải qua một học kỳ làm việc miệt mài với hàng trăm giờ thực hành phòng Lab, hoàn thành xuất sắc các đồ án thực tế e-Project, xây dựng sản phẩm ứng dụng thực tế và vượt qua các tiêu chí đánh giá khắt khe của hội đồng chuyên môn.</p>`
      },
      {
        id: 'hbr-holdings-dong-hanh-le-tot-nghiep-fai-2025',
        title: 'HBR Holdings Đồng Hành Cùng Lễ Tốt Nghiệp Viện Đào Tạo Quốc Tế FPT 2025',
        date: '16-07-2025',
        image: '/hbr_holdings_banner.png',
        sourceUrl: 'https://hbrholdings.vn/hbr-holdings-dong-hanh-cung-le-tot-nghiep-fai-ha-noi-2025',
        excerpt: 'HBR Holdings đồng hành cùng Lễ Tốt nghiệp 2025 Viện Đào tạo Quốc tế FPT - sự kiện tôn vinh thế hệ “Neoformers” trẻ trung, bản lĩnh.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;"><strong>HBR Holdings</strong> hân hạnh đồng hành cùng Lễ Tốt nghiệp Viện Đào tạo Quốc tế FPT – sự kiện tôn vinh thế hệ tân khoa <em>“Neoformers”</em> trẻ trung, bản lĩnh và giàu khát vọng sáng tạo.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Cầu nối bền vững giữa Doanh nghiệp và Nhà trường</h3>
<p style="margin-bottom:16px;">Là một trong những đối tác chiến lược hàng đầu của FPT Aptech, FPT Arena, FPT Skillking và FPT Jetking, HBR Holdings luôn đánh giá cao chất lượng đào tạo thực chiến, tư duy công nghệ và khả năng thích ứng linh hoạt của sinh viên Viện Đào tạo Quốc tế FPT.</p>
<p style="margin-bottom:16px;">Đại diện HBR Holdings chia sẻ: <em>"HBR Holdings luôn chào đón các tân khoa FPT gia nhập hệ sinh thái của chúng tôi. Các bạn sinh viên FAI không chỉ vững chuyên môn mà còn sở hữu tinh thần chủ động, tư duy phản biện và khả năng ứng dụng công nghệ hiện đại vào công việc thực tế."</em></p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Mở rộng cơ hội nghề nghiệp và phát triển bền vững</h3>
<p style="margin-bottom:16px;">Thông qua việc đồng hành tại Lễ Tốt nghiệp, HBR Holdings tái khẳng định cam kết mang lại nhiều cơ hội tuyển dụng, chương trình thực tập tài năng và cơ hội thăng tiến cho tân khoa FPT, cùng tạo dựng một môi trường làm việc học tập trọn đời và phát triển bền vững.</p>`
      }
    ]
  },
  {
    id: 'enterprise',
    title: 'Doanh nghiệp & FAI',
    eyebrow: 'Kết nối việc làm thực chiến',
    desc: 'Đồng hành cùng các đối tác công nghệ & sáng tạo hàng đầu, FAI mang đến trải nghiệm "học thật - làm thật", tạo lối tắt vững chắc đưa sinh viên bước thẳng vào thị trường lao động.',
    isLight: true,
    posts: [
      {
        id: 'fai-career-connect-01',
        title: 'FAI Career Connect 01: Kết nối doanh nghiệp, mở rộng cơ hội nghề nghiệp cho sinh viên',
        date: '27-04-2026',
        image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/04/B58-FAI1.webp',
        sourceUrl: 'https://arena.fpt.edu.vn/fai-career-connect-01-ket-noi-doanh-nghiep-mo-rong-co-hoi-nghe-nghiep-cho-sinh-vien/',
        excerpt: 'Viện Đào tạo Quốc tế FPT tổ chức chương trình FAI Career Connect 01 tạo cầu nối trực tiếp giữa sinh viên và các đối tác doanh nghiệp uy tín.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Với mong muốn tăng cường liên kết giữa nhà trường và doanh nghiệp, <strong>Viện Đào tạo Quốc tế FPT</strong> (bao gồm FPT Aptech, FPT Arena, FPT Skillking, FPT Jetking) chính thức phát động chuỗi sự kiện <strong>FAI Career Connect 01</strong>.</p>
<p style="margin-bottom:16px;">Chương trình mở ra không gian giao lưu trực tiếp, nơi các bạn sinh viên được gặp gỡ đại diện nhân sự, nghe chia sẻ về xu hướng công nghệ mới và tham gia phỏng vấn thử sức ngay tại trường.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Rút ngắn khoảng cách giữa Đào tạo và Nhu cầu thực tế</h3>
<p style="margin-bottom:16px;">Chương trình thu hút sự tham gia của nhiều doanh nghiệp công nghệ, thiết kế và marketing hàng đầu. Tại buổi kết nối, đại diện doanh nghiệp đã đánh giá cao chất lượng đồ án và tinh thần thực chiến của học viên FAI.</p>
<p style="margin-bottom:16px;">Bên cạnh cơ hội ứng tuyển cho các vị trí Lập trình viên, Nhà thiết kế UI/UX và Digital Marketer, sinh viên còn nhận được những góp ý giá trị giúp hoàn thiện Portfolio cá nhân chuẩn doanh nghiệp.</p>`
      },
      {
        id: 'co-well-asia-ky-ket-hop-tac-fpt-aptech',
        title: 'CO-WELL Asia ký kết hợp tác với FPT Aptech: Cùng hướng đến một thế hệ lập trình viên chất lượng',
        date: '14-04-2025',
        image: 'https://co-well.vn/wp-content/uploads/2025/04/250415-ky-ket-aptech-feature.jpg',
        sourceUrl: 'https://co-well.vn/co-well-asia-ky-ket-hop-tac-voi-fpt-aptech-cung-huong-den-mot-the-he-lap-trinh-vien-chat-luong/',
        excerpt: 'CO-WELL Asia chính thức ký kết hợp tác chiến lược cùng FPT Aptech, mở ra nhiều cơ hội tuyển dụng và thực tập cho sinh viên công nghệ.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Ngày 14/04/2025, <strong>CO-WELL Asia</strong> chính thức ký kết hợp tác chiến lược với <strong>FPT Aptech Hà Nội</strong>, đánh dấu bước tiến quan trọng trong việc tạo dựng nguồn nhân lực lập trình chất lượng cao.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Đồng hành phát triển nhân lực CNTT chất lượng cao</h3>
<p style="margin-bottom:16px;">Theo thỏa thuận hợp tác, CO-WELL Asia sẽ phối hợp cùng FPT Aptech tổ chức các buổi Workshop chuyên đề, chương trình đào tạo kỹ năng thực chiến và tiếp nhận sinh viên FPT Aptech tham gia thực tập, làm việc chính thức tại công ty.</p>
<p style="margin-bottom:16px;">Sự hợp tác này giúp sinh viên FPT Aptech tiếp cận trực tiếp với các dự án phần mềm quy mô lớn, nâng cao năng lực lập trình và sẵn sàng hội nhập môi trường làm việc quốc tế ngay sau khi tốt nghiệp.</p>`
      },
      {
        id: 'fpt-arena-ky-ket-hop-tac-esoft',
        title: 'FPT Arena ký kết hợp tác với Esoft: Khẳng định mối quan hệ lâu dài, bền vững',
        date: '20-05-2025',
        image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/04/B58-FAI2.webp',
        sourceUrl: 'https://arena.fpt.edu.vn/fpt-arena-ky-ket-hop-tac-voi-esoft-khang-dinh-moi-quan-he-lau-dai-ben-vung/',
        excerpt: 'FPT Arena Multimedia và Công ty TNHH Esoft Việt Nam thắt chặt mối quan hệ hợp tác 10 năm, tạo bệ phóng sự nghiệp vững chắc cho sinh viên Multimedia.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;"><strong>FPT Arena Multimedia</strong> và <strong>Công ty TNHH Esoft Việt Nam</strong> đã chính thức ký kết thỏa thuận hợp tác chiến lược, nâng tầm mối quan hệ đồng hành bền vững suốt 10 năm qua.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">10 Năm gắn kết – Mở rộng cơ hội nghề nghiệp lĩnh vực Multimedia & 3D Art</h3>
<p style="margin-bottom:16px;">Esoft Việt Nam là một trong những doanh nghiệp hàng đầu trong lĩnh vực đồ họa 2D/3D và hậu kỳ truyền thông. Trong hơn 10 năm qua, hàng trăm sinh viên FPT Arena đã trưởng thành và đảm nhận các vị trí quan trọng tại Esoft.</p>
<p style="margin-bottom:16px;">Thỏa thuận ký kết cam kết tiếp tục mang lại các chương trình học bổng tài năng, cơ hội kiến tập thực tế và chính sách tuyển dụng ưu tiên dành riêng cho học viên FPT Arena.</p>`
      }
    ]
  },
  {
    id: 'sharing',
    title: 'Nhỏ to cùng chia sẻ - Nói nhỏ nói to',
    eyebrow: 'Góc tâm sự & kinh nghiệm',
    desc: 'Nơi sinh viên chia sẻ bí quyết học tập, vượt qua áp lực đồ án và cân bằng cuộc sống.',
    isLight: false,
    posts: [
      {
        id: 'hanh-trinh-chinh-phuc-trai-tim-chip',
        title: 'Hành trình chinh phục “trái tim” Chip: Đồ án tốt nghiệp mang khát vọng thực chiến của sinh viên công nghệ',
        date: '18-05-2026',
        image: 'https://aptech.fpt.edu.vn/wp-content/uploads/2025/10/ATOM-dat-giai-tai-FPT-Hackathon-2025-1-1200x800.jpg',
        sourceUrl: 'https://jetking.fpt.edu.vn/hanh-trinh-chinh-phuc-trai-tim-chip-tot-nghiep-mang-khat-vong-thuc-chien-cua-sinh-vien-cong-nghe/',
        excerpt: 'Không chỉ là một đồ án tốt nghiệp, dự án nghiên cứu quy trình thiết kế vi mạch chuyên sâu của nhóm sinh viên ngành Chip Design tại FPT Jetking đã tái hiện chân thực hành trình tạo ra một con chip theo tiêu chuẩn công nghiệp.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Không chỉ là một đồ án tốt nghiệp, dự án nghiên cứu quy trình thiết kế vi mạch chuyên sâu của nhóm sinh viên ngành <strong>Chip Design tại FPT Jetking</strong> đã tái hiện chân thực hành trình tạo ra một con chip theo tiêu chuẩn công nghiệp.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Từ những đêm trắng sửa lỗi đến khát vọng vi mạch Việt Nam</h3>
<p style="margin-bottom:16px;">Để hoàn thiện đồ án thiết kế vi mạch bán dẫn tích hợp AI, nhóm sinh viên đã trải qua hàng trăm giờ làm việc liên tục trên các phần mềm mô phỏng và kiểm thử chuyên dụng của Synopsys và Cadence.</p>
<p style="margin-bottom:16px;">Chia sẻ về khó khăn, đại diện nhóm cho biết: <em>"Lĩnh vực thiết kế vi mạch đòi hỏi sự chính xác tuyệt đối ở từng cổng logic và đường nạp. Có những lỗi timing phải mất cả tuần gỡ code, nhưng khi nhìn thấy con chip mô phỏng chạy hoàn hảo, cảm xúc vỡ òa không gì sánh bằng."</em></p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Khẳng định năng lực thực chiến đáp ứng cơn khát nhân lực bán dẫn</h3>
<p style="margin-bottom:16px;">Đồ án của nhóm được hội đồng chuyên môn đánh giá cao về tính khả thi và tư duy thiết kế hệ thống chuẩn công nghiệp. Sự thành công của dự án là minh chứng rõ nét cho chất lượng đào tạo công nghệ bán dẫn chuẩn quốc tế tại FPT Jetking.</p>`
      },
      {
        id: 'nguyen-ngoc-anh-danh-hieu-svxs',
        title: 'Nguyễn Ngọc Ánh: Không để tuổi tác giới hạn hành trình chinh phục tri thức và danh hiệu Sinh viên Xuất sắc',
        date: '12-05-2026',
        image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/03/Anh-2-1-1024x576.webp',
        sourceUrl: 'https://arena.fpt.edu.vn/nguyen-ngoc-anh-khong-de-tuoi-tac-gioi-han-hanh-trinh-chinh-phuc-tri-thuc-va-danh-hieu-sinh-vien-xuat-sac/',
        excerpt: 'Sau hơn 6 năm làm việc trong lĩnh vực Marketing, Nguyễn Ngọc Ánh vẫn quyết định quay trở lại giảng đường để theo học chuyên ngành UI/UX & Web Design tại FPT Arena.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Sau hơn 6 năm đi làm trong lĩnh vực Marketing, <strong>Nguyễn Ngọc Ánh</strong> vẫn quyết định tạm gác lại công việc ổn định để quay trở lại giảng đường, chinh phục ước mơ theo học chuyên ngành <strong>UI/UX & Web Design tại FPT Arena Multimedia</strong>.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Tuổi tác chưa bao giờ là rào cản đối với đam mê học hỏi</h3>
<p style="margin-bottom:16px;">Bước vào môi trường học tập với các bạn sinh viên Gen Z trẻ trung, Ngọc Ánh không cảm thấy e ngại mà ngược lại coi đó là động lực để không ngừng làm mới bản thân. Bằng sự kiên trì, tư duy làm việc nghiêm túc và tinh thần chủ động, chị đã xuất sắc đạt danh hiệu <em>Sinh viên Xuất sắc của học kỳ</em>.</p>
<p style="margin-bottom:16px;">Ngọc Ánh nhắn gửi: <em>"Đừng bao giờ để tuổi tác hay định kiến xã hội giới hạn khả năng học hỏi của bạn. Chỉ cần bạn có mục tiêu rõ ràng và quyết tâm hành động, mỗi ngày đi học đều là một ngày hạnh phúc."</em></p>`
      },
      {
        id: 'nhom-mlb-cu-dup-giai-thuong',
        title: 'Game 3D "Háu ăn" và hành trình chinh phục “cú đúp” giải thưởng của nhóm MLB FPT Arena',
        date: '05-05-2026',
        image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/07/Them-tieu-de-4-1024x714.webp',
        sourceUrl: 'https://arena.fpt.edu.vn/hanh-trinh-chinh-phuc-cu-dup-giai-thuong-cua-nhom-mlb-fpt-arena/',
        excerpt: 'Nhóm MLB đến từ FPT Arena Multimedia gặt hái thành công kép với dự án Game 3D "Háu ăn" tại FPT Edu Research Festival 2025 và triển lãm thiết kế.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Nhóm sinh viên <strong>MLB đến từ FPT Arena Multimedia</strong> đã ghi dấu ấn rực rỡ khi xuất sắc giành “cú đúp” giải thưởng lớn với sản phẩm <strong>Game 3D độc đáo mang tên "Háu ăn"</strong>.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Sáng tạo đột phá từ ý tưởng đồ án đến giải thưởng nghiên cứu toàn quốc</h3>
<p style="margin-bottom:16px;">Dự án Game 3D "Háu ăn" là thành quả sau nhiều tháng nỗ lực dựng hình 3D nhân vật, lập trình chuyển động và tối ưu hóa trải nghiệm người dùng của cả nhóm. Sản phẩm đã đoạt Giải Khuyến khích tại <em>FPT Edu Research Festival 2025</em> cùng giải thưởng Đồ án xuất sắc nhất phân hệ Arena.</p>
<p style="margin-bottom:16px;">Bí quyết thành công của nhóm chính là sự phối hợp ăn ý giữa tư duy mỹ thuật 3D sáng tạo và khả năng áp dụng công nghệ đồ họa thế hệ mới vào sản phẩm Game thực chiến.</p>`
      }
    ]
  },
  {
    id: 'contests',
    title: 'Sân chơi & giải thưởng',
    eyebrow: 'Khai phá tài năng',
    desc: 'Khám phá các cuộc thi học thuật quy mô lớn, đấu trường quốc tế cùng các triển lãm thiết kế thường niên.',
    isLight: true,
    posts: [
      {
        id: '100-hrs-2026-just-de-fruits',
        title: '100 giờ bứt phá trên đấu trường sáng tạo quốc tế: Just De Fruits giành Giải Ba tại 100 HRS 2026',
        date: '16-04-2026',
        image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/07/756800711_1040140018772947_3107573404418563662_n-1024x768.webp',
        sourceUrl: 'https://arena.fpt.edu.vn/100-gio-but-pha-tren-dau-truong-sang-tao-quoc-te-just-de-fruits-gianh-giai-ba-tai-100-hrs-2026/',
        excerpt: 'Chỉ trong 100 giờ thử thách liên tục từ đề bài bí mật, nhóm Just De Fruits xuất sắc vượt qua hàng chục đội thi quốc tế để đoạt Giải Ba tại 100 HRS 2026.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Chỉ trong 100 giờ thử thách liên tục từ một chủ đề hoàn toàn bí mật, nhóm <strong>Just De Fruits đến từ FPT Arena Multimedia</strong> đã xuất sắc vượt qua hàng chục đối thủ quốc tế để giành <strong>Giải Ba tại cuộc thi 100 HRS 2026</strong>.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Đấu trường sáng tạo 100 giờ nghẹt thở</h3>
<p style="margin-bottom:16px;">100 HRS là cuộc thi làm phim hoạt hình & thiết kế đồ họa quy mô toàn cầu do hệ thống Aptech Worldwide tổ chức. Các đội thi phải hoàn thành trọn vẹn một tác phẩm từ kịch bản, dựng hình 3D, diễn hoạt đến hậu kỳ trong vòng đúng 100 giờ đồng hồ.</p>
<p style="margin-bottom:16px;">Với ý tưởng nhân văn sâu sắc cùng tư duy mỹ thuật ấn tượng, tác phẩm của Just De Fruits đã thuyết phục hoàn toàn ban giám khảo quốc tế, khẳng định vị thế và bản lĩnh của sinh viên FPT Arena trên bản đồ sáng tạo thế giới.</p>`
      },
      {
        id: 'atom-toa-sang-fpt-hackathon-2025',
        title: 'Atom lần thứ hai tỏa sáng tại FPT Hackathon 2025',
        date: '28-11-2025',
        image: 'https://aptech.fpt.edu.vn/wp-content/uploads/2025/10/ATOM-dat-giai-tai-FPT-Hackathon-2025-1-1200x800.jpg',
        sourceUrl: 'https://aptech.fpt.edu.vn/atom-lan-thu-hai-toa-sang-tai-fpt-hackathon-2025.html',
        excerpt: 'Đội tuyển Atom đến từ FPT Aptech lần thứ hai xuất sắc vinh danh tại FPT Hackathon 2025 với giải pháp phần mềm thông minh ứng dụng AI.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Vượt qua hàng trăm đội lập trình viên trẻ xuất sắc, đội tuyển <strong>Atom từ FPT Aptech</strong> đã lần thứ hai liên tiếp tỏa sáng tại <strong>FPT Hackathon 2025</strong> với giải pháp phần mềm thông minh ứng dụng Trí tuệ nhân tạo (AI).</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Bản lĩnh lập trình viên FPT Aptech tại đấu trường Code 24h</h3>
<p style="margin-bottom:16px;">Trong 24 giờ giải mã bài toán thực tế do các tập đoàn công nghệ đặt ra, Atom đã phát triển thành công ứng dụng tự động hóa quy trình hỗ trợ doanh nghiệp với giao diện thân thiện và kiến trúc dữ liệu tối ưu.</p>
<p style="margin-bottom:16px;">Chiến thắng này tiếp tục khẳng định triết lý đào tạo thực chiến và tinh thần không ngại thử thách của sinh viên FPT Aptech tại các đấu trường lập trình chuyên nghiệp.</p>`
      },
      {
        id: 'vietfuture-awards-2025-fpt',
        title: 'Sinh viên Viện Đào tạo Quốc tế FPT bùng nổ sáng tạo tại VietFuture Awards 2025',
        date: '15-12-2025',
        image: '/vietfuture_awards_2025.jpg',
        sourceUrl: 'https://arena.fpt.edu.vn/sinh-vien-vien-dao-tao-quoc-te-fpt-bung-no-sang-tao-tai-vietfuture-awards-2025/',
        excerpt: 'Sau sáu tháng tranh tài cùng hơn 200 đề cử từ khắp cả nước, sinh viên Viện Đào tạo Quốc tế FPT đã ghi dấu ấn mạnh mẽ tại VietFuture Awards 2025.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Sau 6 tháng tranh tài quyết liệt cùng hơn 200 đề cử xuất sắc từ khắp các trường đại học toàn quốc, sinh viên <strong>Viện Đào tạo Quốc tế FPT (FAI)</strong> đã ghi dấu ấn bùng nổ tại <strong>VietFuture Awards 2025</strong>.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Khẳng định tài năng sáng tạo và khát vọng vươn xa</h3>
<p style="margin-bottom:16px;">VietFuture Awards là giải thưởng vinh danh các dự án đổi mới sáng tạo, sản phẩm thiết kế và giải pháp công nghệ tiêu biểu của thế hệ trẻ Việt Nam. Các đồ án tốt nghiệp của sinh viên FAI thuộc các lĩnh vực AI, UI/UX Design, Game 3D và Chip Design đã giành hàng loạt giải thưởng quan trọng.</p>
<p style="margin-bottom:16px;">Thành tích rực rỡ này là nguồn động lực to lớn cho các thế hệ học viên tiếp theo vững tin học tập và tự tin đưa sản phẩm thực chiến ra thị trường.</p>`
      }
    ]
  },
  {
    id: 'community',
    title: 'FAI & cộng đồng',
    eyebrow: 'Trách nhiệm xã hội & Trải nghiệm',
    desc: 'Chuỗi hoạt động gắn kết, phong trào tình nguyện và ngày hội trải nghiệm công nghệ gắn kết cộng đồng.',
    isLight: false,
    posts: [
      {
        id: 'nu-cuoi-am-2026',
        title: 'Nụ cười ấm 2026: Hành trình trải nghiệm xã hội đầy ý nghĩa của sinh viên Viện Đào tạo Quốc tế FPT',
        date: '10-01-2026',
        image: 'https://aptech.fpt.edu.vn/wp-content/uploads/2026/02/Anh-1-1400x788.jpg',
        sourceUrl: 'https://aptech.fpt.edu.vn/nu-cuoi-am-2026-hanh-trinh-trai-nghiem-xa-hoi-day-y-nghia-cua-sinh-vien-vien-dao-tao-quoc-te-fpt.html',
        excerpt: 'Chương trình thiện nguyện thường niên Nụ Cười Ấm 2026 mang yêu thương, sách vở và hỗ trợ công nghệ đến với trẻ em vùng cao.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Chương trình tình nguyện thường niên <strong>“Nụ Cười Ấm 2026”</strong> đã mang đến những trải nghiệm xã hội đầy xúc động và ý nghĩa nhân văn cho sinh viên Viện Đào tạo Quốc tế FPT (FAI).</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Sẻ chia tri thức – Gieo mầm hy vọng</h3>
<p style="margin-bottom:16px;">Trong chuyến đi, các bạn sinh viên FAI đã tự tay trao tặng hàng trăm phần quà Tết, sách vở, thiết bị máy tính và tổ chức các lớp học trải nghiệm sáng tạo cho trẻ em tại các điểm trường khó khăn.</p>
<p style="margin-bottom:16px;">Hành trình không chỉ giúp lan tỏa tình yêu thương đến cộng đồng mà còn giúp mỗi sinh viên rèn luyện tinh thần trách nhiệm xã hội, thấu hiểu giá trị của sự sẻ chia và trưởng thành hơn qua từng trải nghiệm.</p>`
      },
      {
        id: 'choi-anh-cao-phong-2-ngay-1-dem',
        title: '"Chơi ảnh" và những "gia vị" cần thiết: 2 ngày 1 đêm thực chiến săn ảnh tại Cao Phong của sinh viên FAN',
        date: '22-03-2026',
        image: 'https://arena.fpt.edu.vn/wp-content/uploads/2026/05/web-3-1024x627.webp',
        sourceUrl: 'https://arena.fpt.edu.vn/choi-anh-va-nhung-gia-vi-can-thiet-2-ngay-1-dem-thuc-chien-san-anh-tai-cao-phong-cua-sinh-vien-fan/',
        excerpt: 'Hành trình 2 ngày 1 đêm thực chiến săn ảnh tại Caofong Glamping Village giúp sinh viên FPT Arena rèn luyện tư duy nhiếp ảnh thực tế và gắn kết tình đồng đội.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Hành trình 2 ngày 1 đêm tại <strong>Caofong Glamping Village</strong> đã mang đến trải nghiệm săn ảnh thực chiến khó quên cho sinh viên <strong>FPT Arena Multimedia (FAN)</strong> qua dự án <em>“Chơi ảnh và những gia vị cần thiết”</em>.</p>

<h3 style="font-size:1.35rem;font-weight:800;color:#0f172a;margin:24px 0 12px;">Thực hành nhiếp ảnh giữa thiên nhiên và gắn kết đồng đội</h3>
<p style="margin-bottom:16px;">Dưới sự hướng dẫn của các giảng viên nhiếp ảnh giàu kinh nghiệm, các bạn sinh viên đã trực tiếp bấm máy sáng tác các bộ ảnh chân dung, phong cảnh và đời sống thiên nhiên trong điều kiện ánh sáng tự nhiên thực tế.</p>
<p style="margin-bottom:16px;">Bên cạnh kiến thức chuyên môn về góc máy và ánh sáng, chuyến đi còn là cơ hội tuyệt vời để sinh viên cùng cắm trại, sinh hoạt tập thể và thắt chặt tình bạn thanh xuân.</p>`
      },
      {
        id: 'video-trai-nghiem-fai-life',
        title: 'Video Trải Nghiệm Sinh Viên FAI: Hành trình thanh xuân & Kết nối cộng đồng',
        date: '15-02-2026',
        image: 'https://img.youtube.com/vi/1zBrZkTbPw8/maxresdefault.jpg',
        sourceUrl: 'https://www.youtube.com/watch?v=1zBrZkTbPw8',
        excerpt: 'Thước phim chân thực ghi lại những khoảnh khắc nhiệt huyết, hoạt động ngoại khóa sôi nổi và hành trình gắn kết cộng đồng của sinh viên FAI.',
        contentHtml: `<p class="lead" style="font-size:1.15rem;font-weight:600;line-height:1.7;color:#1e293b;margin-bottom:20px;">Cùng xem video trải nghiệm sống động ghi lại trọn vẹn những khoảnh khắc đáng nhớ của sinh viên Viện Đào tạo Quốc tế FPT (FAI) trong các hoạt động ngoại khóa, thể thao và dự án cộng đồng!</p>

<div style="position:relative;width:100%;aspect-ratio:16/9;margin:20px 0;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.15);">
  <iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/1zBrZkTbPw8?autoplay=1" 
    title="Video Trải Nghiệm Sinh Viên FAI" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
  ></iframe>
</div>

<p style="margin-bottom:16px;">Mỗi sự kiện là một mảnh ghép rực rỡ tạo nên môi trường học tập năng động, nơi sinh viên không chỉ giỏi chuyên môn mà còn tự tin hòa nhập và tỏa sáng.</p>`
      }
    ]
  }
];

function PostCardImage({ src, alt, date }) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
      <Image 
        src={imgSrc} 
        alt={alt || ''} 
        fill 
        style={{ objectFit: 'cover' }} 
        onError={() => setImgSrc('/fai_pillar_1.jpg')} 
      />
      <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'var(--primary)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase' }}>
        {date}
      </span>
    </div>
  );
}

function CategoryBlockItem({ block, onSelectPost }) {
  const scrollRef = useRef(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const isDown = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  const handlePointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftVal.current = scrollRef.current.scrollLeft;
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handlePointerUp = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handlePointerMove = (e) => {
    if (e.pointerType !== 'mouse' || !isDown.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
      setIsGrabbing(true);
      e.preventDefault();
      scrollRef.current.scrollLeft = scrollLeftVal.current - walk;
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const isLight = block.isLight;
  const bgColor = isLight ? '#ffffff' : '#070d18';
  const textColor = isLight ? 'var(--secondary)' : '#ffffff';
  const cardBg = isLight ? '#ffffff' : 'rgba(255,255,255,0.03)';
  const cardBorder = isLight ? '1px solid rgba(13,33,55,0.08)' : '1px solid rgba(255,255,255,0.08)';
  const cardShadow = isLight ? '0 10px 30px rgba(0,0,0,0.04)' : '0 10px 30px rgba(0,0,0,0.2)';
  const descColor = isLight ? 'var(--text-muted)' : 'rgba(255,255,255,0.65)';

  return (
    <section 
      style={{ 
        padding: '90px 0', 
        backgroundColor: bgColor, 
        color: textColor,
        position: 'relative',
        overflow: 'hidden',
        borderBottom: isLight ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div className="container">
        {/* Centered Block Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--primary)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            {block.eyebrow}
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: textColor, fontFamily: 'var(--font-sans)', margin: 0, whiteSpace: 'pre-line', lineHeight: '1.3' }}>
            {block.title}
          </h2>
          <p style={{ color: descColor, maxWidth: '620px', margin: '14px auto 0 auto', fontSize: '0.95rem', lineHeight: '1.65' }}>
            {block.desc}
          </p>
        </div>

        {/* Outer Wrapper with Side Arrows */}
        <div style={{ position: 'relative', width: '100%', padding: '0 10px' }}>
          <button 
            onClick={() => scroll('prev')}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: isLight ? '#ffffff' : 'rgba(255,255,255,0.1)',
              border: isLight ? '1px solid rgba(13,33,55,0.1)' : '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              color: isLight ? 'var(--secondary)' : '#ffffff',
              transition: 'all 0.3s ease',
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Horizontal Scroll Track */}
          <div 
            ref={scrollRef}
            className="horizontal-timeline-wrapper"
            style={{ 
              display: 'flex', 
              gap: '30px', 
              overflowX: 'auto', 
              paddingBottom: '20px', 
              scrollSnapType: isGrabbing ? 'none' : 'x mandatory',
              scrollbarWidth: 'thin',
              scrollbarColor: isLight ? 'rgba(13,33,55,0.15) transparent' : 'rgba(255,255,255,0.2) transparent',
              cursor: isGrabbing ? 'grabbing' : 'grab',
              userSelect: 'none',
              WebkitUserSelect: 'none'
            }}
            onPointerDown={handlePointerDown}
            onPointerLeave={handlePointerLeave}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
          >
            {(() => {
              const parsePostDate = (dStr) => {
                if (!dStr) return 0;
                const p = dStr.split('-');
                return p.length === 3 ? new Date(parseInt(p[2], 10), parseInt(p[1], 10) - 1, parseInt(p[0], 10)).getTime() : 0;
              };
              const sortedPosts = [...block.posts].sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date));
              return sortedPosts.map((post) => (
                <div 
                  key={post.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!hasDragged.current) {
                      onSelectPost(post);
                    }
                  }}
                  style={{
                    flex: '0 0 360px',
                    scrollSnapAlign: 'start',
                    background: cardBg,
                    border: cardBorder,
                    borderRadius: '16px',
                    boxShadow: cardShadow,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <PostCardImage src={post.image} alt={post.title} date={post.date} />
                  
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: '1.45', color: textColor, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '50px', fontFamily: 'var(--font-sans)' }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: descColor, lineHeight: '1.6', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '42px' }}>
                      {post.excerpt}
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', marginTop: '10px' }}>
                      Xem chi tiết <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              ));
            })()}
          </div>

          <button 
            onClick={() => scroll('next')}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: isLight ? '#ffffff' : 'rgba(255,255,255,0.1)',
              border: isLight ? '1px solid rgba(13,33,55,0.1)' : '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              color: isLight ? 'var(--secondary)' : '#ffffff',
              transition: 'all 0.3s ease',
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function DoiSong() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const timelineRef = useRef(null);
  
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  const handlePointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = true;
    setIsGrabbing(true);
    startX.current = e.pageX - timelineRef.current.offsetLeft;
    scrollLeftVal.current = timelineRef.current.scrollLeft;
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handlePointerUp = (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown.current = false;
    setIsGrabbing(false);
  };

  const handlePointerMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    timelineRef.current.scrollLeft = scrollLeftVal.current - walk;
  };

  const scrollTimeline = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = 370;
      timelineRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="student-life-page-container" style={{ backgroundColor: '#ffffff', color: '#1a2332' }}>
      <Header />

      <main className="student-life-main" style={{ padding: 0 }}>
        
        {/* BLOCK 1: Hero Section */}
        <section 
          className="student-life-hero-section" 
          style={{ 
            padding: '160px 0 80px 0', 
            background: 'linear-gradient(135deg, #050c1a 0%, #0D2137 100%)',
            color: '#ffffff',
            minHeight: '45vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            width: '600px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 140, 255, 0.1) 0%, transparent 70%)',
            top: '10%',
            left: '-10%',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <span className="section-eyebrow" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              TRẢI NGHIỆM FAI
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: '1.15', marginTop: '16px', fontFamily: 'var(--font-sans)' }}>
              Trải nghiệm sinh viên
            </h1>
            <div style={{ maxWidth: '820px', margin: '24px auto 0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '18px', lineHeight: '1.5' }}>
                “Một cộng đồng - nhiều hành trình - không có khuôn mẫu”
              </p>
              
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.02rem', lineHeight: '1.85', margin: 0 }}>
                Ở đây không có “mẫu số chung” của một sinh viên Viện đào tạo quốc tế FPT (FAI). Có người đến FAI để bắt đầu một hành trình nghề nghiệp. Có người rẽ hướng sang một lĩnh vực mới. Có người vừa đi làm, vừa đi học để nâng cấp chuyên môn. Có người đã có công việc, dự án riêng hay đang xây dựng doanh nghiệp nhưng vẫn tiếp tục học thêm mỗi ngày. FAI không định nghĩa người học bằng tuổi tác, xuất phát điểm hay công việc hiện tại.
              </p>

              <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginTop: '22px', fontStyle: 'italic', letterSpacing: '0.01em' }}>
                Mỗi FAIer một hành trình. Mỗi hành trình một câu chuyện. Và tất cả cùng gặp nhau tại FAI.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCK 2: 4 TRỤ CỘT SINH VIÊN (HỌC - LÀM - TRẢI NGHIỆM - KẾT NỐI) */}
        <section 
          className="student-life-timeline-section" 
          style={{ 
            padding: '90px 0', 
            backgroundColor: '#F8F5F0', 
            color: 'var(--secondary)',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <div className="container">
            <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '45px' }}>
              <span className="section-eyebrow" style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--primary)', textTransform: 'uppercase' }}>
                Mỗi FAIer một nhịp sống
              </span>
              <h2 className="section-headline" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '10px', fontFamily: 'var(--font-sans)' }}>
                Học - Làm - Trải Nghiệm - Kết Nối
              </h2>
              <p style={{ color: 'rgba(13, 33, 55, 0.82)', maxWidth: '780px', margin: '14px auto 0 auto', fontSize: '0.98rem', lineHeight: '1.7' }}>
                Một ngày của FAIer có thể bắt đầu một ngày làm việc tiếp nối bằng những giờ học, một buổi chạy project, một workshop chuyên môn, những trận đấu thể thao cháy hết mình đến cuộc thi, chuyến đi doanh nghiệp và vô vàn khoảnh khắc “không có trong lớp học” hay đơn giản chỉ là cuộc hẹn kết nối với những người bạn cùng lớp.
              </p>
            </div>

            <div className="pillars-grid-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              {corePillars.map((item, idx) => (
                <div 
                  key={idx} 
                  className="pillar-info-card" 
                  style={{ 
                    background: '#ffffff',
                    border: '1px solid rgba(13, 33, 55, 0.08)',
                    borderRadius: '20px',
                    padding: '24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Primary Landmark Title */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid rgba(249, 115, 22, 0.12)' }}>
                    <h3 
                      style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 900, 
                        color: 'var(--primary)', 
                        margin: 0,
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        lineHeight: '1.1'
                      }}
                    >
                      {item.tag}
                    </h3>
                    <span 
                      style={{ 
                        fontSize: '0.82rem', 
                        fontWeight: 800, 
                        color: 'var(--primary)', 
                        background: 'rgba(249, 115, 22, 0.08)',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontFamily: 'var(--font-sans)', 
                        letterSpacing: '0.05em' 
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  
                  {/* Image Showcase */}
                  <div 
                    style={{ 
                      position: 'relative', 
                      width: '100%', 
                      aspectRatio: '16/10', 
                      borderRadius: '14px', 
                      overflow: 'hidden', 
                      marginBottom: '18px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                    }}
                  >
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} className="timeline-img" />
                  </div>
                  
                  {/* Sub-headline Slogan */}
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '10px', lineHeight: '1.45', fontFamily: 'var(--font-sans)' }}>
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p style={{ fontSize: '0.88rem', color: 'rgba(13, 33, 55, 0.72)', lineHeight: '1.65', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 CATEGORY BLOCKS ALTERNATING DARK/LIGHT WITH FPT ORANGE HIGHLIGHT */}
        {categoryBlocks.map((block) => (
          <CategoryBlockItem key={block.id} block={block} onSelectPost={setSelectedPost} />
        ))}

        {/* Support Hotline CTA (LIGHT BACKGROUND) */}
        <section 
          className="student-life-cta-section" 
          style={{ 
            padding: '80px 0', 
            backgroundColor: '#F8F5F0',
            color: 'var(--secondary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <span className="section-eyebrow" style={{ color: 'var(--primary)', opacity: 1, fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              KẾT NỐI VỚI CHÚNG TÔI
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', fontWeight: 800, color: 'var(--secondary)', marginTop: '12px', marginBottom: '18px', fontFamily: 'var(--font-sans)' }}>
              Bạn muốn trải nghiệm đời sống sinh viên FAI thực tế?
            </h2>
            <p style={{ maxWidth: '650px', color: 'var(--text-muted)', margin: '0 auto 30px auto', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Hãy đăng ký tham gia các hoạt động Campus Tour, lớp học thử miễn phí hoặc liên hệ ngay hotline hỗ trợ tuyển sinh để được giải đáp mọi thắc mắc.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/tuyen-sinh" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                Đăng ký tư vấn ngay
              </Link>
              <a href="tel:0983883883" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '1rem', background: '#ffffff', color: 'var(--secondary)' }}>
                Hotline: 0983 883 883
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ARTICLE DETAIL MODAL */}
      {selectedPost && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: 'rgba(5, 12, 26, 0.85)',
            backdropFilter: 'blur(8px)',
            animation: 'fadeInUp 0.3s ease'
          }}
          onClick={() => setSelectedPost(null)}
        >
          <div 
            style={{
              backgroundColor: '#ffffff',
              color: '#1a2332',
              borderRadius: '24px',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div 
              style={{
                padding: '20px 30px',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                backgroundColor: '#ffffff',
                zIndex: 10
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.1em' }}>
                {selectedPost.date}
              </span>
              <button 
                onClick={() => setSelectedPost(null)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--secondary)',
                  transition: 'all 0.2s ease'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '30px 40px 40px 40px' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--secondary)', lineHeight: '1.3', marginBottom: '20px', fontFamily: 'var(--font-sans)' }}>
                {selectedPost.title}
              </h2>
              
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', marginBottom: '30px' }}>
                <Image src={selectedPost.image} alt={selectedPost.title} fill style={{ objectFit: 'cover' }} />
              </div>

              <div 
                className="article-body-html"
                style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#334155' }}
                dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml || `<p>${selectedPost.excerpt}</p>` }}
              />

              {selectedPost.sourceUrl && (
                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <a 
                    href={selectedPost.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      background: 'var(--primary)', 
                      color: '#ffffff', 
                      padding: '12px 24px', 
                      borderRadius: '30px', 
                      fontWeight: 700, 
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Xem bài viết gốc trên trang báo
                    <ArrowRight size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
