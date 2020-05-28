import 'focus-visible';
import React from 'react';
import MenuLayout from './src/components/layouts/menu';
import { MenuProvider } from './src/context/MenuContext';

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <MenuLayout currentPath={props.location.pathname}>{element}</MenuLayout>
);
