import React from "react";

function page() {
  const trades = [
    {
      type: "팝니다",
      title: "전섭 우편100:26골드 판매합니다/ 상시대기 중",
      author: "ylooez",
      game: "로스트아크",
      server: "전체서버",
      time: "4시간 전",
      price: "1만 당 2,600원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "▶▶ 바로OK ❤️구멍가게❤️ 최저 비율 ❤️ 골드 판매 ◀◀",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "⚡✪‿✪⚡전섭골드판매⚡가장빠른곳⚡즉시판매가능⚡24시⚡",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "⚡✪‿✪⚡전섭골드판매⚡가장빠른곳⚡즉시판매가능⚡24시⚡",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "⚡✪‿✪⚡전섭골드판매⚡가장빠른곳⚡즉시판매가능⚡24시⚡",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "⚡✪‿✪⚡전섭골드판매⚡가장빠른곳⚡즉시판매가능⚡24시⚡",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "▶▶ 바로OK ❤️구멍가게❤️ 최저 비율 ❤️ 골드 판매 ◀◀",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "▶▶ 바로OK ❤️구멍가게❤️ 최저 비율 ❤️ 골드 판매 ◀◀",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "▶▶ 바로OK ❤️구멍가게❤️ 최저 비율 ❤️ 골드 판매 ◀◀",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "▶▶ 바로OK ❤️구멍가게❤️ 최저 비율 ❤️ 골드 판매 ◀◀",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "▶▶ 바로OK ❤️구멍가게❤️ 최저 비율 ❤️ 골드 판매 ◀◀",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
    {
      type: "팝니다",
      title: "▶▶ 바로OK ❤️구멍가게❤️ 최저 비율 ❤️ 골드 판매 ◀◀",
      author: "구멍가게",
      game: "로스트아크",
      server: "전체서버",
      time: "12분 전",
      price: "1만 당 2,520원",
      min: "최소 10만",
      isVip: true,
    },
  ];

  return (
    <main className="bg-[#0b0b13] min-h-screen text-white">
      {/* 헤더 영역 */}
      <section
        className="relative h-[300px] flex flex-col justify-center px-6 lg:px-20"
        style={{
          backgroundImage: "url('/back2.webp')", // 👈 배경 은은한 별 이미지 (public 폴더에)
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-[1280px] w-full mx-auto mt-12">
          <p className="text-sm text-gray-400 mb-2">
            <span className="text-gray-400">HOME</span>{" "}
            <span className="text-[#dea700] ml-1">› 거래목록</span>
          </p>
          <h1 className="text-4xl font-bold">거래목록</h1>
        </div>
      </section>

      <div className="min-h-screen py-8">
        <div className="xl:px-0 px-4 max-w-[1280px] grid xl:grid-cols-2 grid-cols-1 gap-4 mx-auto space-y-3">
          {trades.map((item, i) => (
            <div
              key={i}
              className="flex flex-col-reverse items-baseline m-0 justify-between bg-[#171722] rounded-lg border border-gray-700 p-6 hover:shadow-md transition"
            >
              {/* 왼쪽 영역 */}
              <div className="flex-1">
                <div className="xl:flex-row xl:my-3 mt-3 mb-1 flex-col flex items-start gap-2">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-[2px] rounded">
                    {item.type}
                  </span>
                  <span className="text-gray-200 lg:text-[16px] text-sm truncate xl:max-w-[420px] max-w-[300px] font-medium">
                    {item.title}
                  </span>
                </div>

                <div className="text-sm text-gray-500 flex flex-wrap gap-1">
                  <span>{item.author}</span>
                  <span>· {item.game}</span>
                  <span>· {item.server}</span>
                  <span>· {item.time}</span>
                </div>
              </div>

              {/* 오른쪽 영역 */}
              <div className="flex items-baseline gap-2 min-w-[160px]">
                <div className="flex items-center gap-2 text-right">
                  <p className="text-gray-200 font-semibold">{item.price}</p>
                  <p className="text-left text-blue-400">{item.min}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default page;
