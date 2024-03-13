import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlusSize16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.16667 3.16671H3.83333C3.09695 3.16671 2.5 3.76366 2.5 4.50004V6.16671M5.16667 3.16671H10.8333M5.16667 3.16671V1.83337M2.5 6.16671V12.1667C2.5 12.9031 3.09695 13.5 3.83333 13.5H7.5M2.5 6.16671H13.5M10.8333 3.16671H12.1667C12.9031 3.16671 13.5 3.76366 13.5 4.50004V6.16671M10.8333 3.16671V1.83337M13.5 6.16671V7.50004M11.8333 9.83337V12M11.8333 12V14.1667M11.8333 12H9.66667M11.8333 12H14"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarPlusSize16;
