import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilledSize20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.8369 3.33979C17.5903 3.57301 18.1824 4.2577 18.3841 5.12895C18.7485 6.70654 18.75 9.99999 18.75 9.99999C18.75 9.99999 18.75 13.2935 18.3841 14.8711C18.1824 15.7423 17.5903 16.427 16.8369 16.6602C15.4727 17.0833 10 17.0833 10 17.0833C10 17.0833 4.52728 17.0833 3.16307 16.6602C2.40966 16.427 1.81758 15.7423 1.6159 14.8711C1.25 13.2935 1.25 9.99999 1.25 9.99999C1.25 9.99999 1.25 6.70654 1.6159 5.12895C1.81758 4.2577 2.40966 3.57301 3.16307 3.33979C4.52728 2.91666 10 2.91666 10 2.91666C10 2.91666 15.4727 2.91666 16.8369 3.33979ZM12.9278 10.0002L8.16487 12.7499V7.25053L12.9278 10.0002Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default YoutubeFilledSize20;
