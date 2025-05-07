"use client";

import styles from "./Explainer.module.css";

export default function Explainer() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Scopri l'Ucraina insieme a me</h1>
      <hr className={styles.divider} />
      <p className={styles.subtitle}>
        Esperienze, storie e riflessioni da un paese che ha cambiato la mia vita
      </p>
    </section>
  );
}
