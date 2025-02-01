import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/bundle"; // ✅ Ensures all styles load properly
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"; // Import icons

const Featured = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (err) {
        console.log("error message: ", err.message?.data || err.message);
        setLoading(false);
      }
    };
    fetchMeal();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-[120px] my-[300px] ">
      <div className="flex flex-col items-center">
        <h1 className="my-[150px] text-[44px] border-b-8 border-black rounded-b-lg">
          Featured Meals
        </h1>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-button-next",
            prevEl: ".custom-button-prev",
            hideOnClick: true, // Optional: Hides buttons when inactive
          }}
          pagination={{ clickable: true }}
          loop={true}
          speed={500}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {food.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-gray-200 p-2 rounded-md">
                <img
                  className=" w-[400px] h-[300px] object-cover"
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
                <p className="absolute top-10 w-[180px] truncate text-white bg-green-800 ">
                  {item.strMeal}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        {/* Custom navigation buttons */}
        <div className="custom-prev absolute top-0 left-[-50px] z-10 cursor-pointer w-[50px] h-[300px] flex items-center justify-center rounded-l-md">
          <FaChevronLeft size={30} className="text-gray-400" />
        </div>
        <div className="custom-next absolute top-0 right-[-50px] z-10 cursor-pointer w-[50px] h-[300px] flex items-center justify-center  rounded-r-md">
          <FaChevronRight size={30} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
