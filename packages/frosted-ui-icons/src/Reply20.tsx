import * as React from 'react';
import { IconProps } from './types';

export const Reply20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.59546 9.6896L8.67998 3.33169C8.94823 3.09094 9.37489 3.28133 9.37489 3.64179V7.083C16.4582 7.083 18.3332 9.79135 18.3332 16.8747C17.0832 14.3747 16.4582 12.9164 9.37489 12.9164V16.3575C9.37489 16.718 8.94823 16.9084 8.67998 16.6677L1.59546 10.3098C1.41097 10.1442 1.41097 9.8551 1.59546 9.6896Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Reply20;
