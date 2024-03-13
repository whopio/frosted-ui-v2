import * as React from 'react';
import { IconProps } from './types';

export const DiscordFilledSize16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.0908 3.34854C12.1272 2.90505 11.1099 2.59042 10.0649 2.41269C9.92189 2.66966 9.79255 2.93404 9.67729 3.20474C8.56422 3.03613 7.43229 3.03613 6.31923 3.20474C6.20394 2.93408 6.07455 2.66969 5.93162 2.41269C4.886 2.59192 3.86805 2.9073 2.90347 3.35086C0.988528 6.19902 0.469415 8.97641 0.728968 11.7144C1.85041 12.5473 3.10562 13.1808 4.44004 13.5873C4.74052 13.181 5.0064 12.7501 5.23486 12.2989C4.80092 12.1359 4.3821 11.9349 3.98322 11.6982C4.0882 11.6217 4.19087 11.5428 4.29008 11.4663C5.4507 12.0149 6.71742 12.2994 8.00002 12.2994C9.28256 12.2994 10.5493 12.0149 11.7099 11.4663C11.8103 11.5486 11.913 11.6275 12.0168 11.6982C11.6172 11.9353 11.1976 12.1367 10.7628 12.3001C10.991 12.751 11.2569 13.1816 11.5576 13.5873C12.8932 13.1825 14.1494 12.5493 15.271 11.7156C15.5756 8.54041 14.7508 5.7885 13.0908 3.34854ZM5.56363 10.0306C4.84034 10.0306 4.24278 9.37074 4.24278 8.55894C4.24278 7.74721 4.81957 7.08154 5.56132 7.08154C6.30308 7.08154 6.89602 7.74721 6.88336 8.55894C6.87062 9.37074 6.30077 10.0306 5.56363 10.0306ZM10.4364 10.0306C9.71189 10.0306 9.11669 9.37074 9.11669 8.55894C9.11669 7.74721 9.69342 7.08154 10.4364 7.08154C11.1793 7.08154 11.7676 7.74721 11.7549 8.55894C11.7422 9.37074 11.1735 10.0306 10.4364 10.0306Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DiscordFilledSize16;
