"use client";

import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      slug: "marine-survey",
      title: "Marine Survey",
      desc: "Comprehensive vessel inspection ensuring safety and compliance.",
      img: "/images/services/marine.jpg",
    },
    {
      slug: "cargo-inspection",
      title: "Cargo Inspection",
      desc: "Accurate cargo quality and quantity verification services.",
      img: "/images/services/cargo.png",
    },
    {
      slug: "port-consultancy",
      title: "Port Consultancy",
      desc: "Expert guidance for efficient port and logistics operations.",
      img: "/images/services/port.png",
    },
    {
      slug: "bunker-survey",
      title: "Bunker Survey",
      desc: "Fuel quality and quantity inspection for marine operations.",
      img: "/images/services/bunker.jpeg",
    },
    {
      slug: "offshore-supply",
      title: "Offshore Supply",
      desc: "Reliable logistics and supply chain solutions for offshore operations.",
      img: "/images/services/offshore.webp",
    },
    {
      slug: "navigational",
      title: "Navigational Assistance",
      desc: "Expert guidance for safe and efficient maritime navigation.",
      img: "/images/services/navigational.webp",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <span className={styles.badge}>WHAT WE OFFER</span>

          <h1 className={styles.title}>
            Marine Services Built for Global Standards
          </h1>

          <p className={styles.subtitle}>
            Precision-driven maritime inspection, consultancy and cargo solutions
            trusted by global shipping industries.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {services.map((s, i) => (
            <Link href={`/services/${s.slug}`} key={i} className={styles.card}>

              <div className={styles.imageWrap}>
                {/* ✅ FIXED: normal img (no next/image error) */}
                <img
                  src={s.img}
                  alt={s.title}
                  className={styles.img}
                />
              </div>

              <div className={styles.content}>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <span>Explore Service →</span>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}