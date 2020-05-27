import React, { useContext } from 'react';
import MenuContext from '../../context/MenuContext';
import Menu from '../menu';

export default ({ children }) => {
  const { isOpen } = useContext(MenuContext);
  return (
    <>
      {isOpen && <Menu />}
      {children}
    </>
  );
};
