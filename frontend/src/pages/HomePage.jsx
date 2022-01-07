import React from "react";
import Banner from "../components/home/Banner/Banner";
import OurProduct from "../components/home/OurProduct/OurProduct";
import companydata from "./../data/companydata.json";
import MetaData from "./../components/layout/MetaData";

const HomePage = () => {
  return (
    <div>
      <MetaData title="E-Commerce" />
      {/* banner */}
      <Banner jsonData={companydata} />
      {/* our products */}

      <OurProduct />
    </div>
  );
};

export default HomePage;
