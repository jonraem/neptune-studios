import classnames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import { isLinkPathCurrentPath } from '../../utils/helpers';
import * as styles from './dropdown.module.css';

const getOptionClassNameBasedOnPath = pathName => {
  switch (pathName) {
    case '/work/vare/':
      return styles.vareOption;
    case '/work/abb/':
      return styles.abbOption;
    case '/work/macgregor/':
      return styles.macgregorOption;
    case '/work/various/':
      return styles.variousOption;
    default:
      return undefined;
  }
};

const Dropdown = props => {
  const getActiveLinkClassName = pathName =>
    isLinkPathCurrentPath(pathName, props.currentPath)
      ? styles.activeOptionLink
      : undefined;

  return (
    <div className={styles.dropdown}>
      {props.children}
      <ul className={styles.options}>
        {props.options.map((option, index) => (
          <li
            key={`${option.value}${index}`}
            className={classnames(
              styles.option,
              getOptionClassNameBasedOnPath(option.value)
            )}
          >
            <Link
              to={option.value}
              className={classnames(
                styles.optionLink,
                getActiveLinkClassName(option.value)
              )}
            >
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
