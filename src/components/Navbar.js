import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMap, FaCog } from 'react-icons/fa';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>CTS</h1>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            <FaHome style={styles.icon} /> Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/map" style={styles.navLink}>
            <FaMap style={styles.icon} /> Map
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/settings" style={styles.navLink}>
            <FaCog style={styles.icon} /> Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    position: 'absolute',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px',
  },
};

export default Navbar;
