import "./globals.css";
import { roboto, poppins } from "./fonts";

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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
