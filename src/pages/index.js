import React, { useState, useEffect, useContext } from 'react';
import { get } from 'lodash';
import Menu from '../components/menu';
import Main from './main';
import MediaContext from '../context/MediaContext';
import MenuContext from '../context/MenuContext';
import 'focus-visible';

export default props => {
  const { setIsMobile, setIsTablet } = useContext(MediaContext);
  const { isOpen } = useContext(MenuContext);

  // Custom media query hook
  const useMedia = (query, matchMedia = () => {}) => {
    const [matches, setMatches] = useState(get(matchMedia(query), 'matches'));
    useEffect(() => {
      const media = matchMedia(query);
      if (media.matches !== matches) setMatches(media.matches);
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query, matchMedia]);
    return matches;
  };

  const isMobile = useMedia('(max-width: 480px)', window.matchMedia);
  const isTablet = useMedia('(max-width: 992px)', window.matchMedia);

  useEffect(() => {
    setIsMobile(isMobile);
    setIsTablet(isTablet);
  }, [isMobile, isTablet, setIsMobile, setIsTablet]);

  return (
    <>
      {isOpen && <Menu />}
      <Main {...props} />
    </>
  );
};
