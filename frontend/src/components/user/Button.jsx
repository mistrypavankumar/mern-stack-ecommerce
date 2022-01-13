import React from "react";

const Button = ({ label, disabled }) => {
  return (
    <input
      className="bg-primaryBlue px-10 py-2 text-white rounded-lg cursor-pointer opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-105"
      type="submit"
      value={label}
      disabled={disabled ? disabled : false}
    />
  );
};

export default Button;
