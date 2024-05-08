import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.6481 5.71758C14.4392 4.71347 13.5657 2.29166 10.0014 2.29166C6.57544 2.29166 5.29073 4.5195 5.29073 6.14582C5.29073 8.67724 7.62873 9.33816 10.0014 9.97141M4.97392 14.2824C5.29446 15.2865 6.43701 17.7083 10.0014 17.7083C13.4273 17.7083 14.9261 15.4805 14.9261 13.8542C14.9261 13.2277 14.783 12.7158 14.5315 12.2905M2.29163 9.99999H17.7083"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough20;
