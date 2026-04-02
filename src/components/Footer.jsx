import { FOOTER_LINKS } from "../data/Data";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--rule)",
        padding: "1.75rem var(--pad)",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.7rem",
            color: "var(--faint)",
            letterSpacing: "0.06em",
          }}
        >
          © 2026 Dhinesh Kumar Sivakumar
        </span>

        <div style={{ display: "flex", gap: "1.75rem" }}>
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--faint)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--faint)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
