import React from "react";

const CustomIcon = ({ Icon, customStyle }) => {
  return (
    <div
      className={`text-xl md:text-2xl cursor-pointer opacity-70 hover:opacity-100 p-1 transition-opacity duration-500 ${customStyle}`}
    >
      <Icon />
    </div>
  );
};

export default CustomIcon;
