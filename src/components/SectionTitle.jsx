import { useReveal } from "../hooks/usePortfolio";

// ── Scroll-reveal wrapper ──────────────────────────────────────────────────────
export function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Section heading with accent underline ─────────────────────────────────────
export function SectionTitle({ label, title }) {
  return (
    <Reveal>
      <div style={{ marginBottom: "3rem" }}>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "0.6rem",
          }}
        >
          {label}
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: "var(--ink)",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            marginTop: "1rem",
            width: 40,
            height: 2,
            background: "var(--accent)",
            borderRadius: 1,
          }}
        />
      </div>
    </Reveal>
  );
}

// ── Inline tag chip ───────────────────────────────────────────────────────────
export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}
