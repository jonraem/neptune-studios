import React from 'react';
import classnames from 'classnames';
import styles from './components.module.css';

export default props => {
  return (
    <div className={classnames(styles.centerTitle, props.className)}>
      <h3>{props.children}</h3>
      <div className={styles.centerTitleDivider} />
    </div>
  );
};
