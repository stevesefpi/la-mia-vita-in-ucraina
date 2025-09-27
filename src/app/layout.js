import styles from "./layout.module.css";

export const metadata = {
  title: {
    default: "La Mia Vita in Ucraina",
    template: "%s - La Mia Vita in Ucraina",
  },
  description:
    "Racconti e storie per scoprire l'Ucraina, paese in cui vivo dal 2020.",
  twitter: { card: "summary_large_image" },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="it" className={styles.mainWrapper}>
      <body className={styles.bodyWrapper} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
