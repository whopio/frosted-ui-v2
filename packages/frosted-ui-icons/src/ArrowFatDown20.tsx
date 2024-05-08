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
          d="M11.8749 2.29169H8.12493C7.66469 2.29169 7.29159 2.66478 7.29159 3.12502V11.4584H4.45024C4.09382 11.4584 3.90194 11.8769 4.13451 12.1469L9.36848 18.225C9.70089 18.6111 10.2989 18.6111 10.6314 18.225L15.8653 12.1469C16.0979 11.8769 15.9061 11.4584 15.5496 11.4584H12.7082V3.12502C12.7082 2.66479 12.3351 2.29169 11.8749 2.29169Z"
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
