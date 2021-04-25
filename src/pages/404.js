import React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as NotFoundTitle } from '../assets/svg/404.svg';
import pagesStyles from './404.module.css';

const NotFound = () => (
  <div className={pagesStyles.page}>
    <NotFoundTitle />
    <p className={pagesStyles.description}>
      Diving bell has reached the unexplored trenches!
      <br />
      <Link to="/">Return to the surface?</Link>
    </p>
  </div>
);

export default NotFound;
