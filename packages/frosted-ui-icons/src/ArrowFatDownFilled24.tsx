import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.3931 15.0982C3.69536 14.2879 4.27103 13.0325 5.34031 13.0325H7.99992V3.78247C7.99992 2.81597 8.78342 2.03247 9.74992 2.03247H14.2499C15.2164 2.03247 15.9999 2.81598 15.9999 3.78247V13.0325H18.6595C19.7288 13.0325 20.3045 14.2879 19.6067 15.0982L13.326 22.3919C12.6278 23.2027 11.372 23.2027 10.6738 22.3919L4.3931 15.0982Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled24;
