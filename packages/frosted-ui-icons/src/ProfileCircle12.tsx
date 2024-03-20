import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_882_1424)">
          <circle
            cx="6"
            cy="6"
            r="5.25"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.40054 10L9.8866 10.5712C10.0541 10.4287 10.1505 10.2199 10.1505 10C10.1505 9.78012 10.0541 9.57132 9.8866 9.42882L9.40054 10ZM2.59949 10L2.11343 9.42882C1.94598 9.57132 1.84949 9.78012 1.84949 10C1.84949 10.2199 1.94598 10.4287 2.11343 10.5712L2.59949 10ZM8.91449 9.42882C8.12893 10.0973 7.11246 10.5 6.00002 10.5V12C7.48188 12 8.83997 11.4618 9.8866 10.5712L8.91449 9.42882ZM6.00002 10.5C4.88757 10.5 3.87111 10.0973 3.08554 9.42882L2.11343 10.5712C3.16006 11.4618 4.51815 12 6.00002 12V10.5ZM3.08554 10.5712C3.87111 9.9027 4.88757 9.5 6.00002 9.5V8C4.51815 8 3.16006 8.53817 2.11343 9.42882L3.08554 10.5712ZM6.00002 9.5C7.11246 9.5 8.12893 9.9027 8.91449 10.5712L9.8866 9.42882C8.83997 8.53817 7.48188 8 6.00002 8V9.5Z"
            fill={color}
          />
          <circle
            cx="6"
            cy="5"
            r="1.75"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_1424">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ProfileCircle12;
