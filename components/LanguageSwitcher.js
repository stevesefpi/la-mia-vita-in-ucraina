"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "src/i18n/routing";
import { routing } from "src/i18n/routing";
import styles from "./LanguageSwitcher.module.css";
import "flag-icons/css/flag-icons.min.css";

const FLAG_CLASS = {
  it: "fi fi-it",
  en: "fi fi-us",
};

export default function LanguageSwitcher({ className }) {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const otherLocales = routing.locales.filter((l) => l !== locale);
  const label = String(locale).toUpperCase();

  useEffect(() => {
    function onClick(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={`${styles.wrapper} ${className || ""}`} ref={ref}>
      <button
        className={`${styles.trigger} ${open ? styles.open : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.code}>{label}</span>
        <span className={FLAG_CLASS[locale]} />
        <ChevronDown className={styles.caret} size={16} aria-hidden />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox">
          {otherLocales.map((l) => (
            <li key={l} role="option">
              <Link
                href={pathname}
                locale={l}
                prefetch={false}
                className={styles.item}
                onClick={() => setOpen(false)}
              >
                {l.toUpperCase()}
                <span
                  className={`${FLAG_CLASS[l]} ${styles.flag}`}
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
