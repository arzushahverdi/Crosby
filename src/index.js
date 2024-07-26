import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import { FanFavoritesProvider } from "./context/fanfavoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FanFavoritesProvider>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </FanFavoritesProvider>
);
