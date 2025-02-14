import React from "react";
import image from "../../../images/heroBG.png";

const Hero = () => {
  return (
    <div className="">
      <div className="relative bg-[#084130] h-[800px]">
        <div className="w-[screen]">
          <img
            src={image}
            alt="chef cooking"
            className="absolute w-[fill] h-[fill] object-cover"
          />
          <p className="p-[50px] z-[1] absolute  text-white top-[250px] shadow-2xl text-[53px]">
            THE BEST OF THE BEST!
            <br /> ALL THE FOODIES YOU NEED.
          </p>
          <div className=" absolute w-[fill] bg-black/60 h-[fill]"></div>
        </div>
      </div>
      {/* <div className="wave h-[120px]" /> */}
    </div>
  );
};

export default Hero;
