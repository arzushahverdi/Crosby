import React from "react";
import "../../assets/styles/Footer.css";
import { Link } from "react-router-dom";
import Instagram from "../../assets/images/icons8-instagram-24.png";
import Facebook from "../../assets/images/icons8-facebook-24.png";
import Twitter from "../../assets/images/icons8-twitter-24.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footerpg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 p-3">
            <Link to="/" className="logo">
              Crosby
            </Link>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 p-3">
            <div className="footerpages">
              <Link to="/products">Shop</Link>
              <Link to="/gallery">Journal</Link>
              <Link to="/about" style={{minWidth: "90px"}}>Our Story</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 p-3">
            <div className="socialmedia">
              <Link>
                <img
                  src={Instagram}
                  alt="instagram"
                  style={{ width: "24px", height: "24px" }}
                />
              </Link>
              <Link>
                <img
                  src={Facebook}
                  alt="facebook"
                  style={{ width: "24px", height: "24px" }}
                />
              </Link>
              <Link>
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
