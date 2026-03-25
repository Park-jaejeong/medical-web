import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
});

export const metadata = {
  title: "의료웹 - AI 증상 분석 의료 안내 시스템",
  description:
    "증상을 입력하면 AI가 진료과, 필요한 검사, 예상 병명, 치료 방향을 안내해드립니다.",
  keywords: "의료, 증상, 진료과, AI 의료, 병원 안내",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
