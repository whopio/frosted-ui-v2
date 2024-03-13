import * as React from 'react';
import { IconProps } from './types';

export const DiceSize20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.45926 3.45926C2.89331 4.0252 2.57537 4.79278 2.57537 5.59315L2.57537 14.4069C2.57537 15.2072 2.89331 15.9748 3.45926 16.5407V16.5407C4.0252 17.1067 4.79278 17.4246 5.59314 17.4246H14.4068C15.2072 17.4246 15.9748 17.1067 16.5407 16.5407V16.5407C17.1067 15.9748 17.4246 15.2072 17.4246 14.4069V5.59314C17.4246 4.79278 17.1067 4.0252 16.5407 3.45926V3.45926C15.9748 2.89332 15.2072 2.57538 14.4068 2.57538L5.59314 2.57538C4.79278 2.57538 4.0252 2.89332 3.45926 3.45926V3.45926Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7071 9.29289C11.0976 9.68342 11.0976 10.3166 10.7071 10.7071 10.3166 11.0976 9.68341 11.0976 9.29288 10.7071 8.90236 10.3166 8.90236 9.68342 9.29288 9.29289 9.68341 8.90237 10.3166 8.90237 10.7071 9.29289zM7.17156 5.75736C7.56209 6.14788 7.56209 6.78105 7.17156 7.17157 6.78104 7.5621 6.14787 7.5621 5.75735 7.17157 5.36683 6.78105 5.36683 6.14788 5.75735 5.75736 6.14787 5.36684 6.78104 5.36684 7.17156 5.75736zM5.75735 12.8284C6.14787 12.4379 6.78104 12.4379 7.17156 12.8284 7.56209 13.219 7.56209 13.8521 7.17156 14.2426 6.78104 14.6332 6.14787 14.6332 5.75735 14.2426 5.36683 13.8521 5.36683 13.219 5.75735 12.8284zM14.2426 12.8284C14.6332 13.219 14.6332 13.8521 14.2426 14.2426 13.8521 14.6332 13.2189 14.6332 12.8284 14.2426 12.4379 13.8521 12.4379 13.219 12.8284 12.8284 13.2189 12.4379 13.8521 12.4379 14.2426 12.8284zM12.8284 5.75736C13.2189 5.36683 13.8521 5.36684 14.2426 5.75736 14.6332 6.14788 14.6332 6.78105 14.2426 7.17157 13.8521 7.5621 13.2189 7.5621 12.8284 7.17157 12.4379 6.78105 12.4379 6.14788 12.8284 5.75736z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DiceSize20;
