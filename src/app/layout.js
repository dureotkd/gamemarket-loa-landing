import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollTopButton from "@/components/ScrollTopButton";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

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
    canonical: "https://christmall.co.kr/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://christmall.co.kr/",
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

const keywords = [
  { label: "거래목록", value: "trade", href: "/trade" },
  { label: "로스트아크골드", value: "lostark-gold", href: "/lostark-gold" },
  { label: "로아골드", value: "loa-gold", href: "/loa-gold" },
  { label: "로아골드시세", value: "loa-gold-price", href: "/loa-gold-price" },
  {
    label: "로스트아크골드시세",
    value: "lostark-gold-price",
    href: "/lostark-gold-price",
  },
  { label: "로아레이드골드", value: "loa-raid-gold", href: "/loa-raid-gold" },
  { label: "로스트아크현질", value: "lostark-cash", href: "/lostark-cash" },
  {
    label: "로아모바일시세",
    value: "loa-mobile-price",
    href: "/loa-mobile-price",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="ko" data-theme="dark">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0"
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="max-w-[1280px] mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-between items-center py-6 z-10 px-7">
          <nav className="drawer flex items-center gap-4 xl:hidden text-white">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-1" className="drawer-button">
                <Menu className="cursor-pointer" />
              </label>
            </div>

            <div className="drawer-side !left-0">
              <label
                htmlFor="my-drawer-1"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="join join-vertical menu bg-base-200 min-h-full w-80 p-4">
                <li className="w-full flex !justify-center items-center mb-4">
                  <Image
                    src="/logo.png"
                    className="xl:w-[180px] w-36 flex justify-center items-center"
                    alt="로고"
                    width={180}
                    height={180}
                  />
                </li>
                <li className="join-item border border-base-300">
                  <details className="collapse collapse-arrow">
                    <summary className="collapse-title">
                      <a href="/trade">거래목록</a>{" "}
                      <ChevronDown className="inline-block ml-1" />
                    </summary>
                    <ul className="collapse-content text-sm pl-4">
                      {keywords.map((item) => (
                        <li key={item.value}>
                          <a
                            href={item.href}
                            className="hover:text-yellow-400 transition-colors duration-200"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                <li className="join-item border border-base-300">
                  <details className="collapse collapse-arrow">
                    <summary className="collapse-title">
                      <a href="/trade">거래현황</a>{" "}
                      <ChevronDown className="inline-block ml-1" />
                    </summary>
                    <ul className="collapse-content text-sm pl-4">
                      {keywords.map((item) => (
                        <li key={item.value}>
                          <a
                            href={item.href}
                            className="hover:text-yellow-400 transition-colors duration-200"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                <li className="join-item border border-base-300 pl-1">
                  <a className="!h-[56px] flex items-center" href="/news">
                    게임정보
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <Link href="/">
            <Image
              src="/logo.png"
              className="xl:w-[180px] w-32 flex justify-center items-center"
              alt="로고"
              width={180}
              height={180}
            />
          </Link>

          <nav className="xl:flex hidden gap-10 text-lg !text-white">
            <div className="dropdown dropdown-bottom dropdown-end dropdown-hover text-white">
              <Link
                href="/trade"
                className="flex cursor-pointer items-center gap-1"
              >
                <span>거래목록</span>
                <ChevronDown />
              </Link>
              <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
                {keywords.map((item) => (
                  <li key={item.value}>
                    <Link
                      href={item.href}
                      className="hover:text-yellow-400 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
              <Link
                href="/trade"
                className="flex cursor-pointer items-center gap-1"
              >
                <span>거래현황</span>
                <ChevronDown />
              </Link>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                {keywords.map((item) => (
                  <li key={item.value}>
                    <Link
                      href={item.href}
                      className="hover:text-yellow-400 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/news">게임정보</Link>
          </nav>
        </header>

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
      </body>
    </html>
  );
}
