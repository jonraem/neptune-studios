import React, { useEffect } from 'react';
import ProgressionButton from '../Buttons/progressionButton';
import styles from './showcase.module.css';

export default props => {
  const shouldRenderFeatureDescriptions =
    !!props.featureDescriptions && !!props.featureDescriptions.length;
  const { handleAnimate } = props;
  useEffect(() => {
    if (
      !!handleAnimate &&
      shouldRenderFeatureDescriptions &&
      typeof window !== `undefined`
    ) {
      handleAnimate();
    }
  }, [handleAnimate, shouldRenderFeatureDescriptions]);

  if (props.children) {
    return (
      <div
        className={styles.showCase}
        style={{
          background: props.bgColor ? props.bgColor : '#fff',
          height: !!props.height && props.height,
          maxHeight: '180rem',
        }}
      >
        <h3>{props.title}</h3>
        <div className={styles.buttons}>
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
        <div className={styles.content}>{props.children}</div>
        {shouldRenderFeatureDescriptions && (
          <div className={styles.descriptionBoxes}>
            <div style={{ position: 'relative' }}>
              {props.featureDescriptions}
            </div>
          </div>
        )}
      </div>
    );
  } else return null;
};
