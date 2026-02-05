"use client";

import { Link, usePathname } from "src/i18n/routing";
import styles from '../Navbar.module.css';

export default function DesktopMenu({ labels }) {
  const path = usePathname();

  return (
    <ul className={styles.menu}>
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
          className={path.startsWith("/contatti") ? styles.active : undefined}
        >
          {labels.contact}
        </Link>
      </li>
    </ul>
  );
}