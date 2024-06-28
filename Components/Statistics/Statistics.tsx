import React from "react";
import style from "./Statistics.module.scss";
const Statistics = () => {
  return (
    <>
      <div className={`${style.statistics}`}>
        <div className="statistics__container container">
          <div className="firstDiv">
            <h2 className="firstDiv__heading">Our numbers</h2>
            <p className="firstDiv__description">
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
          <div className="secondDiv">
            <div className="secondDiv__stat">
              <span className="number">120m</span>
              <span className="title">Cool feature title</span>
            </div>
            <div className="secondDiv__stat">
              <span className="number">10.000</span>
              <span className="title">Cool feature title</span>
            </div>
            <div className="secondDiv__stat">
              <span className="number">240</span>
              <span className="title">Cool feature title</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
