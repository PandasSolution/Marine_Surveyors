"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactLocation() {
  // ✅ Updated WhatsApp number (without +)
  const whatsapp = "17132812146";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
🌊 Marine Contact Request

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
    `;

    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <span>CONTACT US</span>
        <h2>Let’s Build Something Great Together</h2>
        <p>
          We’re here to assist you in any way. Reach out to us and our team
          will respond within 24 hours.
        </p>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>
        {/* LEFT (UNCHANGED) */}
        <div className={styles.leftCard}>
          <div className={styles.bigCard}>
            <span className={styles.tag}>LET’S GET STARTED</span>

            <h3 className={styles.phone}>+1 (281) 636-6664</h3>

            <p className={styles.text}>
              Your thoughts are important to us, and we’re here to assist you in any way we can.
              You can fill out the contact form below, and we will get back to you as soon as possible.
            </p>

            <p className={styles.text}>
              We look forward to hearing from you and will respond promptly to your inquiries.
            </p>

            <p className={styles.note}>
              For immediate assistance please call or we will get back to you in 24 hours.
            </p>

            <div className={styles.badges}>
              <span>⚡ Fast Response</span>
              <span>🌍 Global Support</span>
              <span>🔒 Trusted Service</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formCard}>
          <h3>Send Message</h3>

          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input
                className={styles.input}
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
              />
              <input
                className={styles.input}
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>

            {/* ✅ Only phone (address removed) */}
            <div className={styles.row}>
              <input
                className={styles.input}
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>

            <textarea
              className={styles.textarea}
              name="message"
              placeholder="How can I help you?"
              rows={6}
              onChange={handleChange}
            />

            <button className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}