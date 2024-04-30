import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.8749 2.29163H8.12496C7.66472 2.29163 7.29162 2.66472 7.29162 3.12496V11.4583H4.45027C4.09385 11.4583 3.90197 11.8768 4.13454 12.1469L9.36851 18.225C9.70092 18.611 10.2989 18.611 10.6314 18.225L15.8653 12.1469C16.0979 11.8768 15.9061 11.4583 15.5496 11.4583H12.7083V3.12496C12.7083 2.66473 12.3352 2.29163 11.8749 2.29163Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatDown20;
