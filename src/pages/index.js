import React, { useState, useEffect, useContext } from 'react';
import Menu from '../components/menu';
import Main from './main';
import MenuContext from '../context/MenuContext';

export default props => {
  const { isOpen } = useContext(MenuContext);

  return (
    <>
      {isOpen && <Menu />}
      <Main {...props} />
    </>
  );
};
