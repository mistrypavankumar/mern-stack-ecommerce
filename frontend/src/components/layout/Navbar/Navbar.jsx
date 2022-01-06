import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import CustomIcon from "../../Icons/CustomIcon";
import { Link, NavLink } from "react-router-dom";
import Slider from "./Slider";

const isActiveStyle = "font-semibold opacity-100 transition-all duration-500";
const isNotActiveStyle = "font-semibold opacity-50 transition-all duration-500";

const Navbar = ({ webName, menuOptions }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handlecloseToggle = () => {
    setToggleSidebar(true);
    console.log("You clicked");
  };

  return (
    <>
      <div className="w-full bg-primaryBlue py-4 md:py-5 px-8 lg:px-24 rounded-bl-3xl rounded-br-3xl text-primaryBlue border-b-2 border-b-borderGlowBlue shadow-lg shadow-cyan-500/50">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="font-bold text-lg md:text-xl">{webName}</h1>
          </Link>

          {/* Only for desktop */}
          <div className="hidden md:block">
            <div className="flex gap-10">
              {menuOptions.map((menu, index) => {
                return (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? isActiveStyle : isNotActiveStyle
                    }
                    to={menu.path}
                    key={index}
                  >
                    {menu.menuName}
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 md:gap-6">
            <CustomIcon Icon={AiOutlineSearch} />
            <CustomIcon Icon={AiOutlineUser} />
            <CustomIcon Icon={AiOutlineShoppingCart} />
            <CustomIcon
              Icon={AiOutlineMenu}
              onClick={handlecloseToggle}
              customStyle="block md:hidden"
            />
          </div>
        </div>
      </div>
      {toggleSidebar && (
        <Slider menuOptions={menuOptions} closeToggle={toggleSidebar} />
      )}
    </>
  );
};

export default Navbar;
