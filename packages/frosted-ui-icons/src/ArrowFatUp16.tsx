import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.219 1.76569L7.77617 2.23L7.219 1.76569L2.45501 7.48248C1.90319 8.14466 2.37407 9.15 3.23603 9.15H5.11669V13.7333C5.11669 14.2948 5.57187 14.75 6.13335 14.75H9.86669C10.4282 14.75 10.8834 14.2948 10.8834 13.7333V9.15H12.764C13.626 9.15 14.0969 8.14466 13.545 7.48248L8.78105 1.76569L8.20975 2.24177L8.78104 1.76569C8.37459 1.27794 7.62545 1.27794 7.219 1.76569Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatUp16;