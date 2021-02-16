import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default function Tech({ tech }) {
  return (
    <li className="projects__tech-item">
      <FontAwesomeIcon
        icon={['fab', `${tech}`]}
        size="2x"
        className="tech__icon"
      />
    </li>
  );
}
