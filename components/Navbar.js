"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";

import { Facebook, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const path = usePathname();
  const [activePath, setActivePath] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setActivePath(path);
  }, [path]);

  return (
    <nav className={styles.navbar}>
      {/* Logo on the left */}
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={90} height={90} />
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
                Home
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
                Blog
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
                Info
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
                Contatti
              </Link>
            </li>
          </ul>

          {/* Social Icons Inside Modal */}
          <div className={styles.mobileSocial}>
            <a
              href="https://www.facebook.com/profile.php?id=61566181132367"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={36} stroke="#333" />
            </a>
            <a
              href="https://instagram.com/lamiavitainucraina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={36} stroke="#333" />
            </a>
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
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={
              activePath.startsWith("/blog") ? styles.active : undefined
            }
          >
            Blog
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
            Info
          </Link>
        </li>
        <li>
          <Link
            href="/contatti"
            className={
              activePath.startsWith("/contatti") ? styles.active : undefined
            }
          >
            Contatti
          </Link>
        </li>
      </ul>
      {/* Social Media Links */}
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/profile.php?id=61566181132367"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook stroke="#333" />
        </a>
        <a
          href="https://instagram.com/lamiavitainucraina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram stroke="#333" />
        </a>
      </div>
    </nav>
  );
}
