import React, { useState, useEffect } from "react";
import axios from "axios";

const Featured = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const meals = [];
        for (let i = 0; i < 6; i++) {
          const res = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          meals.push(res.data.meals[0]);
        }
        setFood(meals);
      } catch (err) {
        console.log("error message: ", err.message?.data || err.message);
      }
    };
    fetchMeal();
  }, []);

  return (
    <div>
      <div>
        {food.map((item, index) => (
          <div key={index}>
            <img src={item.strMealThumb} alt={item.strMeal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
