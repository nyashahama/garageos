"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#features", label: "Features", id: "features" },
  { href: "#pricing", label: "Pricing", id: "pricing" },
  { href: "#how", label: "How It Works", id: "how" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Scroll border effect */
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      navRef.current.style.borderBottomColor =
        window.scrollY > 60 ? "rgba(255,107,0,0.15)" : "var(--border)";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Scroll spy */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { threshold: 0.25, rootMargin: "-64px 0px -55% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav ref={navRef}>
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark" />
          <span className="nav-logo-text">
            Garage<span>OS</span>
          </span>
        </a>

        <ul className="nav-links">
          {links.map(({ href, label, id }) => (
            <li key={id}>
              <a
                href={href}
                className={activeSection === id ? "nav-active" : ""}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="#" className="btn btn-ghost">
            Sign In
          </a>
          <a href="#" className="btn btn-primary">
            Start Free →
          </a>

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`hamburger-line${menuOpen ? " open" : ""}`} />
            <span className={`hamburger-line${menuOpen ? " open" : ""}`} />
            <span className={`hamburger-line${menuOpen ? " open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu-links">
          {links.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-cta">
          <a href="#" className="btn btn-ghost" onClick={closeMenu}>
            Sign In
          </a>
          <a href="#" className="btn btn-primary" onClick={closeMenu}>
            Start Free — No Card Needed →
          </a>
        </div>

        <div className="mobile-menu-footer">
          🇿🇦 Built for South African mechanics
        </div>
      </div>
    </>
  );
}
