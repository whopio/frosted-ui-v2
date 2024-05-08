import * as React from 'react';
import { IconProps } from './types';

export const AlignLeft16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.33112 2.42871H8.00009M2.33112 6.12561H13.6691M2.33112 13.5192H13.6691M2.33112 9.82227H8.00009"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default AlignLeft16;
