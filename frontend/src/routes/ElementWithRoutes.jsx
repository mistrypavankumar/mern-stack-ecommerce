import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart/Cart";
import Shipping from "../pages/Cart/Shipping";
import ContactUs from "../pages/ContactUs";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import ProductDetails from "../pages/Product/ProductDetails";
import Products from "../pages/Product/Products";
import SearchProducts from "../pages/Product/SearchProducts";
import ForgotPassword from "../pages/User/ForgotPassword";
import LoginSignUp from "../pages/User/LoginSignUp";
import Profile from "../pages/User/Profile";
import ResetPassword from "../pages/User/ResetPassword";
import UpdatePassword from "../pages/User/UpdatePassword";
import UpdateProfile from "../pages/User/UpdateProfile";
import ConfrimOrder from "../pages/Cart/ConfirmOrder";
import Payment from "../pages/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const ElementWithRoutes = ({ stripeApiKey }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/search" element={<SearchProducts />} />

        {/* Protected routes starts */}

        <Route
          path="/account"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/update"
          element={
            isAuthenticated ? <UpdateProfile /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/password/update"
          element={
            isAuthenticated ? <UpdatePassword /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/shipping"
          element={isAuthenticated ? <Shipping /> : <Navigate to="/login" />}
        />

        <Route
          path="/order/confirm"
          element={
            isAuthenticated ? <ConfrimOrder /> : <Navigate to="/login" />
          }
        />

        {stripeApiKey && (
          <Route
            path="/process/payment"
            element={
              isAuthenticated ? (
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        {/* Protected routes ends */}

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />

        {/* If router is not specified then show below page */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default ElementWithRoutes;
