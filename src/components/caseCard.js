import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'gatsby';
import styles from './components.module.css';
import arrowRightBlue from '../assets/svg/arrow-right--blue.svg';

export default props => {
  return (
    <div className={styles.caseCard}>
      <div className={styles.caseCardImage}>
        {/* <img path={props.imagePath} /> */}
      </div>
      <div className={styles.caseCardTitle}>{props.title}</div>
      <div className={styles.caseCardDescription}>{props.description}</div>
      {!!props.linkTo && (
        <Link className={styles.caseCardLink} to={props.linkTo}>
          LEARN MORE
          <ReactSVG src={arrowRightBlue} />
        </Link>
      )}
    </div>
  );
};
