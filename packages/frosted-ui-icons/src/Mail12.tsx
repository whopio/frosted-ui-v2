import * as React from 'react';
import { IconProps } from './types';

export const Mail12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M0.750053 3.49996L4.0972 5.68404C4.66312 6.05331 5.32426 6.24994 6 6.24994C6.67574 6.24994 7.33688 6.05331 7.9028 5.68404L11.2499 3.49996M2.26004 10.2499H9.73996C10.5739 10.2499 11.2499 9.57385 11.2499 8.73991V3.25997C11.2499 2.42603 10.5739 1.74998 9.73996 1.74998H2.26004C1.4261 1.74998 0.750053 2.42603 0.750053 3.25997V8.73991C0.750053 9.57385 1.4261 10.2499 2.26004 10.2499Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Mail12;
