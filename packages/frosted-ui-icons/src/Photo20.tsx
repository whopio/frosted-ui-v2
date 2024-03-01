import * as React from 'react';
import { IconProps } from './types';

export const Photo20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 15.13V4.87C1.75 3.14687 3.14687 1.75 4.87 1.75H15.13C16.8531 1.75 18.25 3.14687 18.25 4.87V15.13C18.25 16.8531 16.8531 18.25 15.13 18.25H4.87C3.14687 18.25 1.75 16.8531 1.75 15.13Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.75 13L4.71651 9.51877C4.99699 9.18962 5.4077 9 5.84015 9V9C6.25296 9 6.64691 9.17285 6.92645 9.47661L15 18.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12.5"
          cy="7.5"
          r="1.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Photo20;
