import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
// import { ReactComponent as Behance } from '../../assets/svg/behance.svg';
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg';
import styles from './footer.module.css';

const currentYear = new Date().getFullYear();

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            linkedIn
            behance
          }
        }
      }
    `}
    render={data => (
      <div className={styles.footer}>
        <div
          className={styles.copyright}
        >{`© ${data.site.siteMetadata.title} ${currentYear}`}</div>
        <div className={styles.social}>
          <a
            href={data.site.siteMetadata.linkedIn}
            className={styles.socialLink}
          >
            <LinkedIn />
          </a>
          {/* <a
            href={data.site.siteMetadata.behance}
            className={styles.socialLink}
          >
            <Behance />
          </a> */}
        </div>
      </div>
    )}
  />
);
