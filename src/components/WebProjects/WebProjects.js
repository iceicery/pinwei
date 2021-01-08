import React from 'react';
import { withRouter } from 'react-router-dom';
import './WebProjects.css';
import { projects } from '../../utils/utils';
import Project from '../Project/Project';

function WebProjects({ handleOpen, handleProject, handleLink }) {
    function handleOnclick(demo, website) {
        handleProject(demo);
        handleOpen();
        handleLink(website);
    }

    return (
        <main className="content">
            <section className="projects">
                <h2 className="projects__text lobster">Web Projects</h2>
                <ul className="projects__box">
                    {
                        projects.map((project, i) =>
                            <Project key={i} image={project.image} handleOnclick={handleOnclick} text={project.text} website={project.website} demo={project.demo} techs={project.tech} codes={project.codes} />)
                    }
                </ul>
            </section>
        </main>
    )
}
export default withRouter(WebProjects);