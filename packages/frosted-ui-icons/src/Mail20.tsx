import * as React from 'react';
import { IconProps } from './types';

export const Mail20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.75 5.33C0.75 3.90511 1.90511 2.75 3.33 2.75H16.67C18.0949 2.75 19.25 3.90511 19.25 5.33V14.67C19.25 16.0949 18.0949 17.25 16.67 17.25H3.33C1.9051 17.25 0.75 16.0949 0.75 14.67V5.33Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.75 6.75L7.81388 11.5747C8.45803 12.0146 9.21994 12.25 10 12.25V12.25C10.7801 12.25 11.542 12.0146 12.1861 11.5747L19.25 6.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Mail20;
