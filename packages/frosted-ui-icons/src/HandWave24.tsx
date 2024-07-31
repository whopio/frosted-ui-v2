import * as React from 'react';
import { IconProps } from './types';

export const HandWave24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.90193 11.8232C5.31615 11.2374 4.3664 11.2374 3.78061 11.8232C3.19482 12.409 3.19482 13.3588 3.78061 13.9446L8.37681 18.5407C11.3057 21.4697 16.0545 21.4697 18.9834 18.5407C21.9123 15.6118 21.9123 10.8631 18.9834 7.93415L15.2711 4.22184C15.0758 4.02658 14.7592 4.0266 14.564 4.22184C13.8261 4.9597 13.553 5.98624 13.7445 6.9379M5.90193 11.8232L4.48772 10.409C3.90193 9.82323 3.90193 8.87349 4.48772 8.2877C5.07349 7.70193 6.02325 7.70191 6.60904 8.2877M5.90193 11.8232L8.73036 14.6517M13.7445 6.9379L10.8517 4.04506C10.2659 3.45927 9.31613 3.45929 8.73036 4.04506C8.14459 4.63083 8.14457 5.58059 8.73036 6.16638M13.7445 6.9379C13.8571 7.49727 14.1303 8.03074 14.564 8.46448L15.4885 9.38895C15.5707 9.47118 15.5946 9.59521 15.5488 9.70213C14.954 11.09 15.2641 12.7001 16.3318 13.7678M6.60904 8.2877L5.90193 7.58059C5.31615 6.9948 5.31617 6.04504 5.90193 5.45927C6.4877 4.87351 7.43747 4.87348 8.02325 5.45927L8.73036 6.16638M6.60904 8.2877L10.1446 11.8232M8.73036 6.16638L12.2659 9.70191"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5342 5.43117C20.1749 4.30405 19.0525 3.34981 17.6824 3.20236M3.10745 17.9597C3.26716 18.9368 4.42405 20.5143 5.69336 20.8912"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default HandWave24;
