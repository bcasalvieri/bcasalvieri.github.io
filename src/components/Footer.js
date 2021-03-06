import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../css/footer.module.css';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      {links.map((link, index) => (
        <Link key={index} to={link.path}>
          {link.text}
        </Link>
      ))}
    </div>
    <div className={styles.icons}>
      {socialIcons.map((icon, index) => (
        <a
          key={index}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer">
          {icon.icon}
        </a>
      ))}
    </div>
    <div className={styles.copyright}>
      copyright &copy; brad casalvieri {new Date().getFullYear()}
    </div>
  </footer>
);

export default Footer;
