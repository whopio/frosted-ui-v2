import * as React from 'react';
import { IconProps } from './types';

export const Paypal16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.07938 12.9416H3.75183C4.03377 12.9416 4.27953 12.7497 4.34791 12.4762L5.03686 9.7204C5.10524 9.44687 5.351 9.25499 5.63294 9.25499H6.38207C11.6868 9.25499 12.4244 5.95649 12.5148 5.35479C12.5242 5.29214 12.5321 5.23104 12.5391 5.16808C12.5999 4.62419 12.7143 1.8818 8.8398 1.8818H4.9101C4.33414 1.8818 3.83545 2.28183 3.7105 2.84408L1.59954 12.3434C1.53132 12.6504 1.76492 12.9416 2.07938 12.9416Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.698 12.9414L3.43473 14.192C3.37041 14.4975 3.6035 14.7848 3.91571 14.7848L5.87836 14.7849C6.17126 14.7849 6.42345 14.5781 6.48089 14.2909L6.89775 12.2065C6.95519 11.9193 7.20736 11.7126 7.50025 11.7126H8.2254C13.5042 11.7126 14.2604 7.94375 14.3567 7.22275C14.3673 7.14369 14.3777 7.06623 14.3861 6.98691C14.4342 6.53206 14.4663 4.87089 12.5264 4.05212"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Paypal16;
