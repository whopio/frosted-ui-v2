import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircle20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.66666 10V9.99169M6.87499 10C6.87499 10.1151 6.78172 10.2084 6.66666 10.2084 6.5516 10.2084 6.45833 10.1151 6.45833 10 6.45833 9.88494 6.5516 9.79169 6.66666 9.79169 6.78172 9.79169 6.87499 9.88494 6.87499 10zM10 10V9.99169M10.2083 10C10.2083 10.1151 10.1151 10.2084 10 10.2084 9.88492 10.2084 9.79167 10.1151 9.79167 10 9.79167 9.88494 9.88492 9.79169 10 9.79169 10.1151 9.79169 10.2083 9.88494 10.2083 10zM13.3333 10V9.99169M13.5417 10C13.5417 10.1151 13.4484 10.2084 13.3333 10.2084 13.2182 10.2084 13.125 10.1151 13.125 10 13.125 9.88494 13.2182 9.79169 13.3333 9.79169 13.4484 9.79169 13.5417 9.88494 13.5417 10z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17.7083 10C17.7083 14.2572 14.2572 17.7084 10 17.7084C5.74281 17.7084 2.29167 14.2572 2.29167 10C2.29167 5.74283 5.74281 2.29169 10 2.29169C14.2572 2.29169 17.7083 5.74283 17.7083 10Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ThreeDotsCircle20;
