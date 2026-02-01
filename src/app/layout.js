import './globals.css';
import {getLocale} from "next-intl/server";
import { roboto, poppins } from './fonts';


export default async function RootLayout({children}) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${roboto.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}