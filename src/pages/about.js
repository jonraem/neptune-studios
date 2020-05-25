import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './pages.module.css';
import pyryHero from '../assets/png/pyry-hero.png';

export default props => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.aboutHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitle}>
          <div className={styles.subtitle}>About</div>
          <h1>Neptune's finest</h1>
        </div>
        <div className={styles.subtitle}>
          Neptune Studios is a one man’s vision and voyage in the seas of design
          and problem solving.
        </div>
      </div>
      <img
        className={styles.aboutHeroImage}
        src={pyryHero}
        alt="Illustration of a diver"
      />
    </div>
    <Footer />
  </div>
);
