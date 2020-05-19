import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './pages.module.css';

export default props => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.mainHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitles}>
          <div className={styles.subtitle}>Welcome to the</div>
          <h1>Neptune Studios</h1>
        </div>
        <div className={styles.subtitle}>
          Design. Usability. User experience…
        </div>
        <p>
          The driving forces behind Neptune Studios. No setting sails for rough
          seas or taking dives to the deep-end without proper preparation.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
