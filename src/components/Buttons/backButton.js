import React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as ArrowPrevious } from '../../assets/svg/arrow-left--white.svg';
import styles from './buttons.module.css';

export default props => {
  return (
    <Link className={styles.backButton} to={props.linkTo}>
      <ArrowPrevious styles={{ pointerEvents: 'none' }} />
    </Link>
  );
};
