// ─────────────────────────────────────────────────────────────
//  EDUCATION  —  update your degree details below
// ─────────────────────────────────────────────────────────────

const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "[Your University Name]",
    period: "[Start Year] – [Graduation Year]",
    gpa: "[Your GPA]",
    highlights: [
      "[Add relevant course here]",
      "[Add relevant course here]",
      "[Add relevant course here]",
    ],
  },
];

const certifications: { name: string; issuer: string; year: string }[] = [
  // Add certifications here as you earn them:
  // { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2025" },
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
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {education.map((edu, i) => (
                <div key={i} className="section-card">
                  <h3 style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "4px" }}>{edu.degree}</h3>
                  <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "4px" }}>{edu.institution}</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "12px" }}>{edu.period} {edu.gpa && `· GPA: ${edu.gpa}`}</p>
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
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Certifications
            </h3>
            {certifications.length === 0 ? (
              <div className="section-card" style={{ textAlign: "center", padding: "3rem 2rem" }}>
                <p style={{ fontSize: "2rem", marginBottom: "0.8rem" }}></p>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Currently pursuing certifications in Cloud Computing and AI.
                  <br />
                  <span style={{ color: "var(--accent)", fontSize: "0.8rem" }}>Check back soon!</span>
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {certifications.map((cert, i) => (
                  <div key={i} className="section-card" style={{ padding: "1.2rem 1.5rem" }}>
                    <h4 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{cert.name}</h4>
                    <p style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{cert.issuer}</p>
                    <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{cert.year}</p>
                  </div>
                ))}
              </div>
            )}
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
