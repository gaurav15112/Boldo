import React from "react";
import style from "./About.module.scss";
import Navbar from "../Navbar/Navbar";
const About = () => {
  return (
    <>
      <div className={`${style.about}`}>
        <div className="about__container container">
          <div className="firstDiv">
            <Navbar />
          </div>
          <div className="secondDiv">
            <div className="secondDiv__left">
              <p className="title">About</p>
              <h1 className="description">
                We love to make great things, things that matter.
              </h1>
            </div>
            <div className="secondDiv__right">
              <p className="content">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
