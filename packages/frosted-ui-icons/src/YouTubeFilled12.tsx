import * as React from 'react';
import { IconProps } from './types';

export const YouTubeFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M11.0977 3.69141C11.332 4.51172 11.332 6.26953 11.332 6.26953C11.332 6.26953 11.332 8.00781 11.0977 8.84766C10.9805 9.31641 10.6094 9.66797 10.1602 9.78516C9.32031 10 6 10 6 10C6 10 2.66016 10 1.82031 9.78516C1.37109 9.66797 1 9.31641 0.882812 8.84766C0.648438 8.00781 0.648438 6.26953 0.648438 6.26953C0.648438 6.26953 0.648438 4.51172 0.882812 3.69141C1 3.22266 1.37109 2.85156 1.82031 2.73438C2.66016 2.5 6 2.5 6 2.5C6 2.5 9.32031 2.5 10.1602 2.73438C10.6094 2.85156 10.9805 3.22266 11.0977 3.69141ZM4.90625 7.85156L7.67969 6.26953L4.90625 4.6875V7.85156Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default YouTubeFilled12;