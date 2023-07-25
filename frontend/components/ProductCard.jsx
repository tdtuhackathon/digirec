import "regenerator-runtime/runtime";
import React from "react";

export default function ProductCard({ imgLink, title, lessor }) {
  return (
    <>
      <div className="productCard bg-[#D9D9D9] h-[243px] min-w-[271px] rounded-[24px] flex flex-col items-center justify-evenly mx-[14px]">
        <div className="productCard_img h-[137px] w-[248px] rounded-[24px] bg-black">
          <img
            className="img_link h-[137px] w-[248px] rounded-[24px] object-cover"
            src={imgLink}
          ></img>
        </div>
        <div className="productCard_info relative w-[248px] h-[70px] px-[12px] py-[8px] rounded-[24px] bg-white ">
          <h4 className="info_title text-[14px] font-[500] overflow-hidden leading-[16px]">
            {title}
          </h4>
          <div className="info_lessor absolute bottom-[8px] text-[12px] overflow-hidden">
            {lessor}
          </div>
        </div>
      </div>
    </>
  );
}
