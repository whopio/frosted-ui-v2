import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.9858 27.9885L16.9858 27.9885L26.5138 16.5549C27.2104 15.719 26.616 14.45 25.5279 14.45L21.0166 14.45L21.0166 4.53333C21.0166 3.82457 20.4421 3.25 19.7333 3.25L12.2666 3.25C11.5579 3.25 10.9833 3.82456 10.9833 4.53333L10.9833 14.45L6.47198 14.45C5.38393 14.45 4.78953 15.719 5.4861 16.5549L15.0141 27.9885L15.0141 27.9885C15.5271 28.6042 16.4728 28.6042 16.9858 27.9885Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatDown32;