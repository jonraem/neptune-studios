import classnames from 'classnames';
import Img from 'gatsby-image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import styles from './components.module.css';

export default props => {
  const { title, featureDescriptions, imagePath } = props;
  const showCaseRef = useRef(null);
  const boxRefs = useRef(featureDescriptions.map(() => React.createRef()));

  useEffect(() => {
    if (typeof window !== `undefined`) {
      // Initialize ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
      const tl = gsap.timeline();
      featureDescriptions.forEach((featureDescription, index) => {
        if (index % 2) {
          // Animate from right
          tl.from(boxRefs.current[index].current, {
            xPercent: 150,
            duration: 1,
            scrollTrigger: {
              trigger: boxRefs.current[index].current,
              end: 'top center-=50',
              scrub: 0.5,
            },
          });
        } else {
          // Animate from left
          tl.from(boxRefs.current[index].current, {
            xPercent: -150,
            duration: 1,
            scrollTrigger: {
              trigger: boxRefs.current[index].current,
              end: 'top center-=50',
              scrub: 0.5,
            },
          });
        }
      });
    }
  }, [featureDescriptions]);

  return (
    <div className={styles.scrollShowCase} ref={showCaseRef}>
      <h3>{props.title}</h3>
      <div className={styles.showcaseImage}>
        {!!props.imagePath && (
          <Img
            fluid={props.imagePath}
            style={{ maxHeight: '126rem' }}
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
