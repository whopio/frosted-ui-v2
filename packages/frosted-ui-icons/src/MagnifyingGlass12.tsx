import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.24992 0C2.35047 0 0 2.35047 0 5.24992C0 8.14937 2.35047 10.4998 5.24992 10.4998C6.4292 10.4998 7.51767 10.111 8.39411 9.45456L10.7197 11.7801C11.0126 12.073 11.4875 12.073 11.7804 11.7801C12.0732 11.4872 12.0732 11.0123 11.7803 10.7194L9.45473 8.39389C10.1111 7.51749 10.4998 6.42911 10.4998 5.24992C10.4998 2.35047 8.14937 0 5.24992 0ZM1.49998 5.24992C1.49998 3.17888 3.17888 1.49998 5.24992 1.49998C7.32096 1.49998 8.99986 3.17888 8.99986 5.24992C8.99986 7.32096 7.32096 8.99986 5.24992 8.99986C3.17888 8.99986 1.49998 7.32096 1.49998 5.24992Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass12;
