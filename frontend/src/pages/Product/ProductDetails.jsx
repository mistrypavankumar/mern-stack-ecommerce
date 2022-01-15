import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useAlert } from "react-alert";
import ReviewCard from "../../components/home/ReviewCard/ReviewCard";
import MetaData from "../../components/layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import Loader from "../../components/layout/Loader/Loader";
import QuantityCardInput from "../../components/Cart/QuantityCardInput";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  // getting id from the url
  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const [quantity, setQuantity] = useState(1);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#14cddb",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;

    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full py-24 px-8 md:px-24 flex flex-col md:flex-row justify-center bg-secColor">
          <MetaData title={`${product.name} | E-Commerce`} />
          <div className="w-full flex justify-center md:w-1/2 md:p-10 overflow-hidden ">
            <Carousel className="w-full md:w-3/5">
              {product.image &&
                product.image.map((item, id) => {
                  return <img key={id} src={item.url} alt={`${id} Slide`} />;
                })}
            </Carousel>
          </div>

          <div className="md:p-10 md:w-1/2 ">
            <div>
              <h2 className="text-primaryDarkBlue font-bold text-xl text-center mt-5 md:mt-0 md:text-left capitalize">
                {product.name}
              </h2>
              <p className="text-slate-400 font-light text-xm text-center md:text-left">
                Product # {product._id}
              </p>
            </div>

            {/* revies related div */}
            <div
              className="flex gap-3 my-5 
            justify-center md:justify-start items-center border-t-2 border-b-2 py-3 border-slate-300"
            >
              <ReactStars {...options} />
              <span className="text-slate-500">
                ({product.numOfReviews} Reviews)
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-primaryDarkBlue text-center md:text-left">{`₹ ${product.price}`}</h1>

              <div className="flex gap-5 my-5 flex-col md:flex-row justify-center md:justify-start">
                <QuantityCardInput
                  quantity={quantity}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />

                <button
                  disabled={product.stock < 1 ? true : false}
                  onClick={addToCartHandler}
                  className="commonBtnStyle mx-auto md:mx-0 py-2 px-5 w-1/3 md:w-1/3 bg-primaryBlue"
                >
                  Add to Cart
                </button>
              </div>

              <p className="border-t-2 border-b-2 py-3 border-slate-300 text-slate-600 font-semibold text-center md:text-left">
                Status:{" "}
                <b
                  className={`${
                    product.Stock < 1 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {product.Stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
            </div>
            <div className="py-5 font-semibold text-center md:text-left">
              Description:{" "}
              <p className="font-normal text-slate-500 text-xs">
                {product.description}
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="commonBtnStyle w-1/2 md:w-1/3 py-2 px-10 bg-secondaryDark hover:scale-105 outline-none">
                Add Review
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="py-5">
        <h1 className="headingStyle uppercase">
          <div className="headingStylesDiv" />
          Reviews{" "}
        </h1>

        {product.reviews && product.reviews[0] ? (
          <div className="flex gap-5 px-10 my-10 no-scrollbar overflow-x-auto">
            {product.reviews &&
              product.reviews.map((review, id) => {
                return <ReviewCard key={id} review={review} />;
              })}
          </div>
        ) : (
          <p className="text-center py-24 text-2xl text-slate-400">
            No Reviews Yet
          </p>
        )}
      </div>
    </Fragment>
  );
};

export default ProductDetails;
