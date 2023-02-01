import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "sf-font";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { WalletContextProvider } from "./context/WalletContext";
import { MessageContextProvider } from "./context/MessageContext";

function App() {
  return (
    <MessageContextProvider>
      <WalletContextProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </WalletContextProvider>
    </MessageContextProvider>
  );
}

export default App;
