import 'focus-visible';
import React from 'react';
import Menu from './src/components/layouts/menu';
import { MenuProvider } from './src/context/MenuContext';

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);

export const wrapPageElement = ({ element }) => <Menu>{element}</Menu>;
