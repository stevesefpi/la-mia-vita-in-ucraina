'use client';

import Explainer from "@/components/Explainer";
import styles from "./page.module.css";

import { useEffect } from "react";

import AOS from 'aos';
import "aos/dist/aos.css";

export default function HomePage() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true});
    AOS.refresh();
  }, []);

  return (
    <>
      <div className={styles.first}>
        <h1 className={styles.header}>Benvenuti nel mio blog</h1>
        <div className={styles.paragraphContainer}>
          <p data-aos="zoom-in" className={styles.text}>
            Benvenuti nel mio spazio dedicato a raccontare storie autentiche e
            personali sull’Ucraina. Vivo qui dal 2020 e attraverso questo blog
            voglio condividere le mie esperienze, le sfide e le meraviglie di un
            paese che ha cambiato profondamente la mia vita.
          </p>

          <p data-aos="zoom-in" className={styles.text}>
            Ogni racconto è un tassello che tiene vivi i ricordi di momenti
            importanti, dalle giornate quotidiane alla cucina locale, fino agli
            eventi storici che hanno segnato la nazione. Unisciti a me in questo
            viaggio di scoperta e memoria.
          </p>

          <p data-aos="zoom-in" className={styles.text}>
            Attraverso le storie che condividerò, spero di far emergere
            l’essenza di questo paese: la sua resilienza, la gentilezza delle
            persone e la bellezza della vita quotidiana. Ogni luogo ha una
            storia unica da raccontare, e l’Ucraina ne è ricca.
          </p>
          <p data-aos="zoom-in" className={styles.text}>
            Qui, tra tradizioni radicate e paesaggi affascinanti, la vita
            continua anche di fronte alle sfide. Il mio obiettivo è condividere
            questi momenti, grandi e piccoli, che rendono speciale la vita in
            questa terra.
          </p>
        </div>
        <button data-aos="zoom-in" className={styles.button_one}>Visita il mio blog</button>
      </div>

      <div data-aos="fade-right" className={styles.flexContainer}>
        <div className={styles.column}>
          <h2 data-aos="zoom-in" className={styles.infoBoxTitle}>Supporta l'Ucraina</h2>
          <p data-aos="zoom-in" className={styles.text}>
            Per supportare l’Ucraina potete donare direttamente a{" "}
            <strong>United24</strong>, piattaforma ufficiale di raccolta fondi
            creata dal governo ucraino nel maggio 2022, su iniziativa del
            presidente ucraino Volodymyr Zelensky
          </p>
          <button data-aos="zoom-in" className={styles.button_one}>Dona ora</button>
        </div>
        <div data-aos="fade-left" className={styles.column}>
          <h2 data-aos="zoom-in" className={styles.infoBoxTitle}>
            Come United24 utilizza i fondi
          </h2>
          <p data-aos="zoom-in" className={styles.text}>
            Le donazioni raccolte tramite la piattaforma sono destinate a cinque
            settori, che potrete scegliere dal sito: difesa, sminamento
            umanitario, assistenza medica, ricostruzione dell'Ucraina, scienza
            ed educazione.
          </p>
        </div>
      </div>
      <Explainer />
    </>
  );
}
