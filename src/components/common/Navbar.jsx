import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../assets/styles/Navbar.module.css";
import Heart from "../../assets/images/icons8-heart-30.png";
import Card from "../../assets/images/icons8-cart-30.png";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import classNames from "classnames";
import Account from "../../assets/images/icons8-account-32.png";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../assets/styles/dropdown.css";
import Azerbaijan from "../../assets/images/icons8-azerbaijan-48.png";
import US from "../../assets/images/icons8-united-states-48.png";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Light from "../../assets/images/icons8-sun.png";
import Dark from "../../assets/images/icons8-moon2.png";
import { DarkModeContext } from "../../context/DarkModeContext";
import BurgerCart from "../../assets/images/icons8-cart-60.png";
import BurgerHeart from "../../assets/images/icons8-heart-white-60.png";
import BurgerAccount from "../../assets/images/icons8-account-48.png";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/*";
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const navbarStyle = {
    backgroundColor: isNotFoundPage ? "#385524" : "transparent",
    padding: isNotFoundPage ? "10px" : "0px",
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername("");
    navigate("/");
  };

  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(style.responsive_nav);
  };

  console.log(username, "username");
  const menuItems = [
    {
      key: "languages",
      label: (
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{ background: "none", border: "none" }}
            onClick={() => changeLanguage("az")}
          >
            <img src={Azerbaijan} alt="Azerbaijan" width="25px" height="25px" />
          </button>
          <button
            style={{ background: "none", border: "none" }}
            onClick={() => changeLanguage("en")}
          >
            <img src={US} alt="English" width="25px" height="25px" />
          </button>
        </div>
      ),
    },
    {
      key: "admin",
      label: <Link to="/admin">Admin Panel</Link>,
      visible: username === "Arzu Shahverdi",
    },
    {
      key: "modes",
      label: (
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{ background: "none", border: "none" }}
            onClick={toggleDarkMode}
          >
            <img
              src={isDarkMode ? Light : Dark}
              alt={isDarkMode ? "Light Mode" : "Dark Mode"}
              width="25px"
              height="25px"
            />
          </button>
        </div>
      ),
    },
    {
      key: "logout",
      label: <span onClick={handleLogout}>{t("navbar.logOut")}</span>,
    },
  ];

  return (
    <header style={navbarStyle}>
      <button onClick={showNavbar} className={style.nav_btn}>
        <FaBars />
      </button>
      <Link to="/" className={style.logoText}>
        Crosby
      </Link>
      <nav ref={navRef}>
        <Link to="/products" className={style.links}>
          {t("navbar.shop")}
        </Link>
        <Link to="/about" className={style.links}>
          {t("navbar.about")}
        </Link>
        <Link to="/blogs" className={style.links}>
          {t("navbar.blog")}
        </Link>
        <Link to="/contact" className={style.links}>
          {t("navbar.contact")}
        </Link>
        <div className={style.menuCart}>
          <Link to="/login" className={style.noUser}>
            <img src={BurgerAccount} alt="account" width="40px" height="40px" />
          </Link>
          <Link
            to="/wishlist"
            className={classNames(style.wishList, style.nowishList)}
          >
            <img src={BurgerHeart} alt="heart" width="40px" height="40px" />
            <span>{totalWishlistItems}</span>
          </Link>
          <Link
            to="/cart"
            className={classNames(style.wishList, style.nowishList)}
          >
            <img src={BurgerCart} alt="cart" width="40px" height="40px" />
            <span>{totalItems}</span>
          </Link>
        </div>

        <button
          onClick={showNavbar}
          className={classNames(style.nav_btn, style.nav_close_btn)}
        >
          <FaTimes />
        </button>
      </nav>
      <div className={style.icons}>
        {username && (
          <Dropdown
            menu={{
              items: menuItems.filter((item) => item.visible !== false),
              style: { display: "flex", flexDirection: "column" },
            }}
            trigger={["click"]}
            overlayStyle={{ backgroundColor: "transparent" }}
          >
            <button
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "#fff",
                width: "7.5rem",
                minWidth: "100px",
                textAlign: "center",
              }}
            >
              {t("navbar.welcome")}, {username} <DownOutlined />
            </button>
          </Dropdown>
        )}

        <Link to="/login" className={style.user}>
          <img src={Account} alt="account" width="30px" height="30px" />
        </Link>

        <Link to="/wishlist" className={classNames(style.cart, style.noCart)}>
          <img src={Heart} alt="heart" />
          <span>{totalWishlistItems}</span>
        </Link>
        <Link to="/cart" className={classNames(style.cart, style.noCart)}>
          <img src={Card} alt="cart" />
          <span>{totalItems}</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
