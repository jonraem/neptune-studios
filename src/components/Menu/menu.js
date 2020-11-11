import { Link } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import { ReactComponent as Behance } from '../../assets/svg/behance--white.svg';
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin--white.svg';
import MenuContext from '../../context/MenuContext';
import { getActiveColorFromPath } from '../../utils/helpers';
import styles from './menu.module.css';

export default props => {
  const { setIsOpen } = useContext(MenuContext);

  useEffect(() => {
    var root = document.getElementsByTagName('html')[0];
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = null;
    };
  }, []);

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
      return styles.linkActive;
    } else return styles.link;
  };

  return (
    <div className={styles.menu} style={getMenuStyle()}>
      <div className={styles.links}>
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
      <div className={styles.social}>
        <a
          href="https://fi.linkedin.com/in/pnousiainen"
          className={styles.socialLink}
        >
          <LinkedIn />
          LinkedIn
        </a>
        <a
          href="https://www.behance.net/pnousiainen"
          className={styles.socialLink}
        >
          <Behance />
          Behance
        </a>
      </div>
      <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
        <Cross />
      </button>
    </div>
  );
};
