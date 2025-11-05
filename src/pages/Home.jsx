import Data from "../data/Data";

export default function Home() {
  return (
    <article className="wiki-content">
      {Data.sections.map((section, index) => (
        <section key={section.id} id={section.id} className="wiki-section">
          {/* Section title */}
          {<h2>{section.title}</h2>}

          {/* Paragraph sections (like Introduction) */}
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

          {/* Professional or Research Experience */}
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

          {/* Projects section — supports subsections (ML/AI & Full Stack) */}
          {section.id === "projects" && section.subsections && (
            <div className="project-section">
              {section.subsections.map((sub, i) => (
                <div key={sub.id} id={sub.id} className="project-subsection">
                  <h3>{sub.title}</h3>

                  {sub.projects &&
                    sub.projects.map((proj, j) => (
                      <div key={j} className="project-entry">
                        <div className="project-header">
                          <h4>{proj.name}</h4>
                          <span className="project-date">{proj.date}</span>
                        </div>
                        {proj.organization && (
                          <p className="project-org">{proj.organization}</p>
                        )}
                        <ul>
                          {proj.points.map((p, k) => (
                            <li key={k}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          )}

          {/* Skills or generic list */}
          {section.list &&
            !section.list[0]?.degree &&
            section.id !== "projects" &&
            section.list.map((item, i) => <p key={i}>• {item}</p>)}
        </section>
      ))}
    </article>
  );
}
