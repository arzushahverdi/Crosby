import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import { FlowersContext } from "../../context/flowersContext";
import { useState } from "react";

const HomeContent = () => {
  // const { product } = useContext(FlowersContext);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % product.image.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex(
  //     (prevIndex) =>
  //       (prevIndex - 1 + product.image.length) % product.image.length
  //   );
  // };

  return (
    <>
      <div className={style.homebox}>
        <div className={style.hometext}>
          <p>Fresh flowers for any budget.</p>
          <Link to="/shop" className={style.shopbutton}>
            Shop Flowers
          </Link>
        </div>
      </div>
      <div className={style.framebox}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b503a3a6154640a151782/1649102907934-UI72U7JZPNIJ7DT52C6Q/Frame+16.png?format=300w"
          alt="frame"
        />

        <p>
          Here at Hales, we work with a small list of carefully chosen
          producers, source the freshest hothouse blooms, wildflowers and
          seasonal greenery and display them in custom pottery and glassware.{" "}
        </p>
      </div>
      {/* <div className={style.bestsellers}>
        <div>
          <h1>Best sellers</h1>
          <p>
            Transform your home or office with our gorgeous best selling
            seasonal arrangements.
          </p>
          <Link to="/shop">Shop Best Sellers</Link>
        </div>
        <div className="arrow left-arrow" onClick={handlePrev}>
          &#8592;
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>
          &#8594;
        </div>
        <div>
          {
            product?.map((item)=>{
              return(
                <h1>{item.image}</h1>
              )
            })
          }
        </div>
      </div> */}
    </>
  );
};

export default HomeContent;
