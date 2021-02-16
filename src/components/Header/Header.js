import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

export default function Header({ isOpen, handleHeaderClose }) {
  const headerClass = isOpen ? 'header' : 'hidden';
  return (
    <header className={headerClass}>
      <div className="header__box1">
        <h3 className="header__title lobster">
          Hello, I am Pinwei Wu, a&nbsp;web&nbsp;developer.
        </h3>
      </div>
      <nav className="header__menu-adjust">
        <ScrollLink
          to="menu"
          smooth={true}
          duration={500}
          spy={true}
          offset={-120}
          activeClass="header__menu-list-active"
          className="header__menu-list-adjust"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-90}
          activeClass="header__menu-list-active"
          className="header__menu-list-adjust"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="learning"
          smooth={true}
          duration={500}
          spy={true}
          offset={-120}
          activeClass="header__menu-list-active"
          className="header__menu-list-adjust"
        >
          Learning Track
        </ScrollLink>
        <ScrollLink
          to="before"
          smooth={true}
          duration={500}
          spy={true}
          offset={-120}
          activeClass="header__menu-list-active"
          className="header__menu-list-adjust"
        >
          Before Coding
        </ScrollLink>
        <ScrollLink
          to="form"
          smooth={true}
          duration={500}
          spy={true}
          offset={-150}
          activeClass="header__menu-list-active"
          className="header__menu-list-adjust"
        >
          Contact Me
        </ScrollLink>
      </nav>
      <button className="header__close" onClick={handleHeaderClose}>
        <FontAwesomeIcon icon={faTimes} size="1x" />{' '}
      </button>
    </header>
  );
}
