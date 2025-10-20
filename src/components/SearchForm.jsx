"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { NumericFormat } from "react-number-format";

function SearchForm({ className, defaultAmount = "" }) {
  const router = useRouter();
  const [amount, setAmount] = React.useState(defaultAmount);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;

    // 기존 쿼리 파라미터 유지하면서 amount만 갱신
    const params = new URLSearchParams(window.location.search);
    params.set("amount", amount);
    router.push(`/trade?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <NumericFormat
        className="bg-[#171722] border border-gray-700 rounded-lg px-4 py-2 text-sm"
        suffix={"만 골드"}
        value={amount}
        defaultValue={defaultAmount}
        onValueChange={(values) => {
          setAmount(values.value);
        }}
        placeholder="얼마 필요하신가요?"
      />
      <button className="bg-blue-800 rounded-sm border border-blue-800 px-4 py-2 text-sm hover:bg-blue-900 transition flex items-center gap-2">
        검색
      </button>
    </form>
  );
}

export default SearchForm;
