import React from "react";
import Typewriter from "typewriter-effect";

const TypeForMint = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Dragon nft is saving in the world and mint now!"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypeForMint;
