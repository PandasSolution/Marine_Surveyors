"use client";

import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.overlay}></div>

      <div className={styles.container}>

        <div className={styles.left}>

          <span className={styles.badge}>
            Global Marine Services
          </span>

          <h1>
            AI Marine Surveyors Inc.
          </h1>

          <p>
            Independent Marine Surveyors, Maritime Consultants, Port Captains,
            Port Engineers, Investigators for Cargo, Hull & Machinery Claims.
          </p>

          <div className={styles.buttons}>

            {/* 👉 CONTACT PAGE */}
            <Link href="/contact" className={styles.primary}>
              Get Free Quote
            </Link>

            {/* 👉 SERVICES PAGE */}
            <Link href="/servicespage" className={styles.secondary}>
              Our Services
            </Link>

          </div>

          <div className={styles.stats}>

            <div>
              <h3>80+</h3>
              <p>Countries</p>
            </div>

            <div>
              <h3>600+</h3>
              <p>Ports Covered</p>
            </div>

            <div>
              <h3>35+</h3>
              <p>Years Experience</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}