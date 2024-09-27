import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import { FanFavoritesProvider } from "./context/fanfavoritesContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <FanFavoritesProvider>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </FanFavoritesProvider>
  </Provider>
);
