import * as React from 'react';
import { IconProps } from './types';

export const InfoOutline32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 6.5C13.5 5.39543 14.3954 4.5 15.5 4.5C16.6046 4.5 17.5 5.39543 17.5 6.5C17.5 7.60457 16.6046 8.5 15.5 8.5C14.3954 8.5 13.5 7.60457 13.5 6.5ZM15.5 3C13.567 3 12 4.567 12 6.5C12 8.433 13.567 10 15.5 10C17.433 10 19 8.433 19 6.5C19 4.567 17.433 3 15.5 3ZM11.75 12C11.3358 12 11 12.3358 11 12.75C11 13.1642 11.3358 13.5 11.75 13.5H13V27.4999H10.75C10.3358 27.4999 10 27.8357 10 28.2499C10 28.6641 10.3358 28.9999 10.75 28.9999H13.7441L13.75 28.9999L13.7559 28.9999H18.2441L18.25 28.9999L18.2559 28.9999H20.75C21.1642 28.9999 21.5 28.6641 21.5 28.2499C21.5 27.8357 21.1642 27.4999 20.75 27.4999H19V12.75C19 12.3358 18.6642 12 18.25 12H13.75H11.75ZM17.5 27.4999H14.5V13.5H17.5V27.4999Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default InfoOutline32;
