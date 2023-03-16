import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  title: string;
}

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarlist}>
        <li>
          <Link className={styles.navbaritem} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navbaritem} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.navbaritem} href="/faq">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;