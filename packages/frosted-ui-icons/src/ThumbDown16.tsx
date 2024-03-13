import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.50001 8.83335H2.50001C2.13182 8.83335 1.83334 8.53489 1.83334 8.16669V3.16669C1.83334 2.79849 2.13182 2.50002 2.50001 2.50002H4.50001M4.50001 2.50002V8.66669L7.14721 13.8053C7.26148 14.0272 7.49101 14.1667 7.74068 14.1667C8.55894 14.1667 9.18721 13.4365 9.06114 12.628L8.67741 10.1667H12.1726C13.3971 10.1667 14.3341 9.07629 14.1499 7.86582L13.5919 4.19915C13.4432 3.22202 12.6031 2.50002 11.6147 2.50002H4.50001Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbDown16;
