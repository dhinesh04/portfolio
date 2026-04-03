import { Tag } from "./SectionTitle";

const STATUS_STYLES = {
  completed: {
    label: "Completed",
    color: "#166534",
    background: "#dcfce7",
    border: "#bbf7d0",
  },
  "in-progress": {
    label: "In Progress",
    color: "#854d0e",
    background: "#fef9c3",
    border: "#fde68a",
  },
};

/**
 * Single project card used in the Projects grid.
 *
 * Props:
 *  name     – project title
 *  period   – date string
 *  desc     – description paragraph
 *  tags     – string[]
 *  link     – href (defaults to "#")
 *  status   – "completed" | "in-progress"
 *  category – "Full-Stack" | "AI/ML"
 */
export default function ProjectCard({ name, period, desc, tags, link = "#", status, category }) {
  const statusStyle = status ? STATUS_STYLES[status] : null;

  return (
    <a
      href={link}
      target={link !== "#" ? "_blank" : undefined}
      rel="noreferrer"
      className="project-card"
    >
      <div className="project-card-header">
        <div className="project-card-name">{name}</div>
        <span className="project-card-arrow">↗</span>
      </div>

      {/* Status badge + period on same row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem", flexWrap: "wrap" }}>
        {statusStyle && (
          <span style={{
            fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.08em",
            textTransform: "uppercase", fontWeight: 500,
            color: statusStyle.color,
            background: statusStyle.background,
            border: `1px solid ${statusStyle.border}`,
            padding: "0.18rem 0.55rem",
            borderRadius: 3,
          }}>
            {statusStyle.label}
          </span>
        )}
        <div className="project-card-period" style={{ margin: 0 }}>{period}</div>
      </div>

      <p className="project-card-desc">{desc}</p>

      <div className="tags-row">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </a>
  );
}