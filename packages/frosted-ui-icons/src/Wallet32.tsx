import * as React from 'react';
import { IconProps } from './types';

export const Wallet32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M25.6657 8.66665C25.6657 7.37798 24.6211 6.33331 23.3324 6.33331H5.26564C4.34516 6.33331 3.59897 7.0795 3.59897 7.99998M3.59897 7.99998V23C3.59897 24.4728 4.79288 25.6666 6.26564 25.6666H25.5989C27.0717 25.6666 28.2656 24.4728 28.2656 23V12.3333C28.2656 10.8606 27.0717 9.66665 25.5989 9.66665H5.26564C4.34516 9.66665 3.59897 8.92046 3.59897 7.99998ZM22.9991 17.6666C22.9991 18.2189 22.5513 18.6666 21.9991 18.6666C21.4468 18.6666 20.9991 18.2189 20.9991 17.6666C20.9991 17.1144 21.4468 16.6666 21.9991 16.6666C22.5513 16.6666 22.9991 17.1144 22.9991 17.6666Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Wallet32;