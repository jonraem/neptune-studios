import React from 'react';
import Header from '../components/header';
import styles from './pages.module.css';

export default props => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.aboutHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitles}>
          <div className={styles.subtitle}>About</div>
          <h1>Neptune's finest</h1>
        </div>
        <div className={styles.subtitle}>
          Neptune Studios is a one man’s vision and voyage in the seas of design
          and problem solving.
        </div>
      </div>
    </div>
  </div>
);
