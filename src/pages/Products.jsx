import React from "react";
import ProductList from "../components/products/ProductList";
import Navbar from "../components/common/Navbar";

const Products = () => {
  return (
    <div style={{backgroundColor: "#38383b"}}>
      <Navbar />
      <ProductList />;
    </div>
  );
};

export default Products;
