import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const Svvg = styled<any>(Svg)``;
const EditSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <Svvg width={size} height={size} viewBox="0 0 28.319 28.31" version="1.1" id="Capa_1" fill={color} x="0px" y="0px">
      <g transform="translate(-57.48 -57.494)">
        <path
          className="a"
          d="M71.6,85.809H61.821c-2.829,0-4.335-1.512-4.336-4.348q-.01-9.821,0-19.645c0-2.787,1.512-4.3,4.289-4.309,3.1-.01,6.2,0,9.3,0h.4c.66.023,1.116.323,1.11,1.016s-.456,1-1.121,1H66.856c-1.779,0-3.558-.01-5.337,0a1.834,1.834,0,0,0-2.014,2.007V81.824a1.8,1.8,0,0,0,1.972,1.957q10.146.013,20.29,0a1.828,1.828,0,0,0,1.991-2.023c.01-3.02,0-6.038,0-9.057,0-.241-.081-.563.042-.71.265-.323.637-.759.97-.76s.691.446.953.767c.125.152.058.467.058.708v8.734c0,2.873-1.509,4.367-4.4,4.367Q76.488,85.816,71.6,85.809Z"
          transform="translate(0 -0.008)"
        />
        <path
          className="a"
          d="M113.236,73.588c-.445-1.76.445-2.9,1.647-4.065,3.851-3.733,7.6-7.563,11.4-11.356.906-.9,1.294-.9,2.206.019q1.687,1.687,3.372,3.377c.734.741.75,1.2.04,1.917q-6.339,6.352-12.706,12.68a1.978,1.978,0,0,1-1.2.5c-1.182.066-2.371.034-3.558.019-.888-.01-1.192-.323-1.207-1.234C113.227,74.83,113.236,74.211,113.236,73.588Zm13.693-7.764-2.732-2.73c-2.866,2.869-5.794,5.8-8.713,8.734a.809.809,0,0,0-.239.485c-.024.77-.011,1.54-.011,2.382a10.378,10.378,0,0,1,1.3.01,2.462,2.462,0,0,0,2.245-.912c2.357-2.436,4.773-4.813,7.181-7.2a9.06,9.06,0,0,1,.967-.76Zm-1.051-4.367,2.567,2.562,1.373-1.333-2.476-2.661Z"
          transform="translate(-46.641)"
        />
      </g>
    </Svvg>
  );
};

export default EditSvg;
