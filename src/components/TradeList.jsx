import React from "react";

export const runtime = "nodejs"; // ✅ Edge 런타임 방지 (Vercel 빌드 시 필수)

async function TradeList({
  krgame = "로스트아크",
  searchParams: {
    krserver = "전체서버",
    sort = "new",
    amount = "",
    gubun = "",
  },
}) {
  const apiUrl = `https://www.gamemarket.kr/api/trade?krgame=${encodeURIComponent(
    krgame
  )}&krserver=${encodeURIComponent(
    krserver
  )}&sort=${sort}&amount=${amount}&gubun=${gubun}`;

  console.log("🛰️ [TradeList] Fetch start:", apiUrl);

  let trades = [];

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 600 },
      headers: {
        "User-Agent": "Next.js TradeList build fetch (vercel)",
        Accept: "application/json",
      },
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("❌ Fetch 실패:", res.status, res.statusText);
      console.error("Body snippet:", text.slice(0, 200));
      throw new Error(`API 응답 오류 (${res.status})`);
    }

    // ✅ JSON 파싱 안전 처리
    try {
      trades = JSON.parse(text);
    } catch (err) {
      console.error(
        "❌ JSON 파싱 실패 (HTML 응답일 가능성):",
        text.slice(0, 200)
      );
      trades = [];
    }
  } catch (err) {
    console.error("🚨 [TradeList] 데이터 로드 실패:", err.message);
    trades = [];
  }

  // ✅ 데이터 없음 처리
  if (trades.length === 0) {
    return (
      <div className="col-span-2 text-center text-gray-400 py-12">
        거래가 존재하지 않습니다.
      </div>
    );
  }

  // ✅ 정상 렌더링
  return trades.map((item, i) => (
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
  ));
}

export default TradeList;
