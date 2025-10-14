import React from "react";

async function page() {
  // ✅ 서버에서 바로 실행됨
  const res = await fetch("https://www.gamemarket.kr/api/news", {
    next: { revalidate: 60 }, // 60초 캐싱 (ISR)
  });
  const trades = await res.json();

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
            <span className="text-[#dea700] ml-1">› 게임 정보</span>
          </p>
          <h1 className="text-4xl font-bold">게임 정보</h1>
        </div>
      </section>

      <div className="min-h-screen py-8">
        <div className="xl:px-0 px-4 max-w-[1280px] grid xl:grid-cols-2 grid-cols-1 gap-4 mx-auto space-y-3"></div>
      </div>
    </main>
  );
}

export default page;
