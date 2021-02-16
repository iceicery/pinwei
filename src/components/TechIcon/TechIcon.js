import './TechIcon.css';

export default function TechIcon({ techIcon, techName }) {
  return <img src={techIcon} alt={techName} className="techicon" />;
}
