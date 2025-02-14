import React, { useState } from "react";
import ProfileHome from "./components/ProfileHome";
import Security from "./components/Security";
import EditProfile from "./components/EditProfile";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState("ProfileHome");

  const renderComponent = () => {
    switch (activeComponent) {
      case "ProfileHome":
        return <ProfileHome />;
      case "Security":
        return <Security />;
      case "EditProfile":
        return <EditProfile />;
      default:
        return <ProfileHome />;
    }
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[30%] bg-[#084130] h-[100vh] text-center">
        <div className="mt-[30px] ">
          <Link to="/">
            <button className="ml-[10px] text-white flex items-center duration-100 mb-[20px] justify-center gap-3 hover:bg-[#265849] hover:shadow-none text-[20px] ">
              <IoArrowBack />
              Back
            </button>
          </Link>
          <h1 className="mb-[50px] text-[30px] text-white font-semibold">
            Settings
          </h1>
          <div className="flex flex-col gap-6">
            <button
              className={`text-[#64887D] rounded-none h-[100px] border-none text-[20px] ${
                activeComponent === "ProfileHome"
                  ? "text-white bg-[#265849]"
                  : ""
              }`}
              onClick={() => setActiveComponent("ProfileHome")}
            >
              Profile
            </button>
            <button
              className={`text-[#64887D] rounded-none h-[100px] border-none text-[20px] ${
                activeComponent === "Security" ? " text-white bg-[#265849]" : ""
              }`}
              onClick={() => setActiveComponent("Security")}
            >
              Security
            </button>
            <button
              className={`text-[#64887D] rounded-none h-[100px] border-none text-[20px] ${
                activeComponent === "EditProfile"
                  ? "text-white bg-[#265849]"
                  : ""
              }`}
              onClick={() => setActiveComponent("EditProfile")}
            >
              Edit Profile
            </button>
            <button
              className={`text-[#64887D] rounded-none h-[100px] border-none text-[20px]`}
              onClick={() => {
                // Handle log out logic here
                console.log("Logging out...");
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="w-[70%]">{renderComponent()}</div>
    </div>
  );
};

export default Profile;
