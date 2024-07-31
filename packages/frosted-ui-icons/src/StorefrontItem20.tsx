import * as React from 'react';
import { IconProps } from './types';

export const StorefrontItem20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.75 7V4.25C18.75 2.86929 17.6307 1.75 16.25 1.75H3.75C2.36929 1.75 1.25 2.86929 1.25 4.25V13.2812C1.25 14.662 2.36929 15.7812 3.75 15.7812H5.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 8.00757C13.3593 8.00757 13.2214 8.04748 13.1024 8.12268L9.22137 10.5759C9.08356 10.663 9 10.8147 9 10.9777V15.3101C9 15.4732 9.08356 15.6249 9.22137 15.712L13.1024 18.1652C13.2214 18.2404 13.3593 18.2803 13.5 18.2803C13.6407 18.2803 13.7786 18.2404 13.8976 18.1652L17.7786 15.712C17.9164 15.6249 18 15.4732 18 15.3101V10.9777C18 10.8147 17.9164 10.663 17.7786 10.5759L13.8976 8.12268C13.7786 8.04748 13.6407 8.00757 13.5 8.00757ZM12.301 6.85474C12.6598 6.62795 13.0755 6.50757 13.5 6.50757C13.9245 6.50757 14.3402 6.62795 14.699 6.85474L18.5801 9.30796C19.1528 9.66996 19.5 10.3002 19.5 10.9777V15.3101C19.5 15.9877 19.1528 16.6179 18.5801 16.9799L14.699 19.4331C14.3402 19.6599 13.9245 19.7803 13.5 19.7803C13.0755 19.7803 12.6598 19.6599 12.301 19.4331L8.41991 16.9799C7.84722 16.6179 7.5 15.9877 7.5 15.3101V10.9777C7.5 10.3002 7.84722 9.66996 8.41991 9.30796L12.301 6.85474Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M10.0854 12.0131C9.72112 11.8159 9.58563 11.3608 9.78278 10.9965C9.97993 10.6322 10.4351 10.4967 10.7994 10.6939L13.4981 12.1544L16.1969 10.6939C16.5612 10.4967 17.0163 10.6322 17.2134 10.9965C17.4106 11.3608 17.2751 11.8159 16.9108 12.0131L14.246 13.4553V16.623C14.246 17.0373 13.9102 17.373 13.496 17.373C13.0818 17.373 12.746 17.0373 12.746 16.623V13.453L10.0854 12.0131Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <circle cx="4.375" cy="4.75" r="1" fill={color} />
        <circle cx="7.5" cy="4.75" r="1" fill={color} />
        <circle cx="10.625" cy="4.75" r="1" fill={color} />
      </svg>
    );
  },
);

export default StorefrontItem20;
