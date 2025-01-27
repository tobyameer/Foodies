import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Logo from "../images/logo.jpg";
const Navbar = () => {
  return (
    <div className="z-99 fixed w-screen px-[28px] h-[100px] bg-inherit text-white flex justify-between items-center ">
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
