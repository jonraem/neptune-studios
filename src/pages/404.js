import React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as NotFoundTitle } from '../assets/svg/404-title.svg';
import { ReactComponent as NotFoundIllustration } from '../assets/svg/404-illustration.svg';
import pagesStyles from './404.module.css';

const NotFound = () => (
  <div className={pagesStyles.page}>
    <NotFoundTitle className={pagesStyles.title} />
    <p className={pagesStyles.description}>
      Diving bell has reached the unexplored trenches!
      <br />
      <Link to="/">Return to the surface?</Link>
    </p>
    <NotFoundIllustration className={pagesStyles.illustration} />
  </div>
);

export default NotFound;
