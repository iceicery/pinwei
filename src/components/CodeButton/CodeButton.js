export default function CodeButton({ Link, name }) {
    return (
        <a
            href={Link}
            target="_blank"
            rel="noreferrer"
        >
            <li className="projects__tech-item projects__tech-link">{name}</li>
        </a>
    )
}