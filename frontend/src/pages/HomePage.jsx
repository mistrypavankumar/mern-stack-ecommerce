import React, { Fragment, useEffect } from "react";
import Banner from "../components/home/Banner/Banner";
import OurProduct from "../components/home/OurProduct/OurProduct";
import companydata from "./../data/companydata.json";
import MetaData from "./../components/layout/MetaData";
import { useSelector, useDispatch } from "react-redux";

import { getProduct } from "../actions/productAction";
import Loader from "../components/layout/Loader/Loader";
import { useAlert } from "react-alert";

// const products = {
//   name: "Blue Shirt",
//   images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//   price: "Rs.3000",
//   _id: "pavankumar",
// };

const HomePage = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="E-Commerce" />
          {/* banner */}
          <Banner jsonData={companydata} />
          {/* our products */}

          <OurProduct products={products} />
        </Fragment>
      )}
    </div>
  );
};

export default HomePage;
