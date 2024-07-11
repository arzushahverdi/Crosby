import React from "react";
import Shop from "../components/Shop/Shop";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Home from "../components/Home/Home"

const HomePage = ({ token }) => {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div>
      <Navbar />
      <Home />
      <button onClick={handleLogout}>Log out</button>
      <Shop />
    </div>
  );
};

export default HomePage;
