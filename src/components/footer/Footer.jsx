import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Mouad Fikri</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Über mich</a>
                </li>

                <li>
                    <a href="#document" className="footer__link">Unterlagen</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualifications</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/mouadfikri2/" className="footer__social-link"target='_blank'><i class="bx bxl-instagram"></i></a>

                <a href="https://www.linkedin.com/in/mouadfikri/" className="footer__social-link"target='_blank'><i class="bx bxl-linkedin"></i></a>

                <a href="https://www.facebook.com/moad.fikri.9/" className="footer__social-link"target='_blank'><i class="bx bxl-facebook"></i></a>
            </div>

            <span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer