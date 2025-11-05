import { useState } from "react";
import Data from "../data/Data";

function TOCList({ sections, level = 1, hidden }) {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (hidden) return null;

  return (
    <ul className={`toc-level-${level}`}>
      {sections.map((section) => {
        const hasSubsections =
          section.subsections && section.subsections.length > 0;
        const isOpen = openSections[section.id] ?? true;

        return (
          <li key={section.id} className="toc-item">
            <div className="toc-line">
              {hasSubsections && (
                <span
                  className={`toc-toggle ${isOpen ? "open" : ""}`}
                  onClick={() => toggleSection(section.id)}
                >
                  ▸
                </span>
              )}
              <a href={`#${section.id}`} className="toc-link">
                {section.title}
              </a>
            </div>
            {hasSubsections && isOpen && (
              <TOCList
                sections={section.subsections}
                level={level + 1}
                hidden={false}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function ContentsSidebar() {
  const [hidden, setHidden] = useState(false);

  return (
    <nav className="contents-box">
      <div className="contents-header">
        <strong>Contents</strong>
        <div className="contents-controls">
          <button
            className="contents-hide-btn"
            onClick={() => setHidden((prev) => !prev)}
          >
            {hidden ? "show" : "hide"}
          </button>
        </div>
      </div>
      <TOCList sections={Data.sections} hidden={hidden} />
    </nav>
  );
}
