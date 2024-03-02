import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_14_1665)">
          <path
            d="M1.5 3.25C1.5 2.2835 2.2835 1.5 3.25 1.5H12.75C13.7165 1.5 14.5 2.2835 14.5 3.25V12.75C14.5 13.7165 13.7165 14.5 12.75 14.5H3.25C2.2835 14.5 1.5 13.7165 1.5 12.75V3.25ZM3.25 0C1.45507 0 0 1.45507 0 3.25V12.75C0 14.5449 1.45507 16 3.25 16H12.75C14.5449 16 16 14.5449 16 12.75V3.25C16 1.45507 14.5449 0 12.75 0H3.25ZM9 5.00403C9 5.55631 8.55229 6.00403 8 6.00403C7.44772 6.00403 7 5.55631 7 5.00403C7 4.45174 7.44772 4.00403 8 4.00403C8.55229 4.00403 9 4.45174 9 5.00403ZM6.75 7C6.33579 7 6 7.33579 6 7.75C6 8.16421 6.33579 8.5 6.75 8.5H7.25V10.4999H6.75C6.33579 10.4999 6 10.8357 6 11.2499C6 11.6641 6.33579 11.9999 6.75 11.9999H7.99408L8 11.9999L8.00592 11.9999H9.2499C9.66411 11.9999 9.9999 11.6641 9.9999 11.2499C9.9999 10.8357 9.66411 10.4999 9.2499 10.4999H8.75V7.75C8.75 7.33579 8.41421 7 8 7H6.75Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_1665">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default InfoSquare16;
