import React from "react";
import "../assets/styles/Contact.css";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contactus">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="contact">
              <h1>{t("contact.contactUs")}</h1>
            </div>
          </div>
          <div className="col-12">
            <div className="contactinfo">
              <p>
                {t("contact.contactDecs")}{" "}
                <Link
                  to="https://www.instagram.com/crosby.botanic?igsh=MW5mYXN2ZmgwMTFiMQ=="
                  target="_blank"
                >
                  {t("contact.instagram")}
                </Link>
                {t("contact.comma")}{" "}
                <Link
                  to="https://www.facebook.com/share/bPEk4Bkku1oXZjqh/?mibextid=qi2Omg"
                  target="_blank"
                >
                  {t("contact.facebook")}
                </Link>{" "}
                {t("contact.or")}{" "}
                <Link to="https://x.com/crosbybotanic" target="_blank">
                  {t("contact.twitter")}
                </Link>{" "}
                {t("contact.contactDecsRemain")}{" "}
                <Link to="mailto:crosby.botanic@gmail.com" target="_blank">
                  {t("contact.email")}
                </Link>
                {t("contact.contactLastDecs")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
