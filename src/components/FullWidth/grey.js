import React from 'react';
import styles from './fullWidth.module.css';

/**
 * FullWidthGrey requires that the parent component is relatively positioned.
 */
const fullWidthGrey = () => {
  return <div className={styles.fullWidthGrey} />;
};

export default fullWidthGrey;
