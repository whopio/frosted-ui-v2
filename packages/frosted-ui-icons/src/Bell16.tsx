import * as React from 'react';
import { IconProps } from './types';

export const Bell16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.25 12.25V13C10.25 14.2426 9.24264 15.25 8 15.25C6.75736 15.25 5.75 14.2426 5.75 13V12.25M13.25 6V9.68619C13.25 10.1068 13.391 10.5153 13.6504 10.8464L14.1674 11.5063C14.4039 11.8082 14.1888 12.25 13.8053 12.25H2.19475C1.81121 12.25 1.59611 11.8082 1.83264 11.5063L2.34963 10.8464C2.60904 10.5153 2.75 10.1068 2.75 9.68619V6C2.75 3.10051 5.10051 0.75 8 0.75C10.8995 0.75 13.25 3.1005 13.25 6Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bell16;
