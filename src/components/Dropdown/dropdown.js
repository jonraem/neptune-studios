import { Link } from 'gatsby';
import React from 'react';
import styles from './dropdown.module.css';

export default props => {
  return (
    <div className={styles.dropdown}>
      {props.children}
      <ul className={styles.options}>
        {props.options.map(option => (
          <li className={styles.option}>
            <Link
              to={option.value}
              className={styles.optionLink}
              style={props.getActiveStyleForDropdownWithCurrentPath(
                option.value
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
