// app/sitemap-news.js

export const dynamic = "force-static"; // ✅ 정적 sitemap 생성
export const revalidate = 3600; // ✅ 1시간마다 갱신

export default async function sitemapNews() {
  const baseUrl = "https://www.gamemarket.kr";

  // ✅ 최근 뉴스/공지 데이터 가져오기
  let news = [];
  try {
    const res = await fetch(`${baseUrl}/api/news?page=1`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) news = await res.json();
  } catch (e) {
    console.error("❌ 뉴스 데이터 로드 실패:", e);
  }

  // ✅ sitemap-news.xml 구조 생성
  return news.map((item) => ({
    url: item.link,
    lastModified: new Date(item.date).toISOString(),
    news: {
      publication: {
        name: "GameMarket News", // Google News에서 표시되는 출처명
        language: "ko",
      },
      publication_date: new Date(item.date).toISOString(),
      title: item.title,
    },
  }));
}
