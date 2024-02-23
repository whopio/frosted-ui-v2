import * as React from 'react';
import { IconProps } from './types';

export const Grid16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 1.5H4.5C5.05228 1.5 5.5 1.94772 5.5 2.5V4.5C5.5 5.05228 5.05228 5.5 4.5 5.5H2.5C1.94772 5.5 1.5 5.05228 1.5 4.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5ZM0 2.5C0 1.11929 1.11929 0 2.5 0H4.5C5.88071 0 7 1.11929 7 2.5V4.5C7 5.88071 5.88071 7 4.5 7H2.5C1.11929 7 0 5.88071 0 4.5V2.5ZM2.5 10.5H4.5C5.05228 10.5 5.5 10.9477 5.5 11.5V13.5C5.5 14.0523 5.05228 14.5 4.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V11.5C1.5 10.9477 1.94772 10.5 2.5 10.5ZM0 11.5C0 10.1193 1.11929 9 2.5 9H4.5C5.88071 9 7 10.1193 7 11.5V13.5C7 14.8807 5.88071 16 4.5 16H2.5C1.11929 16 0 14.8807 0 13.5V11.5ZM13.5 10.5H11.5C10.9477 10.5 10.5 10.9477 10.5 11.5V13.5C10.5 14.0523 10.9477 14.5 11.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V11.5C14.5 10.9477 14.0523 10.5 13.5 10.5ZM11.5 9C10.1193 9 9 10.1193 9 11.5V13.5C9 14.8807 10.1193 16 11.5 16H13.5C14.8807 16 16 14.8807 16 13.5V11.5C16 10.1193 14.8807 9 13.5 9H11.5ZM11.5 1.5H13.5C14.0523 1.5 14.5 1.94772 14.5 2.5V4.5C14.5 5.05228 14.0523 5.5 13.5 5.5H11.5C10.9477 5.5 10.5 5.05228 10.5 4.5V2.5C10.5 1.94772 10.9477 1.5 11.5 1.5ZM9 2.5C9 1.11929 10.1193 0 11.5 0H13.5C14.8807 0 16 1.11929 16 2.5V4.5C16 5.88071 14.8807 7 13.5 7H11.5C10.1193 7 9 5.88071 9 4.5V2.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Grid16;