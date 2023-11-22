import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`flex ${styles.navbar_container}`}>
        <Link href="/" className={styles.navbar_logo}>
          Merch Store
        </Link>
        <ul className={`flex ${styles.navbar_menu}`}>
          <li className={styles.nav_item}>
            <Link href="/" className={styles.nav_links}>
              Home
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/about" className={styles.nav_links}>
              About
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/services" className={styles.nav_links}>
              Products
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/contact" className={styles.nav_links}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
