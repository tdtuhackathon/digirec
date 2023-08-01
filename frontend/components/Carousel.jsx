import "regenerator-runtime/runtime";
import React from "react";

import ProductCard from "./ProductCard";

export default function Carousel({contract}) {
  return (
    <div className="carousel w-full h-[313px] rounded-3xl flex overflow-x-auto items-center">
      <ProductCard contract={contract}/>
    </div>
  );
}
