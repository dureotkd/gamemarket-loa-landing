/* eslint-disable @next/next/no-html-link-for-pages */
import { DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

export default function Home() {
  const characters = Array.from({ length: 6 }, (_, i) => `/cha${i + 1}.webp`);
  const items = Array.from({ length: 5 }, (_, i) => `/item${i + 1}.webp`);
  const members = Array.from({ length: 8 }, (_, i) => ({
    img: `/icon${i + 1}.webp`,
  }));

  const stats = [
    { title: "로스트아크골드", percent: 30.0 },
    { title: "로아골드", percent: 9.5 },
    { title: "로스트아크골드시세", percent: 10.0 },
    { title: "로아골드판매", percent: 12.0 },
    { title: "로아골드구매", percent: 16.33 },
    { title: "로아현질", percent: 16.33 },
    { title: "로아누적현질", percent: 30.0 },
  ];

  const bottomStats = [
    { value: "386", label: "판매중인 아이템" },
    { value: "486", label: "판매 완료된 아이템" },
    { value: "1000+", label: "이용자 수" },
    { value: "5.0", label: "만족도" },
  ];

  const keywords = [
    {
      label: "거래목록",
      value: "trade",
      href: "https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell",
    },
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
                    <a href="https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell">
                      거래목록
                    </a>{" "}
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
                    <a href="https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell">
                      거래현황
                    </a>{" "}
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
            <a
              href="https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell"
              className="flex cursor-pointer items-center gap-1"
            >
              <span>거래목록</span>
              <ChevronDown />
            </a>
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
            <a
              href="https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell"
              className="flex cursor-pointer items-center gap-1"
            >
              <span>거래현황</span>
              <ChevronDown />
            </a>
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
      <main className="min-h-screen bg-black text-white">
        {/* === Hero Section === */}
        <section
          className="xl:bg-right bg-center z-1 relative h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: "url('/1.webp')", // 👈 public 폴더에 배경 이미지 넣기
            backgroundSize: "cover",
          }}
        >
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* 메인 텍스트 */}
          <div className="relative z-10 mt-10 flex flex-col items-center">
            <h2 className="text-xl lg:text-5xl font-ria font-extrabold mb-4 leading-snug">
              아이템 판매/구매를 안전하게 <br /> 효율적으로 거래하세요
            </h2>
            <p className="xl:text-lg text-sm text-gray-300">
              지금 로스트아크 아이템 거래를 통해
              <br /> 게임 경험을 한 단계 끌어올리세요
            </p>
            <a
              href="https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell"
              className="flex xl:text-lg shiny-btn justify-center gap-1 items-center cursor-pointer xl:min-w-[350px] text-sm bg-[#dea700] my-6 font-semibold px-8 py-3 transition text-black"
            >
              골드 거래하기
              <DollarSign size={20} className="mb-0.5" />
            </a>
          </div>

          {/* 상품 박스 */}
          <div className="relative z-10 mt-6 bg-black/70 backdrop-blur-md border border-blue-500/40 p-6 w-[90%] md:w-[700px]">
            <div className="flex items-center gap-4">
              <Image
                src="/2.webp"
                alt="로아골드"
                width={80}
                height={80}
                className=""
              />
              <div>
                <h3 className="text-xl font-semibold">로아골드 거래소</h3>
                <p className="text-gray-400 text-left text-sm">가격 : ₩1.50</p>
              </div>
            </div>

            {/* 진행바 */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>총 인상 ₩ 0.00(0%)</span>
                <span>총 인상 ₩ 580.00</span>
              </div>
              <div className="h-2 bg-gray-700 overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            {/* 카운트다운 */}
            <div className="mt-6 flex justify-center gap-3 text-sm text-gray-300">
              <div>
                <span className="font-bold text-white">52D</span>
              </div>
              <div>
                <span className="font-bold text-white">08H</span>
              </div>
              <div>
                <span className="font-bold text-white">20M</span>
              </div>
              <div>
                <span className="font-bold text-white">53S</span>
              </div>
            </div>
          </div>
        </section>

        {/* === Advantages === */}
        <section className="xl:pt-42 pt-20 bg-[#0b0b13]">
          <div className="text-center mb-12">
            <h3 className="text-blue-400 uppercase tracking-widest font-semibold">
              ADVANTAGES
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              플랫폼만의 3가지 장점
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="bg-[#1a1a24] p-8 text-center border border-indigo-500/30">
              <div className="text-indigo-400 text-4xl mb-3">💰</div>
              <h4 className="text-xl font-semibold mb-2">최저가 수수료</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                저렴한 수수료로 다양한 아이템을 빠르게 거래를 진행하세요
              </p>
            </div>

            <div className="bg-[#1a1a24] p-8 text-center border border-indigo-500/30">
              <div className="text-indigo-400 text-4xl mb-3">🔒</div>
              <h4 className="text-xl font-semibold mb-2">높은 보안성</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                고급 보안시스템을 통해 거래가 안전하게 유지됩니다
              </p>
            </div>

            <div className="bg-[#1a1a24] p-8 text-center border border-indigo-500/30">
              <div className="text-indigo-400 text-4xl mb-3">📈</div>
              <h4 className="text-xl font-semibold mb-2">수익 창출</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                자신의 게임 아이템을 판매하여 수익을 창출할 수 있습니다
              </p>
            </div>
          </div>
        </section>

        <section className="xl:py-42 py-20 bg-[#0b0b13]">
          <div className="text-center mb-12">
            <h3 className="text-blue-400 uppercase tracking-widest font-semibold">
              OFFER A VARIETY OF ITEMS
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              타입별 아이템 제공
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-8 px-6">
            {characters.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Character ${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section
          className="!py-20 relative flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: "url('/back1.webp')", // 👈 public 폴더에 배경 이미지 넣기
            backgroundSize: "cover",
          }}
        >
          <div className="text-center mb-12">
            <h3 className="text-blue-400 uppercase tracking-widest font-semibold">
              아이템 거래
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              최신 아이템 목록
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-8 px-6">
            {items.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Character ${index + 1}`}
                  className="w-full max-w-21 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0a0713] text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* 제목 */}
            <h3 className="text-blue-400 text-sm font-semibold tracking-widest">
              로스트아크 아이템거래
            </h3>
            <h2 className="text-4xl font-bold mt-2 mb-10">통계비율</h2>

            {/* 비율 상단 */}
            <div className="flex flex-wrap justify-between gap-y-6 text-center text-sm md:text-base mb-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[48%] md:w-auto flex flex-col items-center"
                >
                  <span className="text-gray-300">{item.title}</span>
                  <span className="font-semibold text-white">
                    {item.percent.toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>

            {/* 그래프 바 */}
            <div className="w-full h-5 rounded-full overflow-hidden flex">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="h-full"
                  style={{
                    width: `${item.percent}%`,
                    backgroundColor: `hsl(${250 + idx * 10}, 80%, 55%)`,
                  }}
                ></div>
              ))}
            </div>

            {/* 하단 통계 */}
            <div className="grid grid-cols-2 md:grid-cols-4 text-center mt-12 gap-y-8">
              {bottomStats.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-4xl font-extrabold text-blue-400">
                    {item.value}
                  </h4>
                  <p className="mt-2 text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative bg-[#080616] text-white py-24 overflow-hidden"
          style={{
            backgroundImage: "url('/back2.webp')", // 👈 배경 은은한 별 이미지 (public 폴더에)
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* 제목 */}
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold tracking-widest">
              팀 멤버
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              로스트아크 랭킹
            </h2>
          </div>

          {/* 그리드 */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-6">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-[#141226] rounded-2xl py-8 px-4 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {/* 프로필 이미지 */}
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center overflow-hidden`}
                >
                  <img
                    src={member.img}
                    alt={`member-${idx + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </div>

                {/* 텍스트 */}
                <div className="text-center mt-6">
                  <p className="text-gray-400 text-sm mb-1">직업: 버서커</p>
                  <p className="text-lg font-semibold text-white">
                    {idx + 1}위: 호감순정남지
                  </p>
                </div>

                {/* SNS 아이콘 */}
                <div className="flex gap-4 mt-4 text-lg text-gray-400">
                  <a href="#" className="hover:text-pink-400">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="hover:text-blue-500">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="hover:text-sky-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="!py-20 relative flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: "url('/last_back.webp')", // 👈 public 폴더에 배경 이미지 넣기
            backgroundSize: "cover",
          }}
        >
          <div className="px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* 왼쪽 텍스트 */}
            <div className="flex flex-col justify-center items-center flex-1">
              <h2 className="text-4xl md:text-5xl text-center font-extrabold leading-tight mb-4">
                게임거래 사이트 <br />
                <span className="text-white/90">1위 게임마켓</span>
              </h2>
              <p className="text-gray-100 text-base text-left md:text-lg mb-8">
                다양한 게임 상품을 더욱 저렴하게 구매하시면 더욱 특별한 가격으로
                즐기실 수 있습니다.
              </p>

              <a
                href="https://www.gamemarket.kr/page/trade?gm=14&sv=11&krgame=%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%95%84%ED%81%AC&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell"
                className="inline-block bg-[#dea700] text-black font-semibold px-8 py-3 transition"
              >
                사이트 바로가기
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
