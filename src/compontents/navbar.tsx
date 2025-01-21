import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/" style={styles.link}>Home</Link>
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

