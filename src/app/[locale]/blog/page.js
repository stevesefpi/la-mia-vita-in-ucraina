import { setRequestLocale } from "next-intl/server";

import styles from "./page.module.css";
import BlogGrid from "./BlogGrid";
import FullHeightSection from "components/FullHeightSection";

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

export default async function BlogPage({ params, searchParams }) {
  const { locale } = await params;
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  setRequestLocale(locale);

  return (
    <FullHeightSection className={styles.container}>
      <h1 className={styles.heading}>Blog</h1>
      <BlogGrid locale={locale} page={currentPage} />
    </FullHeightSection>
  );
}
