import classnames from 'classnames';
import { Link } from 'gatsby';
import React, { useContext } from 'react';

import { ReactComponent as Hamburger } from '../../assets/svg/hamburger.svg';
import { ReactComponent as NeptuneStudios } from '../../assets/svg/neptune-studios--white.svg';
import MenuContext from '../../context/MenuContext';
import useMedia from '../../hooks/useMedia';
import { isLinkPathCurrentPath } from '../../utils/helpers';
import * as buttonStyles from '../Buttons/buttons.module.css';
import Dropdown from '../Dropdown/dropdown';
import * as styles from './header.module.css';

const menuOptions = [
  { value: '/work/vare/', label: 'Case Väre' },
  { value: '/work/abb/', label: 'Case ABB' },
  { value: '/work/macgregor/', label: 'Case MacGregor' },
  { value: '/work/various/', label: 'Various projects' },
];

const Header = props => {
  const { setIsOpen } = useContext(MenuContext);
  const isTablet = useMedia('(max-width: 992px)');
  const getActiveLinkClassName = pathName =>
    isLinkPathCurrentPath(pathName, props.currentPath)
      ? styles.activeLink
      : undefined;

  return (
    <div className={styles.header}>
      <Link to="/">
        <NeptuneStudios className={styles.logo} />
      </Link>
      {isTablet ? (
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
            className={classnames(styles.link, getActiveLinkClassName('/'))}
          >
            Main
          </Link>
          <Dropdown
            currentPath={props.currentPath}
            options={menuOptions}
            getActiveLinkClassName={getActiveLinkClassName}
          >
            <Link
              to="/work/"
              className={classnames(
                styles.link,
                getActiveLinkClassName('/work')
              )}
            >
              Work
            </Link>
          </Dropdown>
          <Link
            to="/about/"
            className={classnames(
              styles.link,
              getActiveLinkClassName('/about')
            )}
          >
            About
          </Link>
          {/* <Link
            to="/contact/"
            className={classnames(
              styles.link,
              getActiveLinkClassName('/contact')
            )}
          >
            Contact
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default Header;
