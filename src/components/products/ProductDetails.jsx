import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../../supabase";
import { Link } from "react-router-dom";
import "../../assets/styles/App.css";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";
import Navbar from "../common/Navbar";
const ProductDetails = () => {
  const { title } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const getProduct = async () => {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("title", title)
      .single();
    if (error) {
      console.log(error);
    } else {
      setProduct(data);
    }
  };

  useEffect(() => {
    getProduct();
  }, [title]);

  const toggleWishlistItem = () => {
    // const token = sessionStorage.getItem("token");
    // if (!token) {
    //   toast.error("Please login to your account");
    //   navigate("/login");
    // }
    if (inWishlist(product.id)) {
      removeWishlistItem(product.id);
      toast.error("Successfully removed from Wishlist");
    } else {
      addWishlistItem(product);
      toast.success("Successfully added to Wishlist");
    }
  };

  const addToCart = () => {
    // const token = sessionStorage.getItem("token");
    // if (!token) {
    //   toast.error("Please login to your account");
    //   navigate("/login");
    //   return;
    // }
    addItem(product);
    toast.success("Successfully added to Cart");
  };

  return (
    <div>
      {product && (
        <div className="details">
          <Navbar />
          <div className="productboxdetail">
            <React.Fragment>
              <div
                className="flower_image"
                style={{ width: "565.25px", height: "847.88px" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ marginTop: "50px" }}
                />
              </div>
              <div className="infosboxes">
                <h1 style={{ fontSize: "46px" }}>{product.title}</h1>
                <p style={{ fontSize: "22px" }}>${product.price}.00</p>
                <p style={{ width: "478.67px", fontSize: "18px" }}>
                  {product.description}
                </p>
                <div className="quantity">
                  <p>Quantity:</p>
                  <input type="number" defaultValue={1} />
                </div>
                <div>
                  <Link
                    onClick={toggleWishlistItem}
                    className="addtofavorite"
                    style={{ textDecoration: "none", marginRight: "20px" }}
                  >
                    {inWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
                  </Link>
                  <Link
                    onClick={addToCart}
                    className="addtocart"
                    style={{ textDecoration: "none" }}
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </React.Fragment>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
