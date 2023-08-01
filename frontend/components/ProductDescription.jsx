import "regenerator-runtime/runtime";
import React from "react";

export default function ProductDescription({ title, lessor }) {
  return (
    <>
      <div className="productCard_info relative w-[248px] h-[70px] px-[12px] py-[8px] rounded-[24px] bg-white ">
        <h4 className="fontPrimary font-[700] info_title text-[14px] overflow-hidden leading-[16px]">
          {title}
        </h4>
        <div className="info_lessor fontPrimary absolute bottom-[8px] text-[12px] overflow-hidden">
          {lessor}
        </div>
      </div>
    </>
  );
}
