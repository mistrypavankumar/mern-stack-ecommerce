import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "#14cddb",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

const Product = ({ products }) => {
  return (
    <Link
      to={products._id}
      className="flex flex-col w-10/12 m-auto rounded-lg shadow-lg bg-secColor overflow-hidden md:hover:shadow-xl transition-all duration-300 md:hover:scale-105 group decoration-transparent"
    >
      <div className="relative overflow-hidden">
        <img src={products.images[0].url} alt={products.name} />

        <div className="absolute bottom-0 bg-primaryBlue/90 w-full opacity-0 group-hover:opacity-100 translate-y-1/2 group-hover:translate-y-0 transition-all duration-500 flex justify-center items-center flex-col py-2">
          <ReactStars {...options} />{" "}
          <span className="text-white">(253 reviews)</span>
        </div>
      </div>

      <div className="px-3 py-3 text-center">
        <p className="text-secondaryDark font-bold text-md">{products.name}</p>

        <span className="text-red-600 font-semibold">{products.price}</span>
      </div>
    </Link>
  );
};

export default Product;
