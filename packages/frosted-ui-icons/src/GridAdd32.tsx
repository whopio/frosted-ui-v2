import * as React from 'react';
import { IconProps } from './types';

export const GridAdd32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.75 6.35C3.75 4.91406 4.91406 3.75 6.35 3.75H11.15C12.5859 3.75 13.75 4.91406 13.75 6.35V11.15C13.75 12.5859 12.5859 13.75 11.15 13.75H6.35C4.91406 13.75 3.75 12.5859 3.75 11.15V6.35zM3.75 20.85C3.75 19.4141 4.91406 18.25 6.35 18.25H11.15C12.5859 18.25 13.75 19.4141 13.75 20.85V25.65C13.75 27.0859 12.5859 28.25 11.15 28.25H6.35C4.91406 28.25 3.75 27.0859 3.75 25.65V20.85zM28.2501 23.5H18.7501M23.5001 28.25L23.5001 18.75M18.25 6.35C18.25 4.91406 19.4141 3.75 20.85 3.75H25.65C27.0859 3.75 28.25 4.91406 28.25 6.35V11.15C28.25 12.5859 27.0859 13.75 25.65 13.75H20.85C19.4141 13.75 18.25 12.5859 18.25 11.15V6.35z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default GridAdd32;
