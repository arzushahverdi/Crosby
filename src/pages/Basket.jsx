import React from "react";
import { useCart } from "react-use-cart";
import "../assets/styles/App.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const Basket = () => {
  const { items, updateItemQuantity, removeItem, isEmpty, setItems } =
    useCart();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  if (isEmpty)
    return (
      <div style={{ textAlign: "center", margin: "200px", fontSize: "24px" }}>
        <img
          src="https://img.icons8.com/?size=100&id=42382&format=png&color=000000"
          alt="cart"
        />
        <p>Your cart is empty</p>
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
          Shopping Card
        </h1>
        <tbody>
          {items.map((item) => {
            console.log(item);
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
                <div style={{ marginLeft: "150px" }}>
                  <td style={{ color: "#fff" }}>
                    <button
                      className="itemquantity"
                      onClick={() => {
                        updateItemQuantity(item.id, item.quantity + 1);
                        toast.success("Successfully added to Cart");
                      }}
                    >
                      +
                    </button>
                    {item.quantity}
                    <button
                      className="itemquantity"
                      onClick={() => {
                        updateItemQuantity(item.id, item.quantity - 1);
                        toast.error("Succesfully removed from Cart");
                      }}
                    >
                      -
                    </button>
                  </td>
                </div>
                <div>
                  <td style={{ color: "#fff" }}>
                    ${item.price * item.quantity}.00
                  </td>
                  <td>
                    <button
                      className="itemquantity"
                      onClick={() => {
                        removeItem(item.id);
                        toast.error("Succesfully removed from Cart");
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
          <div
            style={{
              width: "300px",
              height: "40px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "200px",
              marginTop: "50px",
              boxSizing: "border-box",
              marginLeft: "50px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "1px",
              }}
            >
              Subtotal
            </h3>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "400",
                letterSpacing: "1px",
              }}
            >
              ${subtotal.toFixed(2)}
            </p>
          </div>
          <Link
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
            Checkout
          </Link>
        </div>
      </div>
      {/* <button
        className="itemquantity"
        onClick={() => setItems([])}
        style={{ textAlign: "center" , display: "flex",justifyContent: "flex-end", alignItems: "flex-end"}}
      >
        Buy now
      </button> */}
    </div>
  );
};

export default Basket;
