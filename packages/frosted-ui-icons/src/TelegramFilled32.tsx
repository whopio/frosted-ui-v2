import * as React from 'react';
import { IconProps } from './types';

export const TelegramFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 2.9375C23.4922 2.9375 29.5625 9.00781 29.5625 16.5C29.5625 23.9922 23.4922 30.0625 16 30.0625C8.50781 30.0625 2.4375 23.9922 2.4375 16.5C2.4375 9.00781 8.50781 2.9375 16 2.9375ZM22.6172 12.2344C22.8359 11.3594 22.2891 10.9766 21.6875 11.1953L8.61719 16.2266C7.74219 16.5547 7.74219 17.1016 8.45312 17.3203L11.7891 18.3594L19.5547 13.4375C19.9375 13.2188 20.2656 13.3828 19.9922 13.6016L13.7031 19.2891L13.4844 22.7344C13.8125 22.7344 13.9766 22.5703 14.1406 22.4062L15.7812 20.8203L19.1719 23.3359C19.8281 23.6641 20.2656 23.5 20.4297 22.7344L22.6172 12.2344Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TelegramFilled32;