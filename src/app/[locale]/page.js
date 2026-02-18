import { setRequestLocale } from "next-intl/server";
import HomeCached from "./pageCached";

export default async function HomePage({ params }) {
  const { locale } = await params; 
  setRequestLocale(locale);

  return <HomeCached locale={locale} />;
}
