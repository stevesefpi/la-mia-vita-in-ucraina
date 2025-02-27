import styles from "./page.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: "url('/about-1.png')" }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroText}>
          <h1>Informazioni</h1>
          <p className={styles.heroParagraph}>
            Ciao! Mi chiamo Steven, sono un web developer e vivo in Ucraina dal
            2020. Attraverso questo sito, desidero condividere le mie esperienze
            personali e gli aneddoti di vita quotidiana in un paese che mi ha
            accolto e insegnato molto. Ogni storia è un piccolo frammento della
            realtà ucraina, raccontata attraverso i miei occhi.
          </p>
        </div>
      </div>

      <div className={styles.sectionBox}>
        <h2 className={styles.sectionTitle}>Obiettivi</h2>
        <p className={styles.sectionParagraph}>
          Il mio obiettivo principale è offrire uno sguardo autentico e
          personale sulla vita in Ucraina, raccontando storie che non sempre
          emergono nei media tradizionali. Voglio far conoscere la cultura, le
          sfide e la resilienza del popolo ucraino attraverso aneddoti
          quotidiani, esperienze personali e riflessioni.
        </p>
      </div>

      <div className={styles.blackSection}>
        <p>
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
          <h2>Scopri il mio blog</h2>
          <p className={styles.heroParagraph}>
            Immergiti nelle storie, esperienze e aneddoti dall'Ucraina. Inizia
            dalla prima pagina per capire meglio il mio percorso e lasciati
            ispirare dai racconti che ho raccolto.
          </p>
          <Link href="/blog" className={styles.linkButton}>
            Inizia qui
          </Link>
        </div>
      </div>

      <div className={styles.copyrightSection}>
        <div className={styles.copyrightBackground}>
          <h2 className={styles.copyrightTitle}>Avviso di Copyright</h2>
          <p className={styles.copyrightParagraph}>
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
