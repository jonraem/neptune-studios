import { get } from 'lodash';
import { useEffect, useState } from 'react';

const useMedia = query => {
  const [matches, setMatches] = useState(
    get(window.matchMedia(query), 'matches')
  );
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  console.log(matches);
  return matches;
};

export default useMedia;
