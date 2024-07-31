import * as React from 'react';
import { IconProps } from './types';

export const Star12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.04284 1.85204L5.04282 1.85209L4.17401 3.66291L2.17372 3.92515L2.17371 3.92515C1.29043 4.04095 0.930381 5.13154 1.5828 5.74748L3.043 7.12603L2.67644 9.09481L2.67643 9.09481C2.51225 9.97667 3.44435 10.6429 4.22452 10.2218L6 9.26344L7.77546 10.2218C8.55571 10.643 9.48771 9.97657 9.32355 9.09481L8.95701 7.12602L10.4172 5.7475C11.0696 5.13157 10.7096 4.04095 9.82627 3.92515C9.82627 3.92515 9.82627 3.92515 9.82627 3.92515L7.82598 3.66291L6.95719 1.85209L6.95716 1.85204C6.57196 1.04932 5.42805 1.04932 5.04284 1.85204ZM3.08693 6.89009L3.08692 6.89011C3.08692 6.8901 3.08692 6.89009 3.08693 6.89009Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star12;
