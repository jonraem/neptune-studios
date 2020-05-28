export const getActiveColorFromPath = pathName => {
  switch (pathName) {
    case '/':
    case '/main':
      return '#5dbbe3';
    case '/work':
      return '#21b8bf';
    case '/about':
      return '#e23c52';
    case '/contact':
      return '#3d68b0';
    default:
      return '0e0c3c';
  }
};
