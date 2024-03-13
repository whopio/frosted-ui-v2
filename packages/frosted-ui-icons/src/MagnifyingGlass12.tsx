import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          fill={color}
          clipPath="url(#clip0_526_212)"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M5.25 1.5C3.17893 1.5 1.5 3.17893 1.5 5.25C1.5 7.32107 3.17893 9 5.25 9C7.32107 9 9 7.32107 9 5.25C9 3.17893 7.32107 1.5 5.25 1.5ZM0 5.25C0 2.3505 2.35051 0 5.25 0C8.1495 0 10.5 2.3505 10.5 5.25C10.5 8.1495 8.1495 10.5 5.25 10.5C2.35051 10.5 0 8.1495 0 5.25Z" />
          <path d="M10.7199 11.7803L8.02469 9.08518C7.7318 8.79229 7.73179 8.31741 8.02468 8.02452C8.31757 7.73162 8.79244 7.73161 9.08534 8.0245L11.7805 10.7196C12.0734 11.0125 12.0734 11.4874 11.7805 11.7803C11.4876 12.0732 11.0128 12.0732 10.7199 11.7803Z" />
        </g>
        <defs>
          <clipPath id="clip0_526_212">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default MagnifyingGlass12;
