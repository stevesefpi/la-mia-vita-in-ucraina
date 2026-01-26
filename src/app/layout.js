import './globals.css';
import {getLocale} from "next-intl/server";

export default async function RootLayout({children}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}