import { css } from '@emotion/react';
import { breakpoints } from './breakpoints';

export const mq = Object.keys(breakpoints).reduce((acc: any, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
