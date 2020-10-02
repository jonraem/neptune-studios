import { get } from 'lodash';
import { useEffect, useState } from 'react';

const useMedia = query => {
  const matchedMedia =
    typeof window !== 'undefined' ? window.matchMedia(query) : {};
  const [matches, setMatches] = useState(get(matchedMedia, 'matches'));
  useEffect(() => {
    if (!matchedMedia) return matches;
    if (matchedMedia.matches !== matches) setMatches(matchedMedia.matches);
    const listener = () => setMatches(matchedMedia.matches);
    matchedMedia.addListener(listener);
    return () => matchedMedia.removeListener(listener);
  }, [matchedMedia, matches, query]);
  return matches;
};

export default useMedia;
