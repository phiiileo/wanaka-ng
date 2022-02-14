import { useTheme } from '@emotion/react';
import React from 'react';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const SMFacebook = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 15.0912C30 6.75721 23.2836 0 15 0C6.71637 0 0 6.75721 0 15.0912C0 22.623 5.48451 28.8666 12.6565 30V19.4546H8.84685V15.0912H12.6565V11.7656C12.6565 7.98379 14.8967 5.89338 18.3223 5.89338C19.9634 5.89338 21.6805 6.18836 21.6805 6.18836V9.90233H19.7883C17.9258 9.90233 17.3435 11.0653 17.3435 12.2601V15.0911H21.5032L20.8387 19.4544H17.3434V29.9999C24.5154 28.8686 30 22.6251 30 15.0912Z"
        fill="#0078FF"
      />
    </svg>
  );
};

export default SMFacebook;
