import React from 'react';
import styles from './components.module.css';

export default props => {
  return (
    <div className={styles.highlight}>
      <div className={styles.highlightHeader}>
        <div className={styles.highlightIcon}>{props.icon}</div>
        <div className={styles.highlightTitles}>
          <div className={styles.highlightTitle}>{props.title}</div>
          <div className={styles.highlightSubtitle}>{props.subtitle}</div>
        </div>
      </div>
      <p className={styles.highlightPara}>{props.paragraph}</p>
    </div>
  );
};
