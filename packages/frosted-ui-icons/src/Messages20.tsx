import * as React from 'react';
import { IconProps } from './types';

export const Messages20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.3748 11.875H16.0433C16.9638 11.875 17.71 11.1288 17.71 10.2083V4.79167C17.71 3.87119 16.9638 3.125 16.0433 3.125H7.50164C6.58116 3.125 5.83497 3.87119 5.83497 4.79167V6.45833M12.71 6.45833H3.95997C3.0395 6.45833 2.2933 7.20453 2.2933 8.125V13.5417C2.2933 14.4622 3.0395 15.2083 3.95997 15.2083H5.00164V17.2917L8.75168 15.2083H12.71C13.6304 15.2083 14.3767 14.4622 14.3767 13.5417V8.125C14.3767 7.20453 13.6304 6.45833 12.71 6.45833Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Messages20;
