import React from "react";

const Button = ({ label, disabled }) => {
  return (
    <>
      {disabled === true ? (
        <button
          className="bg-primaryBlue flex gap-2 px-5 w-full py-2 text-white rounded-lg cursor-pointer opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-105"
          disabled
        >
          <svg
            className="w-5 h-5 mr-3 border-r-2 border-white rounded-full bg-transparent animate-spin"
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </button>
      ) : (
        <input
          className="bg-primaryBlue px-10 py-2 text-white rounded-lg cursor-pointer opacity-75 hover:opacity-100 transition-all duration-500 hover:scale-105"
          type="submit"
          value={label}
          disabled={disabled ? disabled : false}
        />
      )}
    </>
  );
};

export default Button;
