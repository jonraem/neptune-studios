import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ReactComponent as Behance } from '../assets/svg/behance.svg';
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg';
import styles from './components.module.css';

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
          className={styles.footerCopyright}
        >{`© ${data.site.siteMetadata.title} ${currentYear}`}</div>
        <div className={styles.footerSocial}>
          <a
            href={data.site.siteMetadata.linkedIn}
            className={styles.footerSocialLink}
          >
            <LinkedIn />
          </a>
          <a
            href={data.site.siteMetadata.behance}
            className={styles.footerSocialLink}
          >
            <Behance />
          </a>
        </div>
      </div>
    )}
  />
);
