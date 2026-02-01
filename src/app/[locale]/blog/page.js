import { setRequestLocale } from "next-intl/server";
import { greatVibes } from "../../fonts";

import styles from "./page.module.css";
import BlogGrid from "./BlogGrid";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Blog",
      description:
        "Discover all the blog posts: personal experiences, daily stories, and reflections on life in Ukraine.",
    };
  }

  return {
    title: "Blog",
    description:
      "Scopri tutti gli articoli del blog: esperienze personali, storie quotidiane e riflessioni sulla vita in Ucraina.",
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className={styles.container}>
      <h1 className={`${styles.heading} ${greatVibes.variable}`}>Blog</h1>
      <BlogGrid locale={locale} />
    </div>
  );
}
