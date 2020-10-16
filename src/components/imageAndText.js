import classnames from 'classnames';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import globalStyles from '../global.module.css';
import styles from './components.module.css';

export default props => {
  return (
    <div
      className={classnames(
        styles.imageAndText,
        props.hasGreyBackground ? globalStyles.fullWidthGrey : ''
      )}
      style={props.isReversed ? { flexDirection: 'row-reverse' } : {}}
    >
      <div className={styles.textSide}>
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
      <div className={styles.imageSide}>
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
