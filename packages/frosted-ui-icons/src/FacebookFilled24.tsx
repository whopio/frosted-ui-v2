import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.6875 12.5C21.6875 17.3438 18.1328 21.3672 13.4844 22.0703V15.3125H15.75L16.1797 12.5H13.4844V10.7031C13.4844 9.92188 13.875 9.17969 15.0859 9.17969H16.2969V6.79688C16.2969 6.79688 15.2031 6.60156 14.1094 6.60156C11.9219 6.60156 10.4766 7.96875 10.4766 10.3906V12.5H8.01562V15.3125H10.4766V22.0703C5.82812 21.3672 2.3125 17.3438 2.3125 12.5C2.3125 7.14844 6.64844 2.8125 12 2.8125C17.3516 2.8125 21.6875 7.14844 21.6875 12.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled24;