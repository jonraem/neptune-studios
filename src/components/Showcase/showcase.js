import gsap from 'gsap';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  getYPositionsForFeatureDescriptions,
  initializeScrollTrigger,
} from '../../utils/helpers';
import ProgressionButton from '../Buttons/progressionButton';
import DescriptionBox from './descriptionBox';
import styles from './showcase.module.css';

export default props => {
  const shouldRenderDescriptionBoxes =
    !!props.currentShowcase.node.featureDescriptions &&
    !!props.currentShowcase.node.featureDescriptions.length;

  const boxRefs = useRef(
    (props.currentShowcase.node.featureDescriptions || []).map(() =>
      React.createRef()
    )
  );
  const yPositionsForFeatureDescriptions = getYPositionsForFeatureDescriptions(
    props.currentShowcase?.node?.contentfulid
  );

  const calculateAnimationOffset = () => window.innerWidth / 2;

  const animateBoxesFromLeft = useCallback((ref, index) => {
    gsap.from(ref, {
      x: -calculateAnimationOffset(),
      scrollTrigger: {
        id: `box-${index + 1}`,
        trigger: ref,
        start: 'top center',
      },
    });
  }, []);

  const animateBoxesFromRight = useCallback((ref, index) => {
    gsap.from(ref, {
      x: calculateAnimationOffset(),
      scrollTrigger: {
        id: `box-${index + 1}`,
        trigger: ref,
        start: 'top center',
      },
    });
  }, []);

  const handleAnimate = useCallback(() => {
    initializeScrollTrigger();
    boxRefs.current.forEach((boxRef, index) => {
      if (index % 2) {
        animateBoxesFromRight(boxRef.current, index);
      } else {
        animateBoxesFromLeft(boxRef.current, index);
      }
    });
  }, [animateBoxesFromLeft, animateBoxesFromRight]);

  useEffect(() => {
    if (shouldRenderDescriptionBoxes && typeof window !== `undefined`) {
      handleAnimate();
    }
  }, [handleAnimate, shouldRenderDescriptionBoxes]);

  const renderDescriptionBoxes = () => {
    return (props.currentShowcase.node.featureDescriptions || []).map(
      (featureDescription, index) => (
        <DescriptionBox
          key={featureDescription.id}
          className={
            index % 2 ? styles.descriptionBoxRight : styles.descriptionBoxLeft
          }
          style={{ top: yPositionsForFeatureDescriptions[index] }}
          boxRef={boxRefs.current[index]}
        >
          {featureDescription.description}
        </DescriptionBox>
      )
    );
  };

  if (props.children) {
    return (
      <div
        className={styles.showCase}
        style={{
          background: props.bgColor ? props.bgColor : '#fff',
          height: props.height,
          maxHeight: '180rem',
        }}
      >
        <h3>{props.currentShowcase.node.title}</h3>
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
        {shouldRenderDescriptionBoxes && (
          <div className={styles.descriptionBoxes}>
            <div style={{ position: 'relative' }}>
              {renderDescriptionBoxes()}
            </div>
          </div>
        )}
      </div>
    );
  } else return null;
};
