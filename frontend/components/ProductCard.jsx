import "regenerator-runtime/runtime";
import React from "react";
import {Link} from 'react-router-dom';

import ImgContainer from "./ImgContainer";
import ProductDescription from "./ProductDescription";

export default function ProductCard() {
  const menuItems = [
    {
      imgLink:
        "",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
  ];
  return (
    <>
      {menuItems.map(({ imgLink, title, lessor }, index) => (
        <>
          <Link key={index} to='/productdetail'> 
            <div className="transition ease-in-out  bg-[#D9D9D9] h-[243px] min-w-[271px] rounded-[24px] flex flex-col items-center justify-evenly mx-[14px] hover:scale-105">
              <ImgContainer imgLink={imgLink} />
              <ProductDescription title={title} lessor={lessor} />
            </div>
          </Link>
        </>
      ))}
    </>
  );
}
