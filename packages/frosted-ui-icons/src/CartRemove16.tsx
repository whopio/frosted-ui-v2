import * as React from 'react';
import { IconProps } from './types';

export const CartRemove16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.1667 3.83331L13.2011 9.07485C13.0846 9.70745 12.5331 10.1666 11.8899 10.1666H5.09306C4.45749 10.1666 3.91027 9.71805 3.78562 9.09478L2.4941 2.6372C2.40062 2.16977 1.9902 1.83331 1.51352 1.83331H1.16666M6.96792 6.19871L8.49999 4.66665M8.49999 4.66665L10.0321 3.13458M8.49999 4.66665L6.96792 3.13458M8.49999 4.66665L10.0321 6.19871M6.16666 12.6666C6.16666 13.1269 5.79356 13.5 5.33332 13.5C4.87308 13.5 4.49999 13.1269 4.49999 12.6666C4.49999 12.2064 4.87308 11.8333 5.33332 11.8333C5.79356 11.8333 6.16666 12.2064 6.16666 12.6666ZM12.1667 12.6666C12.1667 13.1269 11.7936 13.5 11.3333 13.5C10.8731 13.5 10.5 13.1269 10.5 12.6666C10.5 12.2064 10.8731 11.8333 11.3333 11.8333C11.7936 11.8333 12.1667 12.2064 12.1667 12.6666Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CartRemove16;
