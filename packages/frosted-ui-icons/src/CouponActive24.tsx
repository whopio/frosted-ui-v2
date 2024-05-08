import * as React from 'react';
import { IconProps } from './types';

export const CouponActive24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.22369 15.7763L15.7763 8.22369"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse
          cx="9"
          cy="9"
          rx="1.25"
          ry="1.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse
          cx="15"
          cy="15"
          rx="1.25"
          ry="1.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.75 1.25V0.5V1.25ZM15.4217 1.78675L14.7377 1.47908L15.4217 1.78675ZM15.4217 22.2132L14.7377 22.5209L15.4217 22.2132ZM8.57833 22.2132L9.26231 22.5209L8.57833 22.2132ZM8.57833 1.78675L7.89434 2.09442L8.57833 1.78675ZM7.81377 0.5H4.75V2H7.81377V0.5ZM4.75 0.5C3.50736 0.5 2.5 1.50736 2.5 2.75H4C4 2.33579 4.33579 2 4.75 2V0.5ZM2.5 2.75V21.25H4V2.75H2.5ZM2.5 21.25C2.5 22.4926 3.50736 23.5 4.75 23.5V22C4.33579 22 4 21.6642 4 21.25H2.5ZM4.75 23.5H7.81377V22H4.75V23.5ZM9.26231 22.5209C9.73258 21.4755 10.7824 20.75 12 20.75V19.25C10.1707 19.25 8.59789 20.3415 7.89434 21.9056L9.26231 22.5209ZM12 20.75C13.2176 20.75 14.2674 21.4755 14.7377 22.5209L16.1057 21.9056C15.4021 20.3415 13.8293 19.25 12 19.25V20.75ZM16.1862 23.5H19.25V22H16.1862V23.5ZM19.25 23.5C20.4926 23.5 21.5 22.4926 21.5 21.25H20C20 21.6642 19.6642 22 19.25 22V23.5ZM21.5 21.25V2.75H20V21.25H21.5ZM21.5 2.75C21.5 1.50736 20.4926 0.5 19.25 0.5V2C19.6642 2 20 2.33579 20 2.75H21.5ZM19.25 0.5H16.1862V2H19.25V0.5ZM14.7377 1.47908C14.2674 2.52453 13.2176 3.25 12 3.25V4.75C13.8293 4.75 15.4021 3.65851 16.1057 2.09442L14.7377 1.47908ZM12 3.25C10.7824 3.25 9.73258 2.52453 9.26231 1.47908L7.89434 2.09442C8.59789 3.65851 10.1707 4.75 12 4.75V3.25ZM16.1862 0.5C15.4915 0.5 14.9694 0.963981 14.7377 1.47908L16.1057 2.09442C16.1245 2.05246 16.1506 2.02402 16.1704 2.00962C16.1877 1.997 16.1923 2 16.1862 2V0.5ZM14.7377 22.5209C14.9694 23.036 15.4915 23.5 16.1862 23.5V22C16.1923 22 16.1877 22.003 16.1704 21.9904C16.1506 21.976 16.1245 21.9475 16.1057 21.9056L14.7377 22.5209ZM7.81377 23.5C8.50855 23.5 9.03061 23.036 9.26231 22.5209L7.89434 21.9056C7.87546 21.9475 7.84943 21.976 7.82962 21.9904C7.81227 22.003 7.80767 22 7.81377 22V23.5ZM7.81377 2C7.80767 2 7.81227 1.997 7.82962 2.00962C7.84943 2.02402 7.87546 2.05246 7.89434 2.09442L9.26231 1.47908C9.03061 0.963981 8.50855 0.5 7.81377 0.5V2Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default CouponActive24;
