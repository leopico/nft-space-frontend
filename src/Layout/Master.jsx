import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.jpg";
import Wallets from "../Components/wallet/Wallets";

const Master = (props) => {
  return (
    <nav className="navbar navbar-expand-xl navbarglow sticky-top p-3 navBar">
      <div className="container">
        <img
          src={Logo}
          alt="logo"
          style={{ height: "45px", width: "100px" }}
          className="rounded me-3 navbarglow"
        />
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className="nav-link active text-light shadow-md pe-5"
                to="/"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light shadow-md pe-5" to="/mint">
                Mint
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light shadow-md pe-5"
                to="/staking"
              >
                Staking
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light shadow-md pe-5"
                to="/tokenization"
              >
                Tokenization
              </Link>
            </li>
            <h1 className="font-1">NFT Landing Space...</h1>
          </ul>
          <Wallets />
        </div>
      </div>
    </nav>
  );
};

export default Master;
