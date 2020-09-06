import { Link } from 'gatsby';
import React from 'react';
import { ReactComponent as ArrowRight } from '../assets/svg/arrow-right--blue.svg';
import styles from './components.module.css';

export default props => {
  return (
    <div className={styles.caseCard}>
      <div className={styles.caseCardImage}>
        {/* <img path={props.imagePath} /> */}
      </div>
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
