import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { gameMetadata, gameKeywords, gameTradeUrl } from "@/util/constants";

// 동적 메타데이터 생성
export async function generateMetadata({ params }) {
  const { game } = params;
  const metadata = gameMetadata[game] || gameMetadata.aion2; // 기본값은 aion2

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: metadata.ogUrl,
      title: metadata.ogTitle,
      description: metadata.ogDescription,
      siteName: metadata.ogTitle,
      images: [
        {
          url: "https://www.gamemarket.kr/assets/app_hyup/images/gamemarket_og_image.png",
          width: 512,
          height: 512,
          alt: `${metadata.ogTitle} 로고`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.twitterTitle,
      description: metadata.twitterDescription,
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
}

export default function layout({ children, params }) {
  const { game } = params;

  // 게임별 키워드 가져오기 (없으면 빈 배열)
  const keywords = gameKeywords[game] || gameKeywords.aion2 || [];

  // href 함수를 실행하여 실제 URL 생성
  const keywordsWithHref = keywords.map((item) => ({
    ...item,
    href: typeof item.href === "function" ? item.href(game) : item.href,
  }));

  // 게임별 거래목록 기본 URL
  const tradeUrl = gameTradeUrl[game] || gameTradeUrl.aion2;

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
                    <a href={tradeUrl}>거래목록</a>{" "}
                    <ChevronDown className="inline-block ml-1" />
                  </summary>
                  <ul className="collapse-content text-sm pl-4">
                    {keywordsWithHref.map((item) => (
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
                    <a href={tradeUrl}>거래현황</a>{" "}
                    <ChevronDown className="inline-block ml-1" />
                  </summary>
                  <ul className="collapse-content text-sm pl-4">
                    {keywordsWithHref.map((item) => (
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
              href={tradeUrl}
              className="flex cursor-pointer items-center gap-1"
            >
              <span>거래목록</span>
              <ChevronDown />
            </Link>
            <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
              {keywordsWithHref.map((item) => (
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
              href={tradeUrl}
              className="flex cursor-pointer items-center gap-1"
            >
              <span>거래현황</span>
              <ChevronDown />
            </Link>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              {keywordsWithHref.map((item) => (
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
