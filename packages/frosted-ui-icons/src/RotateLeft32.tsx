import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M5.65388 19.6667C7.16402 23.9391 11.2385 27 16.028 27C22.1031 27 27.028 22.0751 27.028 16C27.028 9.92487 22.1031 5 16.028 5C12.2717 5 9.76122 6.60584 7.33335 9.34521M6.33335 5.33333V9.66667C6.33335 10.2189 6.78108 10.6667 7.33335 10.6667L11.6667 10.6667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default RotateLeft32;
