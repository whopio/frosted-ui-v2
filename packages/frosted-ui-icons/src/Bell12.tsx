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
          d="M6.00001 0C3.23859 0 1.00001 2.23858 1.00001 5V6.66709C1.00001 7.27514 0.814449 7.8687 0.468122 8.36847L0.282995 8.63563C-0.336092 9.52902 0.303306 10.75 1.39023 10.75H4.75001C4.75001 11.4404 5.30965 12 6.00001 12C6.69036 12 7.25001 11.4404 7.25001 10.75H10.6098C11.6967 10.75 12.3361 9.52902 11.717 8.63563L11.5319 8.36847C11.1856 7.8687 11 7.27514 11 6.66709V5C11 2.23858 8.76143 0 6.00001 0ZM2.50001 5C2.50001 3.067 4.06701 1.5 6.00001 1.5C7.93301 1.5 9.50001 3.067 9.50001 5V6.66709C9.50001 7.58047 9.77875 8.4721 10.299 9.22284L10.3178 9.25H1.68221L1.70103 9.22284C2.22127 8.4721 2.50001 7.58047 2.50001 6.66709V5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Bell12;
