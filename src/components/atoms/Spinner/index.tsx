import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { ClipLoader } from 'react-spinners';
import { SpinnerProps } from '../../../interfaces/general.interface';
import { getComputedThemeColor } from '../../../utils';

const Wrapper = styled.section<any>``;
export const Spinner = (props: SpinnerProps) => {
  const theme: any = useTheme();
  const { type, size, variant } = props;
  let _size = 20;
  switch (size) {
    case 'xs':
      _size = 10;
      break;
    case 'sm':
      _size = 20;
      break;
    case 'md':
      _size = 20;
      break;
    case 'lg':
      _size = 100;
      break;
    case 'xl':
      _size = 150;
      break;
    default:
      _size = 20;
      break;
  }
  const color = getComputedThemeColor(variant, theme);
  return (
    <Wrapper>
      <section>
        <ClipLoader color={color} loading={true} size={_size} />
      </section>
    </Wrapper>
  );
};

export default Spinner;
