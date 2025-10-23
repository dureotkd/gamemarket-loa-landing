import { Loader2 } from "lucide-react";
import React from "react";

function FetchLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0b0b13] text-gray-300">
      <Loader2 className="animate-spin mr-3 text-yellow-400" size={32} />
      <span>거래 목록을 불러오는 중입니다...</span>
    </div>
  );
}

export default FetchLoading;
