import Img from 'gatsby-image';
import React from 'react';
import styles from './components.module.css';
import ProgressionButton from './progressionButton';

export default props => {
  const { title, imagePath } = props;

  return (
    <div
      className={styles.scrollShowCase}
      style={{
        background: props.bgColor ? props.bgColor : '#fff',
        height: !!props.imageHeight && props.imageHeight,
        maxHeight: '180rem',
      }}
    >
      <h3>{title}</h3>
      <div className={styles.showcaseButtons}>
        <ProgressionButton
          type="previous"
          onClick={props.handlePreviousShowcase}
        >
          Previous screen
        </ProgressionButton>
        <ProgressionButton type="next" onClick={props.handleNextShowcase}>
          Next screen
        </ProgressionButton>
      </div>
      <div className={styles.showcaseImage}>
        {!!props.imagePath && (
          <Img
            fluid={imagePath}
            imgStyle={{
              width: props.imageWidth,
              height: 'unset',
              left: 0,
              right: 0,
              margin: '0 auto',
              objectFit: 'contain',
            }}
          />
        )}
      </div>
    </div>
  );
};
