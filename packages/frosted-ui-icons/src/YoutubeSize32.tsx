import * as React from 'react';
import { IconProps } from './types';

export const YoutubeSize32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.9391 5.34367C28.1445 5.71683 29.0919 6.81232 29.4145 8.20632C29.9976 10.7305 30 16 30 16C30 16 30 21.2696 29.4145 23.7937C29.0919 25.1877 28.1445 26.2832 26.9391 26.6563C24.7564 27.3333 16 27.3333 16 27.3333C16 27.3333 7.24365 27.3333 5.06091 26.6563C3.85545 26.2832 2.90813 25.1877 2.58544 23.7937C2 21.2696 2 16 2 16C2 16 2 10.7305 2.58544 8.20632C2.90813 6.81232 3.85545 5.71683 5.06091 5.34367C7.24365 4.66666 16 4.66666 16 4.66666C16 4.66666 24.7564 4.66666 26.9391 5.34367ZM20.1845 15.7117C20.4067 15.84 20.4067 16.1608 20.1845 16.2891L13.5638 20.1112C13.3416 20.2395 13.0638 20.0791 13.0638 19.8225V12.1782C13.0638 11.9216 13.3416 11.7612 13.5638 11.8895L20.1845 15.7117Z"
          stroke={color}
          clipRule="evenodd"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default YoutubeSize32;
