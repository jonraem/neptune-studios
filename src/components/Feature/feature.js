import React from 'react';

import * as styles from './feature.module.css';

const Feature = props => {
  return (
    <div className={styles.feature}>
      <div className={styles.header}>
        {!!props.svgPath && (
          <img alt="Feature icon" className={styles.icon} src={props.svgPath} />
        )}
        <div className={styles.titles}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.subtitle}>{props.subtitle}</div>
        </div>
      </div>
      <p className={styles.description}>{props.paragraph}</p>
    </div>
  );
};

export default Feature;
