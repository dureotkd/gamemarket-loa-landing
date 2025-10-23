import Content from "@/components/Content";
import { gameTitleMap } from "@/util/constants";
import React from "react";

function page({ params }) {
  const { game } = params;

  return <Content name={`${gameTitleMap[game]}키나`} />;
}

export default page;
