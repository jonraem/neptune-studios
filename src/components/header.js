import React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as NeptuneStudios } from '../assets/svg/neptune-studios.svg';
import styles from './components.module.css';

export default props => {
  const getActiveBorder = pathName => {
    if (props.currentPath === pathName) {
      return { borderBottom: '3px solid #fff' };
    } else return {};
  };

  return (
    <div className={styles.header}>
      <NeptuneStudios className={styles.headerLogo} />
      <div className={styles.headerLinks}>
        <Link to="/" className={styles.headerLink} style={getActiveBorder('/')}>
          Main
        </Link>
        <Link
          to="/work"
          className={styles.headerLink}
          style={getActiveBorder('/work')}
        >
          Work
        </Link>
        <Link
          to="/about"
          className={styles.headerLink}
          style={getActiveBorder('/about')}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={styles.headerLink}
          style={getActiveBorder('/contact')}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
