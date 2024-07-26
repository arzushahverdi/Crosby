import React from "react";
import { toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import "../assets/styles/App.css";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const Wishlist = () => {
  const { isWishlistEmpty, items, removeWishlistItem } = useWishlist();
  const { addItem } = useCart();

  if (isWishlistEmpty)
    return (
      <div style={{ textAlign: "center", margin: "200px", fontSize: "24px" }}>
        <img
          src="https://img.icons8.com/?size=100&id=42382&format=png&color=000000"
          alt="cart"
        />
        <p>Your wishlist is empty</p>
      </div>
    );
  return (
    <div style={{ backgroundColor: "#393d24" }}>
      <Navbar />
      <table style={{ padding: "0 80px" }}>
        <h1
          style={{
            fontWeight: "500",
            fontSize: "22px",
            letterSpacing: "1px",
            color: "#fff",
            marginTop: "50px",
          }}
        >
          Wishlist
        </h1>
        <tbody>
          {items.map((item) => {
            return (
              <tr
                style={{
                  display: "flex",
                  gap: "150px",
                  marginTop: "30px",
                  borderBottom: "0.5px solid #e6e4e4",
                  paddingBottom: "30px",
                }}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <td
                    className="flower_image"
                    style={{ width: "132px", height: "132px" }}
                  >
                    <img src={item.image} alt="" />
                  </td>
                  <td style={{ color: "#fff" }}>{item.title}</td>
                </div>
                <div style={{ marginLeft: "250px" }}>
                  <td style={{ color: "#fff" }}>
                    <button
                      onClick={() => {
                        addItem(item);
                        toast.success("Successfully added to Cart");
                      }}
                      className="itemquantity"
                      style={{ width: "110px", padding: "8px" }}
                    >
                      Add to Cart
                    </button>
                  </td>
                </div>
                <div>
                  <td style={{ color: "#fff" }}>${item.price}.00</td>
                  <td>
                    <button
                      className="itemquantity"
                      onClick={() => {
                        removeWishlistItem(item.id);
                        toast.error("Succesfully removed from Wishlist");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          textAlign: "right",
          marginRight: "50px",
          color: "#fff",
          marginTop: "20px",
        }}
      >
        <div style={{ paddingBottom: "50px", paddingLeft: "30px" }}>
          <Link
            to="/cart"
            style={{
              width: "365px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#fff",
              textDecoration: "none",
              color: "#000",
              fontSize: "16px",
              fontWeight: "500",
              letterSpacing: "1px",
              marginLeft: "50px",
            }}
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
