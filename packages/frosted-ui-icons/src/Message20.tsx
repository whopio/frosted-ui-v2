import * as React from 'react';
import { IconProps } from './types';

export const Message20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M0.75 4.46C0.75 2.96331 1.96331 1.75 3.46 1.75H16.54C18.0367 1.75 19.25 2.96331 19.25 4.46V13.04C19.25 14.5367 18.0367 15.75 16.54 15.75H13.025C12.7682 15.75 12.5213 15.8488 12.3353 16.0259L10 18.25L7.76603 16.1224C7.51501 15.8833 7.18165 15.75 6.835 15.75H3.46C1.96331 15.75 0.75 14.5367 0.75 13.04V4.46Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="10"
          cy="9"
          r="1"
          transform="rotate(-90 10 9)"
          fill={color}
        />
        <circle
          cx="14"
          cy="9"
          r="1"
          transform="rotate(-90 14 9)"
          fill={color}
        />
        <circle cx="6" cy="9" r="1" transform="rotate(-90 6 9)" fill={color} />
      </svg>
    );
  },
);

export default Message20;