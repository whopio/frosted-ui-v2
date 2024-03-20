import * as React from 'react';
import { IconProps } from './types';

export const Apps20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 0.749995V3.74998M10 3.74998C8.20509 3.74998 6.75002 5.20504 6.75002 6.99996C6.75002 8.79487 8.20509 10.2499 10 10.2499C11.7949 10.2499 13.25 8.79487 13.25 6.99996C13.25 5.20504 11.7949 3.74998 10 3.74998ZM8.23948 9.73224L3.75004 19.2499M16.25 19.2499L11.7605 9.73224M17 11.9999C17 11.9999 15.0295 15.9999 10.0001 15.9999C4.97058 15.9999 3.0001 11.9999 3.0001 11.9999"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Apps20;
