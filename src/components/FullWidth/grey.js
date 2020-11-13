import React from 'react';
import styles from './fullWidth.module.css';

/**
 * FullWidthGrey requires that the parent component is relatively positioned.
 */
export default () => {
  return <div className={styles.fullWidthGrey} />;
};
