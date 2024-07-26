import React from "react";
import { Link } from "react-router-dom";
import style from "../../assets/styles/Navbar.module.css";
import Heart from "../../assets/images/icons8-heart-30.png";
import Card from "../../assets/images/icons8-cart-30.png";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import classNames from "classnames";

const Navbar = () => {
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(style.responsive_nav);
  };

  return (
    <header>
      <button onClick={showNavbar} className={style.nav_btn}>
        <FaBars />
      </button>
      <Link to="/" className={style.logoText}>
        Crosby
      </Link>
      <nav ref={navRef}>
        <Link to="/products" className={style.links}>
          Shop
        </Link>
        <Link to="/about" className={style.links}>
          Our Story
        </Link>
        <Link to="/gallery" className={style.links}>
          Journal
        </Link>
        <Link to="/contact" className={style.links}>
          Contact
        </Link>
        <button
          onClick={showNavbar}
          className={classNames(style.nav_btn, style.nav_close_btn)}
        >
          <FaTimes />
        </button>
      </nav>
      <div className={style.icons}>
        <Link to="/wishlist" className={style.cart}>
          <img src={Heart} alt="heart" />
          <span>{totalWishlistItems}</span>
        </Link>
        <Link to="/cart" className={style.cart}>
          <img src={Card} alt="cart" />
          <span>{totalItems}</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
