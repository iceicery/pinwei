import React from 'react';
import './Footer.css';
import { withRouter } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__box1">
                <h3 className="footer__title">I can do</h3>
                <h3 className="footer__subtitle">
                    HTML, CSS, JavaScript, Git, React, Node.js, SAS, R
          </h3>
            </div>
            <div className="footer__box2">
                <h3 className="footer__title">Contact Me</h3>
                <h3 className="footer__subtitle">&#9993; pw.amy.wu@gmail.com</h3>
                <ul className="footer__icons">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/pinwei-wu-514713120/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="footer__icon-linkedin"></div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/iceicery" target="_blank" rel="noreferrer">
                            <div className="footer__icon-github"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default withRouter(Footer);