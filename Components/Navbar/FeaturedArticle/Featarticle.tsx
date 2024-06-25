import React from "react";
import style from "./feat.module.scss";
import Image from "next/image";
import artImage from "../../../public/Images/article-Image.svg";
import pPic from "../../../public/Images/profile-pic.svg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const Featarticle = () => {
  return (
    <>
      <div className={`${style.feature}`}>
        <div className="feature__container container">
          <div className="feature__headng">
            <h1 className="feature__headng__title">Blog</h1>
            <p className="feature__headng__descr">Thoughts and words</p>
          </div>
          <div className="feature__article">
            <div className="feature__article__image">
              <Image src={artImage} alt="image" />
            </div>
            <div className="card">
              <div className="card__head">
                <div className="catog">Category</div>
                <div className="date">November 22, 2021</div>
              </div>
              <div className="card__about">
                <p>Pitch termsheet backing validation focus release.</p>
              </div>
              <div className="card__footer">
                <div className="image">
                  <Image src={pPic} alt="profilePic" />
                </div>
                <div className="author">
                  <p>Chandler Bing</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Featarticle;
