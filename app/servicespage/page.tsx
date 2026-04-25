"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Service.module.css";
import {
  FaShip, FaAnchor, FaBoxes, FaSearch, FaWater,
  FaClipboardCheck, FaIndustry, FaGasPump, FaTools, FaShieldAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    { icon: <FaShip />,          title: "Port Captains",                    num: "01" },
    { icon: <FaTools />,         title: "Port Engineers",                   num: "02" },
    { icon: <FaSearch />,        title: "Vessel Condition Survey",           num: "03" },
    { icon: <FaBoxes />,         title: "Cargo Condition Survey",            num: "04" },
    { icon: <FaClipboardCheck />,title: "Pre-Purchase Inspection",           num: "05" },
    { icon: <FaShieldAlt />,     title: "Vetting Inspection",               num: "06" },
    { icon: <FaAnchor />,        title: "On / Off Hire Survey",             num: "07" },
    { icon: <FaGasPump />,       title: "Bunkers Quantity Survey",          num: "08" },
    { icon: <FaSearch />,        title: "Bunker Detective Survey",          num: "09" },
    { icon: <FaWater />,         title: "Draught Survey",                   num: "10" },
    { icon: <FaClipboardCheck />,title: "Hatch Cleanliness Survey",         num: "11" },
    { icon: <FaWater />,         title: "Tank Cleanliness Survey",          num: "12" },
    { icon: <FaIndustry />,      title: "Casualty Investigation",           num: "13" },
    { icon: <FaTools />,         title: "Hull & Machinery Damage Inspection",num: "14" },
    { icon: <FaShieldAlt />,     title: "ISM / ISPS Audits & Inspections",  num: "15" },
    { icon: <FaBoxes />,         title: "Container Inspection",             num: "16" },
    { icon: <FaShip />,          title: "Non-Exclusive Survey",             num: "17" },
    { icon: <FaAnchor />,        title: "P&I Survey",                       num: "18" },
  ];

  const clients = [
    "Charterers", "Owners", "Lawyers", "Insurers",
    "P & I Club", "Cargo Interests", "Ports", "Ship Management", "Vessel Operator",
  ];

  return (
    <>
      {/* ── Google Fonts (load here instead of CSS @import) ── */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* .wrap holds all CSS custom properties */}
      <div className={styles.wrap}>
        <Navbar />

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <span className={styles.heroBgWord}>MARINE</span>
            <span className={styles.heroBgWord}>SURVEY</span>
          </div>

          <div className={styles.heroInner}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Marine Survey &amp; Consultancy
            </div>

            <h1 className={styles.heroHeading}>
              Precision. <br />
              <em>Integrity.</em> <br />
              Expertise.
            </h1>

            <p className={styles.heroSub}>
              Delivering precise inspection, surveying and consultancy solutions
              for global maritime operations with professionalism, integrity and trust.
            </p>
          </div>

          <div className={styles.heroScroll}>
            <span />
            Scroll
          </div>
        </section>

        {/* ── TRUST ── */}
        <section className={styles.trust}>
          <div className={styles.trustInner}>
            <div className={styles.trustLine} />
            <div className={styles.trustText}>
              <p>
                <strong>AI Marine Surveyors</strong> is committed to providing a complete survey service
                to the highest levels of integrity, confidentiality and technical expertise
                to both private and corporate clients alike.
              </p>
              <p>
                In keeping with the professional ethics and principles of Independent Survey,
                findings are reported immediately and accurately, ensuring that clients are
                aware of all developments at every stage of the operation.
              </p>
            </div>
            <div className={styles.trustLine} />
          </div>
        </section>

        {/* ── CLIENTS ── */}
        <section className={styles.clients}>
          <div className={styles.clientsInner}>
            <div className={styles.clientsSide}>
              <p className={styles.sectionLabel}>— Who we serve</p>
              <h2 className={styles.clientsHeading}>
                Trusted by <br /> every maritime <br /> stakeholder.
              </h2>
            </div>

            <div className={styles.clientsGrid}>
              {clients.map((c, i) => (
                <div key={i} className={styles.clientPill}>
                  <span className={styles.clientPillIdx}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className={styles.services}>
          <div className={styles.servicesHeader}>
            <p className={styles.sectionLabel}>— What we offer</p>
            <h2 className={styles.servicesHeading}>Our Marine Survey Services</h2>
            <p className={styles.servicesSub}>
              Comprehensive inspection and technical survey solutions worldwide.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((item, i) => (
              <div className={styles.serviceCard} key={i}>
                <span className={styles.serviceNum}>{item.num}</span>
                <div className={styles.serviceIcon}>{item.icon}</div>
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <div className={styles.serviceBar} />
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}