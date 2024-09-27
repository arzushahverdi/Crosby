import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import "../assets/styles/FAQ.css";
import Navbar from "../components/common/Navbar";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../context/DarkModeContext";

function FAQ() {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section className={isDarkMode ? "faqDark" : "faqsection"}>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>{t("FAQ.title")}</h1>
          </div>
          <div className="col-12">
            <Accordion className="faq">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="faqheader">
                  {t("FAQ.1thQuestion")}
                </Accordion.Header>
                <Accordion.Body>{t("FAQ.1thAnswer")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{t("FAQ.2thQuestion")}</Accordion.Header>
                <Accordion.Body>
                  {t("FAQ.2thAnswer")}{" "}
                  <Link to="/products">{t("navbar.shop")}</Link>{" "}
                  {t("FAQ.2thAnswerRemain")}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>{t("FAQ.3thQuestion")}</Accordion.Header>
                <Accordion.Body>{t("FAQ.3thAnswer")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>{t("FAQ.4thQuestion")}</Accordion.Header>
                <Accordion.Body>{t("FAQ.4thAnswer")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>{t("FAQ.5thQuestion")}</Accordion.Header>
                <Accordion.Body>{t("FAQ.5thAnswer")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>{t("FAQ.6thQuestion")}</Accordion.Header>
                <Accordion.Body>{t("FAQ.6thAnswer")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>{t("FAQ.7thQuestion")}</Accordion.Header>
                <Accordion.Body>{t("FAQ.7thAnswer")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>{t("FAQ.8thQuestion")}</Accordion.Header>
                <Accordion.Body>{t("FAQ.8thAnswer")}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
