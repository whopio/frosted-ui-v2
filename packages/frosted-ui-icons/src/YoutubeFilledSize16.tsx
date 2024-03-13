import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilledSize16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.4695 2.67185C14.0723 2.85843 14.5459 3.40618 14.7073 4.10318C14.9988 5.36525 15 8.00001 15 8.00001C15 8.00001 15 10.6348 14.7073 11.8969C14.5459 12.5939 14.0723 13.1416 13.4695 13.3281C12.3782 13.6667 8 13.6667 8 13.6667C8 13.6667 3.62183 13.6667 2.53045 13.3281C1.92773 13.1416 1.45407 12.5939 1.29272 11.8969C1 10.6348 1 8.00001 1 8.00001C1 8.00001 1 5.36525 1.29272 4.10318C1.45407 3.40618 1.92773 2.85843 2.53045 2.67185C3.62183 2.33334 8 2.33334 8 2.33334C8 2.33334 12.3782 2.33334 13.4695 2.67185ZM10.3423 8.00021L6.5319 10.1999V5.80044L10.3423 8.00021Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default YoutubeFilledSize16;
