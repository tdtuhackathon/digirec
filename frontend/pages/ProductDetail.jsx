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
        <div style={{ width: "100vw", display: "flex", padding: "60px" }}>
          <ImgProductDetail />
          <InfoProductDetail />
        </div>
      </div>
    </>
  );
}
