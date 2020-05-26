import React, { useState } from 'react';

const defaultState = {
  isMobile: false,
  setIsMobile: () => {},
  isTablet: false,
  setIsTablet: () => {},
};

const MediaContext = React.createContext(defaultState);

export const MediaProvider = props => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  return (
    <MediaContext.Provider
      value={{
        isMobile,
        setIsMobile,
        isTablet,
        setIsTablet,
      }}
    >
      {props.children}
    </MediaContext.Provider>
  );
};

export default MediaContext;
