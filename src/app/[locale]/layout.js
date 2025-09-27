import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

import { Analytics } from "@vercel/analytics/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import styles from "./layout.module.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: {
        default: "My Life in Ukraine",
        template: "%s - My Life in Ukraine",
      },
      description:
        "Stories and tales to discover Ukraine, the country where I have lived for 5 years.",
      twitter: { card: "summary_large_image" },
    };
  }

  return {
    title: {
      default: "La Mia Vita in Ucraina",
      template: "%s - La Mia Vita in Ucraina",
    },
    description:
      "Racconti e storie per scoprire l'Ucraina, paese in cui vivo dal 2020.",
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Validate locale against supported list
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={styles.pageContainer}>
        <Navbar />
        <div className={styles.mainContent}>{children}</div>
        <Footer />
      </div>
      <Analytics />
    </NextIntlClientProvider>
  );
}
