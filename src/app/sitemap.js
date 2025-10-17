// app/sitemap.js

export const dynamic = "force-static"; // ✅ 정적 빌드 시점에 생성 (Next 14~15 최적화)

export default async function sitemap() {
  const baseUrl = "https://www.gamemarket.kr";

  // ✅ 안전한 fetch (빌드시 실패해도 에러 안 터지게)
  let products = [];
  try {
    const res = await fetch(`${baseUrl}/api/trade`, {
      next: { revalidate: 3600 }, // 1시간마다 갱신 가능
    });
    if (res.ok) products = await res.json();
  } catch (err) {
    console.error("🚨 sitemap fetch failed:", err);
  }

  // ✅ URL 구조 정리
  const productUrls = products.map((item) => ({
    url: `${baseUrl}/page/trade_detail?idx=${item.idx}`,
    lastModified: item.updated_at
      ? new Date(item.updated_at).toISOString()
      : new Date().toISOString(),
    changeFrequency: "daily", // (선택)
    priority: 0.8, // (선택)
  }));

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
