import "regenerator-runtime/runtime";
import React from "react";

import "./assets/global.css";

import TopBar from "./components/TopBar";
import ProductCard from "./components/ProductCard";

import { EducationalText, SignInPrompt, SignOutButton } from "./ui-components";

export default function App({ isSignedIn, contractId, wallet }) {
  // const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  // const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // // Get blockchian state once on component load
  // React.useEffect(() => {
  //   getGreeting()
  //     .then(setValueFromBlockchain)
  //     .catch(alert)
  //     .finally(() => {
  //       setUiPleaseWait(false);
  //     });
  // }, []);

  // /// If user not signed-in with wallet - show prompt
  // if (!isSignedIn) {
  //   // Sign-in flow will reload the page later
  //   return (
  //     <SignInPrompt
  //       greeting={valueFromBlockchain}
  //       onClick={() => wallet.signIn()}
  //     />
  //   );
  // }

  // function changeGreeting(e) {
  //   e.preventDefault();
  //   setUiPleaseWait(true);
  //   const { greetingInput } = e.target.elements;

  //   // use the wallet to send the greeting to the contract
  //   wallet
  //     .callMethod({
  //       method: "set_greeting",
  //       args: { message: greetingInput.value },
  //       contractId,
  //     })
  //     .then(async () => {
  //       return getGreeting();
  //     })
  //     .then(setValueFromBlockchain)
  //     .finally(() => {
  //       setUiPleaseWait(false);
  //     });
  // }

  // function getGreeting() {
  //   // use the wallet to query the contract's greeting
  //   return wallet.viewMethod({ method: "get_greeting", contractId });
  // }

  return (
    <>
      <div className="recentlyUpload  mt-[16px] ml-[300px] mt-[96px]">
        <TopBar msg1={"Recently Uploaded"} />
        <div className="carousel h-[313px] rounded-3xl flex flex-row overflow-x-auto pt-[20px] ">
          <ProductCard
            imgLink={
              ""
            }
            title={
              "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!"
            }
            lessor={"Hoang Long"}
          />
        </div>
      </div>
      <div className="recentlyUpload mt-[40px] ml-[300px] ">
        <TopBar msg1={"Trending Lessor"} />
        <div className="carousel h-[313px] rounded-3xl flex flex-row overflow-x-auto pt-[20px] ">
          <ProductCard
            imgLink={
              ""
            }
            title={
              "Sony Supreme Sound: Unparalleled Audio Experience with our High-Performance Headphones!"
            }
            lessor={"Hoang Long"}
          />
        </div>
      </div>
    </>
  );
}
