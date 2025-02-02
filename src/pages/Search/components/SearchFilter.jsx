import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const SearchFilter = ({ handleCategory }) => {
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [CatOrCon, setCatOrCOn] = useState(false);

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

  const handleCategorySelect = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleCountrySelect = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((item) => item !== country)
        : [...prev, country]
    );
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
    handleCategory(selectedCategories); // Call the provided function
    console.log(selectedCategories);
  };

  return (
    <div className="mx-[200px]">
      <div className="pl-3 w-[100%] h-[50px] bg-[#E6ECEA] flex items-center rounded-t-3xl">
        <IoSearch size={26} className="text-[#084130]" />
        <input
          type="text"
          placeholder="Search"
          className="pl-[30px] bg-inherit text-[#084130] placeholder:text-[#084130] outline-none"
        />
      </div>
      {/* Filter */}
      <div className="relative flex w-[100%]">
        <button
          onClick={() => setOpenFilter(!openFilter)}
          className="w-[fill] h-[70px] bg-[#64887D] text-[20px]"
        >
          Filters
        </button>
        {openFilter && (
          <div className="absolute w-[100%] top-[-50px] h-[500px] bg-gray-100 rounded-md shadow-2xl">
            <div className="flex items-center justify-between border-b">
              <h1 className="ml-5 my-2 text-right text-[30px]">Filter</h1>
              <IoMdClose
                size={25}
                className="mr-4 cursor-pointer"
                onClick={() => handleFilterClose()}
              />
            </div>
            <div className="cursor-pointer flex items-center justify-center text-center font-semibold h-[50px]">
              <h1
                onClick={() => setCatOrCOn(false)}
                className={`w-[fill] ${
                  !CatOrCon ? "text-green-600 font-bold" : ""
                }`}
              >
                Categories
              </h1>
              <h1
                onClick={() => setCatOrCOn(true)}
                className={`cursor-pointer border-l w-[fill] ${
                  CatOrCon ? "text-green-600 font-bold" : ""
                }`}
              >
                Countries
              </h1>
            </div>
            <div className="flex h-[fill]">
              {/* Categories */}
              <div
                className={
                  !CatOrCon
                    ? "bg-white flex flex-col w-[fill] rounded-md overflow-y-scroll"
                    : "hidden"
                }
              >
                <div>
                  {categories.map((items, i) => (
                    <div
                      key={i}
                      className="px-4 h-[50px] flex justify-between items-center border-t cursor-pointer"
                      onClick={() => handleCategorySelect(items.strCategory)}
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-[20px]">{items.strCategory}</p>
                        <img
                          className="object-scale-down w-[50px]"
                          src={items.strCategoryThumb}
                          alt={items.strCategory}
                        />
                      </div>
                      {/* Styled Checkbox */}
                      <label className="relative w-6 h-6 flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="absolute opacity-0 w-full h-full cursor-pointer"
                          checked={selectedCategories.includes(
                            items.strCategory
                          )}
                          onChange={() =>
                            handleCategorySelect(items.strCategory)
                          }
                        />
                        <div
                          className={`w-6 h-6 flex items-center justify-center rounded-md border-2 cursor-pointer ${
                            selectedCategories.includes(items.strCategory)
                              ? "bg-green-500 border-green-500"
                              : "border-gray-400"
                          }`}
                        >
                          {selectedCategories.includes(items.strCategory) && (
                            <FaCheck className="text-white" />
                          )}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Countries (Meals) */}
              <div
                className={
                  CatOrCon
                    ? "border-l bg-white flex flex-col w-[fill] rounded-md h-[500px] overflow-y-scroll"
                    : "hidden"
                }
              >
                <div>
                  {countries.map((items, i) => (
                    <div
                      key={i}
                      className="px-4 h-[50px] flex justify-between items-center border-t cursor-pointer"
                      onClick={() => handleCountrySelect(items.strArea)}
                    >
                      <p className="text-[20px]">{items.strArea}</p>
                      {/* Styled Checkbox */}
                      <label className="relative w-6 h-6 flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="absolute opacity-0 w-full h-full cursor-pointer"
                          checked={selectedCountries.includes(items.strArea)}
                          onChange={() => handleCountrySelect(items.strArea)}
                        />
                        <div
                          className={`w-6 h-6 flex items-center justify-center rounded-md border-2 cursor-pointer ${
                            selectedCountries.includes(items.strArea)
                              ? "bg-green-500 border-green-500"
                              : "border-gray-400"
                          }`}
                        >
                          {selectedCountries.includes(items.strArea) && (
                            <FaCheck className="text-white" />
                          )}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
