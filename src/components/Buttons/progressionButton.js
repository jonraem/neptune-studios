import classnames from 'classnames';
import React from 'react';
import { ReactComponent as ArrowPrevious } from '../../assets/svg/arrow-left--white.svg';
import { ReactComponent as ArrowNext } from '../../assets/svg/arrow-right--white.svg';
import * as styles from './buttons.module.css';

const ProgressionButton = props => {
  return (
    <button
      className={classnames(
        styles.progressionButton,
        props.type === 'previous' && styles.previous,
        props.type === 'next' && styles.next
      )}
      onClick={props.onClick}
    >
      {props.type === 'previous' && <ArrowPrevious />}
      {props.type === 'next' && <ArrowNext />}
      <div className={styles.content}>{props.children}</div>
    </button>
  );
};

export default ProgressionButton;
