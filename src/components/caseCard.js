import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right--blue.svg';
import styles from './components.module.css';

export default props => {
  return (
    <div className={styles.caseCard}>
      {props.imagePath && (
        <div className={styles.caseCardImage}>
          <Img fluid={props.imagePath} />
        </div>
      )}
      <div className={styles.caseCardTitle}>{props.title}</div>
      <div className={styles.caseCardSubtitle}>{props.subtitle}</div>
      {!!props.linkTo && (
        <Link className={styles.caseCardLink} to={props.linkTo}>
          LEARN MORE
          <ArrowRight />
        </Link>
      )}
    </div>
  );
};
