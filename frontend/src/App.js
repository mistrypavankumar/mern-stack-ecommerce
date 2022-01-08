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
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Roboto"],
      },
    });
  }, []);

  return (
    <>
      {/* Navbar component */}
      <Navbar webName="E-Commerce" menuOptions={menuOptions} />

      {/* All routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      {/* Footer component */}
      <Footer jsonData={footerData} />
    </>
  );
}

export default App;
