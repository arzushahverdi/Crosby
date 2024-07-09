import React, { useState, useEffect } from "react";
import supabase from "../supabase";
import "../App.css";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log("Error fetching products:", error);
    } else {
      setProducts(data);
    }
  };

  const deleteProduct = async (id) => {
    let { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      console.log("Error deleting product:", error);
    } else {
      fetchProducts();
    }
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="adminbox">
            {product.title} : ${product.price}.00 
            <button
              onClick={() => deleteProduct(product.id)}
              style={{ marginRight: "700px" }}
              className="deletebutton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
