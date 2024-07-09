import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Heart from "./icons8-heart-30.png";
import Card from "./icons8-cart-30.png";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";

const Navbar = () => {
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  return (
    <div className={style.navbar}>
      <div className={style.navbarpages}>
        <Link to="/shop" className={style.links}>
          Shop
        </Link>
        <Link to="/about" className={style.links}>
          Our Story
        </Link>
        <Link to="/contact" className={style.links}>
          Get in Touch
        </Link>
        <Link to="/gallery" className={style.links}>
          Gallery
        </Link>
        <Link to="/" className={style.logoText}>
          HALES
        </Link>
        <Link to="/wishlist">
          <img src={Heart} alt="heart" />
          <span>{totalWishlistItems}</span>
        </Link>
        <Link to="/cart" className={style.cart}>
          <img src={Card} alt="cart" />
          <span>{totalItems}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
