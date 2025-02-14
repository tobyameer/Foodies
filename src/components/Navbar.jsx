import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Navbar becomes sticky after scrolling past 50px
      setNav(window.scrollY > 780); // Navbar becomes sticky after scrolling past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed left-0 z-[99] px-[28px] h-[100px] flex justify-between items-center transition-all duration-500 ${
        nav
          ? "top-0 text-black bg-white shadow-md"
          : "bg-transparent text-white"
      } ${
        isSticky
          ? "top-0  bg-white/90 text-black"
          : "top-[50px] bg-transparent "
      }`}
    >
      <img src={Logo} alt="Logo" className="w-[50px] rounded-full" />

      <div className="flex gap-10 text-[14px]">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>About</p>
        <p>Service</p>
      </div>

      <div className="flex gap-5">
        <Link to="/search">
          <IoSearch className="cursor-pointer" />
        </Link>
        <FaShoppingCart className="cursor-pointer" />
        <Link to="/profile">
          <FaUser className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
