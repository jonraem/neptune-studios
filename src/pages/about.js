import React from 'react';
import Header from '../components/header';
import CenterTitle from '../components/centerTitle';
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
    <div className={styles.content}>
      <CenterTitle>Detailed information</CenterTitle>
      <div className={styles.aboutDetails}>
        <p className={styles.aboutDetailsPara}>
          Curriculum vitae can be downloaded{' '}
          <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">HERE</a>.
        </p>
        <div className={styles.divider} />
        <div className={styles.aboutDetailsItems}>
          <div className={styles.aboutDetailsItem}>User interface design</div>
          <div className={styles.aboutDetailsItem}>User experience design</div>
          <div className={styles.aboutDetailsItem}>Workshops</div>
          <div className={styles.aboutDetailsItem}>User testing</div>
          <div className={styles.aboutDetailsItem}>Prototypes</div>
          <div className={styles.aboutDetailsItem}>Visual design</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
