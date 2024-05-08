import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.49995 1.83331H6.49998C6.13179 1.83331 5.83331 2.13179 5.83331 2.49998V9.16665H3.56023C3.27509 9.16665 3.12159 9.50145 3.30765 9.71751L7.49482 14.58C7.76075 14.8888 8.23915 14.8888 8.50515 14.58L12.6923 9.71751C12.8784 9.50145 12.7249 9.16665 12.4397 9.16665H10.1666V2.49998C10.1666 2.13179 9.86815 1.83331 9.49995 1.83331Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatDown16;
