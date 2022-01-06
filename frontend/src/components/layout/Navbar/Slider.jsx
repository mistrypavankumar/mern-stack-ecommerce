import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const isActiveStyle = "font-semibold opacity-100 transition-all duration-500";
const isNotActiveStyle = "font-semibold opacity-50 transition-all duration-500";

const Slider = ({ menuOptions, closeToggle }) => {
  const handleCloseToggle = () => {
    if (closeToggle) {
      closeToggle(false);
    }
  };

  return (
    <>
      <div
        className={`md:hidden w-screen h-screen absolute top-0 left-0 ${
          closeToggle ? "-translate-x-100" : "translate-x-0"
        }`}
      >
        <div className="flex flex-col z-20 justify-center items-center bg-primaryBlue w-340 h-screen">
          {menuOptions.map((menu, index) => {
            return (
              <div className="my-10 text-primaryBlue font-semibold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  onClick={handleCloseToggle}
                  key={index}
                  to={menu.path}
                >
                  {menu.menuName}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="bg-red-200/60 md:hidden -z-10 w-full h-full absolute top-0 left-0" />
      </div>
    </>
  );
};

export default Slider;
