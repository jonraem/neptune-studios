import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { ReactComponent as Hamburger } from '../../assets/svg/hamburger.svg';
import { ReactComponent as NeptuneStudios } from '../../assets/svg/neptune-studios--white.svg';
import MenuContext from '../../context/MenuContext';
import useMedia from '../../hooks/useMedia';
import {
  getActiveStyleForDropdown,
  getActiveStyleForNavigation,
} from '../../utils/helpers';
import buttonStyles from '../Buttons/buttons.module.css';
import Dropdown from '../Dropdown/dropdown';
import styles from './header.module.css';

const menuOptions = [
  { value: '/work/vare', label: 'Case Väre' },
  { value: '/work/abb', label: 'Case ABB' },
  { value: '/work/macgregor', label: 'Case MacGregor' },
  { value: '/work/various', label: 'Various projects' },
];

const Header = props => {
  const { setIsOpen } = useContext(MenuContext);
  const isMobile = useMedia('(max-width: 480px)');
  const getActiveStyleForNavigationWithCurrentPath = pathName =>
    getActiveStyleForNavigation(pathName, props.currentPath);
  const getActiveStyleForDropdownWithCurrentPath = pathName =>
    getActiveStyleForDropdown(pathName, props.currentPath);

  return (
    <div className={styles.header}>
      <Link to="/">
        <NeptuneStudios className={styles.logo} />
      </Link>
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
          <Dropdown
            options={menuOptions}
            getActiveStyleForDropdownWithCurrentPath={
              getActiveStyleForDropdownWithCurrentPath
            }
          >
            <Link
              to="/work"
              className={styles.link}
              style={getActiveStyleForNavigationWithCurrentPath('/work')}
            >
              Work
            </Link>
          </Dropdown>
          <Link
            to="/about"
            className={styles.link}
            style={getActiveStyleForNavigationWithCurrentPath('/about')}
          >
            About
          </Link>
          {/* <Link
            to="/contact"
            className={styles.link}
            style={getActiveStyleForNavigationWithCurrentPath('/contact')}
          >
            Contact
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default Header;
