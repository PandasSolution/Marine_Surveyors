"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./location.module.css";

const offices = [
  {
    code: "01",
    city: "Houston",
    state: "Texas, USA",
    flag: "🇺🇸",
    featured: true,
    ports: [
      "Brownsville",
      "Corpus Christi",
      "Houston",
      "Beaumont",
      "Port Arthur",
      "Lake Charles",
    ],
  },
  {
    code: "02",
    city: "New Orleans",
    state: "Louisiana, USA",
    flag: "🇺🇸",
    featured: false,
    ports: [
      "All of Mississippi River",
      "Gulf Ports",
      "Mobile, AL",
    ],
  },
  {
    code: "03",
    city: "Tampa",
    state: "Florida, USA",
    flag: "🇺🇸",
    featured: false,
    ports: ["All of Florida"],
  },
  {
    code: "04",
    city: "Norfolk",
    state: "Virginia, USA",
    flag: "🇺🇸",
    featured: false,
    ports: [
      "Baltimore",
      "Wilmington, NC",
      "North Carolina",
    ],
  },
  {
    code: "05",
    city: "Boston",
    state: "Massachusetts, USA",
    flag: "🇺🇸",
    featured: false,
    ports: ["Maine to New York", "Hudson River"],
  },
  {
    code: "06",
    city: "Singapore",
    state: "Singapore",
    flag: "🇸🇬",
    featured: true,
    ports: [
      "Singapore",
      "Indonesian Ports",
      "Malaysian Ports",
      "Yangon",
    ],
  },
  {
    code: "07",
    city: "London",
    state: "United Kingdom",
    flag: "🇬🇧",
    featured: false,
    ports: ["All European Ports"],
  },
  {
    code: "08",
    city: "Chittagong",
    state: "Bangladesh",
    flag: "🇧🇩",
    featured: false,
    ports: ["All Bangladesh Ports"],
  },
];

export default function Location() {
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
          {/* decorative lines */}
          <svg className={styles.heroDeco} viewBox="0 0 800 700" fill="none">
            <circle cx="600" cy="350" r="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <circle cx="600" cy="350" r="200" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <circle cx="600" cy="350" r="120" stroke="rgba(59,130,246,0.12)" strokeWidth="1"/>
            <line x1="460" y1="350" x2="740" y2="350" stroke="rgba(59,130,246,0.15)" strokeWidth="1"/>
            <line x1="600" y1="210" x2="600" y2="490" stroke="rgba(59,130,246,0.15)" strokeWidth="1"/>
            <circle cx="600" cy="350" r="5" fill="rgba(59,130,246,0.6)"/>
            <circle cx="600" cy="350" r="14" stroke="rgba(59,130,246,0.25)" strokeWidth="1" fill="none"/>
          </svg>

          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}/>
              Global Presence
            </span>

            <h1 className={styles.heroH1}>
              Worldwide<br/><em>Coverage</em>
            </h1>

            <p className={styles.heroP}>
              8 offices spanning 4 continents — expert marine survey services
              wherever your vessel calls port.
            </p>

            <div className={styles.heroStats}>
              {[
                { num: "8",  label: "Offices" },
                { num: "4",  label: "Continents" },
                { num: "5+",label: "Countries" },
              ].map((s, i) => (
                <div key={i} className={styles.heroStat}>
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ OFFICES GRID ═══ */}
        <section className={styles.officesSection}>
          <div className={styles.officesTop}>
            <p className={styles.eyebrow}>— Our Offices</p>
            <h2 className={styles.officesH2}>Where We Operate</h2>
            <p className={styles.officesSub}>
              Click on any office to see full coverage details.
            </p>
          </div>

          <div className={styles.grid}>
            {offices.map((o) => (
              <div key={o.code} className={`${styles.card} ${o.featured ? styles.cardFeatured : ""}`}>

                {/* card header */}
                <div className={styles.cardHead}>
                  <div className={styles.cardHeadLeft}>
                    <span className={styles.cardFlag}>{o.flag}</span>
                    <div>
                      <h3 className={styles.cardCity}>{o.city}</h3>
                      <p className={styles.cardState}>{o.state}</p>
                    </div>
                  </div>
                  <span className={styles.cardCode}>#{o.code}</span>
                </div>

                {/* divider */}
                <div className={styles.cardDivider}/>

                {/* coverage label */}
                <p className={styles.cardCoverageLabel}>Coverage Area</p>

                {/* ports */}
                <ul className={styles.cardPorts}>
                  {o.ports.map((port, j) => (
                    <li key={j} className={styles.cardPort}>
                      <span className={styles.cardPortIcon}>✓</span>
                      {port}
                    </li>
                  ))}
                </ul>

                {/* featured tag */}
                {o.featured && (
                  <span className={styles.featuredTag}>Main Hub</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ ASSOCIATE BANNER ═══ */}
        <section className={styles.associate}>
          <div className={styles.associateInner}>
            <div className={styles.associateIcon}>🌐</div>
            <div className={styles.associateText}>
              <h2>Associate Offices — Worldwide</h2>
              <p>
                We also maintain associate offices covering most major ports around the globe.
                If you don&apos;t see your port listed, please ask — we most likely have coverage.
              </p>
            </div>
            <a href="mailto:info@aimarine.com" className={styles.associateBtn}>
              Ask About Your Port →
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}