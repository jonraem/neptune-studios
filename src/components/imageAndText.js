import React from 'react';
import Img from 'gatsby-image';
import styles from './components.module.css';
import globalStyles from '../global.module.css';

export default props => {
  return (
    <div className={styles.imageAndText}>
      <div className={styles.textSide}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>
          {props.description.description}
        </div>
        {!!props.linkTo && (
          <a className={globalStyles.button} href={props.linkTo}>
            {`Go to ${props.title}`}
          </a>
        )}
      </div>
      <div className={styles.imageSide}>
        {!!props.imagePath && <Img fluid={props.imagePath} />}
      </div>
    </div>
  );
};
