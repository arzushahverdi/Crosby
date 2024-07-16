import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../components/Home/Home"

const HomePage = ({ token }) => {
  // let navigate = useNavigate();

  // function handleLogout() {
  //   sessionStorage.removeItem("token");
  //   navigate("/");
  // }
  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
