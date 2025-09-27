"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        <h1 className={styles.heroTitle}>{t('title')}</h1>
        <p className={styles.heroSubtitle}>{t('text')}</p>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label className={styles.label}>
            {t('name')}
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder={t('name_placeholder')}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            {t('email')}
            <input
              type="email"
              name="email"
              className={styles.input}
              placeholder={t('email_placeholder')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            {t('message')}
            <textarea
              name="message"
              className={styles.textarea}
              placeholder={t('message_placeholder')}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className={styles.submitButton}>{t('send_button')}</button>
        </form>

        {status === "sending" && <p>Invio in corso...</p>}
        {status === "success" && <p style={{ color: "green" }}>Email inviata con successo!</p>}
        {status === "error" && <p style={{ color: "red" }}>Errore nell'invio, riprova più tardi.</p>}
      </div>

      <div className={styles.contactInfo}>
        <h2 className={styles.contactTitle}>{t('contact_email')}</h2>
        <p className={styles.contactEmail}>lamiavitainucraina@gmail.com</p>
      </div>
    </div>
  );
}
