import * as React from 'react';
import { IconProps } from './types';

export const Star16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.52448 1.96353C7.67416 1.50287 8.32587 1.50287 8.47554 1.96353L9.74938 5.884C9.81632 6.09001 10.0083 6.22949 10.2249 6.22949H14.3471C14.8315 6.22949 15.0329 6.8493 14.641 7.134L11.3061 9.55698C11.1308 9.68431 11.0575 9.90999 11.1244 10.116L12.3983 14.0365C12.548 14.4971 12.0207 14.8802 11.6289 14.5955L8.29391 12.1725C8.11866 12.0452 7.88136 12.0452 7.70612 12.1725L4.37117 14.5955C3.97931 14.8802 3.45207 14.4971 3.60174 14.0365L4.87558 10.116C4.94252 9.90999 4.86919 9.68431 4.69395 9.55698L1.35899 7.134C0.967138 6.8493 1.16852 6.22949 1.65289 6.22949H5.77512C5.99173 6.22949 6.18371 6.09001 6.25065 5.884L7.52448 1.96353Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star16;
