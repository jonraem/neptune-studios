import classnames from 'classnames';
import React from 'react';
import CenterTitle from './centerTitle';
import styles from './components.module.css';

export const VareResults = props => {
  return (
    <div className={classnames(styles.results, styles.vareResults)}>
      <CenterTitle className={styles.resultsTitle}>
        {props.results.title}
      </CenterTitle>
      <div className={styles.resultsSections}>
        <div className={styles.resultsSection1}>
          <div className={styles.resultsContent}>
            <div
              className={styles.resultsDescription}
              dangerouslySetInnerHTML={{
                __html: props.results.description.childContentfulRichText.html,
              }}
            />
          </div>
        </div>
        <div className={styles.resultsSection2}>
          <div className={styles.resultsContent}>
            <h3 className={styles.resultsTitle2}>{props.results.title2}</h3>
            <div className={styles.resultsDescription}>
              {props.results.description2}
            </div>
          </div>
        </div>
        <div className={styles.resultsSection3}>
          <div className={styles.resultsContent}>
            <div>
              <h3 className={styles.resultsRatingTitle}>
                {props.results.title3}
              </h3>
              <div className={styles.resultsRatingSubtitle}>
                {props.results.description3}
              </div>
            </div>
            <div>
              <h3 className={styles.resultsRatingTitle}>
                {props.results.title4}
              </h3>
              <div className={styles.resultsRatingSubtitle}>
                {props.results.description4}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default props => {
  return (
    <div className={styles.results}>
      <CenterTitle className={styles.resultsTitle}>
        {props.results.title}
      </CenterTitle>
      <div className={styles.resultsSections}>
        <div className={styles.resultsSection1}>
          <div className={styles.resultsContent}>
            <div
              className={styles.resultsDescription}
              dangerouslySetInnerHTML={{
                __html: props.results.description.childContentfulRichText.html,
              }}
            />
          </div>
        </div>
        <div className={styles.resultsSection2}>
          <div className={styles.resultsContent}>
            <h3 className={styles.resultsTitle2}>{props.results.title2}</h3>
            <div className={styles.resultsDescription2}>
              {props.results.description2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
