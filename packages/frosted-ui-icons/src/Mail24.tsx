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
          d="M0.750057 7.74996L9.52685 13.5108C10.2615 13.993 11.1212 14.2499 12 14.2499C12.8788 14.2499 13.7385 13.993 14.4732 13.5108L23.2499 7.74996M3.86004 20.7499H20.14C21.8576 20.7499 23.2499 19.3575 23.2499 17.6399V6.35997C23.2499 4.64237 21.8576 3.24998 20.14 3.24998H3.86004C2.14244 3.24998 0.750057 4.64237 0.750057 6.35997V17.6399C0.750057 19.3575 2.14245 20.7499 3.86004 20.7499Z"
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
