import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.4371 9.14814C23.1028 7.54155 21.7052 3.66666 16.0023 3.66666C10.5208 3.66666 8.46525 7.2312 8.46525 9.83332C8.46525 13.8836 12.206 14.9411 16.0023 15.9543M7.95835 22.8519C8.47122 24.4584 10.2993 28.3333 16.0023 28.3333C21.4838 28.3333 23.8819 24.7688 23.8819 22.1667C23.8819 21.1643 23.6528 20.3453 23.2504 19.6648M3.66669 16H28.3334"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough32;
