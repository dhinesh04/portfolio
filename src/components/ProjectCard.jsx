import { Tag } from "./SectionTitle";

/**
 * Single project card used in the Projects grid.
 *
 * Props:
 *  name   – project title
 *  period – date string
 *  desc   – description paragraph
 *  tags   – string[]
 *  link   – href (defaults to "#")
 */
export default function ProjectCard({ name, period, desc, tags, link = "#" }) {
  return (
    <a href={link} className="project-card">
      <div className="project-card-header">
        <div className="project-card-name">{name}</div>
        <span className="project-card-arrow">↗</span>
      </div>
      <div className="project-card-period">{period}</div>
      <p className="project-card-desc">{desc}</p>
      <div className="tags-row">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </a>
  );
}
