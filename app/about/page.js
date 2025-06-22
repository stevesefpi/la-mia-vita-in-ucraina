"use client";

import styles from "./page.module.css";
import Link from "next/link";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: "url('/about-1.png')" }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.heroText}>
              <h1 data-aos="zoom-in">Informazioni</h1>
              <p data-aos="zoom-in" className={styles.heroParagraph}>
                Ciao! Mi chiamo Steven, sono un web developer e vivo in Ucraina
                dal 2020. Attraverso questo blog, desidero condividere le mie
                esperienze personali e gli aneddoti di vita quotidiana in un
                paese che mi ha accolto e insegnato molto. Ogni storia è un
                piccolo frammento della realtà ucraina, raccontata attraverso i
                miei occhi.
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.heroText}>
              <h1 data-aos="zoom-in">Guide Pratiche</h1>
              <p data-aos="zoom-in" className={styles.heroParagraph}>
                Scopri come viaggiare in Ucraina durante il conflitto: consigli
                utili, itinerari, documentazione e sicurezza. Le guide sono
                basate su esperienze personali dirette.
              </p>
              <Link
                href="/guide"
                className={styles.linkButton}
                data-aos="zoom-in"
              >
                Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionBox}>
        <h2 data-aos="zoom-in" className={styles.sectionTitle}>
          Obiettivi
        </h2>
        <p data-aos="zoom-in" className={styles.sectionParagraph}>
          Il mio obiettivo principale è offrire uno sguardo autentico e
          personale sulla vita in Ucraina, raccontando storie che non sempre
          emergono nei media tradizionali. Voglio far conoscere la cultura, le
          sfide e la resilienza del popolo ucraino attraverso aneddoti
          quotidiani, esperienze personali e riflessioni.
        </p>
      </div>

      <div className={styles.blackSection}>
        <p data-aos="zoom-in">
          Questo spazio è dedicato a chi è curioso di scoprire un lato diverso
          dell'Ucraina, lontano dagli stereotipi, ma ricco di umanità e
          sorprese.
        </p>
      </div>

      <div
        className={styles.sectionOverlay}
        style={{ backgroundImage: "url('/about-2.png')" }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroText}>
          <h2 data-aos="zoom-in">Scopri il mio blog</h2>
          <p data-aos="zoom-in" className={styles.heroParagraph}>
            Immergiti nelle storie, esperienze e aneddoti dall'Ucraina. Inizia
            dalla prima pagina per capire meglio il mio percorso e lasciati
            ispirare dai racconti che ho raccolto.
          </p>
          <Link href="/blog" className={styles.linkButton} data-aos="zoom-in">
            Inizia qui
          </Link>
        </div>
      </div>

      <div className={styles.copyrightSection}>
        <div className={styles.copyrightBackground}>
          <h2 data-aos="zoom-in" className={styles.copyrightTitle}>
            Avviso di Copyright
          </h2>
          <p data-aos="zoom-in" className={styles.copyrightParagraph}>
            Tutte le immagini presenti su questo sito sono di proprietà
            esclusiva dell’autore e sono protette dalle leggi sul diritto
            d’autore. È vietato l’uso, la riproduzione o la distribuzione delle
            immagini senza il permesso esplicito dell’autore. Tuttavia, è
            possibile utilizzare le immagini a condizione che venga fornito il
            credito appropriato, includendo il nome dell’autore (La Mia Vita in
            Ucraina) e un link al sito web (lamiavitainucraina.com).
          </p>
        </div>
      </div>
    </div>
  );
}
