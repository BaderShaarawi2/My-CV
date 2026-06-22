export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        {/* Left: text */}
        <div>
          <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Who I Am
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "0.5rem" }}>
            About <span className="gold-text">Me</span>
          </h2>
          <div className="divider" />

          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Software Engineering graduate from Jeddah University with a strong interest in Cloud Computing,
            Full-Stack Development, and Artificial Intelligence. Passionate about designing and developing
            scalable software solutions that solve real problems.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Skilled in building mobile and web applications using modern technologies, with hands-on experience
            from an internship at King Abdulaziz University and multiple real-world projects.
          </p>
        </div>

        {/* Right: highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {[
            {
              title: "Fresh Graduate",
              desc: "Bachelor of Software Engineering from Jeddah University — GPA 4.05/5",
            },
            {
              title: "Cloud Computing",
              desc: "Passionate about cloud infrastructure, scalability, and distributed systems",
            },
            {
              title: "AI Technologies",
              desc: "Experienced with AI bootcamps and building AI-powered mobile applications",
            },
            {
              title: "Mobile & Web Development",
              desc: "Built real-world apps using Flutter, Dart, Firebase, Bootstrap, and more",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="section-card"
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.2rem 1.5rem" }}
            >
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px", fontSize: "0.95rem" }}>{item.title}</h4>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
