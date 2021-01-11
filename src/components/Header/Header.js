import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

library.add(faWindowClose);

export default function Header({ isOpen, handleHeaderClose }) {
    const headerClass = isOpen ? "header" : "hidden";
    return (
        <header className={headerClass}>
            <div className="header__box1">
                <h3 className="header__title lobster">Hello, I am Pinwei Wu, a&nbsp;web&nbsp;developer.</h3>

            </div>
            <menu className="header__menu-adjust">
                <button className='header__menu-list-adjust' ><ScrollLink to="menu" smooth={true} duration={500} spy={true} offset={-120}>Home</ScrollLink></button>
                <button className='header__menu-list-adjust' ><ScrollLink to="projects" smooth={true} duration={500} spy={true} offset={-120}>Projects</ScrollLink></button>
                <button className='header__menu-list-adjust' ><ScrollLink to="learning" smooth={true} duration={500} spy={true} offset={-120}>Learning Track</ScrollLink></button>
                <button className='header__menu-list-adjust' ><ScrollLink to="before" smooth={true} duration={500} spy={true} offset={-120}>Before Coding</ScrollLink></button>
                <button className='header__menu-list-adjust' ><ScrollLink to="form" smooth={true} duration={500} spy={true} offset={-150}>Contact Me</ScrollLink></button>
                <button className="header__menu-list-adjust" onClick={handleHeaderClose}><FontAwesomeIcon icon="window-close" /> </button>
            </menu>
        </header>
    )
}