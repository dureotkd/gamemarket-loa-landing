import NewsContent from "@/components/NewsContent";
import React from "react";

async function page({ params }) {
  const { page = 1 } = await params;

  return <NewsContent page={page} />;
}

export default page;
