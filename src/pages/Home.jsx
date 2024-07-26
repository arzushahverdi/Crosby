import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../assets/styles/Home.module.css";
// import { FlowersContext } from "../../context/flowersContext";
// import { useState } from "react";
import Navbar from "../components/common/Navbar";
import { FanFavoritesContext } from "../context/fanfavoritesContext";

const Home = () => {
  // let navigate = useNavigate();

  // function handleLogout() {
  //   sessionStorage.removeItem("token");
  //   navigate("/");
  // }
  const fanfavorites = useContext(FanFavoritesContext);

  const getLinkPath = (title) => {
    switch (title) {
      case "Lily's Guys":
        return "/products/product/Pencil-Plant";
      case "Bigger Statements":
        return "/products/product/Alocasia";
      case "Low Maintenance":
        return "/products/product/Lily";
      default:
        return "/";
    }
  };
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
      {/* <div className={style.homebox}>
        <Navbar />
        <div className={style.hometext}>
          <p>Plants and Pots For Your Home</p>
          <Link to="/products" className={style.shopbutton}>
            Shop Now
          </Link>
        </div>
      </div> */}

      
      <section className={style.homebox}>
        <Navbar />
        <div className={style.hometext}>
          <p>Plants and Pots For Your Home</p>
          <Link to="/products" className={style.shopbutton}>
            Shop Now
          </Link>
        </div>
      </section>

      <section className={style.wwd}>
        <h1>Fan Favorites</h1>
        <div className={style.wwdgalery}>
          {fanfavorites &&
            fanfavorites.map((element, index) => (
              <React.Fragment key={index}>
                <div className={style.wwdinfo}>
                  <img
                    src={element.image}
                    alt=""
                    // style={{ width: "386.67px", height: "516.55px" }}
                  />
                  <p>{element.title}</p>
                  <Link to={getLinkPath(element.title)}>Buy Now</Link>
                </div>
              </React.Fragment>
            ))}
        </div>
      </section>
      <section className={style.framebox}>
        <h1>The Journal</h1>
        <div className={style.framereadmore}>
          <div className={style.afterflowers}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860334-9DLEMOHNZRZ2D2H6Q53Z/plant_2_optimized.gif?format=1500w"
              alt=""
            />
            <h1>Is It Flowers You’re After?</h1>
            <p>
              Flowering plants are stunning, but require a bit more work than
              their non-flowering brethren. Learn how to keep them happy.
            </p>
            <Link to="/gallery">Read More</Link>
          </div>
          <div className={style.afterflowers}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860340-MCULH1GW7GYGP5X3SZW8/plant_1_optimized.gif?format=1500w"
              alt=""
            />
            <h1>Searching for Succulents?</h1>
            <p>
              If you have a sunny windowsill, you can be a succulent owner.
              These hardy and beautiful plants are as easy as they come.
            </p>
            <Link to="/gallery">Read More</Link>
          </div>
        </div>
      </section>

      <section className={style.signuppg}>
        <h1>They grow up so fast.</h1>
        <p>Don’t miss a thing. Sign up to receive news and updates.</p>
        <input type="text" placeholder="Email Address" />
        <Link className={style.signupbttn}>Sign Up</Link>
      </section>
      <section className={style.sendflowers}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860354-WRQABZPWOMXHLCFAAFCA/giftcard-template.jpg?format=1500w"
          alt=""
        />
        <div className={style.btnandtxt}>
          <h1>Give the Gift of Greenery</h1>
          <p>
            Plants are as thoughtful a gift as flowers and last much longer.
            With a gift card, you can brighten up someone’s home, office or dorm
            room with a potted plant of their choice. They’re available in any
            denomination and we’ll mail it for free!
          </p>
          <Link to="products/product/Gift%20Card">Purchase a Gift Card</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
