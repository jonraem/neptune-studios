import Img from 'gatsby-image';
import React from 'react';
import BackButton from '../Buttons/backButton';
import RichText from '../RichText/richText';
import styles from './hero.module.css';

const Hero = props => {
  return (
    <div className={props.className}>
      <div className={styles.content}>
        {!!props.linkBackTo && <BackButton linkTo={props.linkBackTo} />}
        <div className={styles.title}>
          <div className={styles.subtitle}>{props.subtitle}</div>
          <h1>{props.title}</h1>
        </div>
        <RichText className={styles.description} rawText={props.description} />
      </div>
      {!!props.heroImage && (
        <Img
          className={props.heroClassName}
          alt={props.heroAlt}
          style={{ position: 'absolute' }}
          imgStyle={{
            objectFit: 'contain',
            objectPosition: 'center right',
          }}
          fluid={props.heroImage}
          critical
        />
      )}
    </div>
  );
};

export default Hero;
