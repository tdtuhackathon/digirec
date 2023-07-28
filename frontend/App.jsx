import 'regenerator-runtime/runtime';
import React from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductDescription from './components/ProductDescription';

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail"
import RentNotification from "./pages/RentNotification"
// import { EducationalText, SignInPrompt, SignOutButton } from "./ui-components";

export default function App() {
  return (
    <>
      <Home/>
      <ProductDetail/>
      <RentNotification/>
    </>
  );
}
