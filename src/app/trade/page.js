import ListScrollTopButton from "@/components/ListScrollTopButton";
import NumberInput from "@/components/NumberInput";
import SearchForm from "@/components/SearchForm";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import React from "react";
import { NumericFormat } from "react-number-format";

async function page({ searchParams }) {
  const {
    krserver = "전체서버",
    sort = "new",
    amount = "",
    gubun = "",
  } = searchParams;

  // ✅ 서버에서 바로 실행됨
  const res = await fetch(
    `https://www.gamemarket.kr/api/trade?krserver=${krserver}&sort=${sort}&amount=${amount}&gubun=${gubun}`,
    {
      next: { revalidate: 60 }, // 60초 캐싱 (ISR)
    }
  );

  const trades = (await res?.json()) || [];

  const res2 = await fetch("https://www.gamemarket.kr/api/server", {
    next: { revalidate: 60 }, // 60초 캐싱 (ISR)
  });

  const serverList = (await res2?.json()) || [];
  const sortList = [
    { idx: "new", name: "최신순" },
    { idx: "low", name: "가격낮은순" },
  ];
  const gubunList = [
    {
      idx: "",
      name: "전체",
    },
    {
      idx: "1",
      name: "팝니다",
    },
    {
      idx: "2",
      name: "삽니다",
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
        <div className="max-w-[1280px] xl:px-0 px-4 mx-auto mb-6 flex flex-col flex-wrap gap-4 items-start">
          <SearchForm className="flex flex-wrap gap-2" defaultAmount={amount} />
          <div className="flex flex-wrap gap-2">
            {gubunList.map((item) => (
              <Link
                className="bg-[#171722] rounded-lg border border-gray-700 px-4 py-2 text-sm hover:bg-gray-800 transition flex items-center gap-2"
                key={item.idx}
                href={`/trade?krserver=${krserver}&sort=${sort}&amount=${amount}&gubun=${item.idx}`}
              >
                {item.name}
                {gubun == item.idx ? <CircleCheck size={18} /> : null}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {sortList.map((item) => (
              <Link
                className="bg-[#171722] rounded-lg border border-gray-700 px-4 py-2 text-sm hover:bg-gray-800 transition flex items-center gap-2"
                key={item.idx}
                href={`/trade?krserver=${krserver}&sort=${item.idx}&amount=${amount}&gubun=${gubun}`}
              >
                {item.name}
                {sort == item.idx ? <CircleCheck size={18} /> : null}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {serverList.map((item) => (
              <Link
                className="bg-[#171722] rounded-lg border border-gray-700 px-4 py-2 text-sm hover:bg-gray-800 transition flex items-center gap-2"
                key={item.idx}
                href={`/trade?krserver=${item.sname}&sort=${sort}&amount=${amount}&gubun=${gubun}`}
              >
                {item.sname}
                {krserver == item.sname ? <CircleCheck size={18} /> : null}
              </Link>
            ))}
          </div>
        </div>

        <div className="xl:px-0 px-4 max-w-[1280px] grid xl:grid-cols-2 grid-cols-1 gap-4 mx-auto space-y-3">
          {trades.length === 0 ? (
            <div className="col-span-2 text-center text-gray-400 py-12">
              거래가 존재하지 않습니다.
            </div>
          ) : (
            trades.map((item, i) => (
              <a
                key={i}
                href={`https://www.gamemarket.kr/page/trade_detail?idx=${item.idx}`}
                className="flex cursor-pointer flex-col-reverse items-baseline m-0 justify-between bg-[#171722] rounded-lg border border-gray-700 p-6 hover:shadow-md transition"
              >
                {/* 왼쪽 영역 */}
                <div className="flex-1">
                  <div className="xl:flex-row xl:my-3 mt-3 mb-1 flex-col flex items-start gap-2">
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
                    <span className={item.type === "삽니다" ? "buy" : "sell"}>
                      {item.type}
                    </span>
                    <p className="text-gray-200 font-semibold">{item.price}</p>
                    <p className="text-sm text-left text-blue-400">
                      {item.min}
                    </p>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        <ListScrollTopButton />
      </div>
    </main>
  );
}

export default page;
