import * as React from 'react';
import { IconProps } from './types';

export const Play24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.25 3.96431V20.0356C5.25 20.7853 6.0776 21.2396 6.71003 20.8371L6.30738 20.2044L6.71003 20.8371L19.3375 12.8015C19.9241 12.4281 19.9241 11.5718 19.3375 11.1985L18.9348 11.8312L19.3375 11.1985L6.71003 3.16283C6.0776 2.76037 5.25 3.21467 5.25 3.96431Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Play24;