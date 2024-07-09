import React from "react";
import Shop from "../components/Shop/Shop";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />  {/*localda gorunmur*/}
      <Shop />
    </div>
  );
};

export default HomePage;
