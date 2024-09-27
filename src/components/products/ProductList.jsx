import React, { useContext, useEffect, useState } from "react";
import supabase from "../../supabase";
import style from "../../assets/styles/Products.module.css";
import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/DarkModeContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const { t } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  const getProducts = async () => {
    let { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log(error);
    } else {
      setProducts(data);
      setFilteredProducts(data);
    }
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
  };

  const handleFilterClick = (category) => {
    setFilterOption(category);
  };

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (filterOption) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filterOption
      );
    }

    if (searchItem) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    }

    if (sortOption === "price-asc") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "title-asc") {
      updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "title-desc") {
      updatedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(updatedProducts);
  }, [products, sortOption, filterOption, searchItem]);

  return (
    <main className={isDarkMode ? style.productListDark : style.productsboxes}>
      <div className="container-fluid">
        <div className="row mx-3">
          <div className="col-12 p-0 m-0">
            <div className={style.firstbox}>
              <h1>{t("products.ourPlantsAndFlowers")}</h1>
              <p>{t("products.ourPlantsAndFlowersDecs")}</p>
            </div>
          </div>

          <div className="col-12 p-0 m-0">
            <div className={style.search}>
              <input
                type="text"
                placeholder={t("products.search")}
                value={searchItem}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-7 col-sm-12 p-0 m-0">
            <div className={style.filter}>
              <button
                onClick={() => handleFilterClick("")}
                className={style.filterButton}
              >
                {t("products.all")}
              </button>
              <button
                onClick={() => handleFilterClick("Potted Plant")}
                className={style.filterButton}
              >
                {t("products.pottedPlant")}
              </button>
              <button
                onClick={() => handleFilterClick("Bouquet")}
                className={style.filterButton}
              >
                {t("products.bouquet")}
              </button>
              <button
                onClick={() => handleFilterClick("Arrangement")}
                className={style.filterButton}
              >
                {t("products.arrangement")}
              </button>
              <button
                onClick={() => handleFilterClick("Gift Card")}
                className={style.filterButton}
              >
                {t("products.giftcard")}
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-md-5 col-sm-12 p-0 m-0">
            <div className={style.sort}>
              <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="" style={{ color: "#fff" }}>
                  {t("products.recommended")}
                </option>
                <option value="price-asc">
                  {t("products.priceLowToHigh")}
                </option>
                <option value="price-desc">
                  {t("products.priceHighToLow")}
                </option>
                <option value="title-asc">{t("products.nameAToZ")}</option>
                <option value="title-desc">{t("products.nameZToA")}</option>
              </select>
            </div>
          </div>

          {filteredProducts &&
            filteredProducts.length > 0 &&
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-4 col-sm-6 col-6 mb-5 mt-5 px-1"
              >
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default ProductList;
