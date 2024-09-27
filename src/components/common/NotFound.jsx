import React from "react";
import "../../assets/styles/App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="notFoundPage">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <div className="notfound">
              <h1>{t("notFoundPage.ops")}</h1>
              <h1>{t("notFoundPage.notGrowing")}</h1>
              <h3>{t("notFoundPage.notPage")}</h3>
              <Link to="/">{t("notFoundPage.goHome")}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
