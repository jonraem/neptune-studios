import classnames from 'classnames';
import React from 'react';
import * as styles from './centerTitle.module.css';

const CenterTitle = props => {
  return (
    <div className={classnames(styles.centerTitle, props.className)}>
      <h3>{props.children}</h3>
      <div className={styles.divider} />
    </div>
  );
};

export default CenterTitle;
