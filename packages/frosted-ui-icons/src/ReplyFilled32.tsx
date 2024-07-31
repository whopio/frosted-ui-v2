import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.9993 5.82748C15.9993 4.38564 14.2926 3.62405 13.2195 4.58706L1.88429 14.7597C1.14631 15.422 1.14632 16.5782 1.88429 17.2405L13.2195 27.413C14.2926 28.3761 15.9993 27.6145 15.9993 26.1726V21.6733C20.9906 21.74 23.6025 22.3157 25.1739 23.204C26.767 24.1044 27.4026 25.3757 28.4063 27.3834L28.4382 27.4473C28.6457 27.8621 29.111 28.0798 29.5625 27.9733C30.0138 27.8668 30.3326 27.4638 30.3326 27.0001C30.3326 21.3129 29.5967 17.06 27.1717 14.2618C24.8561 11.5899 21.2085 10.4682 15.9993 10.345V5.82748Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled32;
