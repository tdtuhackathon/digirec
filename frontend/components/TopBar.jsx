import "regenerator-runtime/runtime";
import React from "react";

export default function TopBar({ msg1 }) {
  return (
    <div className="top flex items-center justify-between pr-[24px] pt-[38px] text-[#343D47]">
      <div className="fontSideBar top_title text-[28px]  leading-[25px]">{msg1}</div>
      <a href="#" className="fontSideBar text-black text-[20px]  leading-[25px]">See all</a>
    </div>
  );
}
