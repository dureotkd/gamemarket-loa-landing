// app/rss/route.js

import { NextResponse } from "next/server";

// ✅ Edge Runtime 비활성화 (Node.js 런타임에서만 실행)
export const runtime = "nodejs";

// ✅ 정적 빌드 시점 생성 (force-static) + 재검증
export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const baseUrl = "https://www.gamemarket.kr";
  const apiUrl = `${baseUrl}/api/news?page=1`;

  console.log("🛰️ [rss] Fetch start:", apiUrl);

  let posts = [];

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Next.js RSS build fetch (vercel)",
        Accept: "application/json",
      },
    });

    // ⚠️ 응답을 우선 텍스트로 읽음
    const text = await res.text();

    if (!res.ok) {
      console.error("❌ Fetch 실패:", res.status, res.statusText);
      console.error("Body snippet:", text.slice(0, 200));
      throw new Error(`API 응답 오류 (${res.status})`);
    }

    // ✅ JSON 파싱 안전 처리
    try {
      posts = JSON.parse(text);
    } catch (e) {
      console.error(
        "❌ JSON 파싱 실패, HTML 응답일 가능성:",
        text.slice(0, 200)
      );
      throw new Error("API 응답이 JSON이 아닙니다.");
    }
  } catch (e) {
    console.error("🚨 [rss] 뉴스 데이터 로드 실패:", e.message);
    // 빌드 실패 방지
    posts = [];
  }

  // ✅ RSS 항목 생성
  const items = posts
    .map(
      (post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/page/news_detail?idx=${post.idx}</link>
        <description><![CDATA[${
          post.summary ?? post.content?.slice(0, 200) ?? ""
        }]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid>${baseUrl}/page/news_detail?idx=${post.idx}</guid>
      </item>`
    )
    .join("\n");

  // ✅ RSS XML 구조
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>GameMarket News</title>
      <link>${baseUrl}</link>
      <description>게임마켓 최신 뉴스 및 공지사항</description>
      <language>ko</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(xml.trim(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
