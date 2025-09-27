import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Guide",
  description: "Tutte le guide utili per chi viaggia in Ucraina",
};

export default function GuidePage() {
  return (
    <>
      <h1 className={styles.heading}>Guide</h1>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Link href="/guide/viaggio-ucraina" className={styles.card}>
            <div
              className={styles.imageOverlay}
              style={{ backgroundImage: "url('/images/przemysl.jpg')" }}
            >
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Come raggiungere l'Ucraina</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
