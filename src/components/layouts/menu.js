import React, { useContext } from 'react';
import MenuContext from '../../context/MenuContext';
import Menu from '../menu';

export default props => {
  const { isOpen } = useContext(MenuContext);
  return (
    <>
      {isOpen && <Menu currentPath={props.currentPath} />}
      {props.children}
    </>
  );
};
