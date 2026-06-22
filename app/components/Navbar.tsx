"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(10, 14, 26, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontWeight: 800,
          fontSize: "1.2rem",
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        <span className="gold-text">BMS</span>
      </a>

      {/* Desktop Links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="nav-link"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--accent)",
          fontSize: "1.5rem",
        }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: 0,
            right: 0,
            background: "rgba(10, 14, 26, 0.98)",
            borderBottom: "1px solid var(--border)",
            padding: "1rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "1rem" }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
