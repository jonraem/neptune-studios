import { Link } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import { ReactComponent as Behance } from '../assets/svg/behance--white.svg';
import { ReactComponent as Cross } from '../assets/svg/cross.svg';
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin--white.svg';
import MenuContext from '../context/MenuContext';
import { getActiveColorFromPath } from '../utils/helpers';
import styles from './components.module.css';

export default props => {
  const { setIsOpen } = useContext(MenuContext);

  const getMenuStyle = () => ({
    background: getActiveColorFromPath(props.currentPath),
  });

  const getActiveLinkColor = pathName => {
    if (props.currentPath === pathName) {
      return { color: getActiveColorFromPath(props.currentPath) };
    } else return {};
  };

  const getLinkClass = pathName => {
    if (props.currentPath === pathName) {
      return styles.menuLinkActive;
    } else return styles.menuLink;
  };

  return (
    <div className={styles.menu} style={getMenuStyle()}>
      <div className={styles.menuLinks}>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className={getLinkClass('/')}
          style={getActiveLinkColor('/')}
        >
          Main
        </Link>
        <Link
          to="/work"
          onClick={() => setIsOpen(false)}
          className={getLinkClass('/work')}
          style={getActiveLinkColor('/work')}
        >
          Work
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className={getLinkClass('/about')}
          style={getActiveLinkColor('/about')}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={getLinkClass('/contact')}
          style={getActiveLinkColor('/contact')}
        >
          Contact
        </Link>
      </div>
      <div className={styles.menuSocial}>
        <a
          href="https://fi.linkedin.com/in/pnousiainen"
          className={styles.menuSocialLink}
        >
          <LinkedIn />
          LinkedIn
        </a>
        <a
          href="https://www.behance.net/pnousiainen"
          className={styles.menuSocialLink}
        >
          <Behance />
          Behance
        </a>
      </div>
      <button
        className={styles.menuCloseButton}
        onClick={() => setIsOpen(false)}
      >
        <Cross />
      </button>
    </div>
  );
};
