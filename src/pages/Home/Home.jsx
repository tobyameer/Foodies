import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Market from "./components/Market";
import Featured from "./components/Featured";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const navigate = useNavigate();

  // const handleFilterChange = (category) => {
  //   console.log(category);
  //   setSelectedCategory(category);
  //   navigate("/search", { state: { category } });
  // };
  return (
    <div>
      <div className="text-white bg-black text-center h-[50px] text-[18px] font-semibold flex justify-center items-center">
        <p>New Deals Order Now!</p>
      </div>
      <Navbar />
      <Hero />
      {/* <Slider /> */}
      <Market />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
