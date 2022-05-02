import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right--blue.svg';
import * as styles from './caseCard.module.css';

const CaseCard = props => {
  return (
    <Link className={styles.caseCard} to={props.linkTo}>
      {props.imagePath && (
        <div className={styles.image}>
          <GatsbyImage
            image={props.imagePath}
            imgStyle={{
              objectFit: 'contain',
            }}
          />
        </div>
      )}
      <div className={styles.title}>{props.title}</div>
      <div className={styles.subtitle}>{props.subtitle}</div>
      {!!props.linkTo && (
        <div className={styles.link}>
          LEARN MORE
          <ArrowRight />
        </div>
      )}
    </Link>
  );
};

export default CaseCard;
