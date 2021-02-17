import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Element } from 'react-scroll';
import './pages/App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WebProjects from './components/WebProjects/WebProjects';
import Before from './components/Before/Before';
import Learning from './components/Learning/Learning';
import ProjectsPopup from './components/ProjectsPopup/ProjectsPopup';
import menuIcon from './images/menu.png';
import ReactGA from 'react-ga';
import Form from './components/Form/Form';

const trackingId = 'UA-126824471-1'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHearderOpen, setIsHeaderOpen] = useState(false);
  const [project, setProject] = useState('');
  const [link, setLink] = useState('');
  function handleHeaderOpen() {
    setIsHeaderOpen(true);
  }
  function handleHeaderClose() {
    setIsHeaderOpen(false);
  }
  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  function handleProject(projectName) {
    setProject(projectName);
  }
  function handleLink(link) {
    setLink(link);
  }

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setIsHeaderOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  function handleNavCloseOuter(e) {
    if (typeof e.target.className === 'object') {
      return;
    }
    if (
      e.target.className &&
      !(
        e.target.className.includes('header') ||
        e.target.className.includes('menu-icon')
      )
    ) {
      setIsHeaderOpen(false);
    }
  }
  return (
    <div className="page" onClick={handleNavCloseOuter}>
      <img
        src={menuIcon}
        className="menu-icon"
        alt="menu"
        onClick={handleHeaderOpen}
      />
      <Header isOpen={isHearderOpen} handleHeaderClose={handleHeaderClose} />
      <React.Fragment>
        <Element id="menu" name="menu">
          <Menu />
        </Element>

        <Element id="projects" name="projects">
          <ProjectsPopup
            isOpen={isOpen}
            link={link}
            project={project}
            handleClose={handleClose}
          />
          <WebProjects
            handleOpen={handleOpen}
            link={link}
            handleProject={handleProject}
            handleLink={handleLink}
          />
        </Element>
        <Element id="learning" name="learning">
          <Learning />
        </Element>
        <Element id="before" name="before">
          <Before />
        </Element>
        <Element id="form" name="form">
          <Form />
        </Element>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default withRouter(App);
