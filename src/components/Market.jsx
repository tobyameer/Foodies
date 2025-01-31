import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Market = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMeal = async () => {
      try {
        const meals = [];
        for (let i = 0; i < 20; i++) {
          const res = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          meals.push(res.data.meals[0]);
        }
        setFood(meals);
      } catch (err) {
        console.log("error: ", err.message?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    getMeal();
  }, []);

  return (
    <div className="flex flex-col items-center mx-[100px]">
      <h1 className="my-[150px] text-[44px] border-b-8 border-black rounded-b-lg">
        Random Meals
      </h1>
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
                  {/* Hidden price and buttons */}
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
  );
};

export default Market;
