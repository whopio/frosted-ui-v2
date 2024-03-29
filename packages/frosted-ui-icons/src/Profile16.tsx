import * as React from 'react';
import { IconProps } from './types';

export const Profile16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5007 4.33331C10.5007 5.71403 9.38145 6.83331 8.00072 6.83331 6.62002 6.83331 5.50073 5.71403 5.50073 4.33331 5.50073 2.9526 6.62002 1.83331 8.00072 1.83331 9.38145 1.83331 10.5007 2.9526 10.5007 4.33331zM8.00073 8.83331C5.73998 8.83331 4.02474 10.1762 3.3224 12.0752 3.04986 12.8121 3.67962 13.5 4.4653 13.5H11.5362C12.3219 13.5 12.9516 12.8121 12.6791 12.0752 11.9767 10.1762 10.2615 8.83331 8.00073 8.83331z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Profile16;