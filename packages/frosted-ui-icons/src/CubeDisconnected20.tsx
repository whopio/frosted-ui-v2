import * as React from 'react';
import { IconProps } from './types';

export const CubeDisconnected20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1078_132)">
          <path
            d="M9.14629 1.74719C9.40175 1.58571 9.69778 1.5 10 1.5C10.3022 1.5 10.5982 1.58571 10.8537 1.74719L16.9362 5.59194C17.2872 5.81379 17.5 6.20002 17.5 6.61523V13.3848C17.5 13.8 17.2872 14.1862 16.9362 14.4081L10.8537 18.2528C10.5982 18.4143 10.3022 18.5 10 18.5C9.69778 18.5 9.40175 18.4143 9.14629 18.2528L3.06376 14.4081C2.71279 14.1862 2.5 13.8 2.5 13.3848V6.61523C2.5 6.20002 2.71279 5.81379 3.06376 5.59194L9.14629 1.74719ZM10 0C9.41405 0 8.84012 0.166182 8.34483 0.479256L2.2623 4.324C1.47645 4.82073 1 5.68555 1 6.61523V13.3848C1 14.3144 1.47645 15.1793 2.2623 15.676L8.34483 19.5207C8.84012 19.8338 9.41405 20 10 20C10.5859 20 11.1599 19.8338 11.6552 19.5207L17.7377 15.676C18.5235 15.1793 19 14.3144 19 13.3848V6.61523C19 5.68555 18.5235 4.82073 17.7377 4.324L11.6552 0.479256C11.1599 0.166182 10.5859 0 10 0ZM15.1559 7.84606L10.7437 10.234V15.4672C10.7437 15.8815 10.4079 16.2172 9.99368 16.2172C9.57946 16.2172 9.24368 15.8815 9.24368 15.4672V10.2303L4.83823 7.84606C4.47395 7.64891 4.33846 7.19377 4.53561 6.82949C4.73276 6.4652 5.1879 6.32971 5.55218 6.52686L9.99707 8.93244L14.442 6.52686C14.8062 6.32971 15.2614 6.4652 15.4585 6.82949C15.6557 7.19377 15.5202 7.64891 15.1559 7.84606Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_1078_132">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default CubeDisconnected20;
