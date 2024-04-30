import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.49995 14.1668H6.49998C6.13179 14.1668 5.83331 13.8683 5.83331 13.5001V6.83347H3.56023C3.27509 6.83347 3.12159 6.4987 3.30765 6.28263L7.49482 1.42013C7.76075 1.11126 8.23915 1.11126 8.50515 1.42013L12.6923 6.28263C12.8784 6.4987 12.7249 6.83347 12.4397 6.83347H10.1666V13.5001C10.1666 13.8683 9.86815 14.1668 9.49995 14.1668Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatUp16;
