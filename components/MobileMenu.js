import { X } from "lucide-react";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      {/* Side menu - stops propagation so it doesn't close when clicking inside */}
      <div
        className={`${styles.menuContainer} ${isOpen ? styles.menuOpen : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className={styles.closeButton} onClick={onClose}>
          <X size={35} />
        </button>

        {/* Menu Content Passed from Navbar.js */}
        {children}
      </div>
    </div>
  );
}
