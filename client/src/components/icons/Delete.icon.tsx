import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const Svvg = styled<any>(Svg)`
  .a {
    fill: ${({ fill }) => fill};
  }
`;
const DownloadSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <Svvg width={size} height={size} viewBox="0 0 22.991 26.624" version="1.1" id="Capa_1" fill={color} x="0px" y="0px">
      <g transform="translate(0 0)">
        <path
          className="a"
          d="M65.627,56.588c-.23-.014-.369-.027-.508-.031-.861-.027-1.251-.318-1.233-.925s.411-.87,1.287-.873h3.048c.332,0,.664-.02.993,0,1.081.078,1.871.028,2.412-1.3a3.805,3.805,0,0,1,4.086-2.223,4.152,4.152,0,0,1,3.821,2.913.781.781,0,0,0,.905.616c1.8-.023,3.594-.04,5.391.018a1.53,1.53,0,0,1,1,.587c.125.162-.027.636-.186.882-.112.173-.441.237-.685.284a4.471,4.471,0,0,1-.795.01V73.81c0,2.623-1.406,4.032-4.021,4.034H69.588a3.59,3.59,0,0,1-3.953-3.958V57.506Zm1.8,0V73.983c0,1.447.613,2.05,2.08,2.052H81.211c1.561,0,2.151-.582,2.151-2.128v-16.6c0-.23-.02-.46-.033-.721Zm5.533-1.836h4.847a2.461,2.461,0,0,0-2.331-1.738,2.54,2.54,0,0,0-2.523,1.744Z"
          transform="translate(-63.886 -51.22)"
        />
        <path
          className="a"
          d="M120,125.25v-4.115c0-.726.326-1.135.881-1.135s.885.393.888,1.135q.011,4.184,0,8.371c0,.732-.335,1.135-.887,1.135s-.88-.407-.882-1.135Z"
          transform="translate(-112.039 -110.242)"
        />
        <path
          className="a"
          d="M159.265,125.311V129.5c0,.722-.331,1.135-.884,1.135s-.884-.4-.885-1.135q-.011-4.184,0-8.371c0-.735.333-1.135.885-1.135s.88.407.884,1.135Z"
          transform="translate(-144.209 -110.233)"
        />
      </g>
    </Svvg>
  );
};

export default DownloadSvg;
