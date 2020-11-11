import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import globalStyles from '../../global.module.css';
import styles from './imageAndText.module.css';

export default props => {
  return (
    <div
      className={styles.imageAndText}
      style={props.isReversed ? { flexDirection: 'row-reverse' } : {}}
    >
      {props.hasGreyBackground && (
        <div className={globalStyles.fullWidthGrey} />
      )}
      <div className={styles.textSide} style={props.textSideStyle}>
        <h2 className={styles.title}>{props.title}</h2>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: props.description,
          }}
        />
        {!!props.linkTo && (
          <Link className={globalStyles.button} to={props.linkTo}>
            {`Go to ${props.title}`}
          </Link>
        )}
      </div>
      <div className={styles.imageSide} style={props.imageSideStyle}>
        {!!props.imagePath && (
          <Img
            fluid={props.imagePath}
            style={{ maxHeight: props.maxHeight || 800 }}
            imgStyle={{
              maxHeight: props.maxHeight || 800,
              objectFit: 'contain',
            }}
          />
        )}
      </div>
    </div>
  );
};
