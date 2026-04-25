"use client";

import styles from "./WhyChooseUs.module.css";
import { FaGlobe, FaUserTie, FaFileAlt, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <FaGlobe />,
      title: "Global Coverage",
      desc: "We operate across major international ports ensuring seamless marine support worldwide.",
    },
    {
      icon: <FaUserTie />,
      title: "Expert Inspectors",
      desc: "Highly experienced marine professionals with decades of field expertise.",
    },
    {
      icon: <FaFileAlt />,
      title: "Accurate Reporting",
      desc: "We deliver precise, transparent, and trusted inspection reports.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Round-the-clock assistance for urgent marine and cargo requirements.",
    },
  ];

  return (
    <section className={styles.why}>
      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.heading}>
          <span>WHY CHOOSE US</span>
          <h2>We Deliver Trust, Precision & Global Marine Excellence</h2>
          <p>
            Our commitment is to provide reliable marine inspection services
            with accuracy, safety, and professionalism.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div className={styles.card} key={i}>

              <div className={styles.iconBox}>
                <div className={styles.icon}>
                  {item.icon}
                </div>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}