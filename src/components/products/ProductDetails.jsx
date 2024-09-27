import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../supabase";
import "../../assets/styles/App.css";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";
import Cart from "../../assets/images/icons8-cart-60.png";
import WhiteHeart from "../../assets/images/icons8-heart-white-60.png";
import RedHeart from "../../assets/images/icons8-heart-red-60.png";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/DarkModeContext";

const ProductDetails = () => {
  const { title } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  const getProduct = async () => {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("title", title)
      .single();
    if (error) {
      console.log(error);
    } else {
      setProduct(data);
    }
  };

  useEffect(() => {
    getProduct();
  }, [title]);

  const toggleWishlistItem = () => {
    if (inWishlist(product.id)) {
      removeWishlistItem(product.id);
      toast.error(
        i18n.language === "en"
          ? "Successfully removed from Wishlist"
          : "İstək siyahısından uğurla silindi"
      );
    } else {
      addWishlistItem(product);
      toast.success(
        i18n.language === "en"
          ? "Successfully added to Wishlist"
          : "İstək siyahısına uğurla əlavə edildi"
      );
    }
  };

  const addToCart = () => {
    addItem(product, quantity);
    toast.success(
      i18n.language === "en"
        ? "Successfully added to Cart"
        : "Səbətə uğurla əlavə edildi"
    );
  };

  return (
    <main className={isDarkMode ? "detailsDark" : "details"}>
      <div className="container-fluid">
        <div className="row mx-4 gx-4 productPadding">
          {product && (
            <React.Fragment>
              <div className="col-lg-6 col-md-6 col-sm-12 m-0">
                <div className="flower_image">
                  <img src={product.image} alt={product.title} />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 m-0">
                <div className="infosboxes">
                  <h1>{product.title}</h1>
                  <p style={{ fontSize: "22px" }}>${product.price}.00</p>
                  <p style={{ fontSize: "18px" }}>
                    {i18n.language === "az"
                      ? product.description_az
                      : product.description_en}
                  </p>
                  <div className="quantity">
                    <p>{t("productDetail.quantity")}:</p>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <button
                      onClick={toggleWishlistItem}
                      className="addTo"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={inWishlist(product.id) ? RedHeart : WhiteHeart}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                    </button>
                    <button
                      onClick={addToCart}
                      className="addTo"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={Cart}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
