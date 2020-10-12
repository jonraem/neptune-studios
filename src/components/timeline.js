import React from 'react';
import styles from './components.module.css';
import CenterTitle from '../components/centerTitle';

export default props => {
  return (
    <div className={styles.timeline}>
      <CenterTitle>{props.title}</CenterTitle>
      {props.timelineItems.map(item => {
        return (
          <div className={styles.timelineItem}>
            <div className={styles.timelineTitle}>{item.title}</div>
            <div className={styles.timelinePoint} />
            <div className={styles.timelineLine} />
            <div className={styles.timelineDescription}>{item.description}</div>
          </div>
        );
      })}
    </div>
  );
};
