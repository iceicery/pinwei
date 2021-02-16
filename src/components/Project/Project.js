import CodeButton from '../CodeButton/CodeButton';
import Tech from '../Tech/Tech';
import TechIcon from '../TechIcon/TechIcon';

export default function Project({
  image,
  handleOnclick,
  text,
  demo,
  website,
  techs,
  codes,
  techIcons,
}) {
  function handleClickDemo() {
    handleOnclick(demo, website);
  }
  const demoClass = demo ? 'projects__button' : 'hidden';
  const linkClass = website ? 'projects__button' : 'hidden';
  return (
    <li className="projects__item">
      <div className="projects__img-box">
        <img src={image} className="projects__img" alt="project" />
        <div className="projects__button-box">
          <button className={demoClass} onClick={handleClickDemo}>
            Demo
          </button>
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="projects__button-link"
          >
            <button className={linkClass}>Link</button>
          </a>
        </div>
      </div>
      <h3 className="projects__title">{text}</h3>
      <ul className="projects__tech">
        {techs.map((item, i) => (
          <Tech tech={item.icon} techText={item.text} key={i} />
        ))}
        {techIcons ? (
          techIcons.map((item, i) => (
            <TechIcon
              techName={item.techName}
              techIcon={item.techIcon}
              key={i}
            />
          ))
        ) : (
          <></>
        )}
        {codes.map((item, i) => (
          <CodeButton Link={item.link} name={item.button} key={i} />
        ))}
      </ul>
    </li>
  );
}
