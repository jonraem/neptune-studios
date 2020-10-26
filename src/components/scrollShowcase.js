import classnames from 'classnames';
import Img from 'gatsby-image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import styles from './components.module.css';
import ProgressionButton from './progressionButton';

export default props => {
  const { title, featureDescriptions, imagePath } = props;
  const showcaseRef = useRef();
  const boxRefs = useRef(featureDescriptions.map(() => React.createRef()));

  useEffect(() => {
    if (typeof window !== `undefined`) {
      // Initialize ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);

      const calculateOffset = () => window.innerWidth / 2;
      boxRefs.current.forEach((boxRef, index) => {
        if (index % 2) {
          // Animate from right
          gsap.from(boxRef.current, {
            x: calculateOffset(),
            scrollTrigger: {
              id: `box-${index + 1}`,
              trigger: boxRef.current,
              start: 'top center',
            },
          });
        } else {
          // Animate from left
          gsap.from(boxRef.current, {
            x: -calculateOffset(),
            scrollTrigger: {
              id: `box-${index + 1}`,
              trigger: boxRef.current,
              start: 'top center',
            },
          });
        }
      });
    }
  }, []);

  return (
    <div
      className={styles.scrollShowCase}
      style={{
        background: props.bgColor ? props.bgColor : '#fff',
        height: !!props.imageHeight && props.imageHeight / 2,
        maxHeight: '180rem',
      }}
      ref={showcaseRef}
    >
      <h3>{title}</h3>
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
      <div className={styles.showcaseImage}>
        {!!props.imagePath && (
          <Img
            fluid={imagePath}
            imgStyle={{
              width: '28rem',
              height: 'unset',
              left: 0,
              right: 0,
              margin: '0 auto',
              objectFit: 'contain',
            }}
          />
        )}
      </div>
      <div className={styles.descriptionBoxes}>
        {featureDescriptions.map((featureDescription, index) => {
          return (
            <div
              key={featureDescription.id}
              className={classnames(
                styles.descriptionBox,
                index % 2
                  ? styles.descriptionBoxRight
                  : styles.descriptionBoxLeft
              )}
              ref={boxRefs.current[index]}
            >
              {featureDescription.description}
            </div>
          );
        })}
      </div>
    </div>
  );
};
