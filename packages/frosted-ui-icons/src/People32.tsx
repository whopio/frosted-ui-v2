import * as React from 'react';
import { IconProps } from './types';

export const People32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.6668 25.6667H28.5642C29.3394 25.6667 29.9578 25.0054 29.8276 24.2411C29.119 20.0832 26.6923 17 22.6668 17C22.0721 17 21.5122 17.0673 20.9877 17.1954M15 9.33333C15 11.7266 13.0599 13.6667 10.6667 13.6667C8.27346 13.6667 6.33336 11.7266 6.33336 9.33333C6.33336 6.9401 8.27346 5 10.6667 5C13.0599 5 15 6.9401 15 9.33333ZM26.3334 10C26.3334 12.025 24.6917 13.6667 22.6667 13.6667C20.6417 13.6667 19 12.025 19 10C19 7.97496 20.6417 6.33333 22.6667 6.33333C24.6917 6.33333 26.3334 7.97496 26.3334 10ZM2.49416 25.5744C3.25138 20.6663 6.02293 17 10.6667 17C15.3105 17 18.082 20.6663 18.8392 25.5744C18.9573 26.34 18.3403 27 17.5656 27H3.76775C2.99307 27 2.37604 26.34 2.49416 25.5744Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default People32;
