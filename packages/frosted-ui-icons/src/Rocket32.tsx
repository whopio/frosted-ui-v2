import * as React from 'react';
import { IconProps } from './types';

export const Rocket32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.9415 2.97091C28.1354 2.87654 29.1235 3.86465 29.0292 5.05851L29.0292 5.05855C28.6358 10.0333 26.1349 13.8833 22.4167 17.3556V22.8752C22.4167 23.6376 22.0002 24.339 21.3312 24.7041L21.331 24.7042L16.6644 27.2496L16.6643 27.2497C15.2761 28.0067 13.5834 27.0021 13.5834 25.4207V23.1625L8.83751 18.4167H6.57941C4.998 18.4167 3.99325 16.724 4.75047 15.3357L4.75047 15.3357L7.29592 10.6691L7.29593 10.6691C7.66099 9.99978 8.36249 9.58335 9.12487 9.58335H14.6444C18.1167 5.86515 21.9667 3.36417 26.9415 2.97091L27.0006 3.71857L26.9415 2.97091ZM13.4189 11.0833H9.12487C8.91141 11.0833 8.71499 11.1999 8.61277 11.3873L8.61277 11.3874L6.06732 16.0539C5.85526 16.4427 6.13667 16.9167 6.57941 16.9167H8.78607L13.4189 11.0833ZM10.1515 17.6093L14.3907 21.8486L21.1794 16.457C24.858 13.0798 27.1731 9.50294 27.5338 4.94037C27.5555 4.66604 27.334 4.44456 27.0597 4.46624C22.4971 4.82692 18.9202 7.14202 15.543 10.8207L10.1515 17.6093ZM20.9167 18.5812L15.0834 23.214V25.4207C15.0834 25.8633 15.5572 26.1448 15.9461 25.9328L20.9167 18.5812ZM20.9167 18.5812V22.8752C20.9167 23.0885 20.8002 23.285 20.6128 23.3873L20.6126 23.3874L15.9462 25.9328L20.9167 18.5812ZM6.55982 22.4621C6.85682 22.7509 6.86351 23.2257 6.57477 23.5227L2.87106 27.3323C2.58233 27.6293 2.1075 27.636 1.81051 27.3472C1.51352 27.0585 1.50683 26.5837 1.79556 26.2867L5.49927 22.4771C5.78801 22.1801 6.26283 22.1734 6.55982 22.4621ZM9.52279 25.5097C9.81978 25.7985 9.82647 26.2733 9.53773 26.5703L7.3155 28.856C7.02676 29.153 6.55194 29.1597 6.25495 28.871C5.95796 28.5822 5.95127 28.1074 6.24001 27.8104L8.46223 25.5247C8.75097 25.2277 9.2258 25.221 9.52279 25.5097ZM21.6562 12.5313C22.8989 12.5313 23.9062 11.5239 23.9062 10.2813C23.9062 9.03862 22.8989 8.03126 21.6562 8.03126C20.4136 8.03126 19.4062 9.03862 19.4062 10.2813C19.4062 11.5239 20.4136 12.5313 21.6562 12.5313Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Rocket32;
