import React from "react";
import ProductCard from "./ProductCard";

const OurProduct = ({ products }) => {
  return (
    <div
      className="h-auto md:px-24 flex flex-col justify-center items-center"
      id="ourproduct"
    >
      <div className="py-10 px-8 md:px-0">
        <h1 className="headingStyle">
          <div className="headingStylesDiv" />
          Featured Products
        </h1>

        <div className="productsLayoutStyle">
          {products &&
            products.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
