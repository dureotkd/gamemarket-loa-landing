import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

async function NewsContent({ page = 1 }) {
  const res = await fetch(`https://www.gamemarket.kr/api/news?page=${page}`, {
    next: { revalidate: 60 }, // 60초 캐싱 (ISR)
  });
  const news = await res.json();
  const recent_news = news.slice(0, 5); // 최근 게시물 5개

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
            <span className="text-[#dea700] ml-1">› 게임 정보</span>
          </p>
          <h1 className="text-4xl font-bold">게임 정보</h1>
        </div>
      </section>

      <div className="min-h-screen bg-[#0e0f19] text-gray-200 py-12 px-4 md:px-12 lg:px-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {news.map((post) => (
              <article
                key={post.id}
                className="bg-[#1a1b2e] rounded-xl shadow-md p-6 border border-gray-700 hover:border-indigo-500 transition-colors"
              >
                <p className="text-xs text-gray-400 mb-2">
                  BY GAMEE01
                  {post.date}
                </p>
                <h2 className="text-2xl font-extrabold mb-3 text-gray-100">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.content}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center w-fit gap-2 text-[#dea700] font-semibold"
                >
                  Read More{" "}
                  <ArrowRight className="inline-block mb-0.5" size={17} />
                </a>
              </article>
            ))}
            <Link
              href={`/news/${parseInt(page) + 1}`}
              className="flex w-full bg-[#1a1b2e] hover:bg-indigo-500 transition-colors text-center justify-center py-3 rounded-lg text-white font-semibold mt-4"
            >
              Read More +
            </Link>
          </div>

          {/* Right column: sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2 border-b border-gray-600 pb-1">
                CATEGORIES
              </h3>
              <p className="text-gray-400">카테고리 없음</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 border-b border-gray-600 pb-1">
                RECENT POSTS
              </h3>
              <ul className="space-y-2">
                {recent_news.map((post) => (
                  <li
                    key={post.id}
                    className="text-gray-400 hover:text-[#dea700] text-sm"
                  >
                    <a href={post.link} target="_blank" rel="noreferrer">
                      <span className="block text-xs text-gray-500">
                        {post.date}
                      </span>
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default NewsContent;
