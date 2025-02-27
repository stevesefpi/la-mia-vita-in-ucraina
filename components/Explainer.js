import Image from "next/image";
import styles from "./Explainer.module.css";

export default function Explainer() {
  return (
    <div className={styles.flexContainer}>
      <div className={`${styles.column} ${styles.imageColumn}`}>
        <Image
          src="/homepage1.png"
          alt="Stazione dei treni a Przemyśl in Polonia"
          width={500}
          height={300}
        />
      </div>
      <div className={styles.column}>
        <h1>Scopri insieme a me il mondo e la cultura ucraini</h1>
        <p>
          Dall'Ucraina pre-invasione alle incertezze di Febbraio 2022, potrete
          scoprire insieme a me le sfide e le paure di un paese che si è trovato
          improvvisamente al centro di una crisi, ma anche la forza e la
          resilienza che hanno caratterizzato ogni giorno da allora.
        </p>
        <p className={`${styles.imageColumn}`}>
          A fianco le immagini della stazione dei treni al confine tra Polonia e
          Ucraina (prima immagine a sinistra) e la cabina del treno intercity
          che porta da Przemyśl a Kyiv. Vi sono anche cabine aperte con letti a
          castello, fino a tre per lato.
        </p>
      </div>
      <div className={`${styles.column} ${styles.imageColumn}`}>
      <Image
          src="/homepage2.png"
          alt="Treno per Kyiv fermo a Przemyśl in Polonia"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
