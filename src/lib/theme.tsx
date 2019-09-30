const VerticalRhythm = require('compass-vertical-rhythm');

const { rhythm } = VerticalRhythm({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
});

const bold = 700;

const shadow = {
  medium: '0 5px 15px rgba(0,0,0,.07)',
  large: '0 15px 35px rgba(50,50,93,.1)',
};
const color = {
  dark: '#1B2125',
  white: '#fff',
  // purple: '#C86DD7',
  purple: '#00FFF4',
  pink: '#ff50d4',
  black: '#000',
  blue: '#80B9FE',
  red: '#CC0000',
  yellow: '#F8DC57',
  green: '#1CF5BA',
  grayDarker: '#2D3748',
  gray: '#4a5568',
  grayLighter: '#718096',
  grayLightest: '#A0AEC0',
  grayLightestest: '#CBD5E0',
  offWhiteLightest: '#F7FBFB',
  offWhiteLighter: '#EFF7F8',
  offWhite: '#EFEFEF',
  twitter: '#1da1f2',
  github: '#000',
  instagram: '#ed4956',
  facebook: '#4267b2',
  linkedin: '#0073b1',
  dribbble: '#c142a0',
};

const media = {
  small: '@media (min-width: 500px)',
  medium: '@media (min-width: 800px)',
  large: '@media (min-width: 1200px)',
};

export const theme = {
  rhythm,
  media,
  color,
  shadow,
  bold,
};
