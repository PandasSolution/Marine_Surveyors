"use client";

import styles from "./Locationsection.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function LocationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT INFO */}
        <div className={styles.infoCard}>
          <span className={styles.badge}>OUR OFFICE</span>

          <h2>Visit Our Headquarters</h2>

          <p>
            We are located in a prime area to serve global marine and cargo
            inspection clients with fast and reliable support.
          </p>

          <div className={styles.details}>

            <div className={styles.item}>
              <FaMapMarkerAlt />
              <span>House 21, Road 7, Uttara, Dhaka, Bangladesh</span>
            </div>

            <div className={styles.item}>
              <FaPhoneAlt />
              <span>+880 1748-399860</span>
            </div>

            <div className={styles.item}>
              <FaEnvelope />
              <span>info@marinesolutions.com</span>
            </div>

          </div>

        </div>

        {/* RIGHT MAP */}
        <div className={styles.mapCard}>
          <iframe
            src="https://www.google.com/maps?q=Uttara,Dhaka,Bangladesh&output=embed"
            className={styles.map}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}