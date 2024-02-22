import * as React from 'react';
import { IconProps } from './types';

export const Facebook20Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_45_57)">
          <path
            d="M20 10.0609C20 15.0913 16.3306 19.2698 11.5323 20V12.9817H13.871L14.3145 10.0609H11.5323V8.19473C11.5323 7.38337 11.9355 6.61258 13.1855 6.61258H14.4355V4.13793C14.4355 4.13793 13.3065 3.93509 12.1774 3.93509C9.91935 3.93509 8.42742 5.35497 8.42742 7.87018V10.0609H5.8871V12.9817H8.42742V20C3.62903 19.2698 0 15.0913 0 10.0609C0 4.50304 4.47581 0 10 0C15.5242 0 20 4.50304 20 10.0609Z"
            fill={color}
            fillOpacity=".93"
          />
        </g>
        <defs>
          <clipPath id="clip0_45_57">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Facebook20Icon;
