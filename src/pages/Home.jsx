import Data from "../data/Data";

export default function Home() {
  return (
    <article className="wiki-content">
      {Data.sections.map((section, index) => (
        <section key={section.id} id={section.id} className="wiki-section">
          {/* Skip heading for the first section */}
          { <h2>{section.title}</h2>}

          {section.paragraphs &&
            section.paragraphs.map((p, i) => (
              <p key={i} className={index === 0 ? "lead" : ""}>
                {p}
              </p>
            ))}

          {/* Education list */}
          {section.list && section.list[0]?.degree && (
            <div className="education-list">
              {section.list.map((edu, i) => (
                <div key={i} className="edu-entry">
                  <div className="edu-main">
                    <strong>{edu.degree}</strong>
                    <span className="edu-date">{edu.duration}</span>
                  </div>
                  <p className="edu-sub">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Work Experience */}
          {section.experiences && (
            <div className="experience-section">
              {section.experiences.map((exp, i) => (
                <div key={i} className="experience-entry">
                  <div className="exp-header">
                    <h3>{exp.role}</h3>
                    <span className="exp-date">{exp.date}</span>
                  </div>
                  <p className="exp-org">
                    {exp.organization} · {exp.location}
                  </p>
                  <ul>
                    {exp.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {section.projects && (
            <div className="project-section">
              {section.projects.map((proj, i) => (
                <div key={i} className="project-entry">
                  <div className="project-header">
                    <h3>{proj.name}</h3>
                    <span className="project-date">{proj.date}</span>
                  </div>
                  <ul>
                    {proj.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Generic bullet lists */}
          {section.list &&
            !section.list[0]?.degree &&
            section.list.map((item, i) => <p key={i}>• {item}</p>)}
        </section>
      ))}
    </article>
  );
}
