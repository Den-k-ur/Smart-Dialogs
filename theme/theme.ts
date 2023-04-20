// for passing of custom value
const customValue = (val: number) => `${val}px`;

const colors = {
  black: '#000',
  white: '#fff',
  darkBlue: '#4F46E5',
  lightPurple: '#E8E7FF',
};

const fontSizes = {
  sm: '12px',
  md: '16px',
  lg: '22px',
  custom: customValue,
};

export const theme = {
  colors,
  fontSizes,
};
