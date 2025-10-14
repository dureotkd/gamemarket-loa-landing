import React from "react";

function Content({ name = "" }) {
  const stats = [
    { value: "₩7,458,163.54", label: "전체 거래 금액" },
    { value: "82%", label: "거래성공률" },
    { value: "17,654", label: "거래건수" },
    { value: "4,364", label: "등록된아이템수" },
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
          <div className="text-sm text-gray-400 mb-2">
            <span className="text-gray-400">HOME</span>{" "}
            <h2 className="text-[#dea700] ml-1 inline-block">› {name}</h2>
          </div>
          <h1 className="text-4xl font-bold">{name}</h1>
        </div>
      </section>

      {/* 통계 카드 */}
      <section className="xl:px-0 px-4 max-w-[1280px] mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#171722] rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition"
          >
            <div>
              <p className="text-2xl font-semibold mb-2">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
            {/* 막대 그래프 placeholder */}
            <div className="mt-4 flex gap-[3px] items-end h-10">
              {Array.from({ length: 20 }).map((_, j) => (
                <span
                  key={j}
                  className="w-[4px] bg-gray-700 rounded-sm"
                  style={{ height: `${20 + Math.random() * 30}%` }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 아이템땡스 장점 + 설명 */}
      <section className="xl:px-0 px-4 max-w-[1280px] mx-auto pb-20 gap-8">
        <div className="bg-[#171722] rounded-xl p-6 !w-full">
          <h3 className="text-[#dea700] font-semibold mb-4">게임마켓 장점</h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a24] p-8 text-center border border-indigo-500/30">
              <div className="text-indigo-400 text-4xl mb-3">💰</div>
              <h4 className="text-xl font-semibold mb-2">최저가 수수료</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                저렴한 수수료로 다양한 아이템을 <br />
                빠르게 거래를 진행하세요
              </p>
            </div>

            <div className="bg-[#1a1a24] p-8 text-center border border-indigo-500/30">
              <div className="text-indigo-400 text-4xl mb-3">🔒</div>
              <h4 className="text-xl font-semibold mb-2">높은 보안성</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                고급 보안시스템을 통해 거래가 <br />
                안전하게 유지됩니다
              </p>
            </div>

            <div className="bg-[#1a1a24] p-8 text-center border border-indigo-500/30">
              <div className="text-indigo-400 text-4xl mb-3">📈</div>
              <h4 className="text-xl font-semibold mb-2">수익 창출</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                자신의 게임 아이템을 판매하여 <br />
                수익을 창출할 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Content;
