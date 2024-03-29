import * as React from 'react';
import { IconProps } from './types';

export const Flag16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M3.16669 10.0555V2.93273C3.16669 2.67907 3.31048 2.44767 3.54594 2.35331C4.0519 2.15055 4.99303 1.83331 5.92859 1.83331C7.30355 1.83331 8.69649 3.20369 10.0714 3.20369C10.701 3.20369 11.3332 3.06001 11.8335 2.90425C12.3054 2.75734 12.8334 3.09723 12.8334 3.59143V9.64131C12.8334 9.89498 12.6896 10.1264 12.4541 10.2207C11.9482 10.4235 11.007 10.7407 10.0714 10.7407C8.69649 10.7407 7.30355 9.37038 5.92859 9.37038C4.55365 9.37038 3.16669 10.0555 3.16669 10.0555ZM3.16669 10.0555V14.1666"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Flag16;