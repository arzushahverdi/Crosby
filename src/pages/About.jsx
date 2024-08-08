import React from "react";
import Navbar from "../components/common/Navbar";
import "../assets/styles/About.css";

const About = () => {
  return (
    <main className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <div className="aboutbox">
              <Navbar />
              <h1>Our Story</h1>
            </div>
          </div>
          
          <section className="aboutsection">
            <div className="col-12 p-0 m-0">
              <div className="welcometxt">
                <h2>
                  Welcome! As the Crosby team, we are here to bring the magic of
                  beauty and nature into your homes. We believe that flowers and
                  plants grown with love will cheer up your living spaces.
                </h2>
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
                <p>
                  Crosby passionately set out to take part in the floristry
                  industry. Our aim is to provide our customers with quality and
                  aesthetic products by offering beautiful vases, bouquets and
                  potted plants, each carefully selected and grown.
                </p>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="aboutbigp" style={{ marginTop: "100px" }}>
                <p>
                  For us, flowers are not only plants but also expressions of
                  emotions. Giving flowers as a gift to your loved ones, friends
                  or yourself is one of the most beautiful ways to express your
                  love, happiness or appreciation. That's why we carefully
                  select each flower, preserve their freshness and package them
                  with care.
                </p>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="aboutbigp">
                <p>
                  At Crosby, we not only offer quality products, but we also
                  place great importance on customer satisfaction. We strive to
                  offer you the best shopping experience and aim to be in touch
                  with you every step of the way. We are here to answer your
                  questions, listen to your suggestions and offer solutions
                  tailored to your needs.
                </p>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="aboutbigp">
                <p>
                  With us, you can liven up the atmosphere of your home or
                  office, celebrate special occasions or simply make your daily
                  life more colorful. As the Crosby family, we work every day to
                  provide you with the freshest and most beautiful flowers.
                </p>
              </div>
            </div>
            <div className="col-12 p-0 m-0">
              <div className="aboutbigp">
                <p>
                  Thank you for choosing us. We welcome you to the world of
                  Crosby!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
