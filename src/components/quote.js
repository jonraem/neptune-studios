import React from 'react';
import styles from './components.module.css';

const QuotationMarks = () => (
  <div className={styles.quotationMarks}>
    <div className={styles.quotationMark}>
      <div className={styles.apostrophe} />
      <div className={styles.apostrophe} />
    </div>
    <div className={styles.quotationMark}>
      <div className={styles.apostrophe} />
      <div className={styles.apostrophe} />
    </div>
  </div>
);

export default props => {
  return (
    <div className={styles.quote}>
      <QuotationMarks />
      <h3 className={styles.quoteText}>{props.quote}</h3>
    </div>
  );
};
