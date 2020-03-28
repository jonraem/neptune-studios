import React from 'react';
import { Link } from 'gatsby';

export default () => {
  return (
  <div>
    <Link to="/">Main</Link>
    <Link to="/work">Work</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>
  );
};
