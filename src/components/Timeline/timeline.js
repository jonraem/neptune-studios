import React from 'react';
import CenterTitle from '../CenterTitle/centerTitle';
import styles from './timeline.module.css';

export default props => {
  return (
    <div className={styles.timeline}>
      <CenterTitle>{props.title}</CenterTitle>
      {props.timelineItems.map(item => {
        return (
          <div key={item.title} className={styles.item}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.point} />
            <div className={styles.line} />
            <div className={styles.description}>{item.description}</div>
          </div>
        );
      })}
    </div>
  );
};