import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import HomePage from "./pages/HomePage";
// import { useEffect, useState } from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product";

const menuOptions = [
  {
    menuName: "Home",
    path: "/",
  },
  {
    menuName: "Product",
    path: "/product",
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
  return (
    <>
      <Navbar webName="E-Commerce" menuOptions={menuOptions} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
