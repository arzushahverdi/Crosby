import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.homebox}>
      <div className={style.hometext}>
        <p>Fresh flowers for any budget.</p>
        <Link to="/shop">Shop Flowers</Link>
      </div>
    </div>
  );
};

export default Home;
