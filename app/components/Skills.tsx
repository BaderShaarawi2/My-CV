const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "C", "Dart"],
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Firebase"],
  },
  {
    title: "Web & Frontend",
    skills: ["Front-End Development", "Bootstrap", "HTML/CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "Linux", "Microsoft Office"],
  },
  {
    title: "AI & Emerging Tech",
    skills: ["Artificial Intelligence"],
  },
  {
    title: "Professional Skills",
    skills: ["Problem Solving", "Teamwork", "Communication", "Customer-Oriented", "Software Troubleshooting"],
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
              <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--accent)", marginBottom: "1.2rem" }}>
                {cat.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
