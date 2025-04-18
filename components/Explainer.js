"use client";

import styles from "./Explainer.module.css";
import ImageCarousel from "./ImageCarousel";

const images = [
  {
    image_url: "/homepage1.png",
    alt: "Stazione dei treni a Przemyśl in Polonia",
  },
  {
    image_url: "/homepage2.png",
    alt: "Treno per Kyiv fermo a Przemyśl in Polonia",
  },
];

export default function Explainer() {

  return (
    <div className={styles.flexContainer}>
      <div data-aos="fade-right" className={styles.textColumn}>
        <h1 className={styles.header}>
          Scopri insieme a me il mondo e la cultura ucraini
        </h1>
        <p className={styles.text}>
          Dall'Ucraina pre-invasione alle incertezze di Febbraio 2022, potrete
          scoprire insieme a me le sfide e le paure di un paese che si è trovato
          improvvisamente al centro di una crisi, ma anche la forza e la
          resilienza che hanno caratterizzato ogni giorno da allora.
        </p>
        <p className={styles.text}>
          Di seguito, le immagini della stazione dei treni al confine tra
          Polonia e Ucraina (prima immagine) e la cabina del treno intercity che
          porta da Przemyśl a Kyiv. Vi sono anche cabine aperte con letti a
          castello, fino a tre per lato.
        </p>
      </div>

      <div data-aos="fade-left" className={styles.carouselColumn}>
        <ImageCarousel images={images} />
      </div>
    </div>
  );
}
