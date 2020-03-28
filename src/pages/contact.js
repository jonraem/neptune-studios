import React from 'react';
import Header from '../components/header';
import styles from './pages.module.css';

export default (props) => 
  (
    <div className={styles.page}>
      <Header currentPath={props.location.pathname} />
      <div className={styles.contactHero}>
        <div className={styles.heroText}>
          <div className={styles.heroTitles}>
            <div className={styles.subtitle}>Contacting</div>
            <h1>Neptune Studios</h1>
          </div>
          <div className={styles.subtitle}>
            Dostoevsky was born in Moscow, as the second son of a former army
            doctor. He was educated at home and at a private school. Shortly
            after the death of his mother in 1837 he was sent to St. Petersburg,
            where he entered the Army Engineering College.
          </div>
        </div>
      </div>
    </div>
  );
