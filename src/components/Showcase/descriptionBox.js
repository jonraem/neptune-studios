import classnames from 'classnames';
import React from 'react';
import styles from './showcase.module.css';

export default props => {
  return (
    <div
      className={classnames(styles.descriptionBox, props.className)}
      style={props.style}
      ref={props.boxRef}
    >
      <div className={styles.dottedLine} ref={props.lineRef} />
      {props.children}
    </div>
  );
};
