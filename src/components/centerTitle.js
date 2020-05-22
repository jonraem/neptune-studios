import React from 'react';
import styles from './components.module.css';

export default props => {
  return (
    <div className={styles.centerTitle}>
      <h3>{props.children}</h3>
      <div className={styles.centerTitleDivider} />
    </div>
  );
};
