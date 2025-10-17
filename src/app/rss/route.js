import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://www.gamemarket.kr";
  const posts = await fetch(`${baseUrl}/api/news?page=1`).then((res) =>
    res.json()
  );

  const items = posts
    .map(
      (post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/page/news_detail?idx=${post.idx}</link>
        <description><![CDATA[${
          post.summary ?? post.content.slice(0, 200)
        }]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid>${baseUrl}/page/news_detail?idx=${post.idx}</guid>
      </item>
    `
    )
    .join("\n");

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>GameMarket News</title>
        <link>${baseUrl}</link>
        <description>게임마켓 최신 뉴스 및 공지사항</description>
        <language>ko</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>
  `;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
