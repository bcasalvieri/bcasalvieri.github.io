import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';
import styles from '../css/navbar.module.css';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to='/'>
            <h1>
              <span>Brad</span>
              <span className={styles.navHeaderSubtitle}>Casalvieri</span>
            </h1>
          </Link>
          <button type='button' className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
          <li>
            <a
              href='https://drive.google.com/file/d/1zs9-iJJUiIqdaCH9s0Dc-p8kayVQKAqu/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'>
              resume
            </a>
          </li>
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              target='_blank'
              rel='noopener noreferrer'>
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
