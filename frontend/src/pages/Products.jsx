import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../actions/productAction";
import Loader from "../components/layout/Loader/Loader";
import ProductCard from "../components/home/OurProduct/ProductCard";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();
  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const [price, setPrice] = useState([0, 25000]);

  const [currentPage, setCurrentPage] = useState(1);

  const keyword = params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price));
  }, [dispatch, error, alert, keyword, currentPage, price]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="h-auto py-24 md:px-10 flex flex-col justify-center items-center">
            <h1 className="headingStyle">
              <div className="headingStylesDiv" />
              Products
            </h1>

            <div className="flex flex-row-reverse">
              <div className="productsLayoutStyle">
                {products &&
                  products.map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                  })}
              </div>

              <div className="border-2 w-1/6">
                <Typography>Price</Typography>
                <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={25000}
                />
              </div>
            </div>
          </div>

          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
