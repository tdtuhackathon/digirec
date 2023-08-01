import "regenerator-runtime/runtime";
import React from "react";

import Layout from "../components/Layout";
import TopBar from "../components/TopBar";
import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";
import '../index.css'

export default function Home({wallet, contract}) {
  return (
    <div>
      <Layout wallet={wallet}>
        <div className="flex-1 pl-[60px] w-[78vw]">
          <Welcome />
          <div>
            <TopBar msg1={"Recently Uploaded"} />
            <Carousel contract={contract} />
          </div>
          <div>
            <TopBar msg1={"Trending Lessor"} />
            <Carousel />
          </div>
        </div>
      </Layout>
      {/* <ConfirmSucces/> */}
    </div>
  );
}