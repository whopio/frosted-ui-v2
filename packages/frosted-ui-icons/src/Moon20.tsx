import * as React from 'react';
import { IconProps } from './types';

export const Moon20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.7067 9.84269C16.8241 10.4667 15.7465 10.8334 14.5833 10.8334C11.5917 10.8334 9.16666 8.40827 9.16666 5.41669C9.16666 4.25349 9.53332 3.17592 10.1573 2.29326C10.105 2.29221 10.0526 2.29169 9.99999 2.29169C5.7428 2.29169 2.29166 5.74283 2.29166 10C2.29166 14.2572 5.7428 17.7084 9.99999 17.7084C14.2572 17.7084 17.7083 14.2572 17.7083 10C17.7083 9.94744 17.7078 9.89502 17.7067 9.84269Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Moon20;
