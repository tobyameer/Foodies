import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <div className="">
      <div className=" mx-[30px] border w-full h-[200px] overflow-x-scroll flex items-center">
        <div className="flex text-center gap-4">
          {food.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={item.strCategoryThumb}
                alt=""
                className="w-[150px] mb-5"
              />
              <p className="text-[15px]">{item.strCategory}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
