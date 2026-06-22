// ─────────────────────────────────────────────────────────────
//  SKILLS  —  update the arrays below whenever you gain new skills
// ─────────────────────────────────────────────────────────────

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: "",
    skills: ["[Add skill here]", "[Add skill here]", "[Add skill here]"],
  },
  {
    title: "Cloud & DevOps",
    icon: "",
    skills: ["[Add skill here]", "[Add skill here]", "[Add skill here]"],
  },
  {
    title: "AI & Machine Learning",
    icon: "",
    skills: ["[Add skill here]", "[Add skill here]", "[Add skill here]"],
  },
  {
    title: "Tools & Platforms",
    icon: "",
    skills: ["[Add skill here]", "[Add skill here]", "[Add skill here]"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        background: "rgba(17, 24, 39, 0.5)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            What I Know
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            Technical <span className="gold-text">Skills</span>
          </h2>
          <div className="divider" style={{ margin: "12px auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillCategories.map((cat) => (
            <div key={cat.title} className="section-card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.2rem" }}>
                <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--accent)" }}>
                  {cat.title}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "var(--muted)", fontSize: "0.85rem", marginTop: "2rem" }}>
          Skills are being updated — check back soon.
        </p>
      </div>
    </section>
  );
}
