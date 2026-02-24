"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");
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
      } else if (response.status === 429) {
        setStatus("ratelimited");
      } else {
        setStatus(result.message || "error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>{t("banner_title")}</h1>
          <p className={styles.bannerSubtitle}>{t("banner_subtitle")}</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.infoCard}>
            <h2 className={styles.infoCardTitle}>{t("contact_info_title")}</h2>

            <div className={styles.infoItem}>
              <div className={styles.iconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </div>
              <div>
                <h3 className={styles.infoLabel}>{t("email_label")}</h3>
                <a href="mailto:lamiavitainucraina@gmail.com" className={styles.infoLink}>
                  lamiavitainucraina@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className={styles.infoLabel}>{t("location_label")}</h3>
                <p className={styles.infoValue}>{t("location_value")}</p>
              </div>
            </div>

            <div className={styles.responseBox}>
              <h3 className={styles.responseTitle}>{t("response_title")}</h3>
              <p className={styles.responseText}>{t("response_text")}</p>
            </div>
          </div>

          <div className={styles.formCard}>
            <h2 className={styles.formCardTitle}>{t("form_title")}</h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <label className={styles.label}>
                  {t("name")} *
                  <input
                    type="text"
                    name="name"
                    className={styles.input}
                    placeholder={t("name_placeholder")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className={styles.label}>
                  {t("email")} *
                  <input
                    type="email"
                    name="email"
                    className={styles.input}
                    placeholder={t("email_placeholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label className={styles.label}>
                {t("message")} *
                <textarea
                  name="message"
                  className={styles.textarea}
                  placeholder={t("message_placeholder")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Invio..." : t("send_button")}
              </button>
            </form>

            {status === "sending" && <p>Invio in corso...</p>}
            {status === "success" && (
              <p style={{ color: "green" }}>Email inviata con successo!</p>
            )}
            {status === "ratelimited" && (
              <p style={{ color: "orange" }}>
                You sent too many messages. Try again in a few hours.
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "red" }}>Errore nell&apos;invio, riprova più tardi.</p>
            )}
            {status &&
              status !== "sending" &&
              status !== "success" &&
              status !== "ratelimited" &&
              status !== "error" && <p style={{ color: "red" }}>{status}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
