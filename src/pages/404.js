import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import styles from '../css/error.module.css';
import Banner from '../components/Banner';

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to homepage
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
}
