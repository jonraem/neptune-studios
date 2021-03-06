import { times } from 'lodash';
import React from 'react';
import { v4 as uuid } from 'uuid';
import styles from './showcase.module.css';

const MobileShowcase = props => {
  if (props.children) {
    return (
      <div
        className={styles.showCase}
        style={{
          background: props.bgColor ? props.bgColor : '#fff',
          height: props.height,
          maxHeight: '180rem',
        }}
      >
        <h3>{props.currentShowcase.node.title}</h3>
        <div className={styles.breadcrumbs}>
          {times(props.showcaseImagesLength, index => (
            <div
              key={uuid()}
              className={
                index === props.showcaseIndex
                  ? styles.activeBreadcrumb
                  : styles.breadcrumb
              }
              onClick={() => props.handleChangeShowcaseIndex(index)}
            />
          ))}
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
    );
  } else return null;
};

export default MobileShowcase;
