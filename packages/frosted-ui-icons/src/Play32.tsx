import * as React from 'react';
import { IconProps } from './types';

export const Play32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M7.25 5.48578V26.9142C7.25 27.7165 8.13567 28.2026 8.81249 27.7719L25.6491 17.0577C26.2769 16.6582 26.2769 15.7418 25.6491 15.3423L8.81249 4.62806C8.13567 4.19736 7.25 4.68353 7.25 5.48578Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Play32;