import classnames from 'classnames';
import gsap from 'gsap';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  getYPositionsForFeatureDescriptions,
  initializeScrollTrigger,
} from '../../utils/helpers';
import ProgressionButton from '../Buttons/progressionButton';
import styles from './showcase.module.css';

export default props => {
  const shouldRenderFeatureDescriptions =
    !!props.currentShowcase.node.featureDescriptions &&
    !!props.currentShowcase.node.featureDescriptions.length;
  const showcaseImageHeight =
    !!props.currentShowcaseImage &&
    props.currentShowcaseImage.file.details.image.height / 2;

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
    if (shouldRenderFeatureDescriptions && typeof window !== `undefined`) {
      handleAnimate();
    }
  }, [handleAnimate, shouldRenderFeatureDescriptions]);

  const renderFeatureDescriptions = () => {
    return (props.currentShowcase.node.featureDescriptions || []).map(
      (featureDescription, index) => (
        <div
          key={featureDescription.id}
          className={classnames(
            styles.descriptionBox,
            index % 2 ? styles.descriptionBoxRight : styles.descriptionBoxLeft
          )}
          style={{ top: yPositionsForFeatureDescriptions[index] }}
          ref={boxRefs.current[index]}
        >
          {featureDescription.description}
        </div>
      )
    );
  };

  if (props.children) {
    return (
      <div
        className={styles.showCase}
        style={{
          background: props.bgColor ? props.bgColor : '#fff',
          height: showcaseImageHeight,
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
        {shouldRenderFeatureDescriptions && (
          <div className={styles.descriptionBoxes}>
            <div style={{ position: 'relative' }}>
              {renderFeatureDescriptions()}
            </div>
          </div>
        )}
      </div>
    );
  } else return null;
};
