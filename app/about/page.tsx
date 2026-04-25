"use client";

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Aboutuspage.module.css";

const services = [
  {
    num: "01",
    title: "General Condition Survey & Vetting Inspections",
    desc: "Carried out on behalf of Charterers to assess vessel condition and compliance.",
  },
  {
    num: "02",
    title: "Prepurchase Surveys",
    desc: "Conducted for owners and operators before acquisition of a vessel.",
  },
  {
    num: "03",
    title: "On / Off Hire Surveys",
    desc: "Accurate surveys for owners and operators at the start and end of charter.",
  },
  {
    num: "04",
    title: "Inspections & Claim Investigations",
    desc: "Carried out on behalf of P&I Clubs with thorough documentation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Marine Survey &amp; Consultancy</p>
          <h1>AI Marine<br />Surveyors</h1>
          <p className={styles.heroSub}>Prompt &nbsp;·&nbsp; Reliable &nbsp;·&nbsp; Cost-Effective</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={styles.about}>
        <div className={styles.aboutImage} />
        <div className={styles.aboutText}>
          <span className={styles.label}>Who We Are</span>
          <h2>
            Providing Expert Support Across All Aspects of Marine Operations
          </h2>
          <p>
            AI Marine Surveyors provides a prompt, reliable and cost-effective
            surveying and consultancy service to the marine industry.
          </p>
          <p>
            The Company has a wide experience in providing support and expert
            advice in all aspects of marine operations.
          </p>
          <p>
            With a team of experienced Master Mariners and Chief Engineers, the
            Company has carried out General Condition Survey / Vetting
            Inspections on behalf of Charterers, Prepurchase and on/off hire
            surveys for owners and operators, and Inspections and Claim
            Investigations on behalf of P&amp;I Clubs.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <div className={styles.sectionHead}>
          <span className={styles.label}>What We Do</span>
          <h2>Our Services</h2>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((s) => (
            <div key={s.num} className={styles.serviceCard}>
              <span className={styles.serviceNum}>{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AIMS */}
      <section className={styles.aimsSection}>
        <div className={styles.aimsInner}>
          <span className={styles.labelLight}>About AIMS</span>
          <h2>AI Marine Surveyors, Inc.</h2>
          <p className={styles.aimsSub}>North America Based &nbsp;·&nbsp; Maritime Field</p>
          <div className={styles.aimsDivider} />
          <div className={styles.aimsBody}>
            <p>
              AI Marine Surveyors, Inc. (AIMS) is a North America based company,
              experienced in a wide range of services in the Maritime field. We
              are dedicated in providing a complete and comprehensive service in
              all forms of Marine Surveying.
            </p>
            <p>
              AI Marine Surveyors, Inc. has a network of experienced
              professionals, who conform to our standards and are capable of
              undertaking any challenge. Most of the associates of AIMS are ex
              Ship's Captains or Chief Engineers with long experience in the
              shipping industry.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}