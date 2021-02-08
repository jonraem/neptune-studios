import React from 'react';
import useMedia from '../../hooks/useMedia';
import CenterTitle from '../CenterTitle/centerTitle';
import FullWidthGrey from '../FullWidth/grey';
import styles from './timeline.module.css';

const Timeline = props => {
  const isMobile = useMedia('(max-width: 480px)');
  return (
    <div className={styles.timeline}>
      <FullWidthGrey />
      <CenterTitle>{props.title}</CenterTitle>
      {props.timelineItems.map(item => {
        if (isMobile) {
          return (
            <div key={item.title} className={styles.item}>
              <div className={styles.point} />
              <div className={styles.line} />
              <div className={styles.wrapper}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.description}</div>
              </div>
            </div>
          );
        } else
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
