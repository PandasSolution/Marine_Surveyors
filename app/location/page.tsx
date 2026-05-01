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
    ports: ["Brownsville","Corpus Christi","Houston","Beaumont","Port Arthur","Lake Charles"],
  },
  {
    code: "02",
    city: "New Orleans",
    state: "Louisiana, USA",
    flag: "🇺🇸",
    featured: false,
    ports: ["All of Mississippi River","Gulf Ports","Mobile, AL"],
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
    ports: ["Baltimore","Wilmington, NC","North Carolina"],
  },
  {
    code: "05",
    city: "Boston",
    state: "Massachusetts, USA",
    flag: "🇺🇸",
    featured: false,
    ports: ["Maine to New York","Hudson River"],
  },
  {
    code: "06",
    city: "Singapore",
    state: "Singapore",
    flag: "🇸🇬",
    featured: true,
    ports: ["Singapore","Indonesian Ports","Malaysian Ports","Yangon"],
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
        {/* Noto Color Emoji for reliable flag rendering */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.wrap}>
        <Navbar />

        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
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
                { num: "5+", label: "Countries" },
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
            <h1 className={styles.eyebrow}>— Our Offices</h1>
          </div>

          <div className={styles.grid}>
            {offices.map((o) => (
              <div
                key={o.code}
                className={`${styles.card} ${o.featured ? styles.cardFeatured : ""}`}
              >
                {/* header */}
                <div className={styles.cardHead}>
                  <div className={styles.cardHeadLeft}>
                    {/* big flag */}
                    <span className={styles.cardFlag}>{o.flag}</span>
                    <div>
                      <h3 className={styles.cardCity}>{o.city}</h3>
                      {/* small flag + country name */}
                      <p className={styles.cardState}>
                        <span className={styles.cardStateFlag}>{o.flag}</span>
                        {o.state}
                      </p>
                    </div>
                  </div>
                  <span className={styles.cardCode}>#{o.code}</span>
                </div>

                <div className={styles.cardDivider}/>

                <p className={styles.cardCoverageLabel}>Coverage Area</p>

                <ul className={styles.cardPorts}>
                  {o.ports.map((port, j) => (
                    <li key={j} className={styles.cardPort}>
                      <span className={styles.cardPortIcon}>✓</span>
                      {port}
                    </li>
                  ))}
                </ul>

                {o.featured && (
                  <span className={styles.featuredTag}>Main Hub</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ ASSOCIATE SECTION — REDESIGNED ═══ */}
        <section className={styles.associate}>
          {/* bg glow layer */}
          <div className={styles.associateBg} />

          {/* pill label */}
          <div className={styles.associateLabel}>
            <span className={styles.associatePill}>
              <span className={styles.associatePillDot}/>
              Associate Network
            </span>
          </div>

          {/* main card */}
          <div className={styles.associateCard}>

            {/* globe icon */}
            <div className={styles.associateGlobe}>🌐</div>

            {/* text */}
            <div className={styles.associateBody}>
              <p className={styles.associateEyebrow}>Worldwide Coverage</p>
              <h2 className={styles.associateH2}>
                Associate Offices —<br/>Around the Globe
              </h2>
              <p className={styles.associateP}>
                We maintain associate offices covering most major ports worldwide.
                If you don&apos;t see your port listed, please ask — we most likely have coverage.
              </p>

              {/* stats */}
              <div className={styles.associateStats}>
                {[
                  { num: "80+",  label: "Countries" },
                  { num: "100+", label: "Ports" },
                  { num: "24/7", label: "Support" },
                ].map((s, i) => (
                  <div key={i} className={styles.associateStat}>
                    <span className={styles.associateStatNum}>{s.num}</span>
                    <span className={styles.associateStatLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={styles.associateCta}>
              <a href="mailto:info@aimarine.com" className={styles.associateBtn}>
                Ask About Your Port
                <span className={styles.associateBtnArrow}>→</span>
              </a>
              <p className={styles.associateBtnNote}>
                Usually responds within 24 hours
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}