import "./App.css";
import Layout from "./components/Layout";

import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Header from "./components/layout/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        {/* <Route path="/*" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
