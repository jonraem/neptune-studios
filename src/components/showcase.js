import React from 'react';
import styles from './components.module.css';
import ProgressionButton from './progressionButton';

export default props => {
  if (props.children) {
    return (
      <div
        className={styles.scrollShowCase}
        style={{
          background: props.bgColor ? props.bgColor : '#fff',
          height: !!props.height && props.height,
          maxHeight: '180rem',
        }}
      >
        <h3>{props.title}</h3>
        <div className={styles.showcaseButtons}>
          <ProgressionButton
            type="previous"
            onClick={props.handlePreviousShowcase}
          >
            Previous screen
          </ProgressionButton>
          <ProgressionButton type="next" onClick={props.handleNextShowcase}>
            Next screen
          </ProgressionButton>
        </div>
        <div className={styles.showcaseContent}>{props.children}</div>
      </div>
    );
  } else return null;
};
