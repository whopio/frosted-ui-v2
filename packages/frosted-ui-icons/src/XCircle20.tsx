import * as React from 'react';
import { IconProps } from './types';

export const XCircle20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 7.49999L7.49999 12.5M12.5 12.5L7.49999 7.49999M17.7083 9.99999C17.7083 14.2572 14.2572 17.7083 9.99999 17.7083C5.7428 17.7083 2.29166 14.2572 2.29166 9.99999C2.29166 5.7428 5.7428 2.29166 9.99999 2.29166C14.2572 2.29166 17.7083 5.7428 17.7083 9.99999Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default XCircle20;
