import "regenerator-runtime/runtime";
import React from "react";

export default function TopBar({ msg1 }) {
  return (
    <div className="top w-full flex items-center justify-between px-[24px]">
      <div className="top_title text-[22px]">{msg1}</div>
      <div className="text-black text-[22px]">See all</div>
    </div>
  );
}
