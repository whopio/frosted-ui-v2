import * as React from 'react';
import { IconProps } from './types';

export const Play16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.25 3.24057V12.7594C4.25 13.4532 5.01315 13.8762 5.6015 13.5085L13.2166 8.74907C13.7701 8.4031 13.7702 7.59691 13.2166 7.25094L5.6015 2.4915C5.01316 2.12379 4.25 2.54676 4.25 3.24057Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Play16;