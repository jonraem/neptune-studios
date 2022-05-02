import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { get, includes, sortBy } from 'lodash';

export const getActiveColorFromPath = pathName => {
  switch (pathName) {
    case '/':
    case '/main/':
      return '#5dbbe3';
    case '/work/':
      return '#21b8bf';
    case '/work/vare/':
      return '#5dbbe3';
    case '/work/abb/':
      return '#21b8bf';
    case '/work/macgregor/':
      return '#3d68b0';
    case '/work/various/':
      return '#5dbbe3';
    case '/about/':
      return '#3d68b0';
    case '/contact/':
      return '#3d68b0';
    default:
      return '#808080';
  }
};

export const isLinkPathCurrentPath = (pathName, currentPath) =>
  pathName === '/' ? currentPath === pathName : includes(currentPath, pathName);

export const getSortedCases = (cases, sortOrder) =>
  sortBy(cases, item => sortOrder.indexOf(item.node.contentfulid));

export const initializeScrollTrigger = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
};

export const findQuote = (data, id) => {
  return get(
    data.quotation.edges.find(edge => edge.node.contentfulid === id),
    'node'
  );
};

export const getYPositionsForFeatureDescriptions = contentfulId => {
  switch (contentfulId) {
    case 'work:vare:showcase1':
      return [
        '12rem',
        '32rem',
        '37rem',
        '52rem',
        '68rem',
        '68rem',
        '84rem',
        '84rem',
        '100rem',
        '112rem',
      ];
    default:
      return [];
  }
};
