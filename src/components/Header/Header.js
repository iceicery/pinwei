import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

library.add(faWindowClose);

export default function Header({ now, isOpen, handleHeaderClose }) {
    const projects = now === 'projects' ? 'now' : 'header__menu-list-adjust';
    const before = now === 'before' ? 'now' : 'header__menu-list-adjust';
    const learning = now === 'learning' ? 'now' : 'header__menu-list-adjust';
    const headerClass = isOpen ? "header" : "hidden";
    return (
        <header className={headerClass}>
            <div className="header__box1">
                <h3 className="header__title lobster">Hello, I am Pinwei Wu, a web developer.</h3>

            </div>
            <menu className="header__menu-adjust">
                <button to="/" className='header__menu-list-adjust' ><ScrollLink to="Menu" smooth={true} duration={500} spy={true}>Home</ScrollLink></button>
                <button to="/projects" className={projects} ><ScrollLink to="projects" smooth={true} duration={500} spy={true}>Web Projects</ScrollLink></button>
                <button to="/learning" className={learning} ><ScrollLink to="learning" smooth={true} duration={500} spy={true}>Learning Track</ScrollLink></button>
                <button to="/before" className={before} ><ScrollLink to="before" smooth={true} duration={500} spy={true}>Before Coding</ScrollLink></button>
                <button className="header__menu-list-adjust" onClick={handleHeaderClose}><FontAwesomeIcon icon="window-close" /> </button>
            </menu>
        </header>
    )
}