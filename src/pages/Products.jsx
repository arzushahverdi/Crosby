import React, { useContext } from "react";
import ProductList from "../components/products/ProductList";
import Navbar from "../components/common/Navbar";
import { DarkModeContext } from "../context/DarkModeContext";
import style from "../assets/styles/Products.module.css";

const Products = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={isDarkMode ? style.productListDark : style.productsboxes}>
      <Navbar />
      <ProductList />;
    </div>
  );
};

export default Products;
