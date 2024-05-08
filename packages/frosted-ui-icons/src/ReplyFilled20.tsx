import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.99946 3.64216C9.99946 2.74101 8.93279 2.26502 8.26209 2.86691L1.17759 9.22482C0.716355 9.63873 0.716357 10.3614 1.17759 10.7753L8.26209 17.1331C8.93279 17.7351 9.99946 17.2591 9.99946 16.3579V13.5458C13.119 13.5875 14.7515 13.9473 15.7336 14.5025C16.7293 15.0652 17.1265 15.8598 17.7539 17.1146L17.7738 17.1546C17.9035 17.4138 18.1943 17.5499 18.4765 17.4833C18.7585 17.4167 18.9578 17.1649 18.9578 16.8751C18.9578 13.3206 18.4979 10.6625 16.9822 8.91365C15.535 7.24369 13.2552 6.54261 9.99946 6.46559V3.64216Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled20;
