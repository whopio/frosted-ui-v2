import * as React from 'react';
import { IconProps } from './types';

export const Star24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.2867 3.69529C11.5112 3.00431 12.4888 3.00431 12.7133 3.69529L14.4379 9.00305C14.5383 9.31207 14.8263 9.52129 15.1512 9.52129H20.7321C21.4586 9.52129 21.7607 10.451 21.1729 10.878L16.6579 14.1584C16.395 14.3494 16.285 14.6879 16.3854 14.997L18.11 20.3047C18.3345 20.9957 17.5437 21.5703 16.9559 21.1432L12.4408 17.8629C12.178 17.6719 11.822 17.6719 11.5592 17.8629L7.04412 21.1432C6.45633 21.5703 5.66547 20.9957 5.88999 20.3047L7.61458 14.9969C7.71499 14.6879 7.60499 14.3494 7.34213 14.1584L2.82708 10.878C2.23929 10.451 2.54138 9.52129 3.26792 9.52129H8.84882C9.17374 9.52129 9.46171 9.31207 9.56212 9.00305L11.2867 3.69529Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star24;
