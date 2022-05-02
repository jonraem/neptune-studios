import classnames from 'classnames';
import React from 'react';
import * as styles from './showcase.module.css';

const DescriptionBox = props => {
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

export default DescriptionBox;
