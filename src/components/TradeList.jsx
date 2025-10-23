import React from "react";

async function TradeList({
  krgame = "로스트아크",
  searchParams: {
    krserver = "전체서버",
    sort = "new",
    amount = "",
    gubun = "",
  },
}) {
  // ✅ 서버에서 바로 실행됨
  const res = await fetch(
    `https://www.gamemarket.kr/api/trade?krgame=${krgame}&krserver=${krserver}&sort=${sort}&amount=${amount}&gubun=${gubun}`,
    {
      next: { revalidate: 600 }, // 600초 캐싱 (ISR)
    }
  );

  const trades = (await res?.json()) || [];

  return trades.length === 0 ? (
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
            <p className="text-sm text-left text-blue-400">{item.min}</p>
          </div>
        </div>
      </a>
    ))
  );
}

export default TradeList;
