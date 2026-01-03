"use client";

import Link from "next/link";
import { DollarSign } from "lucide-react";

export default function TradeLinkButton({ href, children }) {
  return (
    <Link
      href={href}
      className="flex xl:text-lg shiny-btn justify-center gap-1 items-center cursor-pointer text-sm bg-[#dea700] font-semibold px-4 py-2 transition text-black"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      <DollarSign size={16} className="mb-0.5" />
    </Link>
  );
}

