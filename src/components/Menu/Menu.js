import React from 'react';
import './Menu.css';
export default function Menu() {
    return (
        <header className="menu">
            <div className="menu__background">
                <div className="menu__text-box">
                    <h2 className="menu__title-hi">Hello World!</h2>
                    <h2 className="menu__title">I am Pinwei Wu.</h2>
                    <ul className="menu__subtitle-box">
                        <li className="menu__subtitle">Web Developer ,</li>
                        <li className="menu__subtitle">Engineer ,</li>
                        <li className="menu__subtitle">Statistic Specialist ,</li>
                        <li className="menu__subtitle">Physics Background</li>
                    </ul>
                </div>
            </div>
        </header >
    )
}
