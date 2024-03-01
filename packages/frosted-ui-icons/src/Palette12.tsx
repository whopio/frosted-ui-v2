import * as React from 'react';
import { IconProps } from './types';

export const Palette12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_16_238)">
          <path
            d="M9.91172 7.75C10.5347 7.75 11.1107 7.35879 11.198 6.74192C11.2323 6.49954 11.25 6.25184 11.25 6C11.25 3.10051 8.8995 0.75 6 0.75C3.10051 0.75 0.75 3.10051 0.75 6C0.75 8.57074 2.59771 10.7099 5.03754 11.162C5.57168 11.2609 6.06471 10.9108 6.25545 10.4021L6.89231 8.70385C7.10746 8.1301 7.65595 7.75 8.26871 7.75H9.91172Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 3.25C6.75 3.66421 6.41421 4 6 4 5.58579 4 5.25 3.66421 5.25 3.25 5.25 2.83579 5.58579 2.5 6 2.5 6.41421 2.5 6.75 2.83579 6.75 3.25zM4.25 5C4.25 5.41421 3.91421 5.75 3.5 5.75 3.08579 5.75 2.75 5.41421 2.75 5 2.75 4.58579 3.08579 4.25 3.5 4.25 3.91421 4.25 4.25 4.58579 4.25 5zM5.25 8C5.25 8.41421 4.91421 8.75 4.5 8.75 4.08579 8.75 3.75 8.41421 3.75 8 3.75 7.58579 4.08579 7.25 4.5 7.25 4.91421 7.25 5.25 7.58579 5.25 8zM9.25 5C9.25 5.41421 8.91421 5.75 8.5 5.75 8.08579 5.75 7.75 5.41421 7.75 5 7.75 4.58579 8.08579 4.25 8.5 4.25 8.91421 4.25 9.25 4.58579 9.25 5z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_16_238">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Palette12;