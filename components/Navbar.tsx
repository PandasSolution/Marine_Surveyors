"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>

        {/* LOGO */}
        <Link href="/" className={styles.logo} onClick={handleLinkClick}>
          AI Marine Surveyors Inc
        </Link>

        {/* NAV */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <Link href="/" onClick={handleLinkClick}>Home</Link>
          <Link href="/about" onClick={handleLinkClick}>About Us</Link>
          <Link href="/servicespage" onClick={handleLinkClick}>Services</Link>
          <Link href="/location" onClick={handleLinkClick}>Location</Link>
          <Link href="/contact" onClick={handleLinkClick}>Contact</Link>

          {/* mobile CTA */}
          <Link
            href="/contact"
            className={styles.ctaMobile}
            onClick={handleLinkClick}
          >
            Get Quote
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link href="/contact" className={styles.cta}>
          Get Quote
        </Link>

        {/* OVERLAY */}
        {menuOpen && (
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* MOBILE MENU */}
        <div
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}