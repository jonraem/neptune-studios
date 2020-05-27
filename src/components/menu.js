import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { ReactComponent as Cross } from '../assets/svg/cross.svg';
import MenuContext from '../context/MenuContext';
import styles from './components.module.css';

export default props => {
  const { setIsOpen } = useContext(MenuContext);

  const getActiveBorder = pathName => {
    if (props.currentPath === pathName) {
      return { borderBottom: '3px solid #0e0c3c' };
    } else return {};
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menuLinks}>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className={styles.menuLink}
          style={getActiveBorder('/')}
        >
          Main
        </Link>
        <Link
          to="/work"
          onClick={() => setIsOpen(false)}
          className={styles.menuLink}
          style={getActiveBorder('/work')}
        >
          Work
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className={styles.menuLink}
          style={getActiveBorder('/about')}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={styles.menuLink}
          style={getActiveBorder('/contact')}
        >
          Contact
        </Link>
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
