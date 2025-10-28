import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

// app/aion2/page.js
export const metadata = {
  title: "아이온2 키나거래소 | 빠르고 안전한 아이온2 아이템 거래",
  description:
    "아이온2 거래소 - 24시간 안전하고 빠른 아이온2 아이템, 키나, 계정 거래 플랫폼",
  keywords: [
    "아이온2",
    "아이온2 거래",
    "아이온2 아이템거래",
    "아이온2 키나",
    "아이온2 키나거래",
    "아이온2 키나 거래소",
    "아이온2 키나 구매",
    "아이온2 키나 판매",
    "아이온2 큐나 거래소",
    "아이온2 큐나 구매",
    "아이온2 큐나 판매",
    "키나 거래소",
    "아이온2 계정거래",
    "아이온2 아이템",
    "아이온2 거래사이트",
    "아이온2 아이템 판매",
    "아이온2 골드",
    "AION2 Kina",
    "AION2 거래소",
  ],
  alternates: {
    canonical: "https://www.chanong.kr/aion2",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.chanong.kr/aion2",
    title: "아이온2 키나거래소",
    description:
      "아이온2 거래소 - 24시간 안전하고 빠른 아이온2 아이템, 키나, 계정 거래 플랫폼",
    siteName: "아이온2 키나거래소",
    images: [
      {
        url: "https://www.gamemarket.kr/assets/app_hyup/images/gamemarket_og_image.png",
        width: 512,
        height: 512,
        alt: "아이온2 거래소 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "아이온2 키나거래소",
    description: "아이온2 아이템 거래, 안전한 거래 플랫폼",
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

export default function layout({ children, params }) {
  const { game } = params;

  const keywords = {
    aion2: [
      // { label: "거래목록", value: "trade", href: `https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell` },
      {
        label: "거래목록",
        value: "trade",
        href: `https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell`,
      },
      { label: "아이온2키나", value: "gold", href: `/${game}/gold` },
      {
        label: "아이온2키나거래",
        value: "loa-gold",
        href: `/${game}/gold`,
      },
      {
        label: "아이온2시세",
        value: "loa-gold-price",
        href: `/${game}/gold-price`,
      },
      {
        label: "아이온2키나시세",
        value: "lostark-gold-price",
        href: `/${game}/gold-price`,
      },
      {
        label: "아이온2레이드키나",
        value: "loa-raid-gold",
        href: `/${game}/raid-gold`,
      },
      { label: "아이온2현질", value: "lostark-cash", href: `/${game}/cash` },
      {
        label: "아이온2모바일시세",
        value: "loa-mobile-price",
        href: `/${game}/mobile-price`,
      },
    ],
  };

  return (
    <>
      <header className="max-w-[1280px] mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-between items-center py-6 z-10 px-7 lg:px-0">
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
                    <a
                      href={`https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell`}
                    >
                      거래목록
                    </a>{" "}
                    <ChevronDown className="inline-block ml-1" />
                  </summary>
                  <ul className="collapse-content text-sm pl-4">
                    {keywords[game].map((item) => (
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
                    <a
                      href={`https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell`}
                    >
                      거래현황
                    </a>{" "}
                    <ChevronDown className="inline-block ml-1" />
                  </summary>
                  <ul className="collapse-content text-sm pl-4">
                    {keywords[game].map((item) => (
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
                <a
                  className="!h-[56px] flex items-center"
                  href={`/${game}/news`}
                >
                  게임정보
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Link href={`/${game}`}>
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
              href={`https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell`}
              className="flex cursor-pointer items-center gap-1"
            >
              <span>거래목록</span>
              <ChevronDown />
            </Link>
            <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
              {keywords[game].map((item) => (
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
              href={`https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell`}
              className="flex cursor-pointer items-center gap-1"
            >
              <span>거래현황</span>
              <ChevronDown />
            </Link>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              {keywords[game].map((item) => (
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
          <Link href={`/${game}/news`}>게임정보</Link>
        </nav>
      </header>
      {children}
    </>
  );
}
