import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right--blue.svg';
import styles from './caseCard.module.css';

export default props => {
  return (
    <div className={styles.caseCard}>
      {props.imagePath && (
        <div className={styles.image}>
          <Img fluid={props.imagePath} />
        </div>
      )}
      <div className={styles.title}>{props.title}</div>
      <div className={styles.subtitle}>{props.subtitle}</div>
      {!!props.linkTo && (
        <Link className={styles.link} to={props.linkTo}>
          LEARN MORE
          <ArrowRight />
        </Link>
      )}
    </div>
  );
};
