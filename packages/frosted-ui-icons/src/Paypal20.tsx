import * as React from 'react';
import { IconProps } from './types';

export const Paypal20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.62264 16.1768L4.29355 17.74C4.21316 18.1218 4.50452 18.4809 4.89478 18.481L7.34808 18.4811C7.71421 18.4811 8.02945 18.2227 8.10125 17.8637L8.62232 15.2582C8.69412 14.8991 9.00934 14.6407 9.37545 14.6407H10.2819C16.8804 14.6407 17.8256 9.92969 17.946 9.02845L17.9468 9.02252C17.9598 8.92575 17.9725 8.83081 17.9827 8.73364C18.0429 8.16508 18.083 6.08863 15.6582 5.06516M4.68985 16.177H2.5993C2.20622 16.177 1.91423 15.813 1.9995 15.4292L4.6382 3.55509C4.79438 2.85228 5.41774 2.35223 6.1377 2.35223H11.0498C15.893 2.35223 15.75 5.78023 15.674 6.46008C15.6652 6.53878 15.6553 6.61516 15.6435 6.69347C15.5305 7.4456 14.6086 11.5687 7.97766 11.5687H7.04125C6.68882 11.5687 6.38162 11.8086 6.29614 12.1505L5.43496 15.5952C5.34949 15.9371 5.04228 16.177 4.68985 16.177Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Paypal20;
