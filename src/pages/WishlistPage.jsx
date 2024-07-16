import React from "react";
import { toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import "../App.css";

const WishlistPage = () => {
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
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
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
                <td>$ {item.price}.00</td>
                <td>
                  <button
                    onClick={() => {
                      addItem(item);
                      toast.success("Successfully added to Wishlist");
                    }}
                    className="addtocart"
                    style={{ textDecoration: "none" , width: "110px", padding: "0", height: "35px", border: "none"}}
                  >
                    Add to Cart
                  </button>
                </td>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistPage;
