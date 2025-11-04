// app/sitemap-news.js

// ✅ Node.js 런타임 강제 (Edge에서 돌면 UA 헤더 무시됨)
export const runtime = "nodejs";

// ✅ 정적 sitemap 생성 + 1시간마다 재검증
export const dynamic = "force-static";
export const revalidate = 3600;

export default async function sitemapNews() {
  const baseUrl = "https://www.gamemarket.kr";
  const apiUrl = `${baseUrl}/api/news?page=1`;

  console.log("🛰️ [sitemap-news] Fetch start:", apiUrl);

  let news = [];

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Next.js sitemap build fetch (vercel)",
        Accept: "application/json",
      },
    });

    // ⚠️ 응답 본문 직접 읽어 JSON 유효성 검사
    const text = await res.text();

    if (!res.ok) {
      console.error("❌ Fetch failed:", res.status, res.statusText);
      console.error("Body snippet:", text.slice(0, 200));
      throw new Error(`API 응답 오류 (${res.status})`);
    }

    // ✅ JSON 파싱 안전 처리
    try {
      news = JSON.parse(text);
    } catch (e) {
      console.error(
        "❌ JSON 파싱 실패, HTML 응답일 가능성:",
        text.slice(0, 200)
      );
      throw new Error("API 응답이 JSON이 아닙니다.");
    }
  } catch (e) {
    console.error("🚨 [sitemap-news] 뉴스 데이터 로드 실패:", e.message);
    // 빌드 실패 방지: 빈 배열 반환
    return [];
  }

  // ✅ sitemap-news.xml 구조 생성
  return news.map((item) => ({
    url: item.link?.startsWith("http") ? item.link : `${baseUrl}${item.link}`,
    lastModified: new Date(item.date).toISOString(),
    news: {
      publication: {
        name: "GameMarket News",
        language: "ko",
      },
      publication_date: new Date(item.date).toISOString(),
      title: item.title,
    },
  }));
}
