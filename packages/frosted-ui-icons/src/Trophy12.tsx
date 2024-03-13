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
          d="M3.5 10.75C3.5 10.3358 3.83579 10 4.25 10H7.75C8.16421 10 8.5 10.3358 8.5 10.75C8.5 11.1642 8.16421 11.5 7.75 11.5H4.25C3.83579 11.5 3.5 11.1642 3.5 10.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5.99994 7.5C6.41415 7.5 6.74994 7.83579 6.74994 8.25V10.75C6.74994 11.1642 6.41415 11.5 5.99994 11.5C5.58573 11.5 5.24994 11.1642 5.24994 10.75V8.25C5.24994 7.83579 5.58573 7.5 5.99994 7.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4 2V5.5C4 6.60457 4.89537 7.5 5.99994 7.5C7.10451 7.5 8 6.60457 8 5.5V2H4ZM2.5 1.67857C2.5 1.02766 3.02766 0.5 3.67857 0.5H8.32143C8.97234 0.5 9.5 1.02766 9.5 1.67857V5.5C9.5 7.433 7.933 9 6 9C4.067 9 2.5 7.433 2.5 5.5V1.67857Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8 2.30556C8 1.89134 8.33579 1.55556 8.75 1.55556H10.5368C11.3449 1.55556 12 2.21067 12 3.01878V4.32354C12 5.52557 11.0256 6.5 9.82354 6.5H8.75C8.33579 6.5 8 6.16421 8 5.75 8 5.33579 8.33579 5 8.75 5H9.82354C10.1971 5 10.5 4.69714 10.5 4.32354V3.05556H8.75C8.33579 3.05556 8 2.71977 8 2.30556zM4 2.30556C4 1.89134 3.66421 1.55556 3.25 1.55556H1.46323C.655109 1.55556 0 2.21067 0 3.01878V4.32354C0 5.52557.974432 6.5 2.17646 6.5H3.25C3.66421 6.5 4 6.16421 4 5.75 4 5.33579 3.66421 5 3.25 5H2.17646C1.80286 5 1.5 4.69714 1.5 4.32354V3.05556H3.25C3.66421 3.05556 4 2.71977 4 2.30556z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Trophy12;
