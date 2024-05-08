import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.7186 4.57408C11.5514 3.77079 10.8526 1.83334 8.00117 1.83334C5.26043 1.83334 4.23265 3.61562 4.23265 4.91668C4.23265 6.94181 6.10305 7.47054 8.00117 7.97714M3.97921 11.4259C4.23564 12.2292 5.14968 14.1667 8.00117 14.1667C10.7419 14.1667 11.941 12.3844 11.941 11.0833C11.941 10.5821 11.8264 10.1727 11.6252 9.83241M1.83337 8.00001H14.1667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough16;
