import * as React from 'react';
import { IconProps } from './types';

export const Burger20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.6562 11.0096C17.1825 10.9999 16.6835 10.7732 16.3877 10.3296 15.7829 9.42249 14.45 9.42249 13.8453 10.3296 13.2406 11.2367 11.9077 11.2367 11.3029 10.3296 10.6982 9.42249 9.3653 9.42249 8.76056 10.3296 8.15583 11.2367 6.82292 11.2367 6.21819 10.3296 5.61345 9.42249 4.28055 9.42249 3.67582 10.3296 3.36685 10.793 2.83865 11.0197 2.34375 11.0096M14.9576 17.5508H5.04237C3.63825 17.5508 2.5 16.4906 2.5 15.0865 2.5 14.3845 3.06914 13.8153 3.77119 13.8153H16.2288C16.9309 13.8153 17.5 14.3845 17.5 15.0865 17.5 16.4906 16.3617 17.5508 14.9576 17.5508zM16.2288 6.84375H3.77119C3.06914 6.84375 2.5 6.30463 2.5 5.60259 2.5 3.49642 4.20739 1.78903 6.31356 1.78903H13.6864C15.7926 1.78903 17.5 3.49642 17.5 5.60259 17.5 6.30463 16.9309 6.84375 16.2288 6.84375z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Burger20;
