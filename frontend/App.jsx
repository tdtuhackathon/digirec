import 'regenerator-runtime/runtime';
import React from 'react';

// import './assets/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ConfirmSuccess from './pages/ConfirmSuccess';

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';
import CreateProduct from './pages/CreateProduct';

function App({wallet, contract}) {
  
  return ( 
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home wallet={wallet} contract={contract}/>} />
          <Route path='/productdetail/:productId' element={<ProductDetail wallet={wallet} contract={contract}/>} />
          <Route path='/confirmsuccess' element={<ConfirmSuccess/>} />
          <Route path='/create-product' element={<CreateProduct wallet={wallet} contract={contract}/>} />
        </Routes>
      </div>
    </Router>
   );
}

export default App;

// export default function App({ isSignedIn, contractId, wallet }) {
//   const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

//   const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

//   // Get blockchian state once on component load
//   React.useEffect(() => {
//     getGreeting()
//       .then(setValueFromBlockchain)
//       .catch(alert)
//       .finally(() => {
//         setUiPleaseWait(false);
//       });
//     }
//   , []);

//   /// If user not signed-in with wallet - show prompt
//   if (!isSignedIn) {
//     // Sign-in flow will reload the page later
//     return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()}/>;
//   }

//   function changeGreeting(e) {
//     e.preventDefault();
//     setUiPleaseWait(true);
//     const { greetingInput } = e.target.elements;
    
//     // use the wallet to send the greeting to the contract
//     wallet.callMethod({ method: 'set_greeting', args: { message: greetingInput.value }, contractId })
//       .then(async () => {return getGreeting();})
//       .then(setValueFromBlockchain)
//       .finally(() => {
//         setUiPleaseWait(false);
//       });
//   }

//   function getGreeting(){
//     // use the wallet to query the contract's greeting
//     return wallet.viewMethod({ method: 'get_greeting', contractId })
//   }

//   return (
//     <>
//       <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()}/>
//       <main className={uiPleaseWait ? 'please-wait' : ''}>
//         <h1>
//           The contract says: <span className="greeting">{valueFromBlockchain}</span>
//         </h1>
//         <form onSubmit={changeGreeting} className="change">
//           <label>Change greeting:</label>
//           <div>
//             <input
//               autoComplete="off"
//               defaultValue={valueFromBlockchain}
//               id="greetingInput"
//             />
//             <button>
//               <span>Save</span>
//               <div className="loader"></div>
//             </button>
//           </div>
//         </form>
//         <EducationalText/>
//       </main>
//     </>
//   );
// }