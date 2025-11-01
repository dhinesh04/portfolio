import Data from "../data/Data";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

export default function InfoBox() {
  const info = Data.infobox;
  return (
    <aside className="infobox">
      <h3>{info.name}</h3>
      <img src={info.image} alt={info.name} />
      <div className="info-section">
        <p><FaMapMarkerAlt /> {info.location}</p>
        <p>
          <FaEnvelope /> <a href={`mailto:${info.email}`}>{info.email}</a>
        </p>
      </div>
      <div className="info-section">
        <h4>Links</h4>
        <p>
          <FaLinkedin />{" "}
          <a href={info.linkedin} target="_blank" rel="noreferrer">
            LinkedIn Profile
          </a>
        </p>
        <p>
          <FaGithub />{" "}
          <a href={info.github} target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </p>
         <p>
          <FaMedium />{" "}
          <a href={info.medium} target="_blank" rel="noreferrer">
            Medium Profile
          </a>
        </p>
      </div>
      <div className="info-section">
        <h4>Availability</h4>
        <p>{info.availability}<br /><em>(Open to Relocating)</em></p>
      </div>
    </aside>
  );
}
