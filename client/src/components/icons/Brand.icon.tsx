import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { IconProps } from '../../interfaces';
import { Svg } from './a-style';

const SVVG = styled.svg<any>`
.cls-1{fill:none;}.cls-2{fill:#023102;}.cls-3{fill:#043304;}.cls-4{clip-path:url(#clip-path);}.cls-5{fill:#032563;}.cls-6{fill:#032664;}.cls-7{fill:#032765;}.cls-8{fill:#032866;}.cls-9{fill:#032967;}.cls-10{fill:#032a68;}.cls-11{fill:#032b69;}.cls-12{fill:#032c6a;}.cls-13{fill:#032d6b;}.cls-14{fill:#032e6c;}.cls-15{fill:#032f6d;}.cls-16{fill:#03306e;}.cls-17{fill:#03316f;}.cls-18{fill:#033270;}.cls-19{fill:#033371;}.cls-20{fill:#033472;}.cls-21{fill:#033573;}.cls-22{fill:#033674;}.cls-23{fill:#033775;}.cls-24{fill:#033876;}.cls-25{fill:#033977;}.cls-26{fill:#033a78;}.cls-27{fill:#033b79;}.cls-28{fill:#033c7a;}.cls-29{fill:#033d7b;}.cls-30{fill:#033e7c;}.cls-31{fill:#033f7d;}.cls-32{fill:#03407e;}.cls-33{fill:#03417f;}.cls-34{fill:#034280;}.cls-35{fill:#034381;}.cls-36{fill:#034482;}.cls-37{fill:#034583;}.cls-38{fill:#034684;}.cls-39{fill:#034785;}.cls-40{fill:#044886;}.cls-41{fill:#044987;}.cls-42{fill:#044a88;}.cls-43{fill:#044b89;}.cls-44{fill:#044c8a;}.cls-45{fill:#044d8b;}.cls-46{fill:#044e8c;}.cls-47{fill:#044f8d;}.cls-48{fill:#04508e;}.cls-49{fill:#04518f;}.cls-50{fill:#045290;}.cls-51{fill:#045391;}.cls-52{fill:#045492;}.cls-53{fill:#045593;}.cls-54{fill:#045694;}.cls-55{fill:#045795;}.cls-56{fill:#045896;}.cls-57{fill:#045997;}.cls-58{fill:#045a98;}.cls-59{fill:#045b99;}.cls-60{fill:#045c9a;}.cls-61{fill:#045d9b;}.cls-62{fill:#045e9c;}.cls-63{fill:#045f9d;}.cls-64{fill:#04609e;}.cls-65{fill:#04619f;}.cls-66{fill:#0462a0;}.cls-67{fill:#0463a1;}.cls-68{fill:#0464a2;}.cls-69{fill:#0465a3;}.cls-70{fill:#0466a4;}.cls-71{fill:#0467a5;}.cls-72{fill:#0468a6;}.cls-73{fill:#0469a7;}.cls-74{fill:#046aa8;}.cls-75{fill:#046ba9;}.cls-76{fill:#046caa;}.cls-77{fill:#046dab;}.cls-78{fill:#046eac;}.cls-79{fill:#046fad;}.cls-80{fill:#0470ae;}.cls-81{fill:#0471af;}.cls-82{fill:#0472b0;}.cls-83{fill:#0473b1;}.cls-84{fill:#0474b2;}.cls-85{fill:#0475b3;}.cls-86{fill:#0476b4;}.cls-87{fill:#0477b5;}.cls-88{fill:#0478b6;}.cls-89{fill:#0479b7;}.cls-90{fill:#047ab8;}.cls-91{fill:#047bb9;}.cls-92{fill:#047cba;}.cls-93{fill:#047dbb;}.cls-94{fill:#047ebc;}.cls-95{fill:#047fbd;}.cls-96{fill:#0480be;}.cls-97{fill:#0481bf;}.cls-98{fill:#0482c0;}.cls-99{fill:#0483c1;}.cls-100{fill:#0484c2;}.cls-101{fill:#0485c3;}.cls-102{fill:#0486c4;}.cls-103{fill:#0487c5;}.cls-104{fill:#0488c6;}.cls-105{fill:#0489c7;}.cls-106{fill:#048ac8;}.cls-107{fill:#048bc9;}.cls-108{fill:#048cca;}.cls-109{fill:#048dcb;}.cls-110{fill:#058ecc;}.cls-111{fill:#058fcd;}.cls-112{fill:#0590ce;}.cls-113{fill:#0591cf;}.cls-114{fill:#0592d0;}.cls-115{fill:#0593d1;}.cls-116{fill:#0594d2;}.cls-117{fill:#0595d3;}.cls-118{fill:#0596d4;}.cls-119{fill:#0597d5;}.cls-120{fill:#0598d6;}.cls-121{fill:#0599d7;}.cls-122{fill:#059ad8;}.cls-123{fill:#059bd9;}.cls-124{fill:#059cda;}.cls-125{fill:#059ddb;}.cls-126{fill:#059edc;}.cls-127{fill:#059fdd;}.cls-128{fill:#05a0de;}.cls-129{fill:#05a1df;}.cls-130{fill:#05a2e0;}.cls-131{fill:#05a3e1;}.cls-132{fill:#05a4e2;}.cls-133{fill:#05a5e3;}.cls-134{fill:#05a6e4;}.cls-135{fill:#05a7e5;}.cls-136{fill:#05a8e6;}.cls-137{fill:#05a9e7;}.cls-138{fill:#05aae8;}.cls-139{fill:#05abe9;}.cls-140{fill:#05acea;}.cls-141{fill:#05adeb;}.cls-142{fill:#05aeec;}.cls-143{fill:#05afed;}.cls-144{fill:#05b0ee;}.cls-145{fill:#04a4e2;}.cls-146{fill:#04a3e1;}.cls-147{fill:#04a2e0;}.cls-148{fill:#04a1df;}.cls-149{fill:#04a0de;}.cls-150{fill:#049fdd;}.cls-151{fill:#049edc;}.cls-152{fill:#049ddb;}.cls-153{fill:#049cda;}.cls-154{fill:#049bd9;}.cls-155{fill:#049ad8;}.cls-156{fill:#0499d7;}.cls-157{fill:#0498d6;}.cls-158{fill:#0497d5;}.cls-159{fill:#0496d4;}.cls-160{fill:#0495d3;}.cls-161{fill:#0494d2;}.cls-162{fill:#0493d1;}.cls-163{fill:#0492d0;}.cls-164{fill:#0491cf;}.cls-165{fill:#0490ce;}.cls-166{fill:#048fcd;}.cls-167{fill:#048ecc;}.cls-168{fill:#038dcb;}.cls-169{fill:#038cca;}.cls-170{fill:#038bc9;}.cls-171{fill:#038ac8;}.cls-172{fill:#0389c7;}.cls-173{fill:#0388c6;}.cls-174{fill:#0387c5;}.cls-175{fill:#0386c4;}.cls-176{fill:#0385c3;}.cls-177{fill:#0384c2;}.cls-178{fill:#0383c1;}.cls-179{fill:#0382c0;}.cls-180{fill:#0381bf;}.cls-181{fill:#0380be;}.cls-182{fill:#037fbd;}.cls-183{fill:#037ebc;}.cls-184{fill:#037dbb;}.cls-185{fill:#037cba;}.cls-186{fill:#037bb9;}.cls-187{fill:#037ab8;}.cls-188{fill:#0379b7;}.cls-189{fill:#0378b6;}.cls-190{fill:#0377b5;}.cls-191{fill:#0276b4;}.cls-192{fill:#0275b3;}.cls-193{fill:#0274b2;}.cls-194{fill:#0273b1;}.cls-195{fill:#0272b0;}.cls-196{fill:#0271af;}.cls-197{fill:#0270ae;}.cls-198{fill:#026fad;}.cls-199{fill:#026eac;}.cls-200{fill:#026dab;}.cls-201{fill:#026caa;}.cls-202{fill:#026ba9;
`;
export const LogoutSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;

  return (
    <SVVG width="769" height="733" viewBox="0 0 769 733" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_709_5600)">
        <rect
          x="488.486"
          y="46"
          width="306.01"
          height="641.53"
          transform="rotate(26 488.486 46)"
          fill="url(#pattern0)"
        />
        <rect
          x="35"
          y="246.76"
          width="306.931"
          height="648.258"
          transform="rotate(-16 35 246.76)"
          fill="url(#pattern1)"
        />
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_709_5600" transform="translate(-0.0204344) scale(0.00122455 0.000584112)" />
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_709_5600" transform="translate(-0.0243143) scale(0.00123368 0.000584112)" />
        </pattern>
        <clipPath id="clip0_709_5600">
          <rect width="769" height="733" fill="white" />
        </clipPath>
        <image
          id="image0_709_5600"
          width="850"
          height="1712"
        />
        <image
          id="image1_709_5600"
          width="850"
          height="1712"
        />
      </defs>
    </SVVG>
  );
};

export default LogoutSvg;