"use client";

import styles from "./About.module.css";
import { FaAnchor, FaBullseye, FaGlobeAsia } from "react-icons/fa";

export default function AboutUs() {
  const cards = [
    {
      icon: <FaBullseye />,
      title: "Mission",
      desc: "To provide prompt, reliable and cost-effective marine surveying and consultancy services while maintaining the highest standards of accuracy and professionalism.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Vision",
      desc: "To be a globally recognized marine consultancy firm, delivering comprehensive support and expert advice across all aspects of marine operations.",
    },
    {
      icon: <FaAnchor />,
      title: "Expertise",
      desc: "Our network consists of highly experienced professionals, including ex-Ship Captains and Chief Engineers, capable of handling complex marine surveying challenges with confidence.",
    },
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>About Us</h2>
          <p>
            AI Marine Surveyors provides prompt, reliable and cost-effective
            surveying and consultancy services to the marine industry, backed by
            a strong network of experienced maritime professionals.
          </p>
          <div className={styles.line}></div>
        </div>

        <div className={styles.cards}>
          {cards.map((c, i) => (
            <div className={styles.card} key={i}>

              <div className={styles.iconWrap}>
                <div className={styles.icon}>
                  {c.icon}
                </div>
              </div>

              <h3>{c.title}</h3>
              <p>{c.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}