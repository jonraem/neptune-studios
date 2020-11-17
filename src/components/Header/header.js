import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { ReactComponent as Hamburger } from '../../assets/svg/hamburger.svg';
import { ReactComponent as NeptuneStudios } from '../../assets/svg/neptune-studios--white.svg';
import MenuContext from '../../context/MenuContext';
import useMedia from '../../hooks/useMedia';
import {
  getActiveStyleForNavigation,
} from '../../utils/helpers';
import buttonStyles from '../Buttons/buttons.module.css';
import styles from './header.module.css';

export default props => {
  const { setIsOpen } = useContext(MenuContext);
  const isMobile = useMedia('(max-width: 480px)');
  const getActiveStyleForNavigationWithCurrentPath = pathName =>
    getActiveStyleForNavigation(pathName, props.currentPath);

  return (
    <div className={styles.header}>
      <NeptuneStudios className={styles.logo} />
      {isMobile ? (
        <button
          className={buttonStyles.unstyledButton}
          onClick={() => setIsOpen(true)}
        >
          <Hamburger className={styles.hamburger} />
        </button>
      ) : (
        <div className={styles.links}>
          <Link
            to="/"
            className={styles.link}
            style={getActiveStyleForNavigationWithCurrentPath('/')}
          >
            Main
          </Link>
            <Link
              to="/work"
              className={styles.link}
              style={getActiveStyleForNavigationWithCurrentPath('/work')}
            >
              Work
            </Link>
          <Link
            to="/about"
            className={styles.link}
            style={getActiveStyleForNavigationWithCurrentPath('/about')}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={styles.link}
            style={getActiveStyleForNavigationWithCurrentPath('/contact')}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};
