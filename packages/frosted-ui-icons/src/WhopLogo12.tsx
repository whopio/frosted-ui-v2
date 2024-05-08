import * as React from 'react';
import { IconProps } from './types';

export const WhopLogo12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.93082 3.69403C2.33934 3.69403 1.93159 3.95356 1.62303 4.24706 1.62303 4.24706 1.49844 4.36513 1.50001 4.36873L2.79588 5.66459 4.09152 4.36873C3.84616 4.03093 3.38354 3.69403 2.93082 3.69403zM6.13066 3.69403C5.53918 3.69403 5.13144 3.95356 4.82288 4.24706 4.82288 4.24706 4.70908 4.36198 4.70391 4.36873L3.10218 5.97068 4.39602 7.26452 7.29136 4.36873C7.046 4.03093 6.58361 3.69403 6.13066 3.69403zM9.33931 3.69403C8.74783 3.69403 8.34009 3.95356 8.03152 4.24706 8.03152 4.24706 7.913 4.36288 7.9085 4.36873L4.70438 7.5733 5.04352 7.91245C5.56821 8.43714 6.4271 8.43714 6.95179 7.91245L10.496 4.36873H10.5C10.2546 4.03093 9.79225 3.69403 9.33931 3.69403z"
          fill={color}
        />
      </svg>
    );
  },
);

export default WhopLogo12;
