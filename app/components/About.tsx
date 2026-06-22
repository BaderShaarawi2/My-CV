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
            I&apos;m a recent Software Engineering graduate driven by a passion for building
            scalable, intelligent systems. My interests span across cloud infrastructure,
            modern full-stack development, and the rapidly evolving world of AI technologies.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            I thrive at the intersection of technology and problem-solving — always looking
            for opportunities to turn complex challenges into elegant, efficient solutions.
            I&apos;m eager to contribute to teams that push the boundaries of what software can do.
          </p>

        </div>

        {/* Right: stats/highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {[
            {
              icon: "",
              title: "Fresh Graduate",
              desc: "Bachelor of Software Engineering — ready to apply knowledge in the real world",
            },
            {
              icon: "",
              title: "Cloud Computing",
              desc: "Passionate about cloud infrastructure, scalability, and distributed systems",
            },
            {
              icon: "",
              title: "AI Technologies",
              desc: "Interested in machine learning, large language models, and AI-driven applications",
            },
            {
              icon: "",
              title: "Full-Stack Development",
              desc: "Capable of building end-to-end web applications from database to UI",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="section-card"
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.2rem 1.5rem" }}
            >
              <span style={{ fontSize: "1.6rem", lineHeight: 1, marginTop: "2px" }}>{item.icon}</span>
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
