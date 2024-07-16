import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductDetail from "./ProductDetail";
import AdminPanel from "./components/AdminPanel";
import ShopPage from "./pages/ShopPage";
import Navbar from "./components/Navbar/Navbar";
import { FlowersProvider } from "./context/flowersContext";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = JSON.parse(sessionStorage.getItem("token"));
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <FlowersProvider>
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
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route
          path="/wishlist"
          element={token ? <WishlistPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={token ? <CartPage /> : <Navigate to="/login" />}
        /> */}
          <Route path="/shop/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </FlowersProvider>
  );
}

export default App;
