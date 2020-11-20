import classnames from 'classnames';
import React from 'react';
import CenterTitle from '../CenterTitle/centerTitle';
import styles from './results.module.css';

export const VareResults = props => {
  return (
    <div className={classnames(styles.results, styles.vareResults)}>
      <CenterTitle className={styles.title}>{props.results.title}</CenterTitle>
      <div className={styles.sections}>
        <div className={styles.section1}>
          <div className={styles.content}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: props.results.description.childContentfulRichText.html,
              }}
            />
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.content}>
            <h3 className={styles.title}>{props.results.title2}</h3>
            <div className={styles.description}>
              {props.results.description2}
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.content}>
            <div>
              <h3 className={styles.ratingTitle}>{props.results.title3}</h3>
              <div className={styles.ratingSubtitle}>
                {props.results.description3}
              </div>
            </div>
            <div>
              <h3 className={styles.ratingTitle}>{props.results.title4}</h3>
              <div className={styles.ratingSubtitle}>
                {props.results.description4}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const results = props => {
  return (
    <div className={styles.results}>
      <CenterTitle className={styles.title}>{props.results.title}</CenterTitle>
      <div className={styles.sections}>
        <div className={styles.section1}>
          <div className={styles.content}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: props.results.description.childContentfulRichText.html,
              }}
            />
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.content}>
            <h3 className={styles.title}>{props.results.title2}</h3>
            <div className={styles.description}>
              {props.results.description2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default results;
