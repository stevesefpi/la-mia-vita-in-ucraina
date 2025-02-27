"use client"; // Ensure it's a client component

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Async function inside an event handler is allowed
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Contattami</h1>
        <p className={styles.heroSubtitle}>
          Se le mie storie ti hanno incuriosito e vuoi saperne di più, o per qualsiasi altro motivo, puoi inviarmi un messaggio tramite il modulo qui sotto o scrivermi via email.
        </p>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Nome
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder="Il tuo nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              className={styles.input}
              placeholder="Il tuo indirizzo email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Messaggio
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Scrivi il tuo messaggio"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className={styles.submitButton}>Invia</button>
        </form>

        {status === "sending" && <p>Invio in corso...</p>}
        {status === "success" && <p style={{ color: "green" }}>Email inviata con successo!</p>}
        {status === "error" && <p style={{ color: "red" }}>Errore nell'invio, riprova più tardi.</p>}
      </div>

      <div className={styles.contactInfo}>
        <h2 className={styles.contactTitle}>Email di contatto</h2>
        <p className={styles.contactEmail}>lamiavitainucraina@gmail.com</p>
      </div>
    </div>
  );
}
