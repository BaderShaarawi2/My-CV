const experiences = [
  {
    role: "Software Engineering Intern",
    company: "King Abdulaziz University",
    period: "June 2025 – August 2025",
    type: "Internship",
    description: [
      "Applied front-end development concepts using Bootstrap to create responsive and user-friendly web interfaces.",
      "Collaborated with the IT support team to troubleshoot and resolve computer software issues efficiently.",
      "Configured and deployed approximately 8 computers by installing Linux OS and required biology applications.",
    ],
    tags: ["Bootstrap", "Front-End Development", "Linux", "Software Troubleshooting"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Where I&apos;ve Worked
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
          Work <span className="gold-text">Experience</span>
        </h2>
        <div className="divider" style={{ margin: "12px auto 0" }} />
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingLeft: "60px" }}>
          {experiences.map((exp, i) => (
            <div key={i} className="section-card" style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "-48px",
                  top: "1.5rem",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  border: "3px solid var(--background)",
                  boxShadow: "0 0 12px rgba(201, 168, 76, 0.5)",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "1.1rem" }}>{exp.role}</h3>
                  <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem" }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{exp.period}</p>
                  <span className="tag" style={{ fontSize: "0.75rem" }}>{exp.type}</span>
                </div>
              </div>
              <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
                {exp.description.map((point, j) => (
                  <li key={j} style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "4px" }}>
                    {point}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: "0.75rem" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
