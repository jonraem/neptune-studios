import { Link } from 'gatsby';
import React from 'react';
import { ReactComponent as ArrowPrevious } from '../../assets/svg/arrow-left--white.svg';
import * as styles from './buttons.module.css';

const BackButton = props => {
  return (
    <Link className={styles.backButton} to={props.linkTo}>
      <ArrowPrevious styles={{ pointerEvents: 'none' }} />
    </Link>
  );
};

export default BackButton;
