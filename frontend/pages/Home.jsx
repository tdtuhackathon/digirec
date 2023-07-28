import "regenerator-runtime/runtime";
import React from "react";

import TopBar from "../components/TopBar";
import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="contianer relative">
          <Sidebar />
          <div className="containerUpload absolute top-0 pl-[360px] w-[98vw]">
            <Welcome />
            <div className="recentlyUpload ">
              <TopBar msg1={"Recently Uploaded"} />
              <Carousel />
            </div>
            <div className="recentlyUpload ">
              <TopBar msg1={"Trending Lessor"} />
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}