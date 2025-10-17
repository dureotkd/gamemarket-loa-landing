/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.chanong.co.kr", // ← 여기에 본인 도메인
  generateRobotsTxt: true, // robots.txt도 자동 생성
  sitemapSize: 7000, // (선택) 페이지 수 많을 경우 분할
  changefreq: "daily",
  priority: 0.7,
};
