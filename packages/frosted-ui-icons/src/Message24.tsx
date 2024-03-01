import * as React from 'react';
import { IconProps } from './types';

export const Message24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 6.75C1.75 5.09315 3.09315 3.75 4.75 3.75H19.25C20.9069 3.75 22.25 5.09315 22.25 6.75V16.25C22.25 17.9069 20.9069 19.25 19.25 19.25H15.7285C15.3412 19.25 14.969 19.3998 14.6897 19.6679L12 22.25L9.31033 19.6679C9.03099 19.3998 8.65876 19.25 8.27153 19.25H4.75C3.09315 19.25 1.75 17.9069 1.75 16.25V6.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="11.25"
          r="1.25"
          transform="rotate(-90 12 11.25)"
          fill={color}
        />
        <circle
          cx="7.25"
          cy="11.25"
          r="1.25"
          transform="rotate(-90 7.25 11.25)"
          fill={color}
        />
        <circle
          cx="16.75"
          cy="11.25"
          r="1.25"
          transform="rotate(-90 16.75 11.25)"
          fill={color}
        />
      </svg>
    );
  },
);

export default Message24;
