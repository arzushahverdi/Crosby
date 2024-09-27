import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import "../assets/styles/WishlistCard.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Delete from "../assets/images/icons8-delete-24.png";
import Plus from "../assets/images/icons8-plus-math-24.png";
import Minus from "../assets/images/icons8-minus-24.png";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../context/DarkModeContext";

const Basket = () => {
  const { items, updateItemQuantity, removeItem, isEmpty } = useCart();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleLogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error(
        i18n.language === "en"
          ? "Please login to your account"
          : "Zəhmət olmasa hesabınıza giriş edin"
      );
      navigate("/login");
      return;
    }

    navigate("/payment", { state: { subtotal } });
  };

  if (isEmpty)
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
          {t("empty.emptyCard")}{" "}
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
                <h1>{t("cart.shopping")}</h1>
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
                    <div className="imageTitle basket">
                      <p>{item.title}</p>
                    </div>
                  </div>
                  <div className="col-20">
                    <div className="productQuantity">
                      <button
                        className="wishlistButton plus"
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity + 1);
                          toast.success(
                            i18n.language === "en"
                              ? "Successfully added to Cart"
                              : "Səbətə uğurla əlavə edildi"
                          );
                        }}
                      >
                        <img src={Plus} alt="" />
                      </button>
                      {item.quantity}
                      <button
                        className="wishlistButton minus"
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity - 1);
                          toast.error(
                            i18n.language === "en"
                              ? "Successfully removed from Cart"
                              : "Səbətdən uğurla silindi"
                          );
                        }}
                      >
                        <img src={Minus} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="col-20">
                    <div className="wishlistPrice">
                      <p>${item.price * item.quantity}.00</p>
                    </div>
                  </div>
                  <div className="col-20">
                    <button
                      className="cardButton delete"
                      onClick={() => {
                        removeItem(item.id);
                        toast.error(
                          i18n.language === "en"
                            ? "Successfully removed from Cart"
                            : "Səbətdən uğurla silindi"
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
            <div className="subtotal">
              <h3>{t("cart.subtotal")}:</h3>
              <p>${subtotal.toFixed(2)}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="checkout">
              <button onClick={handleLogin}>{t("cart.checkout")}</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Basket;
