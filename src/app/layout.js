import styles from "./layout.module.css";

export default async function RootLayout({ children }) {
  return (
    <html lang="it" className={styles.mainWrapper}>
      <body className={styles.bodyWrapper} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
