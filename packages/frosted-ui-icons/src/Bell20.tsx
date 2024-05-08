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
          d="M12.25 15.25V16C12.25 17.2426 11.2426 18.25 10 18.25C8.75736 18.25 7.75 17.2426 7.75 16V15.25M16.25 8V12.6452C16.25 13.0924 16.3999 13.5267 16.6756 13.8787L17.1674 14.5063C17.4039 14.8082 17.1888 15.25 16.8053 15.25H3.19475C2.81121 15.25 2.59611 14.8082 2.83264 14.5063L3.32437 13.8787C3.60014 13.5267 3.75 13.0924 3.75 12.6452V8C3.75 4.54822 6.54822 1.75 10 1.75C13.4518 1.75 16.25 4.54822 16.25 8Z"
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
