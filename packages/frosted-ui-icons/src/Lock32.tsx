import * as React from 'react';
import { IconProps } from './types';

export const Lock32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 18.55C2.75 16.1752 4.67518 14.25 7.05 14.25H24.95C27.3248 14.25 29.25 16.1752 29.25 18.55V26.95C29.25 29.3248 27.3248 31.25 24.95 31.25H7.05C4.67517 31.25 2.75 29.3248 2.75 26.95V18.55zM6.75 14.25V10C6.75 4.89137 10.8914.75 16 .75V.75C21.1086.75 25.25 4.89137 25.25 10V14.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Lock32;
