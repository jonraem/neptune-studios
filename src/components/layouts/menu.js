import React, { useContext } from 'react';
import ReactModal from 'react-modal';
import MenuContext from '../../context/MenuContext';
import Menu from '../Menu/menu';

ReactModal.setAppElement('#___gatsby');

const MenuLayout = props => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{ overlay: { zIndex: 1 } }}
        contentLabel="Menu"
      >
        <Menu currentPath={props.currentPath} />
      </ReactModal>
      {props.children}
    </>
  );
};

export default MenuLayout;
