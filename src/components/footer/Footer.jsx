import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title" style={{textAlign:"center"}}>Sathish L</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
             Verification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="#"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="#"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://web.telegram.org/a/#9025585770"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-telegram"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Sathish Loganathan. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
