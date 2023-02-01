import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Mint from "./pages/Mint";
import Staking from "./pages/Staking";
import Tokenization from "./pages/Tokenization";
import Error from "./Components/Error";

const NavBar = () => {
  return (
    <Routes>
      {/*Dashbard */}
      <Route path="/" element={<Dashboard />} />
      {/*Mint Page */}
      <Route path="/mint" element={<Mint />} />
      {/*staking Page */}
      <Route path="/staking" element={<Staking />} />
      {/*staking Page */}
      <Route path="/tokenization" element={<Tokenization />} />
      {/*staking Page */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default NavBar;
