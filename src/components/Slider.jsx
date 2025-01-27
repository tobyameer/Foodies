import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => {
          console.log(res.data.categories);
          setFood(res.data.categories);
        })
        .catch((err) => {
          console.log("Error details: ", err.message?.data || err.message);
        });
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-[300px]">
      <div className="my-[50px] flex justify-center items-center text-[44px] ">
        <h1 className="border-b-8 border-black rounded-b-lg">Categories</h1>
      </div>
      {/* <div className="absolute z-[9] border-x-5 bg-white w-[100px] h-[300px]" /> */}
      <div className="w-[76%] overflow-x-scroll">
        <div className="w-screen h-[200px] flex items-center">
          <div className="flex text-center gap-10 ">
            {food.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-[15px] categoriesStr"
              >
                <img
                  src={item.strCategoryThumb}
                  alt=""
                  className="p-1 w-[80px] md:w-[100px] mb-5 bg-gray-100 rounded-2xl"
                />
                <p className="my-4 text-[14px]  md:text-[18px]">
                  {item.strCategory}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="absolute right-0  bg-green-200 w-[100px] h-[300px]" /> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
