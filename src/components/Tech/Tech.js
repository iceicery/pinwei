import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './Tech.css';

library.add(fab);

export default function Tech({ tech, techText }) {
  return (
    <li className="tech">
      <FontAwesomeIcon
        icon={['fab', `${tech}`]}
        size="2x"
        className="tech__icon"
      />
      <p className="tech__text">{techText}</p>
    </li>
  );
}
