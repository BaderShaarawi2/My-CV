export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem",
        textAlign: "center",
        color: "var(--muted)",
        fontSize: "0.85rem",
      }}
    >
      <p>
        Designed & Built by{" "}
        <span className="gold-text" style={{ fontWeight: 700 }}>
          Bader Morshed Shaarawi
        </span>{" "}
        · {year}
      </p>
    </footer>
  );
}
