import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";

const SearchSearchBar = () => {
  const [value, setValue] = useState(""); // Search input value
  const [food, setFood] = useState([]); // All food items
  const [filteredMeals, setFilteredMeals] = useState([]); // Filtered meals based on input

  useEffect(() => {
    const fetchApi = async () => {
      const newMeals = [];
      for (let i = 0; i < 10; i++) {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const meals = res.data.meals.map((meal) => meal.strMeal);
        newMeals.push(...meals);
      }
      setFood(newMeals); // Set food with the fetched meals
      setFilteredMeals(newMeals); // Initially, set filtered meals to all meals
    };
    fetchApi();
  }, []);

  const handleInputChange = (e) => {
    const searchValue = e.target.value.toLowerCase(); // Convert input to lowercase
    setValue(searchValue);

    // Filter meals based on the search value
    const filtered = food.filter((meal) =>
      meal.toLowerCase().includes(searchValue)
    );
    setFilteredMeals(filtered); // Update filtered meals state
  };

  return (
    <div>
      <div className="pl-3 w-[100%] h-[50px] bg-[#E6ECEA] flex items-center rounded-t-3xl">
        <IoSearch size={26} className="text-[#084130]" />
        <input
          value={value}
          onChange={handleInputChange} // Handle changes to input
          type="text"
          placeholder="Search"
          className="pl-[30px] bg-inherit text-[#084130] placeholder:text-[#084130] outline-none"
        />
      </div>

      {/* Display filtered meals as a preview */}
      {value && (
        <div className="mt-2 bg-white border border-gray-300 rounded-b-3xl">
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal, index) => (
              <div key={index} className="p-2 text-[#084130]">
                {meal}
              </div>
            ))
          ) : (
            <div className="p-2 text-[#084130]">No meals found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSearchBar;
