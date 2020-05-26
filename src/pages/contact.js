import React from 'react';
import Header from '../components/header';
import CenterTitle from '../components/centerTitle';
import Footer from '../components/footer';
import contactHero from '../assets/png/contact-hero.png';
import styles from './pages.module.css';

export default props => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.contactHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitle}>
          <div className={styles.subtitle}>Contacting</div>
          <h1>Neptune Studios</h1>
        </div>
        <div className={styles.subtitle}>
          Hesitating to contact Neptune Studios? Do not, we’re here to help!
        </div>
        <div className={styles.subtitle}>
          Whether it’s consultancy, design related questions or work inquiries,
          Neptune Studios will gladly help you.
        </div>
      </div>
      <img
        className={styles.contactHeroImage}
        src={contactHero}
        alt="Contact Neptune Studios"
      />
    </div>
    <div className={styles.content}>
      <CenterTitle>
        How to reach
        <br />
        Neptune Studios?
      </CenterTitle>
    </div>
    <Footer />
  </div>
);
