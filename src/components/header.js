import React, { useContext } from 'react';
import { Link } from 'gatsby';
import MediaContext from '../context/MediaContext';
import MenuContext from '../context/MenuContext';
import { ReactComponent as NeptuneStudios } from '../assets/svg/neptune-studios--white.svg';
import { ReactComponent as Hamburger } from '../assets/svg/hamburger.svg';
import styles from './components.module.css';

export default props => {
  const { isMobile } = useContext(MediaContext);
  const { setIsOpen } = useContext(MenuContext);

  const getActiveBorder = pathName => {
    if (props.currentPath === pathName) {
      return { borderBottom: '3px solid #fff' };
    } else return {};
  };

  return (
    <div className={styles.header}>
      <NeptuneStudios className={styles.headerLogo} />
      {isMobile ? (
        <button
          className={styles.unstyledButton}
          onClick={() => setIsOpen(true)}
        >
          <Hamburger className={styles.headerHamburger} />
        </button>
      ) : (
        <div className={styles.headerLinks}>
          <Link
            to="/"
            className={styles.headerLink}
            style={getActiveBorder('/')}
          >
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
      )}
    </div>
  );
};
