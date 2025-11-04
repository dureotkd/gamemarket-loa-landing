// app/sitemap.js

// ✅ Node.js 런타임 강제 (Edge Runtime → Cloudflare 차단 방지)
export const runtime = "nodejs";

// ✅ 정적 빌드 시점에 생성 (Next 14~15 최적화)
export const dynamic = "force-static";

// ✅ 1시간마다 재검증
export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = "https://www.gamemarket.kr";
  const apiUrl = `${baseUrl}/api/trade`;

  console.log("🛰️ [sitemap] Fetch start:", apiUrl);

  let products = [];

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Next.js sitemap build fetch (vercel)",
        Accept: "application/json",
      },
    });

    // ⚠️ 응답 텍스트로 먼저 읽어서 JSON 여부 판별
    const text = await res.text();

    if (!res.ok) {
      console.error("❌ Fetch 실패:", res.status, res.statusText);
      console.error("Body snippet:", text.slice(0, 200));
      throw new Error(`API 응답 오류 (${res.status})`);
    }

    // ✅ JSON 파싱 시도
    try {
      products = JSON.parse(text);
    } catch (err) {
      console.error(
        "❌ JSON 파싱 실패 (HTML일 가능성 있음):",
        text.slice(0, 200)
      );
      throw new Error("API 응답이 JSON이 아닙니다.");
    }
  } catch (err) {
    console.error("🚨 [sitemap] 상품 데이터 로드 실패:", err.message);
    // 빌드 중단 방지 — 빈 sitemap 반환
    products = [];
  }

  // ✅ URL 구조 정리
  const productUrls = products.map((item) => ({
    url: `${baseUrl}/page/trade_detail?idx=${item.idx}`,
    lastModified: item.updated_at
      ? new Date(item.updated_at).toISOString()
      : new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // ✅ 기본 URL 포함한 sitemap 반환
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...productUrls,
  ];
}
