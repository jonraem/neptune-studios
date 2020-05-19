import React from 'react';
import Header from '../components/header';
import styles from './pages.module.css';

export default props => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.workHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitles}>
          <div className={styles.subtitle}>What has</div>
          <h1>happened lately</h1>
        </div>
        <div className={styles.subtitle}>(Or selected works).</div>
        <p>
          Eventhough digital product design has taken most of the time nowadays,
          this section also presents some examples from the graphic design and
          branding field, illustration and photography.
        </p>
      </div>
    </div>
  </div>
);
