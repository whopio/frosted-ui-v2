import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_1505_308)">
          <path
            d="M7.4 10.5H4.6C4.48954 10.5 4.4 10.4105 4.4 10.3V6.5C4.4 6.38954 4.31046 6.3 4.2 6.3H2.42701C2.25744 6.3 2.16481 6.10223 2.27336 5.97196L5.84636 1.68437C5.92631 1.58842 6.07369 1.58842 6.15364 1.68437L9.72664 5.97196C9.83519 6.10223 9.74256 6.3 9.57299 6.3H7.8C7.68954 6.3 7.6 6.38954 7.6 6.5V10.3C7.6 10.4105 7.51046 10.5 7.4 10.5Z"
            fill={color}
            fillOpacity=".875"
          />
          <path
            d="M6.72981 1.20423L6.15364 1.68437L6.72981 1.20423C6.35 0.74847 5.65 0.748468 5.27019 1.20423L1.6972 5.49182C1.18156 6.11059 1.62156 7.05 2.42701 7.05H3.65V10.3C3.65 10.8247 4.07533 11.25 4.6 11.25H7.4C7.92467 11.25 8.35 10.8247 8.35 10.3V7.05H9.57299C10.3784 7.05 10.8184 6.11058 10.3028 5.49183L6.72981 1.20423Z"
            stroke={color}
            strokeOpacity=".875"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1505_308">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ArrowFatUpFilled12;