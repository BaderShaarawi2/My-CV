const projects = [
  {
    title: "Auto Wrench",
    subtitle: "Smart Vehicle Maintenance Application",
    description:
      "A smart vehicle maintenance application that automatically tracks vehicle mileage using smartphone GPS, monitors maintenance schedules based on distance traveled and service intervals, and sends timely reminders to vehicle owners. The application helps users perform preventive maintenance, reduce repair costs, and avoid unexpected breakdowns.",
    tags: ["Flutter", "Dart", "Firebase", "GPS", "Mobile Development"],
  },
  {
    title: "Mobile App for Hearing-Impaired People",
    subtitle: "AI-Powered Communication Bridge",
    description:
      "An AI mobile application designed to bridge communication gaps between hearing-impaired individuals and hearing people. Leverages artificial intelligence to enable seamless and inclusive communication.",
    tags: ["Flutter", "Dart", "Artificial Intelligence", "Mobile Development"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          What I&apos;ve Built
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
          My <span className="gold-text">Projects</span>
        </h2>
        <div className="divider" style={{ margin: "12px auto 0" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        {projects.map((project, i) => (
          <div key={i} className="section-card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: "4px" }}>{project.title}</h3>
              <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.85rem" }}>{project.subtitle}</p>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.8, flexGrow: 1 }}>
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag" style={{ fontSize: "0.75rem" }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
