import React from 'react';
import styles from './components.module.css';

export default props => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureHeader}>
        {!!props.svgPath && (
          <img
            alt="Feature icon"
            className={styles.featureIcon}
            src={props.svgPath}
          />
        )}
        <div className={styles.featureTitles}>
          <div className={styles.featureTitle}>{props.title}</div>
          <div className={styles.featureSubtitle}>{props.subtitle}</div>
        </div>
      </div>
      <p className={styles.featureDescription}>{props.paragraph}</p>
    </div>
  );
};
