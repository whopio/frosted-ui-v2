import * as React from 'react';
import { IconProps } from './types';

export const Message16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1.83334 3.83333C1.83334 3.09695 2.4303 2.5 3.16668 2.5H12.8333C13.5697 2.5 14.1667 3.09695 14.1667 3.83333V10.8333C14.1667 11.5697 13.5697 12.1667 12.8333 12.1667H10.2506C10.0953 12.1667 9.94488 12.2209 9.82534 12.3199L8.42648 13.4789C8.17861 13.6842 7.81948 13.6832 7.57288 13.4765L6.19616 12.3224C6.07613 12.2218 5.92451 12.1667 5.76789 12.1667H3.16668C2.4303 12.1667 1.83334 11.5697 1.83334 10.8333V3.83333Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M4.41666 7.33333C4.41666 7.65547 4.67782 7.91667 4.99999 7.91667C5.32216 7.91667 5.58332 7.65547 5.58332 7.33333C5.58332 7.0112 5.32216 6.75 4.99999 6.75C4.67782 6.75 4.41666 7.0112 4.41666 7.33333ZM7.41666 7.33333C7.41666 7.65547 7.67786 7.91667 7.99999 7.91667C8.32212 7.91667 8.58332 7.65547 8.58332 7.33333C8.58332 7.0112 8.32212 6.75 7.99999 6.75C7.67786 6.75 7.41666 7.0112 7.41666 7.33333ZM10.4167 7.33333C10.4167 7.65547 10.6779 7.91667 11 7.91667C11.3221 7.91667 11.5833 7.65547 11.5833 7.33333C11.5833 7.0112 11.3221 6.75 11 6.75C10.6779 6.75 10.4167 7.0112 10.4167 7.33333Z"
          fill={color}
          stroke={color}
          strokeWidth=".75"
          strokeLinecap="square"
        />
      </svg>
    );
  },
);

export default Message16;
