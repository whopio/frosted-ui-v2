import * as React from 'react';
import { IconProps } from './types';

export const GlobeInSquare32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <rect
          x="2.25"
          y="3.25"
          width="27.5"
          height="25.5"
          rx="2.75"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M15.3772 9.60472C15.6477 9.31862 15.8585 9.25 16 9.25C16.1415 9.25 16.3523 9.31862 16.6228 9.60472C16.8949 9.8924 17.1744 10.3489 17.425 10.9752C17.861 12.0653 18.1646 13.5576 18.2346 15.25H13.7654C13.8354 13.5576 14.139 12.0653 14.575 10.9752C14.8256 10.3489 15.1051 9.8924 15.3772 9.60472ZM12.2643 15.25C12.3349 13.3996 12.6651 11.7113 13.1823 10.4182C13.2782 10.1783 13.3822 9.94812 13.4943 9.73037C11.2289 10.6366 9.56921 12.7351 9.2912 15.25H12.2643ZM9.2912 16.75H12.2643C12.3349 18.6004 12.6651 20.2887 13.1823 21.5818C13.2782 21.8217 13.3822 22.0519 13.4943 22.2696C11.2289 21.3634 9.56921 19.2649 9.2912 16.75ZM13.7654 16.75L18.2346 16.75C18.1646 18.4424 17.861 19.9347 17.425 21.0248C17.1744 21.6511 16.8949 22.1076 16.6228 22.3953C16.3523 22.6814 16.1415 22.75 16 22.75C15.8585 22.75 15.6477 22.6814 15.3772 22.3953C15.1051 22.1076 14.8256 21.6511 14.575 21.0248C14.139 19.9347 13.8354 18.4424 13.7654 16.75ZM19.7358 16.75C19.6651 18.6004 19.3349 20.2887 18.8177 21.5818C18.7218 21.8217 18.6178 22.0519 18.5057 22.2696C20.7711 21.3634 22.4308 19.2649 22.7088 16.75H19.7358ZM22.7088 15.25C22.4308 12.7351 20.7711 10.6366 18.5057 9.73037C18.6178 9.94812 18.7218 10.1783 18.8177 10.4182C19.3349 11.7113 19.6651 13.3996 19.7358 15.25H22.7088ZM24.25 16C24.25 20.5563 20.5563 24.25 16 24.25C11.4437 24.25 7.75 20.5563 7.75 16C7.75 11.4437 11.4437 7.75 16 7.75C20.5563 7.75 24.25 11.4437 24.25 16Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default GlobeInSquare32;
