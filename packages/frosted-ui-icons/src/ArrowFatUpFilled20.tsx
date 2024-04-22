import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.3334 17.5H7.66671C7.48261 17.5 7.33337 17.3508 7.33337 17.1667V10.8333C7.33337 10.6492 7.18414 10.5 7.00004 10.5H4.04505C3.76244 10.5 3.60806 10.1704 3.78898 9.95327L9.74397 2.80729C9.87723 2.64737 10.1228 2.64737 10.2561 2.80729L16.2111 9.95327C16.392 10.1704 16.2376 10.5 15.955 10.5H13C12.8159 10.5 12.6667 10.6492 12.6667 10.8333V17.1667C12.6667 17.3508 12.5175 17.5 12.3334 17.5Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M3.21281 9.47313L3.78898 9.95327L3.21281 9.47313C2.62481 10.1787 3.12656 11.25 4.04505 11.25H6.58337V17.1667C6.58337 17.765 7.0684 18.25 7.66671 18.25H12.3334C12.9317 18.25 13.4167 17.765 13.4167 17.1667V11.25H15.955C16.8735 11.25 17.3753 10.1787 16.7873 9.47313L10.8323 2.32715C10.3992 1.80741 9.60091 1.80742 9.1678 2.32715L9.74397 2.80729L9.1678 2.32715L3.21281 9.47313Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled20;
