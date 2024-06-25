import React, { useState, useEffect } from "react";
import navstyle from "./nav.module.scss";
import Link from "next/link";
Link;
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`${navstyle.nav}`}>
        <div className="nav__container container">
          <div className="nav__logo">
            <div className="nav__logo__shapes">
              <div className="first"></div>
              <div className="second"></div>
            </div>
            <div className="nav__logo__text">
              <Link href={"https://www.rwit.io"}>
                <span>Boldo</span>
              </Link>
            </div>
          </div>
          <div className="nav__links">
            <ul
              onClick={handleLinkClick}
              className={`nav__link ${isOpen ? "nav__open" : ""}`}
            >
              <li onClick={handleLinkClick}>
                <Link href={"https://www.rwit.io"}>Product</Link>
              </li>
              <li onClick={handleLinkClick}>
                <Link href={"#"}>Services</Link>
              </li>
              <li>
                <Link onClick={handleLinkClick} href={"#"}>
                  About
                </Link>
              </li>
              <button onClick={handleLinkClick} className="nav__btn">
                <span>Log In</span>
              </button>
            </ul>
            <div onClick={handleToggle} className="nav__menuBtn ">
              <span className={`nav__menuBtn${isOpen ? "--line1" : ""}`}></span>
              <span className={`nav__menuBtn${isOpen ? "--line2" : ""}`}></span>
              <span className={`nav__menuBtn${isOpen ? "--line3" : ""}`}></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
