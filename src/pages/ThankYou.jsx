import React, { useContext, useEffect, useState } from "react";
import supabase from "../supabase";
import { Link } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import style from "../assets/styles/Products.module.css";
import { useTranslation } from "react-i18next";
import Navbar from "../components/common/Navbar";
import { DarkModeContext } from "../context/DarkModeContext";

const ThankYou = () => {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log(error);
    } else {
      console.log("Fetched products:", data);

      const mixedProducts = data.sort(() => 0.5 - Math.random());

      const selectedProducts = mixedProducts.slice(0, 4);

      setProducts(selectedProducts);
    }
  };

  useEffect(() => {
    getProducts();
    console.log(products, "thanks");
  }, []);

  return (
    <main className={isDarkMode ? style.productListDark : style.productsboxes}>
      <Navbar />
      <div className="container-fluid">
        <div className="row mx-3">
          <div className="col-12 p-0 m-0">
            <div className={style.firstbox}>
              <h1>{t("payment.thanks")}</h1>
              <p>
                {t("payment.recommended")}{" "}
                <Link to="/products" style={{ color: "white" }}>
                  {t("navbar.shop")}
                </Link>
                {t("payment.recommendedRemain")}
              </p>
            </div>
          </div>

          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-4 col-sm-6 col-6 mb-5 mt-5 px-1"
              >
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
