import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";

const SearchFilter = () => {
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [countriesClicked, setCountriesClicked] = useState(false);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [res1, res2] = await Promise.all([
          axios.get("https://www.themealdb.com/api/json/v1/1/categories.php"),
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list"),
        ]);
        setCategories(res1.data.categories);
        setCountries(res2.data.meals);
      } catch (err) {
        console.log("err :", err.message?.data || err.message);
      }
    };
    fetchFilters();
  }, []);

  return (
    <div className="mx-[200px]">
      <div className="pl-3 w-[100%] h-[50px] bg-[#E6ECEA] flex items-center rounded-t-3xl ">
        <IoSearch size={26} className="text-[#084130]" />
        <input
          type="text"
          placeholder="Search"
          className="pl-[30px] bg-inherit text-[#084130] placeholder:text-[#084130] outline-none"
        />
      </div>
      {/* Filter */}
      <div className="flex w-[100%]">
        {/* Categories Filter */}
        <div className="relative w-[60%]">
          <button
            onClick={() => setCategoryClicked(true)}
            className=" w-[fill] h-[70px] bg-[#64887D] text-[20px] "
          >
            Categories
          </button>
          <div
            onMouseLeave={() => setCategoryClicked(false)}
            className={
              categoryClicked
                ? "absolute top-[0px] pt-[70px] w-[100%] shadow-2xl"
                : "hidden"
            }
          >
            <div className=" bg-white flex flex-col  h-[500px] overflow-y-scroll">
              <div>
                {categories.map((items, i) => (
                  <div
                    key={i}
                    className="px-4 h-[50px] flex justify-between items-center border-t"
                  >
                    <p className="text-[20px] cursor-pointer ">
                      {items.strCategory}
                    </p>
                    <img
                      className="object-scale-down w-[50px]"
                      src={items.strCategoryThumb}
                      alt={items.strCategory}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Countries */}
        <div className="relative w-[40%]">
          <button
            onClick={() => setCountriesClicked(true)}
            className="w-[fill] h-[70px] bg-[#9EB4AD] text-[20px] rounded-br-3xl"
          >
            Countries
          </button>
          <div
            onMouseLeave={() => setCountriesClicked(false)}
            className={
              countriesClicked
                ? "absolute top-[0px] pt-[70px] w-[100%] shadow-xl"
                : "hidden"
            }
          >
            <div className="bg-white flex flex-col  h-[500px] overflow-y-scroll">
              <div>
                {countries.map((items, i) => (
                  <div
                    key={i}
                    className="px-4 h-[50px] flex justify-between items-center border-t"
                  >
                    <p className="text-[20px] cursor-pointer ">
                      {items.strArea}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
