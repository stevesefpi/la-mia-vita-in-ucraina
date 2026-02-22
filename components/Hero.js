'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../src/app/[locale]/page.module.css';

export default function Hero({ title, subtitle }) {
  const [heroHeight, setHeroHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        setHeroHeight(`calc(100vh - ${navbarHeight}px)`);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <section className={styles.hero} style={{ height: heroHeight }}>
      <Image
        src="/carpazi.jpg"
        alt="Carpathian Mountains in Ukraine"
        fill
        priority
        fetchPriority='high'
        sizes="100vw"
        className={styles.heroImage}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}