import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";
import Basket from "../pages/Basket";
import ProductDetails from "../pages/ProductDetails";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import About from "../pages/About";

const AppRoutes = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = JSON.parse(sessionStorage.getItem("token"));
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
    <div>
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
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/admin" element={<AdminPanel />} /> */}
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Basket />} />
          <Route path="/about" element={<About />} />
          {/* <Route
          path="/wishlist"
          element={token ? <WishlistPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={token ? <CartPage /> : <Navigate to="/login" />}
        /> */}
          <Route path="/products/product/:title" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRoutes;
