import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.66084 12.5819C3.07939 11.9066 3.55911 10.8604 4.45018 10.8604H6.66652V3.15212C6.66652 2.3467 7.31944 1.69379 8.12485 1.69379H11.8748C12.6803 1.69379 13.3332 2.34671 13.3332 3.15212V10.8604H15.5495C16.4406 10.8604 16.9203 11.9066 16.3388 12.5819L11.1049 18.6599C10.5231 19.3356 9.47659 19.3356 8.89475 18.6599L3.66084 12.5819Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled20;
