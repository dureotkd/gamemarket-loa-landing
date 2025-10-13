"use client";

import { ArrowUp } from "lucide-react";
import React from "react";

function ScrollTopButton() {
  return (
    <ArrowUp
      size={32}
      className="mt-12 cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
}

export default ScrollTopButton;
