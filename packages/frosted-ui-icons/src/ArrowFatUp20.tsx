import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.8749 17.7085H8.12495C7.66471 17.7085 7.29162 17.3354 7.29162 16.8752V8.54183H4.45027C4.09384 8.54183 3.90196 8.12337 4.13453 7.85328L9.3685 1.77516C9.70092 1.38907 10.2989 1.38907 10.6314 1.77516L15.8653 7.85328C16.0979 8.12337 15.9061 8.54183 15.5496 8.54183H12.7082V16.8752C12.7082 17.3354 12.3352 17.7085 11.8749 17.7085Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatUp20;
