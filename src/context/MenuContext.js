import React, { useState } from 'react';

const defaultState = {
  isOpen: false,
  setIsOpen: () => {},
};

const MenuContext = React.createContext(defaultState);

export const MenuProvider = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
