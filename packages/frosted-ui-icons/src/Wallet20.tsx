import * as React from 'react';
import { IconProps } from './types';

export const Wallet20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M16.041 5.41668C16.041 4.61126 15.3881 3.95834 14.5827 3.95834H3.29093C2.71563 3.95834 2.24927 4.42471 2.24927 5.00001M2.24927 5.00001V14.375C2.24927 15.2955 2.99546 16.0417 3.91593 16.0417H15.9992C16.9197 16.0417 17.6659 15.2955 17.6659 14.375V7.70834C17.6659 6.78787 16.9197 6.04168 15.9992 6.04168H3.29093C2.71563 6.04168 2.24927 5.57531 2.24927 5.00001ZM14.3743 11.0417C14.3743 11.3868 14.0945 11.6667 13.7493 11.6667C13.4042 11.6667 13.1243 11.3868 13.1243 11.0417C13.1243 10.6965 13.4042 10.4167 13.7493 10.4167C14.0945 10.4167 14.3743 10.6965 14.3743 11.0417Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Wallet20;
