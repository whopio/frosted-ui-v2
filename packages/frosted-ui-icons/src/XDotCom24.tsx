import * as React from 'react';
import { IconProps } from './types';

export const XDotCom24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_286_150)">
          <path
            d="M14.2341 10.1623L22.9766 -3.05176e-05H20.9049L13.3139 8.82382L7.2509 -3.05176e-05H0.257996L9.42637 13.3432L0.257996 24H2.32979L10.3461 14.6817L16.7491 24H23.742L14.2336 10.1623H14.2341ZM11.3965 13.4607L10.4676 12.1321L3.07629 1.55959H6.25844L12.2233 10.0919L13.1523 11.4206L20.9059 22.5113H17.7237L11.3965 13.4613V13.4607Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_286_150">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default XDotCom24;