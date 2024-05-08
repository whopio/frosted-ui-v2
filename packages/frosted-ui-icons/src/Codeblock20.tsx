import * as React from 'react';
import { IconProps } from './types';

export const Codeblock20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.79167 12.1724V14.2083C4.79167 15.1417 4.79167 15.6085 4.97333 15.965C5.13308 16.2785 5.38808 16.5335 5.70167 16.6933C6.05817 16.875 6.52492 16.875 7.45833 16.875H14.2083C15.1418 16.875 15.6085 16.875 15.965 16.6933C16.2786 16.5335 16.5336 16.2785 16.6933 15.965C16.875 15.6085 16.875 15.1417 16.875 14.2083V7.39579C16.875 6.52128 16.875 6.08403 16.715 5.7457C16.5501 5.39713 16.2695 5.11651 15.9209 4.95164C15.5826 4.79163 15.1453 4.79163 14.2708 4.79163H13.5172"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7301 5.54688L12.0312 6.72037C12.3792 7.03423 12.3792 7.5238 12.0312 7.83766L10.7301 9.01115M6.44821 9.99994L8.7271 4.41213M4.4455 9.01115L3.14439 7.83766C2.79639 7.5238 2.79639 7.03423 3.14439 6.72037L4.4455 5.54688"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Codeblock20;
