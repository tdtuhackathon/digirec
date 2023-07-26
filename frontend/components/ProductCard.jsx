import "regenerator-runtime/runtime";
import React from "react";

import ImgContainer from "./ImgContainer";
import ProductDescription from "./ProductDescription";

export default function ProductCard() {
  const menuItems = [
    {
      imgLink:
        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/295498220_3965329587026187_6875035227784439434_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cUJLC8_KNYAX94Ny1-&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBu0Nocp7fic_FR4Q36s2Dv75cTxxiyehTXWTrMKPlQRw&oe=64C6159A",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/295498220_3965329587026187_6875035227784439434_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cUJLC8_KNYAX94Ny1-&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBu0Nocp7fic_FR4Q36s2Dv75cTxxiyehTXWTrMKPlQRw&oe=64C6159A",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/295498220_3965329587026187_6875035227784439434_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cUJLC8_KNYAX94Ny1-&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBu0Nocp7fic_FR4Q36s2Dv75cTxxiyehTXWTrMKPlQRw&oe=64C6159A",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/295498220_3965329587026187_6875035227784439434_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cUJLC8_KNYAX94Ny1-&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBu0Nocp7fic_FR4Q36s2Dv75cTxxiyehTXWTrMKPlQRw&oe=64C6159A",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/295498220_3965329587026187_6875035227784439434_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cUJLC8_KNYAX94Ny1-&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBu0Nocp7fic_FR4Q36s2Dv75cTxxiyehTXWTrMKPlQRw&oe=64C6159A",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
    {
      imgLink:
        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/295498220_3965329587026187_6875035227784439434_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cUJLC8_KNYAX94Ny1-&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBu0Nocp7fic_FR4Q36s2Dv75cTxxiyehTXWTrMKPlQRw&oe=64C6159A",
      title:
        "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!",
      lessor: "Hoang Long",
    },
  ];
  return (
    <>
      {menuItems.map(({ imgLink, title, lessor }) => (
        <>
          <div className="productCard bg-[#D9D9D9] h-[243px] min-w-[271px] rounded-[24px] flex flex-col items-center justify-evenly mx-[14px]">
            <ImgContainer imgLink={imgLink} />
            <ProductDescription title={title} lessor={lessor} />
          </div>
        </>
      ))}
    </>
  );
}
