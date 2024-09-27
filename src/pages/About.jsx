import React, { useContext } from "react";
import Navbar from "../components/common/Navbar";
import "../assets/styles/About.css";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../context/DarkModeContext";

const About = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <main className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <div className="aboutbox">
              <Navbar />
              <h1>{t("about.ourStory")}</h1>
            </div>
          </div>

          <section className={isDarkMode ? "aboutDark" : "aboutsection"}>
            <div className="col-12 p-0 m-0">
              <div className="welcometxt">
                <h2>{t("about.welcome")}</h2>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="plantimg">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097842059-LQFSMF8AEUSBS71DKX9L/plant-textures-2.jpg?format=1500w"
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="aboutlittlep">
                <p>{t("about.firstDecs")}</p>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="aboutbigp" style={{ marginTop: "100px" }}>
                <p>{t("about.secondDecs")}</p>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="aboutbigp">
                <p>{t("about.thirdDecs")}</p>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="aboutbigp">
                <p>{t("about.fourthDecs")}</p>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="aboutbigp">
                <p>{t("about.thanks")}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
