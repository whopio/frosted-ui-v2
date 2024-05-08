import * as React from 'react';
import { IconProps } from './types';

export const Star32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.0868 2.90626C15.4539 2.14236 16.5461 2.14236 16.9132 2.90626L20.0712 9.47955C20.2191 9.7871 20.5129 9.99942 20.8524 10.0439L28.1185 10.9952C28.9635 11.1058 29.3013 12.1428 28.6825 12.7262L23.3704 17.7345C23.1212 17.9696 23.0085 18.3143 23.0712 18.6503L24.4052 25.8059C24.5605 26.6391 23.6765 27.2795 22.9281 26.876L16.4819 23.4012C16.1812 23.2392 15.8188 23.2392 15.5181 23.4012L9.0719 26.876C8.32342 27.2795 7.4394 26.6391 7.59473 25.8059L8.92881 18.6503C8.99146 18.3143 8.87881 17.9696 8.62957 17.7345L3.31741 12.7262C2.69866 12.1428 3.03657 11.1058 3.88142 10.9952L11.1476 10.0439C11.4871 9.99942 11.781 9.7871 11.9287 9.47955L15.0868 2.90626Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star32;
