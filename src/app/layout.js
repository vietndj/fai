import "./globals.css";

export const metadata = {
  title: "FAI - FPT Academy International",
  description: "Trang tổng hợp Arena Multimedia, Aptech, FPT Skillking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  );
}
