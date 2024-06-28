import React from "react";
import style from "./OurStory.module.scss";
const OurStory = () => {
  return (
    <>
      <div className={`${style.ourstory} `}>
        <div className="ourstory__container container">
          <div className="heading">
            <h1 className="heading__title">Our Story</h1>
            <p className="heading__description">
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
          <div className="content">
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
              Sales user experience branding growth hacking holy grail
              monetization conversion prototype stock network effects. Learning
              curve network effects return on investment bootstrapping
              business-to-consumer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
