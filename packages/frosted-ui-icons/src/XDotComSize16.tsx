import * as React from 'react';
import { IconProps } from './types';

export const XDotComSize16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.6022 2.33334H13.5235L9.326 7.13401L14.264 13.6667H10.3976L7.36934 9.70468L3.90425 13.6667H1.98179L6.4714 8.53181L1.73438 2.33334H5.69893L8.43627 5.95478L11.6022 2.33334ZM10.9279 12.5159H11.9925L5.12045 3.42367H3.97801L10.9279 12.5159Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default XDotComSize16;
