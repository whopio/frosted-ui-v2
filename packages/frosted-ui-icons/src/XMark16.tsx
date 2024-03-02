import * as React from 'react';
import { IconProps } from './types';

export const XMark16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.9498 4.1109C13.2427 3.818 13.2427 3.34313 12.9498 3.05024C12.6569 2.75734 12.182 2.75734 11.8891 3.05024L8.00003 6.93934L4.11096 3.05027C3.81806 2.75738 3.34319 2.75738 3.0503 3.05027C2.7574 3.34316 2.7574 3.81804 3.0503 4.11093L6.93937 8L3.0503 11.8891C2.75741 12.182 2.7574 12.6568 3.0503 12.9497C3.34319 13.2426 3.81807 13.2426 4.11096 12.9497L8.00003 9.06066L11.8891 12.9498C12.182 13.2427 12.6569 13.2427 12.9498 12.9498C13.2427 12.6569 13.2427 12.182 12.9498 11.8891L9.06069 8L12.9498 4.1109Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XMark16;
