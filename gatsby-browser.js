import React from 'react';

import { MenuProvider } from './src/context/MenuContext';

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);
