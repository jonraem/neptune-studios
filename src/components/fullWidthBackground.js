import Img from 'gatsby-image';
import React from 'react';
import styles from './components.module.css';

export default props => {
  return (
    <div className={styles.fullWidthBackground}>
      <Img
        fluid={props.imagePath}
        style={{
          position: 'relative',
          height: props.height || '40rem',
          width: '100%',
          overflow: 'visible',
        }}
        imgStyle={{
          position: 'absolute',
          height: '100%',
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};
