import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.5 2.5C7.42487 2.5 2.5 7.42487 2.5 13.5C2.5 19.5751 7.42487 24.5 13.5 24.5C19.5751 24.5 24.5 19.5751 24.5 13.5C24.5 7.42487 19.5751 2.5 13.5 2.5ZM1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M21.3098 21.3098C21.6026 21.0169 22.0775 21.0169 22.3704 21.3098L30.7803 29.7197C31.0732 30.0126 31.0732 30.4874 30.7803 30.7803C30.4874 31.0732 30.0125 31.0732 29.7197 30.7803L21.3098 22.3704C21.0169 22.0775 21.0169 21.6027 21.3098 21.3098Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass32;
