import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.82697 9.83333C3.58204 11.9695 5.61931 13.5 8.01404 13.5C11.0516 13.5 13.514 11.0375 13.514 8C13.514 4.96243 11.0516 2.5 8.01404 2.5C6.13591 2.5 4.88064 3.30292 3.66671 4.67261M3.16671 2.66667V4.83333C3.16671 5.10947 3.39057 5.33333 3.66671 5.33333L5.83337 5.33333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default RotateLeft16;
