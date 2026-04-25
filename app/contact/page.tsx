"use client";

import Head from "next/head";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* hook up your API / email service here */
    setSent(true);
  };

  const whatsappLink = `https://wa.me/17132812146?text=${encodeURIComponent(form.message || "Hello, I would like to get in touch.")}`;

  const info = [
    {
      icon: "📍",
      label: "Office Address",
      lines: ["6065 Hillcroft St., Suite 411", "Houston, Texas 77081, U.S.A."],
      href: "https://maps.google.com/?q=6065+Hillcroft+St+Suite+411+Houston+Texas+77081",
      linkText: "View on Map",
    },
    {
      icon: "📞",
      label: "Phone",
      lines: ["+1 (281) 636-6664"],
      href: "tel:+12816366664",
      linkText: "Call Now",
    },
    {
      icon: "🖷",
      label: "Fax",
      lines: ["+1 (888) 778-1403"],
      href: null,
      linkText: null,
    },
    {
      icon: "✉️",
      label: "Email",
      lines: ["info@aimsurveyors.com"],
      href: "mailto:info@aimsurveyors.com",
      linkText: "Send Email",
    },
    {
      icon: "🌐",
      label: "Website",
      lines: ["www.aimsurveyors.com"],
      href: "https://www.aimsurveyors.com",
      linkText: "Visit Site",
    },
    {
      icon: "📘",
      label: "Facebook",
      lines: ["aimarine.surveyors"],
      href: "https://www.facebook.com/aimarine.surveyors",
      linkText: "Follow Us",
    },
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.wrap}>
        <Navbar />

        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            {[120, 240, 360, 480].map((y) => (
              <div key={y} className={styles.heroBgLine} style={{ top: y }} />
            ))}
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} /> Get In Touch
            </span>
            <h1 className={styles.heroH1}>
              Contact <em>AIMS</em>
            </h1>
            <p className={styles.heroP}>
              Reach out to our Houston headquarters or connect with us online.
              We respond to all enquiries within 24 hours.
            </p>
          </div>
        </section>

        {/* ═══ MAIN BODY ═══ */}
        <section className={styles.body}>
          <div className={styles.bodyInner}>

            {/* ── LEFT: INFO ── */}
            <aside className={styles.infoCol}>
              <div className={styles.companyCard}>
                <div className={styles.companyLogo}>⚓</div>
                <h2 className={styles.companyName}>AI Marine Surveyors, Inc.</h2>
                <p className={styles.companyAbbr}>AIMS</p>
              </div>

              <div className={styles.infoList}>
                {info.map((item, i) => (
                  <div key={i} className={styles.infoItem}>
                    <span className={styles.infoIcon}>{item.icon}</span>
                    <div className={styles.infoText}>
                      <p className={styles.infoLabel}>{item.label}</p>
                      {item.lines.map((l, j) => (
                        <p key={j} className={styles.infoLine}>{l}</p>
                      ))}
                      {item.href && item.linkText && (
                        <a
                          href={item.href}
                          className={styles.infoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.linkText} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <span className={styles.waIcon}>💬</span>
                <div>
                  <strong>Chat on WhatsApp</strong>
                  <span>+1 (713) 281-2146</span>
                </div>
              </a>
            </aside>

            {/* ── RIGHT: FORM ── */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSub}>
                  Fill in your details and we&apos;ll get back to you shortly.
                </p>

                {sent ? (
                  <div className={styles.successBox}>
                    <span className={styles.successIcon}>✅</span>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We&apos;ll reply within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Smith"
                          value={form.name}
                          onChange={handleChange}
                          className={styles.input}
                        />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange}
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (000) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="How can I help you?"
                        value={form.message}
                        onChange={handleChange}
                        className={styles.textarea}
                      />
                    </div>

                    <div className={styles.formActions}>
                      <button type="submit" className={styles.submitBtn}>
                        Send Message →
                      </button>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.waSecondary}
                      >
                        💬 Send via WhatsApp
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* ═══ MAP EMBED ═══ */}
        <div className={styles.mapWrap}>
          <iframe
            title="AIMS Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3!2d-95.519!3d29.706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6065+Hillcroft+St%2C+Houston%2C+TX+77081!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}