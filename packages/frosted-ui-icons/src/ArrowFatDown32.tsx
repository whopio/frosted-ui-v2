import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.9999 3.66669H13C12.2636 3.66669 11.6666 4.26363 11.6666 5.00002V18.3334H7.12046C6.55018 18.3334 6.24317 19.003 6.61529 19.4351L14.9896 29.16C15.5215 29.7778 16.4783 29.7778 17.0103 29.16L25.3846 19.4351C25.7567 19.003 25.4498 18.3334 24.8794 18.3334H20.3332V5.00002C20.3332 4.26365 19.7363 3.66669 18.9999 3.66669Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatDown32;
