import Image from "next/image";
import { Link } from "src/i18n/routing";
import { getTranslations } from "next-intl/server";

import styles from "./Navbar.module.css";
import NavbarClient from "./client_side/NavbarClient";
import LanguageSwitcher from "./LanguageSwitcher";
import DesktopMenu from "./client_side/DesktopMenu";

export default async function Navbar() {
  const t = await getTranslations("Navbar");

  const labels = {
    home: t("home"),
    blog: t("blog"),
    info: t("info"),
    contact: t("contact"),
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/" aria-label="Home">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={61}
            priority
            className={styles.logoImage}
          />
        </Link>
      </div>

      <NavbarClient labels={labels} />

      <DesktopMenu labels={labels} />

      <div className={styles.languages}>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

