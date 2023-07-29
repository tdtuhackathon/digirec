import "regenerator-runtime/runtime";
import React from "react";

import Navbar from "../components/Navbar";
import ImgProductDetail from "../components/ProductDetail/IngProductDetail";
import InfoProductDetail from "../components/ProductDetail/InFoProductDetail";

export default function ProductDetail() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex p-[52px]">
          <div className="w-[50%]">
            <ImgProductDetail />
          </div>
          <div className="flex-1">
            <InfoProductDetail />
          </div>
        </div>
      </div>
    </>
  );
}
