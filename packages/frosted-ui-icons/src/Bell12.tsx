import * as React from 'react';
import { IconProps } from './types';

export const Bell12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 0C3.23858 0 1 2.23858 1 5V6.66709C1 7.27514 0.814441 7.8687 0.468114 8.36847L0.282988 8.63563C-0.336099 9.52902 0.303298 10.75 1.39022 10.75H4.75C4.75 11.4404 5.30965 12 6 12C6.69036 12 7.25 11.4404 7.25 10.75H10.6098C11.6967 10.75 12.3361 9.52902 11.717 8.63563L11.5319 8.36847C11.1856 7.8687 11 7.27514 11 6.66709V5C11 2.23858 8.76143 0 6 0ZM2.5 5C2.5 3.067 4.067 1.5 6 1.5C7.933 1.5 9.5 3.067 9.5 5V6.66709C9.5 7.58047 9.77874 8.4721 10.299 9.22284L10.3178 9.25H1.6822L1.70102 9.22284C2.22126 8.4721 2.5 7.58047 2.5 6.66709V5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Bell12;
