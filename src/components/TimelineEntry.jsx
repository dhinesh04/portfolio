import { Tag } from "./SectionTitle";

/**
 * Shared timeline layout used by both Experience and Research sections.
 *
 * Props:
 *  period   – date string shown in teal
 *  title    – company / org name
 *  subtitle – location or department
 *  role     – italic role title
 *  bullets  – string[]
 *  tags     – string[]
 */
export default function TimelineEntry({ period, title, subtitle, role, bullets, tags }) {
  return (
    <div className="timeline-grid">
      {/* Left column */}
      <div>
        <div className="timeline-left-period">{period}</div>
        <div className="timeline-left-title">{title}</div>
        {subtitle && <div className="timeline-left-sub">{subtitle}</div>}
      </div>

      {/* Right column */}
      <div className="timeline-right">
        <div className="timeline-role">{role}</div>
        <ul className="timeline-bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="tags-row">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
