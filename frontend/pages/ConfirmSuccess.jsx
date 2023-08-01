import "regenerator-runtime/runtime";
import React from "react";
import IconSuccess from "../assets/images/IconSuccess.svg"
import LogoContainer from "../components/Navbar/LogoContainer";

export default function ConfirmSucces() {
  return (
    <div className="containerConfirm z-10000 bg-black/50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="layoutConfirm h-[500px] w-[700px] bg-white border-[5px] border-black/30 rounded-[25px] px-[50px] py-[30px] flex flex-col items-center relative">
        <div className="wrapLogo h-[70px] w-[180px]">
          <LogoContainer />
        </div>
        <div className="flex flex-col justify-center items-center h-[70%] w-[50%]">
          <img className="w-[50%] h-[50%]" src={IconSuccess} alt="" />
          <span className="text-[44px] fontPrimary">Rent Success</span>
        </div>
        <a
          href="/"
          className="
            bg-[#c5afe5] h-[20%] w-[40%] rounded-[32px] fontSideBar font-[700]
            flex justify-center items-center 
            text-[28px]
            "
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
