import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.3253 3.15659C9.88561 1.57798 6.66669 3.32916 6.66669 6.235V25.7649C6.66669 28.6708 9.88561 30.422 12.3253 28.8433L27.4166 19.0784C29.6495 17.6334 29.6496 14.3664 27.4166 12.9215L12.3253 3.15659Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PlayFilled32;
