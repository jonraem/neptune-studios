import React from 'react';
import styles from './components.module.css';
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg';
import { ReactComponent as Behance } from '../assets/svg/behance.svg';

const currentYear = new Date().getFullYear();

export default props => {
  return (
    <div className={styles.footer}>
      <div
        className={styles.footerCopyright}
      >{`© Neptune Studios ${currentYear}`}</div>
      <div className={styles.footerSocial}>
        <a href="https://www.linkedin.com" className={styles.footerSocialLink}>
          <LinkedIn />
        </a>
        <a href="https://www.behance.net" className={styles.footerSocialLink}>
          <Behance />
        </a>
      </div>
    </div>
  );
};
