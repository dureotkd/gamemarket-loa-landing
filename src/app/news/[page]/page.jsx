import NewsContent from "@/components/NewsContent";
import React from "react";

async function page({ params }) {
  const { page = 1, game } = await params;

  return <NewsContent page={page} game={game} />;
}

export default page;
