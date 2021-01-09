import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './CanDo.css';
import sasIcon from '../../images/sas-icon.png';

library.add(fab);

export default function CanDo() {
    return (
        <section className="cando">
            <ul className="cando__box">
                <li className="cando__item">
                    <FontAwesomeIcon icon={['fab', 'js-square']} size="5x" className="cando__img" />
                    <p className="cando__text">Java Script</p>
                </li>
                <li className="cando__item">
                    <FontAwesomeIcon icon={['fab', 'css3']} size="5x" className="cando__img" />
                    <p className="cando__text">CSS</p>
                </li>
                <li className="cando__item">
                    <FontAwesomeIcon icon={['fab', 'html5']} size="5x" className="cando__img" />
                    <p className="cando__text">HTML5</p>
                </li>
                <li className="cando__item">
                    <FontAwesomeIcon icon={['fab', 'react']} size="5x" className="cando__img" />
                    <p className="cando__text">React</p>
                </li>
                <li className="cando__item">
                    <FontAwesomeIcon icon={['fab', 'node']} size="5x" className="cando__img" />
                    <p className="cando__text">Node.js</p>
                </li>
                <li className="cando__item">
                    <FontAwesomeIcon icon={['fab', 'git-alt']} size="5x" className="cando__img" />
                    <p className="cando__text">Git</p>
                </li>
                <li className="cando__item">
                    <img src={sasIcon} alt="sas" className="cando__img" />
                    <p className="cando__text">SAS</p>
                </li>
                <li className="cando__item">
                    <FontAwesomeIcon icon={['fab', 'r-project']} size="5x" className="cando__img" />
                    <p className="cando__text">R</p>
                </li>
            </ul>
        </section>
    )
}
