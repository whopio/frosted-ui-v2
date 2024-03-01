import * as React from 'react';
import { IconProps } from './types';

export const Split24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.25 18.5H16.5419C15.4382 18.5 14.4237 17.894 13.9005 16.9223L11.25 12 13.9005 7.0777C14.4237 6.10597 15.4382 5.5 16.5419 5.5H22.25M22.25 18.5L18.75 22.25M22.25 18.5L18.75 14.75M22.25 5.5L18.75 9.25M22.25 5.5L18.75 1.75M11.25 12L7.25 12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="4"
          cy="12"
          r="3.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Split24;
