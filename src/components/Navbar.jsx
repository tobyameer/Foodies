import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Logo from "../images/logo.jpg";
const Navbar = ({ scrollUnit }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollUnit) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scroll
          ? "z-[99] fixed w-screen px-[28px] h-[100px] bg-white/90 text-black flex justify-between items-center "
          : "z-[99] fixed w-screen px-[28px] h-[100px] bg-inherit text-white flex justify-between items-center "
      }
    >
      <img src={Logo} alt="" className="w-[50px] rounded-full" />
      <div className="flex gap-10 text-[14px]">
        <p>Home</p>
        <p>About</p>
        <p>Service</p>
      </div>
      <div className="flex gap-5">
        <IoSearch />
        <FaShoppingCart />
        <FaUser />
      </div>

      {/* <div className="flex bg-white rounded-full w-[500px] items-center pl-2 h-[33px]">
        <IoSearch color="black" />
        <input type="text" />
        </div> */}
    </div>
  );
};

export default Navbar;
