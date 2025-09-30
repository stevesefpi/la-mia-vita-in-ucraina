"use client";

import Image from "next/image";
import { Link, usePathname } from "src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

import styles from "./Navbar.module.css";

import { Facebook, Instagram, Menu, X } from "lucide-react";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const path = usePathname();
  const [activePath, setActivePath] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Navbar");

  useEffect(() => {
    setActivePath(path);
  }, [path]);

  return (
    <nav className={styles.navbar}>
      {/* Logo on the left */}
      <div className={styles.logo}>
        <Link href="/" aria-label="Home">
          <Image src="/logo.png" alt="Logo" fill className={styles.logoImage}/>
        </Link>
      </div>

      {/* Mobile Menu Button for Small Screens */}
      <button
        className={styles.menuToggle}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Menu />
      </button>

      {isModalOpen && (
        <MobileMenu isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {/* Navigation Links Inside Modal */}
          <ul className={styles.mobileMenu}>
            <li>
              <Link
                href="/"
                className={activePath === "/" ? styles.active : undefined}
                onClick={() => setIsModalOpen(false)}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={
                  activePath.startsWith("/blog") ? styles.active : undefined
                }
                onClick={() => setIsModalOpen(false)}
              >
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  activePath.startsWith("/about") ? styles.active : undefined
                }
                onClick={() => setIsModalOpen(false)}
              >
                {t("info")}
              </Link>
            </li>
            <li>
              <Link
                href="/contatti"
                className={
                  activePath.startsWith("/contatti") ? styles.active : undefined
                }
                onClick={() => setIsModalOpen(false)}
              >
                {t("contact")}
              </Link>
            </li>
          </ul>

          {/* Social Icons Inside Modal */}
          <div className={styles.mobileSocial}>
            <LanguageSwitcher />
          </div>
        </MobileMenu>
      )}

      {/* Navigation Menu */}
      <ul className={styles.menu}>
        <li>
          <Link
            href="/"
            className={activePath === "/" ? styles.active : undefined}
          >
            {t("home")}
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={
              activePath.startsWith("/blog") ? styles.active : undefined
            }
          >
            {t("blog")}
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              activePath.startsWith("/about") || activePath.startsWith("/guide")
                ? styles.active
                : undefined
            }
          >
            {t("info")}
          </Link>
        </li>
        <li>
          <Link
            href="/contatti"
            className={
              activePath.startsWith("/contatti") ? styles.active : undefined
            }
          >
            {t("contact")}
          </Link>
        </li>
      </ul>
      {/* Social Media Links */}
      <div className={styles.languages}>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
