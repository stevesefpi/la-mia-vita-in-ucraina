import { Analytics } from "@vercel/analytics/react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import styles from "./layout.module.css";

export const metadata = {
  title: {
    default: "La Mia Vita in Ucraina",
    template: "%s - La Mia Vita in Ucraina",
  },
  description:
    "Racconti e storie per scoprire l'Ucraina, paese in cui vivo dal 2020.",
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.mainWrapper}>
      <body className={styles.bodyWrapper} suppressHydrationWarning>
        <div className={styles.pageContainer}>
          <Navbar />
          <div className={styles.mainContent}>{children}</div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
