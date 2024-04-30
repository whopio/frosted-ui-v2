import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99958 2.91371C7.99958 2.19279 7.14625 1.81199 6.60969 2.2935L0.942086 7.37983C0.573096 7.71096 0.573098 8.28909 0.942086 8.62023L6.60969 13.7065C7.14625 14.188 7.99958 13.8072 7.99958 13.0863V10.8366C10.4952 10.87 11.8012 11.1578 12.5869 11.602C13.3834 12.0522 13.7012 12.6878 14.2031 13.6917L14.219 13.7236C14.3228 13.931 14.5554 14.0399 14.7812 13.9866C15.0068 13.9334 15.1662 13.7319 15.1662 13.5C15.1662 10.6564 14.7983 8.52996 13.5858 7.13089C12.428 5.79493 10.6042 5.23407 7.99958 5.17245V2.91371Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled16;
