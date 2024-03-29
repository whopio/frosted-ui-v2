import * as React from 'react';
import { IconProps } from './types';

export const StarHalf32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.0868 2.90626C15.4539 2.14237 16.5461 2.14237 16.9132 2.90626L20.0712 9.47956C20.2191 9.7871 20.5129 9.99942 20.8524 10.0439L28.1185 10.9952C28.9635 11.1058 29.3013 12.1428 28.6825 12.7262L23.3704 17.7345C23.1212 17.9696 23.0085 18.3143 23.0712 18.6503L24.4052 25.8059C24.5605 26.6391 23.6765 27.2795 22.9281 26.876L16.4819 23.4012C16.1812 23.2392 15.8188 23.2392 15.5181 23.4012L9.0719 26.876C8.32342 27.2795 7.4394 26.6391 7.59473 25.8059L8.92881 18.6503C8.99146 18.3143 8.87881 17.9696 8.62957 17.7345L3.31741 12.7262C2.69866 12.1428 3.03657 11.1058 3.88142 10.9952L11.1476 10.0439C11.4871 9.99942 11.781 9.7871 11.9287 9.47956L15.0868 2.90626Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 2.33337C15.6352 2.33337 15.2703 2.52435 15.0868 2.90629L11.9287 9.47959C11.781 9.78713 11.4871 9.99945 11.1476 10.0439L3.88142 10.9952C3.03657 11.1058 2.69866 12.1428 3.31741 12.7262L8.62957 17.7346C8.87881 17.9696 8.99147 18.3143 8.92881 18.6503L7.59473 25.8059C7.4394 26.6391 8.32342 27.2795 9.0719 26.876L15.5181 23.4012C15.6685 23.3202 15.8342 23.2797 16 23.2797V2.33337Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default StarHalf32;