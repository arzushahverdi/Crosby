import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "../assets/styles/Payment.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Payment = () => {
  const location = useLocation();
  const { subtotal } = location.state || { subtotal: 0 };
  const { setItems } = useCart();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [cardDetail, setCardDetail] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const isFormValid = () => {
    const { number, expiry, cvc, name } = cardDetail;
    return number && expiry && cvc && name;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e) => {
    setCardDetail((prev) => ({ ...prev, focus: e.target.name }));
  };

  const handlePayment = () => {
    if (!isFormValid()) {
      toast.error(
        i18n.language === "en"
          ? "Please enter your card details."
          : "Zəhmət olmasa kart məlumatlarınızı daxil edin."
      );
      return;
    }

    setItems([]);
    navigate("/thankyou");
  };

  return (
    <main className="paymentDetail">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 m-0 mb-5">
            <div className="paymentHeader">
              <h1>{t("payment.title")}</h1>
            </div>
          </div>
          <div className="col-6 p-0 m-0">
            <form className="paymentForm">
              <input
                type="text"
                name="number"
                placeholder={t("payment.number")}
                value={cardDetail.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                type="text"
                name="name"
                placeholder={t("payment.name")}
                value={cardDetail.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                type="text"
                name="expiry"
                placeholder={t("payment.expiry")}
                value={cardDetail.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={cardDetail.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </form>
          </div>
          <div className="col-6 p-0 m-0">
            <div className="paymentCard">
              <Cards
                number={cardDetail.number}
                expiry={cardDetail.expiry}
                cvc={cardDetail.cvc}
                name={cardDetail.name}
                focused={cardDetail.focus}
                placeholders={{ name: t("payment.cardName") }}
                locale={{ valid: t("payment.valid") }}
              />
            </div>
          </div>
          <div className="col-12 p-0 m-0 mt-5 mb-5">
            <div className="paymentButton">
              <button onClick={handlePayment}>
                {t("payment.pay")} ${subtotal.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
