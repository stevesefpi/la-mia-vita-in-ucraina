import './globals.css';
import { roboto, poppins } from './fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
