import * as React from 'react';
import { IconProps } from './types';

export const Codeblock12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.125 4.5L3.97855 5.64645C3.78329 5.8417 3.78329 6.1583 3.97855 6.35355L5.125 7.5M6.875 4.5L8.02145 5.64645C8.2167 5.8417 8.2167 6.1583 8.02145 6.35355L6.875 7.5M2.875 10.125H9.125C9.6773 10.125 10.125 9.6773 10.125 9.125V2.875C10.125 2.32271 9.6773 1.875 9.125 1.875H2.875C2.32271 1.875 1.875 2.32271 1.875 2.875V9.125C1.875 9.6773 2.32271 10.125 2.875 10.125Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Codeblock12;