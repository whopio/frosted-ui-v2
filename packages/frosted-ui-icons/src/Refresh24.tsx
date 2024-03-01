import * as React from 'react';
import { IconProps } from './types';

export const Refresh24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 10.25C1.75 8.25 4.09714 1.75 11.25 1.75C18.2761 1.75 20.9065 8.02159 20.9975 10.1395"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.75 10.25H20.75C21.5784 10.25 22.25 9.57843 22.25 8.75V3.75M22.25 13.75C22.25 15.75 19.9029 22.25 12.75 22.25 5.72394 22.25 3.09351 15.9784 3.00246 13.8605"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 13.75H3.25C2.42157 13.75 1.75 14.4216 1.75 15.25V20.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Refresh24;
