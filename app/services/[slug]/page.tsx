import styles from "./ServicesDetail.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesData: any = {
   "marine-survey": {
    title: "Marine Survey",
    img: "https://i0.wp.com/chiefengineerlog.com/wp-content/uploads/2022/09/enhanced-survey-programme.jpg",
    desc: "Marine Survey ensures vessel safety, compliance, and structural integrity checks performed by certified experts.",
    pdf: "/pdf/marine-survey.pdf",
  },

  "cargo-inspection": {
    title: "Cargo Inspection",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    desc: "We verify cargo quality, quantity, and condition for safe global shipping operations.",
    pdf: "/pdf/cargo-inspection.pdf",
  },

  "port-consultancy": {
    title: "Port Consultancy",
    img: "/images/services/port.png",
    desc: "Expert guidance for efficient port operations, logistics planning, and maritime infrastructure support.",
    pdf: "/pdf/port-consultancy.pdf",
  },

  "bunker-survey": {
    title: "Bunker Survey",
    img: "/images/services/bunker.jpeg",
    desc: "Fuel quantity and quality inspection for marine vessels ensuring compliance and accuracy.",
    pdf: "/pdf/bunker-survey.pdf",
  },

  "offshore-supply": {
    title: "Offshore Supply",
    img: "/images/services/offshore.webp",
    desc: "Reliable offshore logistics and supply chain solutions for oil rigs and marine projects.",
    pdf: "/pdf/offshore-supply.pdf",
  },

  "navigational": {
    title: "Navigational Assistance",
    img: "/images/services/navigational.webp",
    desc: "Expert navigational support ensuring safe and efficient maritime routes and vessel movement.",
    pdf: "/pdf/navigational-assistance.pdf",
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default function Page({ params }: any) {
  const service = servicesData[params.slug];

  if (!service) {
    return (
      <>
        <Navbar />
        <div className={styles.notFound}>
          <h2>404</h2>
          <p>Service Not Found</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.overlay}></div>

          <div className={styles.heroContent}>
            <h1>AI Marine Surveyors Inc Services</h1>
            <p>Trusted Marine & Cargo Solutions Worldwide</p>

            <div className={styles.breadcrumb}>
              Home / Services / {service.title}
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <main className={styles.container}>

          <div className={styles.card}>

            {/* IMAGE */}
            <div className={styles.imageSection}>
              <img src={service.img} alt={service.title} />
            </div>

            {/* CONTENT */}
            <div className={styles.contentSection}>

              <span className={styles.badge}>Premium Service</span>

              <h2>{service.title}</h2>

              <p>{service.desc}</p>

              <ul className={styles.features}>
                <li>✔ Certified Marine Experts</li>
                <li>✔ Global Compliance Standards</li>
                <li>✔ Fast & Accurate Reporting</li>
                <li>✔ 24/7 Operational Support</li>
              </ul>

              <div className={styles.actions}>
                <a href={service.pdf} download className={styles.primaryBtn}>
                  Download PDF
                </a>

                <a href="/contact" className={styles.secondaryBtn}>
                  Get Quote
                </a>
              </div>

            </div>

          </div>

          {/* EXTRA VALUE SECTION */}
          <section className={styles.extra}>
            <div className={styles.box}>
              <h3>Why Choose Us?</h3>
              <p>
                We deliver professional marine inspection services with
                international standards and trusted reporting systems.
              </p>
            </div>

            <div className={styles.box}>
              <h3>Our Commitment</h3>
              <p>
                Ensuring safety, transparency, and reliability in every
                inspection and cargo verification process.
              </p>
            </div>
          </section>

        </main>

      </div>

      <Footer />
    </>
  );
}