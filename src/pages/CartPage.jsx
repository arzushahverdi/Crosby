import React from "react";
import { useCart } from "react-use-cart";
import "../App.css";
import { toast } from "react-toastify";

const CartPage = () => {
  const { items, updateItemQuantity, removeItem, isEmpty, setItems } =
    useCart();
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
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td className="flower_image">
                  <img src={item.image} alt="" />
                </td>
                <td>$ {item.price * item.quantity}.00</td>
                <td>
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
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="itemquantity"
        onClick={() => setItems([])}
        style={{ textAlign: "center" }}
      >
        Buy now
      </button>
    </div>
  );
};

export default CartPage;
