import * as React from 'react';
import { IconProps } from './types';

export const Globe20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.39971 4.44126C7.85397 5.8266 7.5 7.79163 7.5 10C7.5 12.2084 7.85397 14.1734 8.39971 15.5587C8.67346 16.2537 8.98082 16.7652 9.28378 17.0905C9.58572 17.4147 9.82831 17.5 10 17.5C10.1717 17.5 10.4143 17.4147 10.7162 17.0905C11.0192 16.7652 11.3265 16.2537 11.6003 15.5587C12.146 14.1734 12.5 12.2084 12.5 10C12.5 7.79163 12.146 5.8266 11.6003 4.44126C11.3265 3.74635 11.0192 3.23477 10.7162 2.90949C10.4143 2.5853 10.1717 2.5 10 2.5C9.82831 2.5 9.58572 2.5853 9.28378 2.90949C8.98082 3.23477 8.67346 3.74635 8.39971 4.44126ZM8.18613 1.88716C8.66183 1.3764 9.27423 1 10 1C10.7258 1 11.3382 1.3764 11.8139 1.88716C12.2886 2.39682 12.6815 3.09344 12.9959 3.89148C13.6264 5.49205 14 7.65202 14 10C14 12.348 13.6264 14.508 12.9959 16.1085C12.6815 16.9066 12.2886 17.6032 11.8139 18.1128C11.3382 18.6236 10.7258 19 10 19C9.27423 19 8.66183 18.6236 8.18613 18.1128C7.71144 17.6032 7.31848 16.9066 7.0041 16.1085C6.37357 14.508 6 12.348 6 10C6 7.65202 6.37357 5.49205 7.0041 3.89148C7.31848 3.09344 7.71144 2.39682 8.18613 1.88716Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M1.50586 7.25C1.50586 7.66421 1.84165 8 2.25586 8L17.7427 8C18.1569 8 18.4927 7.66421 18.4927 7.25 18.4927 6.83579 18.1569 6.5 17.7427 6.5L2.25586 6.5C1.84165 6.5 1.50586 6.83579 1.50586 7.25zM1.50586 12.75C1.50586 13.1642 1.84165 13.5 2.25586 13.5L17.7427 13.5C18.1569 13.5 18.4927 13.1642 18.4927 12.75 18.4927 12.3358 18.1569 12 17.7427 12L2.25586 12C1.84165 12 1.50586 12.3358 1.50586 12.75z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Globe20;
