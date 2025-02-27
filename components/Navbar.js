"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.css";

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
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
      </div>

      {/* Mobile Menu Button for Small Screens */}
      <button
        className={styles.menuToggle}
        onClick={() => {
          setIsModalOpen(true);
        }}
        // style={{ display: isModalOpen ? "none" : "block" }}
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
                About
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
          {/* Social Icons Inside Modal */}
          <div className={styles.mobileSocial}>
            <Facebook size={36} />
            <Instagram size={36} />
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
              activePath.startsWith("/about") ? styles.active : undefined
            }
          >
            About
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
        <Facebook />
        <Instagram />
      </div>
    </nav>
  );
}
