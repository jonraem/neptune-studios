import React from 'react';
import Img from 'gatsby-image';
import styles from './components.module.css';

export default props => {
  return (
    <div className={styles.imageAndText}>
      <div className={styles.textSide}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.link}>{props.url}</div>
      </div>
      <div className={styles.imageSide}>
        <Img fluid={props.imagePath} />
      </div>
    </div>
  );
};
