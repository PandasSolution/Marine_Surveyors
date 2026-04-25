"use client";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      slug: "marine-survey",
      title: "Marine Survey",
      desc: "Comprehensive vessel inspection ensuring safety and compliance.",
      img: "https://i0.wp.com/chiefengineerlog.com/wp-content/uploads/2022/09/enhanced-survey-programme.jpg?fit=700%2C451&ssl=1",
    },
    {
      slug: "cargo-inspection",
      title: "Cargo Inspection",
      desc: "Accurate cargo quality and quantity verification services.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    },
    {
      slug: "port-consultancy",
      title: "Port Consultancy",
      desc: "Expert guidance for efficient port and logistics operations.",
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
    },
    {
      slug: "bunker-survey",
      title: "Bunker Survey",
      desc: "Fuel quantity and quality inspection for marine operations.",
      img: "https://images.unsplash.com/photo-1604908554167-82c9d1b6a2b3",
    },
    {
      slug: "damage-assessment",
      title: "Damage Assessment",
      desc: "Professional evaluation of vessel and cargo damages.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    },
    {
      slug: "risk-analysis",
      title: "Risk Analysis",
      desc: "Identifying and reducing maritime operational risks.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    },
  ];

  return (
    <>
      <section className="services">
        <div className="container">

          {/* Heading */}
          <h1 className="heading">Our Professional Marine Services</h1>
          <p className="sub">
            Trusted global maritime solutions with precision and safety.
          </p>

          {/* Grid */}
          <div className="grid">
            {services.map((s, i) => (
              <Link href={`/services/${s.slug}`} key={i} className="card">

                <div className="imgWrap">
                  <img src={s.img} />
                </div>

                <div className="content">
                  <h2>{s.title}</h2>
                  <p>{s.desc}</p>
                  <span>View Details →</span>
                </div>

              </Link>
            ))}
          </div>

        </div>
      </section>

      <style jsx>{`
        .services {
          padding: 120px 20px;
          background: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        /* Heading */
        .heading {
          font-size: 46px;
          text-align: center;
          color: #0a1f33;
          margin-bottom: 10px;
        }

        .sub {
          text-align: center;
          color: #666;
          font-size: 18px;
          margin-bottom: 60px;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        /* CARD (3D GLASS STYLE) */
        .card {
          text-decoration: none;
          color: inherit;

          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);

          border: 1px solid rgba(0, 170, 255, 0.15);
          border-radius: 18px;

          overflow: hidden;

          box-shadow: 0 10px 30px rgba(0,0,0,0.08);

          transition: 0.4s ease;
          transform: perspective(1000px);
        }

        .card:hover {
          transform: perspective(1000px) translateY(-12px) rotateX(5deg);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        /* IMAGE */
        .imgWrap {
          overflow: hidden;
        }

        .imgWrap img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: 0.4s;
        }

        .card:hover img {
          transform: scale(1.1);
        }

        /* CONTENT */
        .content {
          padding: 22px;
        }

        .content h2 {
          font-size: 20px;
          color: #0a1f33;
          margin-bottom: 10px;
        }

        .content p {
          font-size: 14.5px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .content span {
          color: #00aaff;
          font-weight: 500;
          font-size: 14px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .heading {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
}