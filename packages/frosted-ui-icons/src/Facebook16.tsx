import * as React from 'react';
import { IconProps } from './types';

export const Facebook16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.38934 14.4707V10.0374H5.01341V8.00004H6.38934V7.12224C6.38934 4.853 7.41598 3.80226 9.64265 3.80226C10.0642 3.80226 10.7919 3.88485 11.0908 3.96745V5.813C10.9334 5.79708 10.6586 5.78893 10.32 5.78893C9.22671 5.78893 8.80525 6.20226 8.80525 7.27964V8.00004H10.9842L10.6108 10.0371H8.80825V14.6185C12.1091 14.2186 14.6666 11.408 14.6666 8.00004C14.6666 4.31819 11.6818 1.33337 7.99998 1.33337C4.31813 1.33337 1.33331 4.31819 1.33331 8.00004C1.33331 11.1266 3.4854 13.7502 6.38934 14.4707Z"
          stroke={color}
          strokeWidth="1.25"
        />
      </svg>
    );
  },
);

export default Facebook16;
