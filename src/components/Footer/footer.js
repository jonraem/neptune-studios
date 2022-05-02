import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
// import { ReactComponent as Behance } from '../../assets/svg/behance.svg';
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg';
import * as styles from './footer.module.css';

const currentYear = new Date().getFullYear();

const Footer = props => {
  return (
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
};

export default Footer;
