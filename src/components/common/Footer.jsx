import React, { useContext } from "react";
import "../../assets/styles/Footer.css";
import { Link } from "react-router-dom";
import Instagram from "../../assets/images/icons8-instagram-24.png";
import Facebook from "../../assets/images/icons8-facebook-24.png";
import Twitter from "../../assets/images/icons8-twitter-24.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../../context/DarkModeContext";

const Footer = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <footer className={isDarkMode ? "footerDark" : "footerpg"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 p-3">
            <Link to="/" className="logo">
              Crosby
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div className="footerpages">
              <Link to="/products">{t("navbar.shop")}</Link>
              <Link to="/blogs" style={{ textAlign: "center" }}>{t("navbar.blog")}</Link>
              <Link to="/about" style={{ minWidth: "90px", maxWidth:"150px" }}>
                {t("navbar.about")}
              </Link>
              <Link to="/contact" style={{ textAlign: "center" }}>{t("navbar.contact")}</Link>
              <Link to="/faq"style={{ minWidth: "90px", maxWidth:"200px" }}>{t("navbar.faq")}</Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
            <div className="socialmedia">
              <Link
                to="https://www.instagram.com/crosby.botanic?igsh=MW5mYXN2ZmgwMTFiMQ=="
                target="_blank"
              >
                <img
                  src={Instagram}
                  alt="instagram"
                  style={{ width: "24px", height: "24px" }}
                />
              </Link>
              <Link
                to="https://www.facebook.com/share/bPEk4Bkku1oXZjqh/?mibextid=qi2Omg"
                target="_blank"
              >
                <img
                  src={Facebook}
                  alt="facebook"
                  style={{ width: "24px", height: "24px" }}
                />
              </Link>
              <Link to="https://x.com/crosbybotanic" target="_blank">
                <img
                  src={Twitter}
                  alt="twitter"
                  style={{ width: "24px", height: "24px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
