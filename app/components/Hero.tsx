export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* Background glow effects */}
      <div
        className="hero-glow"
        style={{ top: "-100px", right: "-100px" }}
      />
      <div
        className="hero-glow"
        style={{
          bottom: "-100px",
          left: "-100px",
          background:
            "radial-gradient(circle, rgba(201, 168, 76, 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(30, 45, 69, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 45, 69, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Status badge */}
        <div
          className="animate-fadeInUp"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            background: "rgba(201, 168, 76, 0.1)",
            border: "1px solid rgba(201, 168, 76, 0.3)",
            borderRadius: "999px",
            marginBottom: "2rem",
            fontSize: "0.85rem",
            color: "var(--accent)",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#4ade80",
              display: "inline-block",
              boxShadow: "0 0 8px #4ade80",
              animation: "pulse 2s infinite",
            }}
          />
          Open to Opportunities
        </div>

        {/* Main heading */}
        <h1
          className="animate-fadeInUp delay-100"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
            opacity: 0,
          }}
        >
          Bader Morshed
          <br />
          <span className="gold-text">Shaarawi</span>
        </h1>

        {/* Title */}
        <p
          className="animate-fadeInUp delay-200"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "var(--muted)",
            fontWeight: 400,
            marginBottom: "1.5rem",
            letterSpacing: "0.02em",
            opacity: 0,
          }}
        >
          Software Engineer
        </p>

        {/* Interests */}
        <p
          className="animate-fadeInUp delay-300"
          style={{
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            color: "var(--accent)",
            fontWeight: 500,
            marginBottom: "3rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0,
          }}
        >
          Cloud Computing &nbsp;·&nbsp; Full-Stack Development &nbsp;·&nbsp; AI Technologies
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fadeInUp delay-400"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: 0,
          }}
        >
          <a href="#contact" className="btn-primary">
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#skills" className="btn-outline">
            View My Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fadeIn delay-500"
          style={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0,
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "50px",
              background: "linear-gradient(to bottom, var(--accent), transparent)",
              animation: "fadeIn 2s ease infinite alternate",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
