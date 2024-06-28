import React from "react";
import style from "./Ourteam.module.scss";
import Image from "next/image";
import michael from "../../public/Images/michael scott.svg";
import Dwight from "../../public/Images/Dwilight image.svg";
const Ourteam = () => {
  return (
    <>
      <div className={`${style.ourteam}`}>
        <div className="ourteam__container container">
          <div className="head">
            <h2 className="head__title">Our team</h2>
            <h3 className="head__subtitle">The people behind the work</h3>
            <div className="head__description">
              <p>
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.
                Traction stock user experience deployment beta innovator
                incubator focus.
              </p>
            </div>
          </div>
          <div className="team-members">
            {[1, 2, 3].map(() => {
              return (
                <div className="team-members__member">
                  <div className="image">
                    <Image src={michael} alt="Michael Scott" />
                  </div>
                  <h4 className="Name">Michael Scott</h4>
                  <p className="Title">General Manager</p>
                </div>
              );
            })}
          </div>
          <div className="team-members-group2">
            {[1, 2, 3, 4].map(() => {
              return (
                <div className="team-members-group2__member">
                  <div className="Image">
                    <Image src={Dwight} alt="boldoMembersImage" />
                  </div>
                  <div className="About">
                    <div className="About__name">
                      <p>Dwight Schrute</p>
                    </div>
                    <div className="About__position">
                      <p>General Manager</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourteam;
