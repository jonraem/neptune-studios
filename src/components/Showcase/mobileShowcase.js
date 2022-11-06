import React from 'react';

import * as styles from './showcase.module.css';

const MobileShowcase = props => {
  if (props.children) {
    return (
      <div
        className={styles.showcase}
        style={{
          background: props.bgColor ? props.bgColor : '#fff',
          height: props.height,
          maxHeight: '180rem',
        }}
      >
        <h3>{props.currentShowcase.node.title}</h3>
        <div className={styles.content}>{props.children}</div>
      </div>
    );
  } else return null;
};

export default MobileShowcase;
