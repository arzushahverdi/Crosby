import React from "react";
import style from "../../assets/styles/Products.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row mx-n1">
        <div className={style.productbox}>
          <div className="col-12 p-0 m-0">
            <div className={style.flower_image}>
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          <div className="col-12 p-0 m-0">
            <div className={style.productTitle}>
              <h2>{product.title}</h2>
            </div>
          </div>

          <div className="col-12 p-0 m-0">
            <div className={style.productPrice}>
              <p>$ {product.price}.00</p>
            </div>
          </div>
          <div className="col-12 p-0 m-0">
            <div className={style.productDetails}>
              <Link
                to={`/products/product/${product.title}`}
                className={style.viewdetails}
              >
                {t("products.viewDetails")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
