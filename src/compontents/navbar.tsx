import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <Image 
        src="/image/asgard_logo.png"
        alt="Asgard Logo"
        width={100}
        height={100}
        />
        <li style={styles.navItem}>
          <Link href="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/event" style={styles.link}>Event</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/contact" style={styles.link}>Contact</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/legal" style={styles.link}>Legal</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1rem',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navItem: {},
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};

export default Navbar;

