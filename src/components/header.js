import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { ReactComponent as Hamburger } from '../assets/svg/hamburger.svg';
import { ReactComponent as NeptuneStudios } from '../assets/svg/neptune-studios--white.svg';
import MenuContext from '../context/MenuContext';
import useMedia from '../hooks/useMedia';
import styles from './components.module.css';

export default props => {
  const { setIsOpen } = useContext(MenuContext);
  const isMobile = useMedia('(max-width: 480px)');

  const getActiveBorder = pathName => {
    if (pathName === '/') {
      if (props.currentPath === pathName) {
        return { textDecoration: 'line-through' };
      } else return {};
    } else {
      if (props.currentPath.includes(pathName)) {
        return { textDecoration: 'line-through' };
      } else return {};
    }
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
