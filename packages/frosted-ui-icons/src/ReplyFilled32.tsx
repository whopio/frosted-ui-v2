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
          d="M14.1821 3.88869V9.24795C14.1821 9.42562 14.3268 9.56917 14.5045 9.56883C21.1907 9.55596 27.8458 10.7161 29.9096 15.9407C32.0066 21.2494 26.7641 27.6198 25.7156 28.6815C24.6671 29.7433 25.7156 23.3729 23.6186 21.2494C21.5753 19.1804 18.5366 19.1273 14.5025 19.126C14.3258 19.1259 14.1821 19.2692 14.1821 19.4459V23.7459C14.1821 24.0181 13.8637 24.166 13.6557 23.9904L1.88982 14.0618C1.73832 13.934 1.73832 13.7006 1.88982 13.5727L13.6557 3.64413C13.8637 3.46856 14.1821 3.61646 14.1821 3.88869Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled32;
