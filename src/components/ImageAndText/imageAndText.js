import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import * as globalStyles from '../../global.module.css';
import useMedia from '../../hooks/useMedia';
import FullWidthGrey from '../FullWidth/grey';
import RichText from '../RichText/richText';
import * as styles from './imageAndText.module.css';

const ImageAndText = props => {
  const isMobile = useMedia('(max-width: 480px)');
  const reverseStyle = props.isReversed
    ? isMobile
      ? { flexDirection: 'column-reverse' }
      : { flexDirection: 'row-reverse' }
    : {};

  return (
    <div className={styles.imageAndText} style={reverseStyle}>
      {props.hasGreyBackground && <FullWidthGrey />}
      <div className={styles.textSide} style={props.textSideStyle}>
        <h2 className={styles.title}>{props.title}</h2>
        <RichText className={styles.description} rawText={props.description} />
        {!!props.linkTo && (
          <Link className={globalStyles.button} to={props.linkTo}>
            {`Go to ${props.title}`}
          </Link>
        )}
      </div>
      <div className={styles.spacing} />
      <div className={styles.imageSide} style={props.imageSideStyle}>
        {!!props.imagePath && (
          <GatsbyImage
            image={props.imagePath}
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

export default ImageAndText;
