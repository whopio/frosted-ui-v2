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
          d="M20 3C21.2 1.2 23.2 0 25.5 0C29.1 0 32 2.9 32 6.5C32 9 30.6 11.2 28.5 12.2V20.2C28.5 22.9 26.3 25 23.7 25H19.4C19.2 25 19 25.1 18.9 25.2L15.2 28.8C15 29.1 14.5 29.1 14.2 28.8L10.5 25.2C10.4 25.1 10.2 25 10 25H5.8C3.1 25 1 22.9 1 20.3V7.8C1 5.1 3.1 3 5.8 3H20ZM23.8 23.4C25.5 23.4 27 22 27 20.2H27.1V12.8C26.6 12.9 26.1 13 25.6 13C22 13 19.1 10.1 19.1 6.5C19.1 5.8 19.2 5.1 19.4 4.5H5.8C4 4.5 2.5 6 2.6 7.8V20.2C2.6 21.9 4 23.4 5.8 23.4H9.9C10.5 23.4 11.1 23.6 11.5 24L14.7 27.1L17.9 24C18.4 23.6 18.9 23.4 19.5 23.4H23.8ZM27 11.3C27.5 11.1 28.1 10.8 28.5 10.5C29.7 9.6 30.5 8.1 30.5 6.6C30.5 3.8 28.3 1.6 25.5 1.6C24.1 1.6 22.8 2.2 21.9 3.1C21.5 3.5 21.1 4 20.9 4.6C20.7 5.2 20.5 5.9 20.5 6.6C20.5 9.4 22.7 11.6 25.5 11.6C26 11.6 26.5 11.5 27 11.3ZM9.19999 14.2C9.19999 14.8627 8.66273 15.4 7.99999 15.4C7.33725 15.4 6.79999 14.8627 6.79999 14.2C6.79999 13.5373 7.33725 13 7.99999 13C8.66273 13 9.19999 13.5373 9.19999 14.2ZM16 14.2C16 14.8627 15.4627 15.4 14.8 15.4C14.1372 15.4 13.6 14.8627 13.6 14.2C13.6 13.5373 14.1372 13 14.8 13C15.4627 13 16 13.5373 16 14.2ZM21.5 15.4C22.1627 15.4 22.7 14.8627 22.7 14.2C22.7 13.5373 22.1627 13 21.5 13C20.8372 13 20.3 13.5373 20.3 14.2C20.3 14.8627 20.8372 15.4 21.5 15.4Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MessageNotification32;
