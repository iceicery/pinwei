import './ProjectPopup.css';
export default function ProjectsPopup({ isOpen, project, link, handleClose }) {
    const overlayClass = isOpen ? "overlay" : "hidden";
    const popupClass = isOpen ? "popup" : "hidden";
    return (
        <>
            <div className={overlayClass}></div>
            <section className={popupClass}>
                <iframe title="demo" className="popup__video" width="560" height="315" src={project} frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" allow="autoplay" ></iframe>
                <div className="popup__button-box">
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                    ><button className="popup__button">Go To WebSite</button></a>
                    <button className="popup__button" onClick={handleClose}>Close</button>
                </div>
            </section>
        </>
    )
}