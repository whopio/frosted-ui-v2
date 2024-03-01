import * as React from 'react';
import { IconProps } from './types';

export const Bell20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.25 12.6452V8C16.25 4.54822 13.4518 1.75 10 1.75 6.54822 1.75 3.75 4.54822 3.75 8V12.6452C3.75 13.0924 3.60014 13.5267 3.32437 13.8787L2.83264 14.5063C2.59611 14.8082 2.81121 15.25 3.19475 15.25H16.8053C17.1888 15.25 17.4039 14.8082 17.1674 14.5063L16.6756 13.8787C16.3999 13.5267 16.25 13.0924 16.25 12.6452zM7.75 15.25V16C7.75 17.2426 8.75736 18.25 10 18.25V18.25C11.2426 18.25 12.25 17.2426 12.25 16V15.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bell20;
