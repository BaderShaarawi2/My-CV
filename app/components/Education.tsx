const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Jeddah University — Jeddah, KSA",
    period: "2022 – 2026",
    gpa: "4.05 / 5",
    highlights: [
      "Cloud Computing",
      "Full-Stack Development",
      "Artificial Intelligence",
      "Mobile Application Development",
    ],
  },
];

const certifications = [
  {
    name: "Microsoft Office Specialist (Excel 2019)",
    issuer: "Microsoft",
    year: "Feb 2026",
  },
  {
    name: "AI Innovation Bootcamp",
    issuer: "Google Developer Group",
    year: "May 2026",
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
            My Background
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            Education & <span className="gold-text">Certifications</span>
          </h2>
          <div className="divider" style={{ margin: "12px auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {/* Education */}
          <div>
            <h3 style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Degrees
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="section-card">
                <h3 style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "4px" }}>{edu.degree}</h3>
                <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "4px" }}>{edu.institution}</p>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "12px" }}>
                  {edu.period} &nbsp;·&nbsp; GPA: {edu.gpa}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {edu.highlights.map((h, j) => (
                    <div key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>▸</span>
                      <span style={{ color: "var(--muted)", fontSize: "0.88rem" }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {certifications.map((cert, i) => (
                <div key={i} className="section-card" style={{ padding: "1.2rem 1.5rem" }}>
                  <h4 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "4px" }}>{cert.name}</h4>
                  <p style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{cert.issuer}</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "4px" }}>{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #education > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
