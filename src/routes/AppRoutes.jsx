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
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import ThankYou from "../pages/ThankYou";
import Payment from "../pages/Payment";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/common/ScrollToTop";
import { DarkModeProvider } from "../context/DarkModeContext";

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
      <DarkModeProvider>
        <Router>
          <ScrollToTop />
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
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Basket />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/wishlist"
              element={token ? <Wishlist /> : <Navigate to="/login" />}
            />
            <Route
              path="/cart"
              element={token ? <Basket /> : <Navigate to="/login" />}
            />
            <Route
              path="/products/product/:title"
              element={<ProductDetails />}
            />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:blogId" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </DarkModeProvider>
    </div>
  );
};

export default AppRoutes;
