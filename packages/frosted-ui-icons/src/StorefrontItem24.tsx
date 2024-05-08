import * as React from 'react';
import { IconProps } from './types';

export const StorefrontItem24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.75 8.75V5.25C22.75 3.59315 21.4069 2.25 19.75 2.25H4.25C2.59315 2.25 1.25 3.59315 1.25 5.25V16C1.25 17.6569 2.59315 19 4.25 19H7.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 9.5C16.3054 9.5 16.1149 9.55518 15.9504 9.65914L11.3355 12.5762C11.1266 12.7082 11 12.9381 11 13.1852V18.33C11 18.5771 11.1266 18.8069 11.3355 18.939L15.9504 21.856C16.1149 21.96 16.3054 22.0152 16.5 22.0152C16.6946 22.0152 16.8851 21.96 17.0496 21.856L21.6645 18.939C21.8734 18.8069 22 18.5771 22 18.33V13.1852C22 12.9381 21.8734 12.7082 21.6645 12.5762L17.0496 9.65914C16.8851 9.55518 16.6946 9.5 16.5 9.5ZM15.1489 8.3912C15.5532 8.13565 16.0217 8 16.5 8C16.9783 8 17.4468 8.13565 17.8511 8.3912L22.466 11.3083C23.1097 11.7152 23.5 12.4236 23.5 13.1852V18.33C23.5 19.0915 23.1097 19.8 22.466 20.2069L17.8511 23.1239C17.4468 23.3795 16.9783 23.5152 16.5 23.5152C16.0217 23.5152 15.5532 23.3795 15.1489 23.1239L10.534 20.2069C9.8903 19.8 9.5 19.0915 9.5 18.33V13.1852C9.5 12.4236 9.8903 11.7152 10.534 11.3083L15.1489 8.3912Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12.5031 14.2857C12.1388 14.0886 12.0033 13.6334 12.2004 13.2691C12.3976 12.9049 12.8527 12.7694 13.217 12.9665L16.4978 14.7421L19.7786 12.9665C20.1429 12.7694 20.598 12.9049 20.7951 13.2691C20.9923 13.6334 20.8568 14.0886 20.4925 14.2857L17.2453 16.0431V19.8995C17.2453 20.3137 16.9095 20.6495 16.4953 20.6495C16.081 20.6495 15.7453 20.3137 15.7453 19.8995V16.0404L12.5031 14.2857Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <circle cx="4.875" cy="5.625" r="1.125" fill={color} />
        <circle cx="8.625" cy="5.625" r="1.125" fill={color} />
        <circle cx="12.375" cy="5.625" r="1.125" fill={color} />
      </svg>
    );
  },
);

export default StorefrontItem24;
