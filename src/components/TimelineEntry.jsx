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
 *  link     – optional URL (e.g. GitHub repo) shown as a button
 */
export default function TimelineEntry({ period, title, subtitle, role, bullets, tags, link }) {
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <div className="tags-row">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none",
                color: "var(--accent)", border: "1px solid rgba(13,148,136,0.35)",
                background: "var(--accent-bg)", padding: "0.35rem 0.9rem",
                borderRadius: 4, whiteSpace: "nowrap",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(13,148,136,0.15)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent-bg)"; e.currentTarget.style.borderColor = "rgba(13,148,136,0.35)"; }}
            >
              View code ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}