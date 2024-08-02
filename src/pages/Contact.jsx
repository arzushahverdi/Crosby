import React from "react";
import "../assets/styles/Contact.css";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const Contact = () => {
  return (
    <section className="contactus">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="contact">
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="col-12">
            <div className="contactinfo">
              <p>
                Hello, our Crosby team is a passionate team of plant and flower lovers and
                happy to help. For the fastest response, you can get in touch
                via our{" "}
                <Link
                  to="https://www.instagram.com/crosby.botanic?igsh=MW5mYXN2ZmgwMTFiMQ=="
                  target="_blank"
                >
                  instagram
                </Link>
                ,{" "}
                <Link
                  to="https://www.facebook.com/share/bPEk4Bkku1oXZjqh/?mibextid=qi2Omg"
                  target="_blank"
                >
                  facebook
                </Link>{" "}
                or{" "}
                <Link to="https://x.com/crosbybotanic" target="_blank">
                  twitter
                </Link>{" "}
                account on Monday-Friday from 9:00-17:00 or write to us via{" "}
                <Link to="mailto:crosby.botanic@gmail.com" target="_blank">
                  crosby.botanic@gmail.com
                </Link>
                . We respond to every message as soon as possible, but it may
                take 2-3 business days to get back to you via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
