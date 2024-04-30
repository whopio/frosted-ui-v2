import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.92875 10.0654C2.46359 9.52524 2.84737 8.68831 3.56023 8.68831H5.3333V2.52165C5.3333 1.87731 5.85563 1.35498 6.49997 1.35498H9.49996C10.1443 1.35498 10.6666 1.87732 10.6666 2.52165V8.68831H12.4397C13.1526 8.68831 13.5364 9.52524 13.0712 10.0654L8.88402 14.9279C8.41856 15.4684 7.58136 15.4684 7.11589 14.9279L2.92875 10.0654Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled16;
