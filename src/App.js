import "./App.css";
import React from "react";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import AdminPanel from "./components/AdminPanel";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <Router>
      <ToastContainer
        className="custom-toast-container"
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
