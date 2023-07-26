import "regenerator-runtime/runtime";
import React from "react";

// import "./assets/global.css";

import TopBar from "./components/TopBar";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
// import { EducationalText, SignInPrompt, SignOutButton } from "./ui-components";

export default function App() {
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
