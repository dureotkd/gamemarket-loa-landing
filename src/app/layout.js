import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollTopButton from "@/components/ScrollTopButton";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "로아골드거래소 | 365일 24시간 빠르고 안전한 로아골드거래",
  description:
    "365일 24시간 빠르고 안전한 로아골드거래, 로아골드시세, 로스트아크골드거래, 로아현질, 로아골드구매",
  keywords: [
    "로아골드거래",
    "로아골드",
    "로스트아크골드",
    "로아골드시세",
    "로스트아크골드거래",
    "로스트아크골드시세",
    "로아레이드골드",
    "로스트아크현질",
    "로아모바일시세",
    "로아현질",
    "로아골드구매",
  ],
  alternates: {
    canonical: "https://www.chanong.co.kr",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.chanong.co.kr",
    title: "로아골드거래소",
    description:
      "365일 24시간 빠르고 안전한 로아골드거래, 로아골드시세, 로스트아크골드거래, 로아현질, 로아골드구매",
    siteName: "로아골드거래소",
    images: [
      {
        url: "https://www.gamemarket.kr/assets/app_hyup/images/gamemarket_og_image.png",
        width: 512,
        height: 512,
        alt: "로아골드거래소 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "로아골드거래소",
    description:
      "365일 24시간 빠르고 안전한 로아골드거래, 로아골드시세, 로스트아크골드거래, 로아현질, 로아골드구매",
    images: [
      "https://www.gamemarket.kr/assets/app_hyup/images/gamemarket_og_image.png",
    ],
  },
  other: {
    generator: "All in One SEO (AIOSEO) 4.3.4.1",
    robots: "max-image-preview:large",
    "og:image:secure_url":
      "https://www.gamemarket.kr/assets/app_hyup/images/gamemarket_og_image.png",
    "twitter:label1": "작성자",
    "twitter:data1": "GAME MARKET",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" data-theme="dark">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0"
      />
      <meta
        name="naver-site-verification"
        content="28c53da9b72f75044881dfa8eede983a815cef51"
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <footer className="bg-[#0b0b13] text-white py-20 flex justify-center items-center flex-col gap-2">
          {/* SNS 아이콘 */}
          <div className="flex justify-center gap-5 mb-6">
            <a href="#" className="text-pink-500 hover:scale-110 transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-blue-500 hover:scale-110 transition">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-sky-400 hover:scale-110 transition">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-red-500 hover:scale-110 transition">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" className="text-green-500 hover:scale-110 transition">
              <i className="fab fa-napster text-2xl"></i>
            </a>
            <a href="#" className="text-lime-400 hover:scale-110 transition">
              <i className="fab fa-android text-2xl"></i>
            </a>
            <a href="#" className="text-orange-400 hover:scale-110 transition">
              <i className="fab fa-tiktok text-2xl"></i>
            </a>
          </div>

          {/* 로고 텍스트 */}

          <Image
            src="/logo.png"
            className="xl:w-[210px] w-32 flex justify-center items-center !mb-4"
            alt="로고"
            width={210}
            height={210}
          />

          {/* 정책 링크 */}
          <div className="lg:text-sm text-xs lg:gap-4 gap-2 flex justify-center flex-wrap text-gray-400 mb-3">
            <a href="#" className="hover:text-white">
              이용약관
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              아이템거래약관
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              개인정보취급방침
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              광고/제휴문의
            </a>
          </div>

          {/* 저작권 */}
          <p className="text-gray-500 text-xs tracking-wide">
            COPYRIGHT (C) GAME MARKET. ALL RIGHTS RESERVED.
          </p>

          <ScrollTopButton />
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
