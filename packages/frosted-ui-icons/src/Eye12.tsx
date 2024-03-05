import * as React from 'react';
import { IconProps } from './types';

export const Eye12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.66404 1.80043C6.45042 1.76756 6.22909 1.75 6 1.75C2.74374 1.75 1.05493 5.29833 0.787774 5.91056C0.762293 5.96896 0.763017 6.03276 0.78852 6.09114C0.862619 6.26079 1.04398 6.65148 1.33561 7.12885M5.33596 10.1996C5.54958 10.2324 5.77091 10.25 6 10.25C9.25626 10.25 10.9451 6.70167 11.2122 6.08944C11.2377 6.03104 11.237 5.96724 11.2115 5.90886C11.1374 5.73921 10.956 5.34852 10.6644 4.87115"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.33596 1.80043C5.54958 1.76756 5.77091 1.75 6 1.75C9.25626 1.75 10.9451 5.29833 11.2122 5.91056C11.2377 5.96896 11.237 6.03276 11.2115 6.09114C11.1374 6.26079 10.956 6.65148 10.6644 7.12885M6.66404 10.1996C6.45042 10.2324 6.22909 10.25 6 10.25C2.74374 10.25 1.05493 6.70167 0.787774 6.08944C0.762293 6.03104 0.763017 5.96724 0.78852 5.90886C0.86262 5.73921 1.04398 5.34852 1.33561 4.87115"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="6" cy="6" r="2" fill={color} />
      </svg>
    );
  },
);

export default Eye12;