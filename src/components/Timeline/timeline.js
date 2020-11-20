import React from 'react';
import CenterTitle from '../CenterTitle/centerTitle';
import FullWidthGrey from '../FullWidth/grey';
import styles from './timeline.module.css';

const Timeline = props => {
  return (
    <div className={styles.timeline}>
      <FullWidthGrey />
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

export default Timeline;
