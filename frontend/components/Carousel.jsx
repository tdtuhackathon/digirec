import "regenerator-runtime/runtime";
import React from "react";

import ProductCard from "./ProductCard";

export default function Carousel() {
  return (
    <div className="carousel h-[313px] rounded-3xl flex overflow-x-auto items-center">
      <ProductCard />
    </div>
  );
}
