import * as React from 'react';
import { IconProps } from './types';

export const Mail24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M0.750086 7.74994L9.52685 13.5107C10.2615 13.993 11.1212 14.2499 12 14.2499C12.8788 14.2499 13.7385 13.993 14.4731 13.5107L23.2499 7.74994M3.86006 20.7498H20.1399C21.8575 20.7498 23.2499 19.3575 23.2499 17.6399V6.35995C23.2499 4.64236 21.8575 3.24998 20.1399 3.24998H3.86006C2.14247 3.24998 0.750086 4.64236 0.750086 6.35995V17.6399C0.750086 19.3575 2.14247 20.7498 3.86006 20.7498Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Mail24;
