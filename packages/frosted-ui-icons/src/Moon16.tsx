import * as React from 'react';
import { IconProps } from './types';

export const Moon16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.1654 7.87411C13.4593 8.37331 12.5972 8.66665 11.6667 8.66665C9.27341 8.66665 7.33334 6.72658 7.33334 4.33331C7.33334 3.40275 7.62668 2.5407 8.12588 1.83457C8.08401 1.83373 8.04208 1.83331 8.00001 1.83331C4.59426 1.83331 1.83334 4.59423 1.83334 7.99998C1.83334 11.4057 4.59426 14.1666 8.00001 14.1666C11.4057 14.1666 14.1667 11.4057 14.1667 7.99998C14.1667 7.95791 14.1663 7.91598 14.1654 7.87411Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Moon16;
