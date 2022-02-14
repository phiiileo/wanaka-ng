import { Theme } from '../interfaces/general.interface';
import { breakpoints } from './breakpoints';
import { darkColors, lightColors } from './colors';
import { mq } from './media-query';

const buttons = {
  small: {
    fontSize: '1.2rem',
    padding: '0.5rem 1.25rem',
  },
  normal: {
    fontSize: '1.4rem',
    padding: '0.75rem 1.75rem',
  },
  large: {
    fontSize: '1.6rem',
    padding: '1rem 3.0rem',
  },
};

const font = {
  align: {
    center: 'center',
    initial: 'initial',
    left: 'left',
    right: 'right',
  },
  size: {
    largest: '7.0rem',
    larger: '4.0rem',
    large: '3.0rem',
    big: '2.3rem',
    medium: '1.55rem',
    normal: '1.6rem',
    small: '1.4rem',
    tiny: '1.2rem',
    tiniest: '1.0rem',
    inherit: 'inherit',
  },
  weight: {
    light: 'light',
    bold: 'bold',
    medium: '500',
    normal: 'normal',
  },
};

const heading = {
  desktop: {
    h1: '4.0rem',
    h2: '4.0rem',
    h3: '2.5rem',
  },
  mobile: {
    h1: '2.0rem',
    h2: '2.3rem',
    h3: '1.8rem',
  },
};

export const darkTheme = {
  breakpoints: [...Object.values(breakpoints)],
  buttons,
  colors: darkColors,
  font,
  heading,
  mq,
  type: 'dark',
};

export const lightTheme = {
  breakpoints: [...Object.values(breakpoints)],
  buttons,
  colors: lightColors,
  font,
  heading,
  mq,
  type: 'light',
};

export const theme = (mode: string): Theme => (mode === 'dark' ? darkTheme : lightTheme);
