import * as React from 'react';
import { IconProps } from './types';

export const DiscordFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.0907 3.34857C12.1271 2.90508 11.1099 2.59045 10.0649 2.41272C9.92187 2.66969 9.79253 2.93407 9.67727 3.20477C8.5642 3.03616 7.43227 3.03616 6.31921 3.20477C6.20391 2.93411 6.07453 2.66972 5.9316 2.41272C4.88598 2.59195 3.86803 2.90733 2.90345 3.35089C0.988505 6.19905 0.469392 8.97644 0.728945 11.7144C1.85039 12.5474 3.1056 13.1808 4.44002 13.5873C4.74049 13.181 5.00637 12.7501 5.23484 12.2989C4.8009 12.136 4.38207 11.935 3.9832 11.6982C4.08818 11.6217 4.19085 11.5428 4.29005 11.4663C5.45067 12.015 6.7174 12.2994 8 12.2994C9.28253 12.2994 10.5493 12.015 11.7099 11.4663C11.8103 11.5486 11.9129 11.6275 12.0167 11.6982C11.6171 11.9354 11.1975 12.1368 10.7628 12.3001C10.991 12.751 11.2569 13.1816 11.5576 13.5873C12.8932 13.1825 14.1493 12.5493 15.271 11.7156C15.5755 8.54044 14.7507 5.78853 13.0907 3.34857ZM5.56361 10.0306C4.84031 10.0306 4.24276 9.37077 4.24276 8.55897C4.24276 7.74724 4.81955 7.08157 5.5613 7.08157C6.30305 7.08157 6.896 7.74724 6.88333 8.55897C6.8706 9.37077 6.30075 10.0306 5.56361 10.0306ZM10.4363 10.0306C9.71187 10.0306 9.11667 9.37077 9.11667 8.55897C9.11667 7.74724 9.6934 7.08157 10.4363 7.08157C11.1793 7.08157 11.7676 7.74724 11.7549 8.55897C11.7422 9.37077 11.1735 10.0306 10.4363 10.0306Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DiscordFilled16;
