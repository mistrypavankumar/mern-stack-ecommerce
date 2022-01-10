import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer";
import footerData from "./data/footerData.json";
import "./App.css";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import SearchProducts from "./pages/SearchProducts";
import LoginSignUp from "./pages/User/LoginSignUp";

import store from "./store";
import { useSelector } from "react-redux";
import { loadUser } from "./actions/userAction";
import UserOptions from "./components/layout/Navbar/UserOptions";
import Profile from "./pages/User/Profile";

const menuOptions = [
  {
    menuName: "Home",
    path: "/",
  },
  {
    menuName: "Products",
    path: "/products",
  },
  {
    menuName: "About Us",
    path: "/aboutus",
  },
  {
    menuName: "Contact Us",
    path: "/contactus",
  },
];

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Roboto"],
      },
    });

    // loading user data
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      {/* Navbar component */}
      <Navbar webName="E-Commerce" menuOptions={menuOptions} />

      {/* All routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/search" element={<SearchProducts />} />
        {isAuthenticated && <Route path="/account" element={<Profile />} />}

        <Route path="/login" element={<LoginSignUp />} />

        {/* If router is not specified then show below page */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      {/* Footer component */}
      <Footer jsonData={footerData} />
    </>
  );
}

export default App;
