import Navbar from "@/components/Navbar";
import styles from "./layout.module.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "La Mia Vita in Ucraina",
  description:
    "Racconti e storie per scoprire l'Ucraina, paese in cui vivo dal 2020.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.mainWrapper}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={styles.bodyWrapper} suppressHydrationWarning>
        <div className={styles.pageContainer}>
          <Navbar />
          <div className={styles.mainContent}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
