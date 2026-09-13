import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { NAV_ITEMS } from "../data/Data";
import { useScrolled } from "../hooks/usePortfolio";

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/dhinesh04",                 Icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/dhinesh-sivakumar",    Icon: FaLinkedin },
  { label: "Medium",   href: "https://medium.com/@dhinesh_sivakumar",        Icon: FaMedium },
];

/**
 * Sticky top navigation bar.
 * Props:
 *  active – id string of the currently visible section
 */
export default function Header({ active }) {
  const scrolled = useScrolled(30);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        background: scrolled ? "rgba(247,249,249,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "0 var(--pad)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 60,
        }}
      >
        {/* Logo */}
        <a
          href="#profile"
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: "var(--ink)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Dhinesh S<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: isActive ? "var(--accent)" : "var(--muted)",
                  borderBottom: isActive
                    ? "1px solid var(--accent)"
                    : "1px solid transparent",
                  paddingBottom: 1,
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {item}
              </a>
            );
          })}

          {/* Divider */}
          <span style={{ width: 1, height: 16, background: "var(--rule)" }} />

          {/* Social icons */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.15rem",
                  color: "var(--muted)",
                  transition: "color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
