import FetchLoading from "@/components/FetchLoading";
import ListScrollTopButton from "@/components/ListScrollTopButton";
import NumberInput from "@/components/NumberInput";
import SearchForm from "@/components/SearchForm";
import TradeList from "@/components/TradeList";
import { gameTitleMap } from "@/util/constants";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { NumericFormat } from "react-number-format";

async function page({ searchParams }) {
  const params = await searchParams;
  const {
    krserver = "전체서버",
    sort = "new",
    amount = "",
    gubun = "",
    gidx = "14",
    game = "lostark",
  } = params;

  const res2 = await fetch(
    `https://www.gamemarket.kr/api/server?gidx=${gidx}`,
    {
      cache: "force-cache", // 무제한 캐싱
    }
  );

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
                href={`/trade?krserver=${krserver}&sort=${sort}&amount=${amount}&gubun=${item.idx}&game=${game}&gidx=${gidx}`}
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
                href={`/trade?krserver=${krserver}&sort=${item.idx}&amount=${amount}&gubun=${gubun}&game=${game}&gidx=${gidx}`}
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
                href={`/trade?krserver=${item.sname}&sort=${sort}&amount=${amount}&gubun=${gubun}&game=${game}&gidx=${gidx}`}
              >
                {item.sname}
                {krserver == item.sname ? <CircleCheck size={18} /> : null}
              </Link>
            ))}
          </div>
        </div>

        <div className="xl:px-0 px-4 max-w-[1280px] grid xl:grid-cols-2 grid-cols-1 gap-4 mx-auto space-y-3">
          <Suspense fallback={<FetchLoading />}>
            <TradeList
              krgame={gameTitleMap[game]}
              searchParams={{ krserver, sort, amount, gubun }}
            />
          </Suspense>
        </div>

        <ListScrollTopButton />
      </div>

      {/* 카카오톡 오픈채팅 버튼 (오른쪽 하단 고정) */}
      <a
        href="https://open.kakao.com/o/syhfWH9h"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed !rounded-full bottom-6 right-6 z-50 overflow-hidden"
      >
        <Image
          src="/kakao-talk-button-default.svg"
          alt="카카오톡 문의하기"
          width={84}
          height={48}
          className="xl:w-[84px] xl:h-[48px] w-[64px] h-[36px]"
        />
      </a>
    </main>
  );
}

export default page;
