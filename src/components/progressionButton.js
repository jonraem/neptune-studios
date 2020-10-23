import React from 'react';
import classnames from 'classnames';
import styles from './components.module.css';
import { ReactComponent as ArrowPrevious } from '../assets/svg/arrow-left--white.svg';
import { ReactComponent as ArrowNext } from '../assets/svg/arrow-right--white.svg';

const progressionButton = props => {
  return (
    <button
      className={classnames(
        styles.progressionButton,
        props.type === 'previous' && styles.progressionButtonPrevious,
        props.type === 'next' && styles.progressionButtonNext
      )}
      onClick={props.onClick}
    >
      {props.type === 'previous' && <ArrowPrevious />}
      {props.type === 'next' && <ArrowNext />}
      <div className={styles.progressionButtonContent}>{props.children}</div>
    </button>
  );
};

export default progressionButton;
