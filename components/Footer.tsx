"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.glow}></div>

      <div className={styles.container}>

        {/* CARD 1 */}
        <div className={styles.card}>
          <h2>AI Marine Surveyors, Inc. (AIMS)</h2>
          <p>
            Leading marine inspection, cargo survey, offshore consultancy & technical services
            for global shipping industries with trusted expertise.
          </p>

          <div className={styles.row}>
            <FaGlobe />
            <a href="https://www.aimsurveyors.com" target="_blank">
              www.aimsurveyors.com
            </a>
          </div>
        </div>

        {/* CARD 2 */}
        <div className={styles.card}>
          <h3>Office</h3>

          <div className={styles.row}>
            <FaMapMarkerAlt />
            <span>
              6065 Hillcroft St., Suite 411<br />
              Houston, Texas 77081<br />
              U.S.A.
            </span>
          </div>

          <div className={styles.row}>
            <FaPhoneAlt />
            <a href="tel:+12816366664">+1 (281) 636-6664</a>
          </div>

          <div className={styles.row}>
            <FaEnvelope />
            <a href="mailto:info@aimsurveyors.com">info@aimsurveyors.com</a>
          </div>
        </div>

        {/* CARD 3 */}
        <div className={styles.card}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/servicespage">Services</Link></li>
            <li><Link href="/location">Location</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CARD 4 */}
        <div className={styles.card}>
          <h3>Follow Us</h3>

          <div className={styles.social}>
            <a href="https://www.facebook.com/aimarine.surveyors" target="_blank">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} AI Marine Surveyors, Inc. All rights reserved.
      </div>

    </footer>
  );
}