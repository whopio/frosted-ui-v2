import * as React from 'react';
import { IconProps } from './types';

export const GlobeInSquare24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4 1.75C2.75736 1.75 1.75 2.75736 1.75 4V19.5C1.75 20.7426 2.75736 21.75 4 21.75H20C21.2426 21.75 22.25 20.7426 22.25 19.5V4C22.25 2.75736 21.2426 1.75 20 1.75H4Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M6.80317 11C7.05875 9.21318 8.21406 7.7166 9.79544 6.98391C9.67954 7.24317 9.58333 7.51435 9.5026 7.78344C9.23379 8.67949 9.06504 9.79726 9.01537 11H6.80317ZM6.80317 12.5C7.05875 14.2868 8.21406 15.7834 9.79544 16.5161C9.67954 16.2568 9.58333 15.9856 9.5026 15.7166C9.23379 14.8205 9.06504 13.7027 9.01537 12.5H6.80317ZM10.5168 12.5C10.6253 14.9056 11.248 16.75 12 16.75C12.752 16.75 13.3747 14.9056 13.4832 12.5L10.5168 12.5ZM14.9846 12.5C14.935 13.7027 14.7662 14.8205 14.4974 15.7166C14.4167 15.9856 14.3205 16.2568 14.2046 16.5161C15.7859 15.7834 16.9412 14.2868 17.1968 12.5H14.9846ZM17.1968 11H14.9846C14.935 9.79726 14.7662 8.67949 14.4974 7.78344C14.4167 7.51435 14.3205 7.24317 14.2046 6.98391C15.7859 7.7166 16.9412 9.21318 17.1968 11ZM13.4832 11L10.5168 11C10.6253 8.59437 11.248 6.75 12 6.75C12.752 6.75 13.3747 8.59437 13.4832 11ZM5.25 11.75C5.25 8.02208 8.27208 5 12 5C15.7279 5 18.75 8.02208 18.75 11.75C18.75 15.4779 15.7279 18.5 12 18.5C8.27208 18.5 5.25 15.4779 5.25 11.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default GlobeInSquare24;
