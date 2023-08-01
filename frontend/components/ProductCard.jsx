import "regenerator-runtime/runtime";
import React from "react";
import {Link} from 'react-router-dom';
import menuItems from '../placeholder.js'
import ImgContainer from "./ImgContainer";
import ProductDescription from "./ProductDescription";

export default function ProductCard({contract}) {

  // async function getAllProduct() {
  //     try {
  //   // Now you can call the getAllProduct() function.
  //   const allProducts = await contract.getAllProduct();

  //   // Do something with the data, for example, log the products.
  //   console.log('All products:', allProducts);
  // } catch (error) {
  //   console.error('Error fetching all products:', error);
  // }
  // }

  // let product_arr = getAllProduct()

  return (
    <>
      {menuItems.map(({ images, title, owner, id }, index) => (
        <>
          <Link key={index} to={`/productdetail/${id}`}> 
            <div className="transition ease-in-out  bg-[#D9D9D9] h-[243px] min-w-[271px] rounded-[24px] flex flex-col items-center justify-evenly mx-[14px] hover:scale-105">
              <ImgContainer images={images?.[0]} />
              <ProductDescription title={title} owner={owner} />
            </div>
          </Link>
        </>
      ))}
    </>
  );
}
