import React, { useEffect, useState } from "react";
import supabase from "../../supabase";
import style from "../../assets/styles/Products.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
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
    <div className={style.productsboxes}>
      <div className={style.firstbox}>
        <h1>Our Plants</h1>
        <p>
          Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt
          arcu. Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan
          justo.
        </p>
      </div>
      <div className={style.secondbox}>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
