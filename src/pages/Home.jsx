import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "../assets/styles/Home.module.css";
import Navbar from "../components/common/Navbar";
import { FanFavoritesContext } from "../context/fanfavoritesContext";

const Home = () => {
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
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          {/* First main section */}
          <section className={style.homebox}>
            <Navbar />
            <div className="col-12">
              <div className={style.hometext}>
                <p>Plants and Pots For Your Home</p>
                <Link to="/products" className={style.shopbutton}>
                  Shop Now
                </Link>
              </div>
            </div>
          </section>

          {/* Fan Favorites section */}
          <section className={style.wwd} style={{ padding: "100px 50px" }}>
            <h1>Fan Favorites</h1>

            <div className="row">
              {fanfavorites &&
                fanfavorites.map((element, index) => (
                  <div className="col-lg-4 col-md-4 col-sm-12 p-0" key={index}>
                    <div className={style.wwdinfo}>
                      <div className={style.imageWrapper}>
                        <img src={element.image} alt={element.title} />
                      </div>
                      <p>{element.title}</p>
                      <Link to={getLinkPath(element.title)}>See all</Link>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Journal section */}
          <section className={style.framebox} style={{ padding: "100px 50px" }}>
            <h1>The Journal</h1>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 p-3">
                <div className={style.afterflowers}>
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860334-9DLEMOHNZRZ2D2H6Q53Z/plant_2_optimized.gif?format=1500w"
                    alt=""
                  />
                  <h1>Is It Flowers You’re After?</h1>
                  <p>
                    Flowering plants are stunning, but require a bit more work
                    than their non-flowering brethren. Learn how to keep them
                    happy.
                  </p>
                  <Link to="/gallery">Read More</Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-3">
                <div className={style.afterflowers}>
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860340-MCULH1GW7GYGP5X3SZW8/plant_1_optimized.gif?format=1500w"
                    alt=""
                  />
                  <h1>Searching for Succulents?</h1>
                  <p>
                    If you have a sunny windowsill, you can be a succulent
                    owner. These hardy and beautiful plants are as easy as they
                    come.
                  </p>
                  <Link to="/gallery">Read More</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Sign up section */}
          <section className={style.signuppg}>
            <div className="col-12 p-3">
              <h1>They grow up so fast.</h1>
            </div>
            <div className="col-12 p-3">
              <p>Don’t miss a thing. Sign up to receive news and updates.</p>
            </div>
            <div className="col-12 p-3">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="col-12 p-5">
              <Link className={style.signupbttn}>Sign Up</Link>
            </div>
          </section>

          {/* Gift card section */}
          <section
            className={style.sendflowers}
            style={{ padding: "100px 50px" }}
          >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860354-WRQABZPWOMXHLCFAAFCA/giftcard-template.jpg?format=1500w"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 text-align-center justify-content-center align-content-center">
                <h1>Give the Gift of Greenery</h1>
                <p>
                  Plants are as thoughtful a gift as flowers and last much
                  longer. With a gift card, you can brighten up someone’s home,
                  office or dorm room with a potted plant of their choice.
                  They’re available in any denomination and we’ll mail it for
                  free!
                </p>
                <Link to="products/product/Gift%20Card">
                  Purchase a Gift Card
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
