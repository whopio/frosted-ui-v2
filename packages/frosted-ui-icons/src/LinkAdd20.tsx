import * as React from 'react';
import { IconProps } from './types';

export const LinkAdd20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.2788 1.91053C11.182 1.00738 12.4069 0.5 13.6841 0.5C16.3439 0.5 18.5 2.65614 18.5 5.31586C18.5 6.59311 17.9926 7.81804 17.0895 8.72119L14.2491 11.5616C13.9562 11.8545 13.4813 11.8545 13.1884 11.5616C12.8955 11.2687 12.8955 10.7938 13.1884 10.5009L16.0288 7.66053C16.6507 7.03869 17 6.19529 17 5.31586C17 3.48456 15.5154 2 13.6841 2C12.8047 2 11.9613 2.34935 11.3395 2.97119L8.49908 5.81158C8.20619 6.10447 7.73131 6.10447 7.43842 5.81158C7.14553 5.51869 7.14553 5.04381 7.43842 4.75092L10.2788 1.91053ZM5.81158 7.43842C6.10447 7.73131 6.10447 8.20619 5.81158 8.49908L2.97119 11.3395C2.34935 11.9613 2 12.8047 2 13.6841C2 15.5154 3.48456 17 5.31586 17C6.19529 17 7.03869 16.6507 7.66053 16.0288L10.5009 13.1884C10.7938 12.8955 11.2687 12.8955 11.5616 13.1884C11.8545 13.4813 11.8545 13.9562 11.5616 14.2491L8.72119 17.0895C7.81804 17.9926 6.59311 18.5 5.31586 18.5C2.65614 18.5 0.5 16.3439 0.5 13.6841C0.5 12.4069 1.00738 11.182 1.91053 10.2788L4.75092 7.43842C5.04381 7.14553 5.51869 7.14553 5.81158 7.43842Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M13.2803 5.71967C13.5732 6.01256 13.5732 6.48744 13.2803 6.78033L6.78033 13.2803C6.48744 13.5732 6.01256 13.5732 5.71967 13.2803C5.42678 12.9874 5.42678 12.5126 5.71967 12.2197L12.2197 5.71967C12.5126 5.42678 12.9874 5.42678 13.2803 5.71967Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M15.25 18.25C15.25 18.6642 15.5858 19 16 19C16.4142 19 16.75 18.6642 16.75 18.25V16.75L18.25 16.75C18.6642 16.75 19 16.4142 19 16C19 15.5858 18.6642 15.25 18.25 15.25L16.75 15.25V13.75C16.75 13.3358 16.4142 13 16 13C15.5858 13 15.25 13.3358 15.25 13.75V15.25L13.75 15.25C13.3358 15.25 13 15.5858 13 16C13 16.4142 13.3358 16.75 13.75 16.75L15.25 16.75V18.25Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default LinkAdd20;
