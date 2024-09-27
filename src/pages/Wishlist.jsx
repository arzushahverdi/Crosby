import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import "../assets/styles/WishlistCard.css";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Delete from "../assets/images/icons8-delete-24.png";
import Card from "../assets/images/icons8-cart-30.png";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../context/DarkModeContext";

const Wishlist = () => {
  const { isWishlistEmpty, items, removeWishlistItem } = useWishlist();
  const { addItem } = useCart();
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  const addToCart = (item) => {
    addItem(item);
    toast.success(
      i18n.language === "en"
        ? "Successfully added to Cart"
        : "Səbətə uğurla əlavə edildi"
    );
  };

  if (isWishlistEmpty)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "150px 100px",
          fontSize: "24px",
          backgroundColor: "#D7D7DA",
        }}
      >
        <img
          src="https://img.icons8.com/?size=100&id=42382&format=png&color=000000"
          alt="cart"
        />
        <p>
          {t("empty.emptyWishlist")}
          <Link to="/products" style={{ color: "black", fontSize: "24px" }}>
            {t("navbar.shop")}
          </Link>
          {t("payment.recommendedRemain")}
        </p>
      </div>
    );
  return (
    <main className={isDarkMode ? "wishlistDark" : "myWishlist"}>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="wishlistTable">
            <div className="col-12 p-0 m-0">
              <div className="tableTitle">
                <h1>{t("cart.wishlist")}</h1>
              </div>
            </div>

            {items.map((item) => {
              return (
                <div className="mainSection mb-3 mt-3">
                  <div className=".col-20">
                    <div className="flowerImage">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <div className="col-20">
                    <div className="imageTitle">
                      <p>{item.title}</p>
                    </div>
                  </div>
                  <div className="col-20">
                    <button
                      onClick={() => addToCart(item)}
                      className="wishlistButton"
                    >
                      <img src={Card} alt="Card" />
                    </button>
                  </div>
                  <div className="col-20">
                    <div className="wishlistPrice">
                      <p>${item.price}.00</p>
                    </div>
                  </div>
                  <div className="col-20">
                    <button
                      className="wishlistButton delete"
                      onClick={() => {
                        removeWishlistItem(item.id);
                        toast.error(
                          i18n.language === "en"
                            ? "Successfully removed from Wishlist"
                            : "İstək siyahısından uğurla silindi"
                        );
                      }}
                    >
                      <img src={Delete} alt="Delete" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12">
            <div className="gotoCard">
              <Link to="/cart">{t("cart.goToCard")}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
