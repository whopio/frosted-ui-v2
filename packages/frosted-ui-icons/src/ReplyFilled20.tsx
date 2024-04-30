import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.99952 3.64223C9.99952 2.74108 8.93285 2.26508 8.26215 2.86697L1.17765 9.22488C0.716416 9.63879 0.716418 10.3615 1.17765 10.7754L8.26215 17.1332C8.93285 17.7351 9.99952 17.2591 9.99952 16.358V13.5459C13.1191 13.5875 14.7515 13.9474 15.7337 14.5025C16.7294 15.0653 17.1266 15.8599 17.7539 17.1147L17.7739 17.1546C17.9035 17.4139 18.1944 17.55 18.4765 17.4834C18.7586 17.4168 18.9579 17.165 18.9579 16.8751C18.9579 13.3206 18.4979 10.6625 16.9823 8.91371C15.535 7.24375 13.2553 6.54268 9.99952 6.46565V3.64223Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled20;
