import React from "react";
import style from "../../assets/styles/Products.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className={style.productbox}>
      <div className={style.flower_image}>
        <img src={product.image} alt={product.title} />
      </div>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "10px",
          color: "#fff",
          fontWeight: "500",
        }}
      >
        {product.title}
      </h2>
      <p
        style={{
          fontSize: "18px",
          marginTop: "10px",
          color: "#fff",
          fontWeight: "400",
        }}
      >
        $ {product.price}.00
      </p>
      <Link
        to={`/products/product/${product.title}`}
        className={style.viewdetails}
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
