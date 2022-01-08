import React from "react";

const Loader = () => {
  return (
    <div className="w-ful h-screen bg-primaryBlue flex justify-center items-center">
      <div className="w-24 h-24 rounded-full animate-spin border-b-4 border-primaryBlue" />
    </div>
  );
};

export default Loader;
