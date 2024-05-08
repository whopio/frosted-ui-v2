import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.3058 17.8367C17.5723 13.7539 19.2382 8.97258 17.9308 5.70482C17.2915 4.10684 15.9518 2.96602 14.3768 2.614C12.9448 2.29392 11.3662 2.63593 9.99959 3.7913C8.633 2.63593 7.05438 2.29392 5.62235 2.61401C4.04746 2.96602 2.7077 4.10685 2.06841 5.70483C0.761081 8.97267 2.42703 13.7539 9.6935 17.8367C9.88359 17.9435 10.1157 17.9435 10.3058 17.8367Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default HeartFilled20;
