import * as React from 'react';
import { IconProps } from './types';

export const Trophy12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M3.67857 0.5C3.06921 0.5 2.56785 0.962461 2.50634 1.55556H1.46323C0.655109 1.55556 0 2.21067 0 3.01878V4.32354C0 5.52557 0.974432 6.5 2.17646 6.5H2.64494C3.00534 7.71098 4.00351 8.64729 5.24994 8.91944V10H4.25C3.83579 10 3.5 10.3358 3.5 10.75C3.5 11.1642 3.83579 11.5 4.25 11.5H7.75C8.16421 11.5 8.5 11.1642 8.5 10.75C8.5 10.3358 8.16421 10 7.75 10H6.74994V8.91947C7.99643 8.64735 8.99464 7.71102 9.35506 6.5H9.82354C11.0256 6.5 12 5.52557 12 4.32354V3.01878C12 2.21067 11.3449 1.55556 10.5368 1.55556H9.49366C9.43215 0.962461 8.93079 0.5 8.32143 0.5H3.67857ZM5.99994 7.5C4.89537 7.5 4 6.60457 4 5.5V2H8V5.5C8 6.60457 7.10451 7.5 5.99994 7.5ZM1.5 4.32354C1.5 4.69714 1.80286 5 2.17646 5H2.5V3.05556H1.5V4.32354ZM10.5 4.32354C10.5 4.69714 10.1971 5 9.82354 5H9.5V3.05556H10.5V4.32354Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Trophy12;
