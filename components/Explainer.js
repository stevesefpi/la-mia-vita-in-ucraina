'use client';

import Image from "next/image";
import styles from "./Explainer.module.css";
import { useState } from "react";

const images = [
  {
    src: "/homepage1.png",
    alt: "Stazione dei treni a Przemyśl in Polonia",
  },
  {
    src: "/homepage2.png",
    alt: "Treno per Kyiv fermo a Przemyśl in Polonia",
  },
];

export default function Explainer() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.flexContainer}>
      <div className={styles.textColumn}>
        <h1 className={styles.header}>
          Scopri insieme a me il mondo e la cultura ucraini
        </h1>
        <p className={styles.text}>
          Dall'Ucraina pre-invasione alle incertezze di Febbraio 2022, potrete
          scoprire insieme a me le sfide e le paure di un paese che si è trovato
          improvvisamente al centro di una crisi, ma anche la forza e la resilienza
          che hanno caratterizzato ogni giorno da allora.
        </p>
        <p className={styles.text}>
          A fianco le immagini della stazione dei treni al confine tra Polonia e
          Ucraina (prima immagine) e la cabina del treno intercity che porta da
          Przemyśl a Kyiv. Vi sono anche cabine aperte con letti a castello, fino a
          tre per lato.
        </p>
      </div>

      <div className={styles.carouselColumn}>
        <div className={styles.carousel}>
          <button onClick={prevImage} className={styles.navButton}>‹</button>
          <Image
            src={images[current].src}
            alt={images[current].alt}
            width={500}
            height={300}
            className={styles.image}
          />
          <button onClick={nextImage} className={styles.navButton}>›</button>
        </div>
      </div>
    </div>
  );
}
