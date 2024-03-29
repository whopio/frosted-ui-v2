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
          d="M23.4371 9.14811C23.1028 7.54152 21.7052 3.66663 16.0023 3.66663C10.5208 3.66663 8.46522 7.23117 8.46522 9.83329C8.46522 13.8836 12.206 14.941 16.0023 15.9542M7.95832 22.8518C8.47119 24.4584 10.2993 28.3333 16.0023 28.3333C21.4837 28.3333 23.8819 24.7688 23.8819 22.1666C23.8819 21.1642 23.6528 20.3453 23.2504 19.6648M3.66666 16H28.3333"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough32;