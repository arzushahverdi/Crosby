import React, { useContext } from "react";
import ProductDetail from "../components/products/ProductDetails";
import { DarkModeContext } from "../context/DarkModeContext";
import "../assets/styles/App.css";
import Navbar from "../components/common/Navbar";

function ProductDetails() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={isDarkMode ? "detailsDark" : "details"}>
      <Navbar />
      <ProductDetail />;
    </div>
  );
}

export default ProductDetails;
