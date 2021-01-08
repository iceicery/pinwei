import React, { useState } from 'react';
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
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
//import Intersts from './components/Interests';
import ReactGA from 'react-ga';

const trackingId = "UA-126824471-1"; // Replace with your Google Analytics tracking ID
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
  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  function handleProject(projectName) {
    setProject(projectName)
  }
  function handleLink(link) {
    setLink(link);
  }
  return (
    <div className="page">
      <img src={menuIcon} className="menu-icon" alt="menu" />
      <Header isOpen={isHearderOpen} />
      <React.Fragment>
        <Element id="menu" name="menu">
          <Menu />
        </Element>
        <Element id="projects" name="projects">
          <ProjectsPopup isOpen={isOpen} link={link} project={project} handleClose={handleClose} />
          <WebProjects handleOpen={handleOpen} link={link} handleProject={handleProject} handleLink={handleLink} />
        </Element>
        <Element id="learning" name="learning">
          <Learning />
        </Element>
        <Element id="before" name="before">
          <Before />
        </Element>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default withRouter(App);
