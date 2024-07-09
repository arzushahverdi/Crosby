import React, { useEffect, useState } from "react";
import style from "./Shop.module.css";
import supabase from "../../supabase";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log(error);
    } else {
      setProducts(data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={style.Shop}>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            <Link
              to={`/shop/product/${product.id}`}
              className={style.productbox}
              style={{ textDecoration: "none" }}
            >
              <div className={style.flower_image}>
                <img src={product.image} alt={product.title} />
              </div>

              <div
                style={{
                  fontSize: "22px",
                  marginTop: "10px",
                  color: "#000",
                  fontWeight: "500",
                }}
              >
                {product.title}
              </div>
              <div
                style={{
                  fontSize: "17px",
                  marginTop: "10px",
                  color: "#000",
                  fontWeight: "400",
                }}
              >
                ${product.price}.00
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Shop;
