import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { EDUCATION, EXPERIENCE, RESEARCH, PROJECTS, SKILLS, CONTACT_LINKS } from "../data/Data";
import { Reveal, SectionTitle } from "../components/SectionTitle";
import TimelineEntry from "../components/TimelineEntry";
import ProjectCard from "../components/ProjectCard";
import profilePhoto from "../assets/image.jpeg";

const EMAILJS_SERVICE_ID  = "service_3ai7hxy";
const EMAILJS_TEMPLATE_ID = "template_wzlnc1u";
const EMAILJS_PUBLIC_KEY  = "82tdPrBW6hBkrvhMC";

// ── Master's courses ──────────────────────────────────────────────────────────
const OSU_COURSES = [
  "Foundations of Speech and Language Processing",
  "Data Mining",
  "Algorithms",
  "Advanced Operating Systems",
  "Intro to Software Startups",
  "Data Visualization",
  "Software Engineering - AI Intensive Systems",
  "Foundations of Programming Languages",
  "High Performance Computing for ML/DL"
];

const CIT_COURSES = [
  "Predictive Analytics",
  "Machine Learning",
  "Data Structures & Algorithms"
];

const COURSES_BY_SCHOOL = {
  "The Ohio State University": OSU_COURSES,
  "Coimbatore Institute of Technology": CIT_COURSES,
};

// ── Education Card (with expandable courses for OSU) ─────────────────────────
function EducationCard({ e }) {
  const [open, setOpen] = useState(false);
  const courses = COURSES_BY_SCHOOL[e.school];

  return (
    <div
      style={{
        padding: "0.85rem 1.2rem",
        background: "var(--surface)",
        border: "1px solid var(--rule)",
        borderRadius: 8,
        flex: "1 1 200px",
        transition: "border-color 0.2s",
      }}
    >
      <div style={{ fontWeight: 500, fontSize: "0.87rem", color: "var(--ink)", marginBottom: 2 }}>{e.school}</div>
      <div style={{ fontSize: "0.77rem", color: "var(--muted)", marginBottom: 6 }}>{e.degree}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.64rem", color: "var(--faint)" }}>{e.period}</span>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.64rem", color: "var(--accent)", background: "var(--accent-bg)", padding: "0.1rem 0.45rem", borderRadius: 3 }}>
          GPA {e.gpa}
        </span>
      </div>

      {/* Courses toggle — only shown for OSU */}
      {courses && (
        <div style={{ marginTop: "0.75rem", borderTop: "1px solid var(--rule)", paddingTop: "0.65rem" }}>
          <button
            onClick={() => setOpen(!open)}
            style={{
              fontFamily: "var(--mono)", fontSize: "0.64rem", letterSpacing: "0.1em",
              textTransform: "uppercase", color: "var(--accent)", background: "none",
              border: "none", cursor: "pointer", padding: 0, display: "flex",
              alignItems: "center", gap: "0.4rem",
            }}
          >
            <span style={{ display: "inline-block", transition: "transform 0.2s", transform: open ? "rotate(90deg)" : "rotate(0deg)" }}>▶</span>
            {open ? "Hide courses" : "View courses"}
          </button>

          {open && (
            <div style={{ marginTop: "0.75rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {courses.map((course) => (
                <span
                  key={course}
                  style={{
                    fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.03em",
                    color: "var(--muted)", background: "var(--bg)",
                    border: "1px solid var(--rule)", padding: "0.2rem 0.55rem", borderRadius: 3,
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Profile ───────────────────────────────────────────────────────────────────
function Profile() {
  const anim = (delay) => ({
    animation: "fadeUp 0.8s ease forwards",
    animationDelay: delay,
    opacity: 0,
  });

  return (
    <section
      id="profile"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid var(--rule)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 65% 45%, rgba(13,148,136,0.06) 0%, transparent 55%)", pointerEvents: "none" }} />

      <div className="section-inner" style={{ width: "100%", paddingTop: 80 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "3.5rem", flexWrap: "wrap" }}>

          {/* ── Text ── */}
          <div style={{ flex: 1, minWidth: 280, maxWidth: 620 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.2rem", ...anim("0.15s") }}>
              M.S. CSE · The Ohio State University · Graduating May 2026
            </div>

            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 6vw, 4.8rem)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: "1.5rem", ...anim("0.25s") }}>
              Dhinesh Sivakumar.
            </h1>

            <p style={{ fontSize: "1.08rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: 560, marginBottom: "2.5rem", ...anim("0.4s") }}>
              Software engineer with professional internship experiences in AI automation and large-scale data systems.
              Passionate about the healthcare sector — applying machine learning to real clinical problems.
              Graduating from OSU in May 2026 and actively seeking full-time opportunities.
            </p>

            {/* Education cards — now using EducationCard component */}
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2.5rem", flexWrap: "wrap", ...anim("0.5s") }}>
              {EDUCATION.map((e) => (
                <EducationCard key={e.school} e={e} />
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", ...anim("0.6s") }}>
              <a
                href="#projects"
                style={{ fontFamily: "var(--mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: "var(--accent)", padding: "0.8rem 1.8rem", textDecoration: "none", borderRadius: 4, transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View work
              </a>
              <a
                href="#contact"
                style={{ fontFamily: "var(--mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", padding: "0.8rem 1.8rem", textDecoration: "none", borderRadius: 4, border: "1px solid var(--rule)", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--rule)")}
              >
                Get in touch
              </a>
              <a
                href="https://drive.google.com/file/d/19rkXeZvQUAqvDaPhMqi7cLLv6nb2n-cv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: "var(--mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", padding: "0.8rem 1.8rem", textDecoration: "none", borderRadius: 4, border: "1px solid rgba(13,148,136,0.35)", background: "var(--accent-bg)", transition: "background 0.2s, border-color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(13,148,136,0.12)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent-bg)"; e.currentTarget.style.borderColor = "rgba(13,148,136,0.35)"; }}
              >
                Resume ↗
              </a>
            </div>
          </div>

          {/* ── Photo ── */}
          <div style={{ ...anim("0.1s"), flexShrink: 0 }}>
            <div style={{ width: 260, height: 260, borderRadius: "50%", overflow: "hidden", border: "3px solid var(--accent-bg)", outline: "2px solid var(--rule)" }}>
              <img src={profilePhoto} alt="Dhinesh Kumar Sivakumar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 0", borderBottom: "1px solid var(--rule)", background: "var(--surface)" }}>
      <div className="section-inner">
        <SectionTitle label="01 — Professional Experience" title="Where I've worked." />
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 100}>
              <TimelineEntry period={exp.period} title={exp.company} subtitle={exp.location} role={exp.role} bullets={exp.bullets} tags={exp.tags} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Research ──────────────────────────────────────────────────────────────────
function Research() {
  return (
    <section id="research" style={{ padding: "6rem 0", borderBottom: "1px solid var(--rule)" }}>
      <div className="section-inner">
        <SectionTitle label="02 — Research Experience" title="What I'm studying." />
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {RESEARCH.map((r, i) => (
            <Reveal key={r.org} delay={i * 100}>
              <TimelineEntry period={r.period} title={r.org} subtitle={r.dept} role={r.role} bullets={r.bullets} tags={r.tags} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 0", borderBottom: "1px solid var(--rule)", background: "var(--surface)" }}>
      <div className="section-inner">
        <SectionTitle label="03 — Projects" title="Things I've built." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
          <Reveal delay={PROJECTS.length * 80}>
            <div style={{ border: "1.5px dashed var(--rule)", borderRadius: 10, padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 220, gap: "0.75rem" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "1.5rem", color: "var(--faint)" }}>+</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--faint)" }}>More building ⏳</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 0", borderBottom: "1px solid var(--rule)" }}>
      <div className="section-inner">
        <SectionTitle label="04 — Skills" title="Tools of the trade." />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {SKILLS.map((group, i) => (
            <Reveal key={group.group} delay={i * 60}>
              <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "2rem", alignItems: "center", paddingBottom: "1.5rem", borderBottom: "1px solid var(--rule)" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>{group.group}</div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact Form ──────────────────────────────────────────────────────────────
function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const inputStyle = {
    width: "100%", padding: "0.7rem 0.9rem", fontFamily: "var(--sans)", fontSize: "0.9rem",
    color: "var(--ink)", background: "var(--bg)", border: "1px solid var(--rule)",
    borderRadius: 6, outline: "none", transition: "border-color 0.2s",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 10, padding: "2rem" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.5rem" }}>Send a message</div>
      <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--faint)", display: "block", marginBottom: "0.4rem" }}>Name</label>
            <input name="from_name" type="text" required placeholder="Jane Smith" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "var(--accent)")} onBlur={(e) => (e.target.style.borderColor = "var(--rule)")} />
          </div>
          <div>
            <label style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--faint)", display: "block", marginBottom: "0.4rem" }}>Email</label>
            <input name="from_email" type="email" required placeholder="jane@example.com" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "var(--accent)")} onBlur={(e) => (e.target.style.borderColor = "var(--rule)")} />
          </div>
        </div>
        <div>
          <label style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--faint)", display: "block", marginBottom: "0.4rem" }}>Message</label>
          <textarea name="message" required rows={5} placeholder="Hi Dhinesh, I'd love to connect about..." style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }} onFocus={(e) => (e.target.style.borderColor = "var(--accent)")} onBlur={(e) => (e.target.style.borderColor = "var(--rule)")} />
        </div>
        <button
          type="submit" disabled={status === "sending"}
          style={{ fontFamily: "var(--mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: status === "sending" ? "var(--faint)" : "var(--accent)", border: "none", borderRadius: 4, padding: "0.85rem 1.5rem", cursor: status === "sending" ? "not-allowed" : "pointer", transition: "opacity 0.2s, background 0.2s", alignSelf: "flex-start" }}
          onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.opacity = "0.82"; }}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>
        {status === "success" && <p style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--accent)" }}>✓ Message sent! I'll get back to you soon.</p>}
        {status === "error" && <p style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "#e53e3e" }}>Something went wrong. Try emailing me directly.</p>}
      </form>
    </div>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 0" }}>
      <div className="section-inner">
        <SectionTitle label="05 — Contact" title="Let's talk." />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <Reveal>
            <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: "2rem" }}>
              Graduating in May 2026 and actively looking for full-time software engineering roles —
              especially in healthcare technology, AI/ML, or full-stack product engineering.
              Open to research collaborations too.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CONTACT_LINKS.map(({ label, value, href }) => (
                <div key={label} style={{ display: "flex", gap: "1.5rem", alignItems: "baseline", paddingBottom: "1rem", borderBottom: "1px solid var(--rule)" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--faint)", minWidth: 70 }}>{label}</span>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                      style={{ fontSize: "0.9rem", color: "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--rule)", transition: "color 0.2s, border-color 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "var(--rule)"; }}
                    >{value}</a>
                  ) : (
                    <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Page assembly ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Profile />
      <Experience />
      <Research />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}