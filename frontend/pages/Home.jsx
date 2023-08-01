import "regenerator-runtime/runtime";
import React from "react";

import TopBar from "../components/TopBar";
import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
// import ImageGallery from "../components/ImageGallery";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pl-[60px] w-[70vw]">
          <Welcome />
          <div>
            <TopBar msg1={"Recently Uploaded"} />
            <Carousel />
          </div>
          <div>
            <TopBar msg1={"Trending Lessor"} />
            <Carousel />
          </div>
          {/* <div>
            <ImageGallery />
          </div> */}
        </div>
      </div>
    </div>
  );
}