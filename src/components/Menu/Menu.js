import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';
import developer from '../../images/developer.jpg';
import avatar from '../../images/head.jpg';
import emoji from '../../images/emoji-2.jpg';
function Menu() {
    return (
        <header className="menu">
            <div className="menu__img-box">
                <img
                    src={developer}
                    alt="develope"
                    className="menu__develope"
                />
            </div>
            <div className="menu__text-box">
                <h2 className="menu__title-hi">Hello World!</h2>
                <h2 className="menu__title">I am Pinwei Wu.</h2>
                <ul className="menu__subtitle-box">
                    <li className="menu__subtitle">Web Developer ,</li>
                    <li className="menu__subtitle">Engineer ,</li>
                    <li className="menu__subtitle">Statistic Specialist ,</li>
                    <li className="menu__subtitle">Physics Background</li>
                </ul>
                <div className="menu__container">
                    <img src={emoji} alt="avatar" className="menu__emoji" />
                    <img src={avatar} alt="avatar" className="menu__selfie" />
                </div>

                <menu className="menu__list-box">
                    <Link to="/projects" className="menu__list">Web Projects</Link>
                    <Link to="/learning" className="menu__list">Learning Track</Link>
                    <Link to="/before" className="menu__list">Before Coding</Link>
                    {/*
                    <Link to="/interests" className="header__menu-list">Interests</Link>
                    <a href="https://iceicery.github.io/pinwei/"
                        target="_blank"
                        rel="noreferrer"><li className="header__menu-list">One Page Summary</li></a>
                    */}

                </menu>
            </div>
        </header>
    )
}

export default withRouter(Menu);