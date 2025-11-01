import Data from "../data/Data";

function TOCList({ sections, level = 1 }) {
  return (
    <ul className={`toc-level-${level}`}>
      {sections.map((section, i) => (
        <li key={section.id}>
          <a href={`#${section.id}`}>
             {section.title}
          </a>
          {/* Nested subsections if available */}
          {section.subsections && section.subsections.length > 0 && (
            <TOCList sections={section.subsections} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default function ContentsSidebar() {
  return (
    <nav className="contents-box">
      <h3>Contents</h3>
      <TOCList sections={Data.sections} />
    </nav>
  );
}
