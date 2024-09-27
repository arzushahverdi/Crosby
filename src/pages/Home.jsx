import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../assets/styles/Home.module.css";
import Navbar from "../components/common/Navbar";
import { FanFavoritesContext } from "../context/fanfavoritesContext";
import supabase from "../supabase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../context/DarkModeContext";

const Home = () => {
  const fanfavorites = useContext(FanFavoritesContext);
  const { t } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  const getLinkPath = (title) => {
    const formattedTitle = encodeURIComponent(title);
    return `/products/product/${formattedTitle}`;
  };

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log(error);
    } else {
      setProducts(data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          {/* First main section */}
          <section className={style.homebox}>
            <Navbar />
            <div className="col-12">
              <div className={style.hometext}>
                <p>{t("home.plantsAndPots")}</p>
                <Link to="/products" className={style.shopbutton}>
                  {t("home.shopNow")}
                </Link>
              </div>
            </div>
          </section>

          {/* Fan Favorites section */}
          <section
            className={isDarkMode ? style.favoriteDark : style.wwd}
            style={{ padding: "100px 50px" }}
          >
            <h1>{t("home.fanFavorites")}</h1>

            <div className="row">
              {fanfavorites &&
                fanfavorites.map((element, index) => (
                  <div className="col-lg-4 col-md-4 col-sm-12 p-0" key={index}>
                    <div className={style.wwdinfo}>
                      <div className={style.imageWrapper}>
                        <img src={element.image} alt={element.title} />
                      </div>
                      <p>{element.title}</p>
                      <Link to={getLinkPath(element.title)}>
                        {t("home.readMore")}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Journal section */}
          <section
            style={{ padding: "100px 50px" }}
            className={isDarkMode ? style.journalDark : style.framebox}
          >
            <h1>{t("home.journal")}</h1>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 p-3">
                <div className={style.afterflowers}>
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860334-9DLEMOHNZRZ2D2H6Q53Z/plant_2_optimized.gif?format=1500w"
                    alt=""
                  />
                  <h1>{t("home.careForPlants")}</h1>
                  <p>{t("home.careForPlantsDesc")}</p>
                  <Link to="/blogs">{t("home.readMore")}</Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-3">
                <div className={style.afterflowers}>
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860340-MCULH1GW7GYGP5X3SZW8/plant_1_optimized.gif?format=1500w"
                    alt=""
                  />
                  <h1>{t("home.indoorPlantsFall")}</h1>
                  <p>{t("home.indoorPlantsFallDesc")}</p>
                  <Link to="/blogs">{t("home.readMore")}</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Sign up section */}
          <section className={style.signuppg}>
            <div className="col-12 p-3">
              <h1>{t("home.theyGrowUp")}</h1>
            </div>
            <div className="col-12 p-3">
              <p>{t("home.dontMiss")}</p>
            </div>
            <div className="col-12 p-3">
              <input type="text" placeholder={t("home.placeHolder")} />
            </div>
            <div className="col-12 p-5">
              <Link to="/signup" className={style.signupbttn}>
                {t("home.signUp")}
              </Link>
            </div>
          </section>

          {/* Gift card section */}
          <section
            className={isDarkMode ? style.giftCardDark : style.sendflowers}
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
                <h1>{t("home.giveTheGift")}</h1>
                <p>{t("home.giftText")}</p>
                <Link to="products/product/Gift%20Card">
                  {t("home.giftPurchase")}
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
