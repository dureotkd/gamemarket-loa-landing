"use client";

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

function ListScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // 초기 로드 시에도 한 번 체크
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ArrowUp
      onClick={scrollToTop}
      size={isMobile ? 24 : 32} // ✅ 모바일이면 작게
      className={`fixed right-8 bottom-8 cursor-pointer transition-all duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
        hover:text-yellow-300`}
    />
  );
}

export default ListScrollTopButton;
