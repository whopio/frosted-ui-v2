import * as React from 'react';
import { IconProps } from './types';

export const MessageNotification32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 5H6.33335C4.86059 5 3.66669 6.19391 3.66669 7.66667V21.6667C3.66669 23.1395 4.86059 24.3333 6.33335 24.3333H11.5358C11.849 24.3333 12.1523 24.4436 12.3923 24.6448L15.1458 26.9529C15.639 27.3664 16.3572 27.3684 16.853 26.9577L19.6507 24.6399C19.8898 24.4417 20.1907 24.3333 20.5012 24.3333H25.6667C27.1395 24.3333 28.3334 23.1395 28.3334 21.6667V16.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.83331 14.6667C8.83331 15.3109 9.35565 15.8333 9.99998 15.8333C10.6443 15.8333 11.1666 15.3109 11.1666 14.6667C11.1666 14.0224 10.6443 13.5 9.99998 13.5C9.35565 13.5 8.83331 14.0224 8.83331 14.6667ZM14.8333 14.6667C14.8333 15.3109 15.3557 15.8333 16 15.8333C16.6442 15.8333 17.1666 15.3109 17.1666 14.6667C17.1666 14.0224 16.6442 13.5 16 13.5C15.3557 13.5 14.8333 14.0224 14.8333 14.6667ZM20.8333 14.6667C20.8333 15.3109 21.3557 15.8333 22 15.8333C22.6442 15.8333 23.1666 15.3109 23.1666 14.6667C23.1666 14.0224 22.6442 13.5 22 13.5C21.3557 13.5 20.8333 14.0224 20.8333 14.6667Z"
          fill={color}
        />
        <path
          d="M25.3333 12.3334C27.7265 12.3334 29.6667 10.3933 29.6667 8.00002C29.6667 5.60678 27.7265 3.66669 25.3333 3.66669C22.9401 3.66669 21 5.60678 21 8.00002C21 10.3933 22.9401 12.3334 25.3333 12.3334Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default MessageNotification32;
