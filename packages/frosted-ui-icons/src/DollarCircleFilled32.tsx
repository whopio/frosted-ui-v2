import * as React from 'react';
import { IconProps } from './types';

export const DollarCircleFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16ZM10 12.875C10 10.7349 11.7349 9 13.875 9H15.25V6.75C15.25 6.33579 15.5858 6 16 6C16.4142 6 16.75 6.33579 16.75 6.75V9H20.25C20.6642 9 21 9.33579 21 9.75C21 10.1642 20.6642 10.5 20.25 10.5H16.75V15.25H18.125C20.2651 15.25 22 16.9849 22 19.125C22 21.2651 20.2651 23 18.125 23H16.75V25.25C16.75 25.6642 16.4142 26 16 26C15.5858 26 15.25 25.6642 15.25 25.25V23H11.75C11.3358 23 11 22.6642 11 22.25C11 21.8358 11.3358 21.5 11.75 21.5H15.25V16.75H13.875C11.7349 16.75 10 15.0151 10 12.875ZM15.25 15.25V10.5H13.875C12.5633 10.5 11.5 11.5633 11.5 12.875C11.5 14.1867 12.5633 15.25 13.875 15.25H15.25ZM16.75 16.75V21.5H18.125C19.4367 21.5 20.5 20.4367 20.5 19.125C20.5 17.8133 19.4367 16.75 18.125 16.75H16.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default DollarCircleFilled32;
