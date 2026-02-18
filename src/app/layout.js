import "./globals.css";
import { roboto, poppins } from "./fonts";
import Script from "next/script";

export const metadata = {
  other: {
    'link': [
      {
        rel: 'preload',
        as: 'image',
        href: '/carpazi.jpg',
        fetchpriority: 'high',
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9233836605518119"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
