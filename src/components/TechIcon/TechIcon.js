import './TechIcon.css';

export default function TechIcon({ techIcon, techName }) {
  return (
    <div className="techicon">
      <img src={techIcon} alt={techName} className="techicon__icon" />
      <p className="techicon__text">{techName}</p>
    </div>
  );
}
