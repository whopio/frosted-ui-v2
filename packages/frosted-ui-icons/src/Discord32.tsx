import * as React from 'react';
import { IconProps } from './types';

export const Discord32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.1815 6.69702C24.2543 5.81004 22.2197 5.18077 20.1297 4.82532C19.8437 5.33925 19.5851 5.86802 19.3545 6.40942C17.1284 6.0722 14.8645 6.0722 12.6384 6.40942C12.4078 5.86809 12.1491 5.33932 11.8632 4.82532C9.77196 5.18377 7.73606 5.81453 5.8069 6.70166C1.97701 12.398 0.938784 17.9528 1.45789 23.4288C3.70077 25.0946 6.2112 26.3616 8.88004 27.1745C9.48098 26.362 10.0127 25.5001 10.4697 24.5977C9.6018 24.2718 8.76414 23.8698 7.9664 23.3964C8.17636 23.2433 8.38169 23.0856 8.5801 22.9325C10.9013 24.0298 13.4348 24.5988 16 24.5988C18.5651 24.5988 21.0985 24.0298 23.4197 22.9325C23.6205 23.0972 23.8259 23.2549 24.0335 23.3964C23.2343 23.8706 22.3951 24.2734 21.5256 24.6001C21.982 25.502 22.5137 26.3632 23.1152 27.1745C25.7864 26.3649 28.2987 25.0985 30.542 23.4312C31.1511 17.0808 29.5015 11.5769 26.1815 6.69702Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M8.4856 17.1179C8.4856 18.7415 9.6807 20.0612 11.1273 20.0612 12.6016 20.0612 13.7413 18.7415 13.7667 17.1179 13.7921 15.4944 12.6062 14.1631 11.1227 14.1631 9.63917 14.1631 8.4856 15.4944 8.4856 17.1179zM18.2334 17.1179C18.2334 18.7415 19.4238 20.0612 20.8727 20.0612 22.347 20.0612 23.4845 18.7415 23.5098 17.1179 23.5353 15.4944 22.3586 14.1631 20.8727 14.1631 19.3869 14.1631 18.2334 15.4944 18.2334 17.1179z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Discord32;
