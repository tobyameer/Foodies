import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Footer from "../../components/Footer";
import SearchFilter from "./components/SearchFilter";
import { IoMdClose } from "react-icons/io";

const Search = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemFilter, setItemFilter] = useState([]);

  useEffect(() => {
    const fetchFilteredMeals = async () => {
      try {
        if (itemFilter.length === 0) {
          const meals = [];
          for (let i = 0; i < 20; i++) {
            const res1 = await axios.get(
              "https://www.themealdb.com/api/json/v1/1/random.php"
            );
            meals.push(res1.data.meals[0]);
          }
          setFood(meals);
        } else {
          for (let i = 0; i < itemFilter.length; i++) {
            const meals = [];
            const requests = itemFilter.map((category) =>
              axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
              )
            );

            const responses = await Promise.all(requests);

            // Extract meals from responses
            responses.forEach((res, index) => {
              console.log(itemFilter[index]); // Log category
              meals.push(...res.data.meals); // Add all meals from each category
            });
            console.log(meals);
            setFood(meals);
          }
        }
      } catch (err) {
        console.log("err : ", err.message?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFilteredMeals();
  }, [itemFilter]);

  const newCategory = (newCategory) => {
    setItemFilter(newCategory);
    console.log(itemFilter);
  };

  const handleDeleteFilter = (item) => {
    setItemFilter((prev) => prev.filter((category) => category !== item));
    console.log(itemFilter);
  };

  return (
    <div className="">
      <Navbar scrollUnit={200} />
      <div className="bg-[#084130] h-[200px]"></div>
      <div className="wave h-[120px]" />
      <SearchFilter handleCategory={newCategory} />
      <div className="mx-[200px]">
        <div className="flex w-[100%] gap-5 pt-5">
          {itemFilter.map((i, x) => (
            <button
              key={x}
              className="fill duration-300 px-4 border border-yellow-400/70 text-[#084130] size-fit h-[50px] text-[17px] flex items-center  rounded-full"
            >
              <p className="pr-1">{i}</p>

              <IoMdClose
                onClick={() => handleDeleteFilter(i)}
                size={22}
                className=" rounded-full text-[#084130]"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="pt-[200px] flex flex-col items-center mx-[100px]">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[50px] justify-center items-center">
          {loading
            ? // Show placeholders while loading
              Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={index}
                  className="pb-1 w-[150px] md:w-[250px] lg:w-[300px] shadow-xl rounded-t-2xl"
                >
                  <div className="w-full h-[200px] bg-gray-300 rounded-t-2xl animate-pulse"></div>
                  <div className="p-2 space-y-2">
                    <div className="h-[20px] bg-gray-300 rounded-md animate-pulse"></div>
                    <div className="h-[15px] bg-gray-300 rounded-md animate-pulse w-[70%]"></div>
                    <div className="h-[40px]"></div>
                  </div>
                </div>
              ))
            : // Show actual meals when loaded
              food.map((meal, index) => (
                <div
                  key={index}
                  className=" pb-1 w-[100%] shadow-xl rounded-t-2xl"
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-[100%] rounded-t-2xl"
                  />
                  <div className="m-1 truncate">
                    <h3>
                      {meal.strArea} {meal.strMeal}
                    </h3>
                    <p className="text-[13px] text-gray-600">
                      {meal.strCategory}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="flex">$15.03</p>
                      <div className="flex items-center justify-evenly border rounded-full w-[100px] h-[40px] shadow-sm">
                        <FaMinus
                          size={30}
                          className="border rounded-full  px-2 shadow-sm"
                        />
                        <p className="text-gray-500">0</p>
                        <FaPlus
                          size={30}
                          className="border text-[#084130] rounded-full  px-2  shadow-sms"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
