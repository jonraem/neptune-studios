import React from 'react';
import { ReactSVG } from 'react-svg';
import styles from './components.module.css';
import linkedInIcon from '../assets/svg/behance.svg';
import behanceIcon from '../assets/svg/behance.svg';

const currentYear = new Date().getFullYear();

export default props => {
  return (
    <div className={styles.footer}>
      <div
        className={styles.footerCopyright}
      >{`© Neptune Studios ${currentYear}`}</div>
      <div className={styles.footerSocial}>
        <a href="https://www.linkedin.com">
          <ReactSVG
            src={linkedInIcon}
            className={styles.footerSocialLink}
            fallback={() => 'LinkedIn'}
          />
        </a>
        <a href="https://www.behance.net">
          <ReactSVG
            src={behanceIcon}
            className={styles.footerSocialLink}
            fallback={() => 'Behance'}
          />
        </a>
      </div>
    </div>
  );
};
