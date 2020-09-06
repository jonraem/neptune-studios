import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styles from '../pages/pages.module.css';

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulHero {
          edges {
            node {
              contentfulid
              title
              subtitle
              description {
                childContentfulRichText {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const content = data.allContentfulHero.edges.find(
        edge => edge.node.contentfulid === `${props.for}:hero`
      ).node;
      if (content) {
        return (
          <div className={props.heroStyles}>
            <div className={styles.heroText}>
              <div className={styles.heroTitle}>
                <div className={styles.subtitle}>{content.subtitle}</div>
                <h1>{content.title}</h1>
              </div>
              <div
                className={styles.heroDescription}
                dangerouslySetInnerHTML={{
                  __html: content.description.childContentfulRichText.html,
                }}
              />
            </div>
            {props.heroImage}
          </div>
        );
      }
    }}
  />
);
