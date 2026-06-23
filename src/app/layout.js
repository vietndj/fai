import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "FAI — FPT Academy International | 18 Năm Đào Tạo Quốc Tế",
  description: "Hệ thống đào tạo quốc tế hàng đầu Việt Nam — Arena Multimedia, Aptech, FPT Skillking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
