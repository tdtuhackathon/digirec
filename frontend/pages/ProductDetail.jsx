import "regenerator-runtime/runtime";
import React from "react";
import { useParams } from 'react-router-dom';

import Navbar from "../components/Navbar";
import ImgProductDetail from "../components/ProductDetail/IngProductDetail";
import InfoProductDetail from "../components/ProductDetail/InFoProductDetail";
import menuItems from '../placeholder.js'

export default function ProductDetail({wallet}) {
  const { productId } = useParams()

  const product = menuItems.find(obj => obj.id === productId);
  return (
    <>
      <div>
        <Navbar wallet={wallet} />
        <div className="flex p-[52px]">
          <div className="w-[40%]">
            <ImgProductDetail images={product.images} />
          </div>
          <div className="flex-1">
            <InfoProductDetail />
          </div>
        </div>
      </div>
    </>
  );
}
