import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#084130]">
      <div className="pt-[30px] mx-[30px] mt-[80px]">
        <div className="flex my-[20px]">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2  w-full text-[#A2B7B1]">
            <ol>FAQ</ol>
            <ol>Account</ol>
            <ol>Investor Relations</ol>
            <ol>Ways to watch</ol>
            <ol>Privacy</ol>
            <ol>Corporate Information</ol>
            <ol>Speed Test</ol>
            <ol>Only on Netflix</ol>
            <ol>Help Center</ol>
            <ol>Media Center</ol>
            <ol>Jobs</ol>
            <ol>Terms of Use</ol>
            <ol>Cookie Preference</ol>
            <ol>Contact Us</ol>
            <ol>Legal Notices</ol>
          </ul>
        </div>
        <div>
          <div className="my-2 w-full h-[1px] bg-[#265849]"></div>
          <button className="my-4 bg-[#457063] text-white w-[200px] h-[40px] flex justify-center gap-2 items-center">
            <IoLanguage className="text-white" />
            English
            <FaAngleDown />
          </button>
          <p className="pb-1 flex justify-center mt-[15px] text-[14px] text-[#A2B7B1]">
            Copyright @ 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
