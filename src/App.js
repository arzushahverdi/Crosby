// import "./App.css";
// import React, { useEffect, useState } from "react";
// import ShopPage from "./pages/ShopPage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductDetail from "./ProductDetail";
// import AdminPanel from "./components/AdminPanel";
// import HomePage from "./pages/HomePage";
// import CartPage from "./pages/CartPage";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import WishlistPage from "./pages/WishlistPage";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import { Navigate } from "react-router-dom";

// function App() {
//   const [token, setToken] = useState(false);
//   if (token) {
//     sessionStorage.setItem("token", JSON.stringify(token));
//   }

//   // useEffect(() => {
//   //   if (sessionStorage.getItem("token")) {
//   //     let data = JSON.parse(sessionStorage.getItem("token"));
//   //     setToken(data);
//   //   }
//   // }, []);

//   useEffect(() => {
//     const storedToken = sessionStorage.getItem("token");
//     if (storedToken) {
//       setToken(JSON.parse(storedToken));
//     }
//   }, []);

//   return (
//     <Router>
//       <ToastContainer
//         className="custom-toast-container"
//         position="bottom-right"
//         autoClose={2500}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover={false}
//         theme="colored"
//       />
//       {/* <Routes>
//         <Route path="/admin" element={<AdminPanel />} />
//         {token ? (
//           <Route path="/homepage" element={<HomePage token={token} />} />
//         ) : (
//           ""
//         )}
//         <Route path={"/signup"} element={<Signup />} />
//         <Route path={"/"} element={<Login setToken={setToken} />} />
//         <Route path={"/shop"} element={<ShopPage />} />
//         <Route path={"/wishlist"} element={<WishlistPage />} />
//         <Route path={"/cart"} element={<CartPage />} />
//         <Route path={"/shop/product/:id"} element={<ProductDetail />} />
//       </Routes> */}
//       <Routes>
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route
//           path="/homepage"
//           element={token ? <HomePage token={token} /> : <Navigate to="/" />}
//         />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login setToken={setToken} />} />
//         <Route path="/shop" element={<ShopPage />} />
//         <Route path="/wishlist" element={<WishlistPage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/shop/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = JSON.parse(sessionStorage.getItem("token"));
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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
        <Route path="/" element={<HomePage token={token} />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/wishlist"
          element={token ? <WishlistPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={token ? <CartPage /> : <Navigate to="/login" />}
        />
        <Route path="/shop/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
