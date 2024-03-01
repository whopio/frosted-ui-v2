import * as React from 'react';
import { IconProps } from './types';

export const Shop20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 9V15.6338C2.5 17.3548 3.89517 18.75 5.61619 18.75H14.3838C16.1048 18.75 17.5 17.3548 17.5 15.6338V9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.25 18.5636V13.8553C7.25 13.521 7.52099 13.25 7.85526 13.25H12.1447C12.479 13.25 12.75 13.521 12.75 13.8553V18.5636"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1.67225 4.30115C2.18862 3.05924 3.40151 2.25 4.74649 2.25H7.6456L6.82568 6.85583C6.57909 8.24104 5.37465 9.25 3.96766 9.25 2.36616 9.25 1.06581 7.94884 1.06471 6.34539 1.06445 5.96146 1.14023 5.5807 1.28751 5.22647L1.67225 4.30115zM18.3277 4.30115C17.8114 3.05924 16.5985 2.25 15.2535 2.25H12.3544L13.1743 6.85583C13.4209 8.24104 14.6254 9.25 16.0323 9.25 17.6338 9.25 18.9342 7.94884 18.9353 6.34539 18.9356 5.96146 18.8598 5.5807 18.7125 5.22647L18.3277 4.30115z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M7.08453 5.86736L7.6221 2.25H12.3812L12.9187 5.86736C13.1835 7.64918 11.803 9.25 10.0016 9.25C8.20025 9.25 6.81974 7.64918 7.08453 5.86736Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Shop20;
