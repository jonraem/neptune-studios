import classnames from 'classnames';
import React from 'react';
import styles from './centerTitle.module.css';

const centerTitle = props => {
  return (
    <div className={classnames(styles.centerTitle, props.className)}>
      <h3>{props.children}</h3>
      <div className={styles.divider} />
    </div>
  );
};

export default centerTitle;
