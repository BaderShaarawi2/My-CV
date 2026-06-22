// ─────────────────────────────────────────────────────────────
//  CONTACT  —  update your links below
// ─────────────────────────────────────────────────────────────

const contactLinks = [
  {
    icon: "",
    label: "Email",
    value: "badermshaarawi@gmail.com",
    href: "mailto:badermshaarawi@gmail.com",
  },
  {
    icon: "",
    label: "LinkedIn",
    value: "linkedin.com/in/[your-username]",
    href: "https://linkedin.com/in/[your-username]",
  },
  {
    icon: "",
    label: "GitHub",
    value: "github.com/[your-username]",
    href: "https://github.com/[your-username]",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "6rem 2rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
    >
      <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        Get In Touch
      </p>
      <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "0.5rem" }}>
        Let&apos;s <span className="gold-text">Work Together</span>
      </h2>
      <div className="divider" style={{ margin: "12px auto 2rem" }} />

      <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "550px", margin: "0 auto 3rem" }}>
        I&apos;m actively looking for opportunities in software engineering, cloud computing, and AI.
        Whether you have a position, a project, or just want to connect — my inbox is always open.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="section-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              padding: "2rem 1.5rem",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{link.icon}</span>
            <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--accent)" }}>{link.label}</span>
            <span style={{ color: "var(--muted)", fontSize: "0.8rem", wordBreak: "break-all" }}>{link.value}</span>
          </a>
        ))}
      </div>

      <a href="mailto:badermshaarawi@gmail.com" className="btn-primary">
        Send Me an Email
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,12 2,6" />
        </svg>
      </a>
    </section>
  );
}
