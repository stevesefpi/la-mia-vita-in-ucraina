"use client";

import { useEffect, useState } from "react";      
import { Link, usePathname } from "src/i18n/routing";
import { Menu } from "lucide-react";            

import styles from '../Navbar.module.css';
import MobileMenu from "../MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher";

export default function NavbarClient({ labels }) {
  const path = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(false);
  }, [path]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className={styles.menuToggle}
        onClick={() => setIsModalOpen(true)}
        aria-label="Open menu"
      >
        <Menu />
      </button>

      {isModalOpen && (
        <MobileMenu isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ul className={styles.mobileMenu}>
            <li>
              <Link
                href="/"
                className={path === "/" ? styles.active : undefined}
              >
                {labels.home}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={path.startsWith("/blog") ? styles.active : undefined}
              >
                {labels.blog}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  path.startsWith("/about") || path.startsWith("/guide")
                    ? styles.active
                    : undefined
                }
              >
                {labels.info}
              </Link>
            </li>
            <li>
              <Link
                href="/contatti"
                className={
                  path.startsWith("/contatti") ? styles.active : undefined
                }
              >
                {labels.contact}
              </Link>
            </li>
          </ul>

          <div className={styles.mobileSocial}>
            <LanguageSwitcher />
          </div>
        </MobileMenu>
      )}
    </>
  );
}
