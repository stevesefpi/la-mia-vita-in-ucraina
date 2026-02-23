import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { setRequestLocale } from "next-intl/server";

import { Analytics } from "@vercel/analytics/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import styles from "./layout.module.css";

import { roboto, poppins } from "./fonts";
import Script from "next/script";

import "./globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const shared = {
    twitter: { card: "summary_large_image" },
    other: {
      link: [
        {
          rel: "preload",
          as: "image",
          href: "/carpazi.jpg",
          fetchpriority: "high",
        },
      ],
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: {
        default: "My Life in Ukraine",
        template: "%s - My Life in Ukraine",
      },
      description:
        "Stories and tales to discover Ukraine, the country where I have lived for 5 years.",
    };
  }

  return {
    ...shared,
    title: {
      default: "La Mia Vita in Ucraina",
      template: "%s - La Mia Vita in Ucraina",
    },
    description:
      "Racconti e storie per scoprire l'Ucraina, paese in cui vivo dal 2020.",
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Validate locale against supported list
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`messages/${locale}.json`)).default;

  return (

    <html lang={locale} className={`${roboto.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <div className={styles.pageContainer}>
            <div className={styles.mainContent}>{children}</div>
            <Footer />
          </div>
          <Analytics />
        </NextIntlClientProvider>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9233836605518119"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
