import Image from 'next/image';
import styles from '../src/app/[locale]/page.module.css';

export default function Hero({ title, subtitle }) {
  return (
    <section className={styles.hero}>
      <Image
        src="/carpazi.webp"
        alt="Carpathian Mountains in Ukraine"
        fill
        priority
        fetchPriority='high'
        className={styles.heroImage}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
