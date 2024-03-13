import * as React from 'react';
import { IconProps } from './types';

export const Apps16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99994 0.749994V2.74998M7.99994 2.74998C6.75731 2.74998 5.74996 3.75733 5.74996 4.99996C5.74996 6.24259 6.75731 7.24994 7.99994 7.24994C9.24257 7.24994 10.2499 6.24259 10.2499 4.99996C10.2499 3.75733 9.24257 2.74998 7.99994 2.74998ZM6.81997 6.91608L2.74998 15.2499M13.2499 15.2499L9.1799 6.91608M14.2499 8.99993C14.2499 8.99993 12.209 12.2499 7.99994 12.2499C3.79083 12.2499 1.74999 8.99993 1.74999 8.99993"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Apps16;
