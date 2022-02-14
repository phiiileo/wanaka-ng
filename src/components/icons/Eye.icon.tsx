import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const Svvg = styled<any>(Svg)`
  .a {
    fill: #01013f;
  }
`;
const EyeSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <Svvg
      width={size}
      height={size}
      viewBox="0 0 34.306 27.362"
      version="1.1"
      id="Capa_1"
      fill={color}
      x="0px"
      y="0px"
      {...props}
    >
      <g transform="translate(-91.275 -102.035)">
        <path
          className="a"
          d="M119.593,122.186c1.66,1.277,3.351,2.649,5.107,3.932.958.7,1.219,1.3.364,2.32-.753.894-1.277,1.382-2.442.476Q107.407,117.06,92.107,105.3c-.957-.747-1.12-1.34-.319-2.339s1.388-1.277,2.461-.373c1.7,1.439,3.54,2.719,5.263,4.149a1.6,1.6,0,0,0,1.972.207,17.066,17.066,0,0,1,21.732,7.006,2.921,2.921,0,0,1-.073,3.654Zm-16.035-12.352c1.3.983,2.509,1.893,4.009,3.022-.124-.938-.2-1.5-.271-2.055,3.511-.68,6.489,1.6,6.2,5.036-.147,1.73.693,2.314,1.88,2.962a7.452,7.452,0,0,0-2.081-9.09,7.684,7.684,0,0,0-9.741.124Z"
          transform="translate(0 0)"
        />
        <path
          className="a"
          d="M99.036,133.44c1.621,1.261,3.275,2.5,4.864,3.83a2.569,2.569,0,0,1,.715,1.315c1.025,4.044,3.9,6.169,8.072,6.332,1.2.045,2.365,1,3.466,1.775a12.8,12.8,0,0,1-7.251.4,16.916,16.916,0,0,1-10.552-6.878C96.224,137.27,96.342,136.191,99.036,133.44Z"
          transform="translate(-3.811 -21.381)"
        />
      </g>
    </Svvg>
  );
};

export default EyeSvg;
