import React from "react";
import Master from "../Layout/Master";

const Staking = () => {
  return (
    <div>
      <Master />
      <div className="mt-4">
        <h3 className="text-center text-white">Coming soon!</h3>
        <div className="container p-4" style={{ height: "500px" }}>
          <div className="row align-items-start">
            {/*Staking*/}
            <div
              className="col-lg-6 d-flex flex-wrap align-items-center justify-content-center"
              style={{ height: "500px" }}
            >
              <div className="card navbarglow" style={{ width: "18rem" }}>
                <div className="card-body card-1">
                  <h5 className="card-title text-white text-center">
                    Dragon Nft Staking Vault
                  </h5>
                  <span className="btn btn-sm d-block align-center btn-outline-info my-2">
                    Verify Staked Amount
                  </span>
                  <p className="text-white text-center">Your Staked Nfts</p>
                  <hr className="text-white" />
                  <p className="text-white text-center">Total Staked Nfts</p>
                  <hr className="text-white" />
                  <p className="text-white text-center">
                    Unstake All Staked Nfts
                  </p>
                  <hr className="text-white" />
                  <span className="btn btn-sm d-block align-center btn-outline-info my-2">
                    Unstake All
                  </span>
                </div>
              </div>
            </div>
            {/*Staking Rewards*/}
            <div
              className="col-lg-6 d-flex flex-wrap align-items-center justify-content-center"
              style={{ height: "500px" }}
            >
              <div className="card navbarglow" style={{ width: "18rem" }}>
                <div className="card-body card-2">
                  <span className="btn text-info d-block navbarglow">
                    <i className="fa-solid fa-wallet me-2"></i>Authorize Your
                    Wallet
                  </span>
                  <hr className="text-white" />
                  <h5 className="card-title text-center text-white mb-3">
                    Staking Rewards
                  </h5>
                  <span className="btn btn-sm d-block align-center btn-outline-info my-2">
                    Earned DFE Rewards
                  </span>
                  <p className="text-white text-center">Earned Tokens</p>
                  <hr className="text-white" />

                  <p className="text-white text-center">Claim Rewards</p>
                  <span className="btn btn-sm d-block align-center btn-outline-info my-2">
                    Claim
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
