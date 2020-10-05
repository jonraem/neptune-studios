import React from 'react';
import Img from 'gatsby-image';
import styles from './components.module.css';
import globalStyles from '../global.module.css';

export default props => {
  return (
    <div
      className={styles.imageAndText}
      style={props.isReversed ? { flexDirection: 'row-reverse' } : undefined}
    >
      <div className={styles.textSide}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.description.description}</p>
        {!!props.linkTo && (
          <a className={globalStyles.button} href={props.linkTo}>
            {`Go to ${props.title}`}
          </a>
        )}
      </div>
      <div className={styles.imageSide}>
        {!!props.imagePath && (
          <Img
            fluid={props.imagePath}
            style={{ maxHeight: 800 }}
            imgStyle={{ maxHeight: 800, objectFit: 'contain' }}
          />
        )}
      </div>
    </div>
  );
};
