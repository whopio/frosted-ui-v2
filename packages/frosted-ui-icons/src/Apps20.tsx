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
          d="M9.99994 0.749991V3.74995M9.99994 3.74995C8.20504 3.74995 6.74998 5.20501 6.74998 6.99991C6.74998 8.79482 8.20504 10.2499 9.99994 10.2499C11.7948 10.2499 13.2499 8.79482 13.2499 6.99991C13.2499 5.20501 11.7948 3.74995 9.99994 3.74995ZM8.23943 9.73218L3.75002 19.2497M16.2499 19.2497L11.7604 9.73218M16.9999 11.9999C16.9999 11.9999 15.0295 15.9998 10 15.9998C4.97055 15.9998 3.00009 11.9999 3.00009 11.9999"
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
