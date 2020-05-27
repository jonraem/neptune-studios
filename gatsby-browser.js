import 'focus-visible';
import React from 'react';

import { MediaProvider } from './src/context/MediaContext';
import { MenuProvider } from './src/context/MenuContext';

export const wrapRootElement = ({ element }) => (
  <MediaProvider>
    <MenuProvider>{element}</MenuProvider>
  </MediaProvider>
);
