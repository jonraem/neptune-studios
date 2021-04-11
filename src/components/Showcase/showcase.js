import gsap from 'gsap';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  getYPositionsForFeatureDescriptions,
  initializeScrollTrigger,
} from '../../utils/helpers';
import ProgressionButton from '../Buttons/progressionButton';
import DescriptionBox from './descriptionBox';
import styles from './showcase.module.css';

const Showcase = props => {
  const shouldRenderDescriptionBoxes =
    !!props.currentShowcase.node.featureDescriptions &&
    !!props.currentShowcase.node.featureDescriptions.length;

  const boxRefs = useRef(
    (props.currentShowcase.node.featureDescriptions || []).map(() =>
      React.createRef()
    )
  );
  const lineRefs = useRef(
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

  const fadeInDottedLine = useCallback((ref, index) => {
    gsap.from(ref, {
      opacity: 0,
      scrollTrigger: {
        id: `line-${index + 1}`,
        trigger: ref,
        start: 'bottom+=200 center',
      },
    });
  }, []);

  const handleAnimate = useCallback(() => {
    boxRefs.current.forEach((boxRef, index) => {
      if (index % 2) {
        animateBoxesFromRight(boxRef.current, index);
      } else {
        animateBoxesFromLeft(boxRef.current, index);
      }
    });
  }, [animateBoxesFromLeft, animateBoxesFromRight]);

  const handleFadeIn = useCallback(() => {
    lineRefs.current.forEach((lineRef, index) => {
      fadeInDottedLine(lineRef.current, index);
    });
  }, [fadeInDottedLine]);

  useEffect(() => {
    if (shouldRenderDescriptionBoxes && typeof window !== `undefined`) {
      initializeScrollTrigger();
      handleAnimate();
      handleFadeIn();
    }
  }, [shouldRenderDescriptionBoxes, handleAnimate, handleFadeIn]);

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
          lineRef={lineRefs.current[index]}
        >
          {featureDescription.description}
        </DescriptionBox>
      )
    );
  };

  if (props.children) {
    return (
      <div
        className={styles.showcase}
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

export default Showcase;
