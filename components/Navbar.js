import Image from "next/image";
import { Link } from "src/i18n/routing";
import { getTranslations } from "next-intl/server";

import styles from "./Navbar.module.css";
import NavbarMobile from "./client_side/NavbarMobile";
import LanguageSwitcher from "./LanguageSwitcher";
import NavbarDesktop from "./client_side/NavbarDesktop";

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

      <NavbarMobile labels={labels} />

      <NavbarDesktop labels={labels} />

      <div className={styles.languages}>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

