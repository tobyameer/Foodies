import React from "react";
import { MdAccountCircle } from "react-icons/md";

const EditProfile = () => {
  return (
    <div className="relative h-[100%]">
      <div className="w-[100%] mt-[280px] bg-gray-200 h-[100vh] ">
        <div className="flex ml-[270px] mb-[90px]">
          <div>
            <MdAccountCircle
              size={200}
              className="absolute left-[50px] top-[-70px] text-gray-600/80 bg-white rounded-full"
            />
          </div>
          <div className="flex flex-col mt-[10px]">
            <h1 className="text-[40px] font-semibold">Mohsen Ameer</h1>
            <p className="text-[18px ml-[5px]">mohsenameer15@gmail.com</p>
          </div>
        </div>
        <div className="mx-[100px] h-[1px]  bg-gray-400"></div>
        {/* Data */}
        <div className="mt-[30px]">
          <div className="mx-[80px] flex justify-between items-center h-[150px]">
            <p className="text-[30px] font-semibold">Email Address</p>
            <input
              type="text"
              placeholder="example@email.com "
              className="w-[250px] h-[40px] pl-[20px] rounded-full shadow-md"
            />
          </div>
          <div className=" h-[1px]  bg-gray-400"></div>
          <div className="mx-[80px] flex justify-between items-center h-[150px]">
            <p className="text-[30px] font-semibold">New Email Address</p>
            <input
              type="text"
              placeholder="example@email.com "
              className="w-[250px] h-[40px] pl-[20px] rounded-full shadow-md"
            />
          </div>
          <div className=" h-[1px]  bg-gray-400"></div>

          <div className="mx-[80px] flex justify-between items-center h-[150px]">
            <p className="text-[30px] font-semibold">Number</p>
            <input
              type="text"
              placeholder="01069152625"
              className="w-[250px] h-[40px] pl-[20px] rounded-full shadow-md"
            />
          </div>
          <div className=" h-[1px]  bg-gray-400"></div>

          <div className="mx-[80px] flex justify-between items-center h-[150px]">
            <p className="text-[30px] font-semibold">New Number</p>
            <input
              type="text"
              placeholder="01069152625"
              className="w-[250px] h-[40px] pl-[20px] rounded-full shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
