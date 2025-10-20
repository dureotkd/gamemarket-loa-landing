"use client";

import React from "react";
import { NumericFormat } from "react-number-format";

function NumberInput() {
  return (
    <>
      <h2 className="bg-[#171722] rounded-lg border border-gray-700 px-4 py-2 text-sm transition flex items-center gap-2">
        얼마 필요하신가요?
      </h2>
      <NumberInput
        className="bg-[#171722] border border-gray-700 rounded-lg px-4 py-2 text-sm"
        suffix={"만 골드"}
      />
      <button className="bg-blue-800 rounded-sm border border-blue-800 px-4 py-2 text-sm hover:bg-blue-900 transition flex items-center gap-2">
        검색
      </button>
    </>
  );
}

export default NumberInput;
