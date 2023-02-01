import addresses from "../address.json";
import React, { useContext, useEffect, useState } from "react";
import Master from "../Layout/Master";
import Logo from "../image/nft.jpg";
import TypeForMint from "../Components/TypeForMint";
import SimpleNFT from "../artifacts/contracts/SimpleNFT.sol/SimpleNFT.json";
import { ethers, BigNumber } from "ethers";
import WalletContext from "../context/WalletContext";
import MessageContext from "../context/MessageContext";
import Spinner from "../Components/Spinner";
import keccak256 from "keccak256";
const { MerkleTree } = require("merkletreejs");
window.Buffer = window.Buffer || require("buffer").Buffer; //for buffer defined

const Mint = () => {
  //hooks
  const [mintAmount, setMintAmount] = useState(1); //qty of nfts
  const [Loader, setLoader] = useState(false);
  const [mintedToken, setMintedToken] = useState("");
  const [show, setShow] = useState(true);

  //context for signer account
  const { accounts } = useContext(WalletContext); //for getting signer
  const isConnected = Boolean(accounts[0]);
  //context for message
  const { setMessage } = useContext(MessageContext);

  //contract address
  const nftContractAddress = "0x5f8aE13306227E01EF877AF5497B06f814944dF6";

  //fetching data from contract
  useEffect(() => {
    const fetchData = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          nftContractAddress,
          SimpleNFT.abi,
          signer
        );
        try {
          const total = await contract.totalSupply.call();
          const totalSupply = total.toNumber();
          // console.log(totalSupply);
          setMintedToken(totalSupply);
        } catch (error) {}
      }
    };
    fetchData();
  }, []);

  //Mint NFT
  const handleMint = async () => {
    setLoader(true);
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        nftContractAddress,
        SimpleNFT.abi,
        signer
      );
      try {
        const leafNode = addresses.map((x) => keccak256(x));
        const tree = new MerkleTree(leafNode, keccak256, {
          sortPairs: true,
        });
        const buf2hex = (x) => "0x" + x.toString("hex");
        // console.log(buf2hex(tree.getRoot())); //for getting hash root
        const leaf = keccak256(accounts[0]); //hashing for user account
        const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));

        // minting from smart contract
        await contract.mintToken(BigNumber.from(mintAmount), proof, {
          value: ethers.utils.parseEther((0.0002 * mintAmount).toString()),
        });
        contract.on("Transfer", () => {
          setLoader(false);
          setShow(false); //for showing data form events
          setMessage({
            type: "success",
            message: "Yay! You Successfully Minted 🥳!",
          });
        });
      } catch (err) {
        setLoader(false);
        setMessage({
          type: "error",
          message: "You Can not mint Right Now Properly 🥵!",
        });
      }
    }
  };

  //Decrement amount
  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  //Increment amount
  const handleIncrement = () => {
    if (mintAmount >= 2) return;
    setMintAmount(mintAmount + 1);
  };
  return (
    <div>
      <Master />
      <div className="mt-4">
        <div className="container p-4" style={{ height: "500px" }}>
          <div className="row align-items-start">
            {/*NFT Image*/}
            <div className="col-lg-6 " style={{ height: "500px" }}>
              <img
                src={Logo}
                alt="nft"
                className="img-fluid h-75 w-100  mt-2 navbarglow rounded"
              />
              <div className="text-center mt-4 font-2 navbarglow">
                <TypeForMint />
              </div>
            </div>

            {/*Mint*/}
            <div
              className="col-lg-6 d-flex flex-wrap align-items-center justify-content-center"
              style={{ height: "500px" }}
            >
              {isConnected ? (
                <div>
                  <div className="">
                    <span className="navbarglow text-white p-2 rounded">
                      Public Minting Time will start after 10 tokens sold
                    </span>
                    <span className="mt-5 text-center text-info d-block">
                      Minted NFT{" "}
                      <small className="text-white">({mintedToken}/20)</small>
                    </span>
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <button
                      onClick={() => {
                        handleDecrement();
                      }}
                      type="button"
                      className="btn btn-outline-info"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="navbarglow text-white text-end mintInput"
                      value={mintAmount}
                      disabled
                    />
                    <button
                      onClick={() => {
                        handleIncrement();
                      }}
                      type="button"
                      className="btn btn-outline-info"
                    >
                      +
                    </button>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <span
                      onClick={() => {
                        handleMint();
                      }}
                      className="btn btn-outline-info"
                    >
                      {Loader && <Spinner />} mint now
                    </span>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <span className="text-white">
                      ${mintAmount * 0.001} ETH
                    </span>
                  </div>
                  {show ? (
                    ""
                  ) : (
                    <div className="d-flex justify-content-center align-items-center mt-4 text-white">
                      <span>Yay! You Minted 🥳</span>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <span className="text-secondary-emphasis">
                    You have to connect with your wallet
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
