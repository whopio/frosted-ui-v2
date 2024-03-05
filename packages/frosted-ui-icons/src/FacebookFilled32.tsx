import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M29.5625 16.5C29.5625 23.2812 24.5859 28.9141 18.0781 29.8984V20.4375H21.25L21.8516 16.5H18.0781V13.9844C18.0781 12.8906 18.625 11.8516 20.3203 11.8516H22.0156V8.51562C22.0156 8.51562 20.4844 8.24219 18.9531 8.24219C15.8906 8.24219 13.8672 10.1562 13.8672 13.5469V16.5H10.4219V20.4375H13.8672V29.8984C7.35938 28.9141 2.4375 23.2812 2.4375 16.5C2.4375 9.00781 8.50781 2.9375 16 2.9375C23.4922 2.9375 29.5625 9.00781 29.5625 16.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled32;