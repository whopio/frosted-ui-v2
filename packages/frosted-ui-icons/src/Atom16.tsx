import * as React from 'react';
import { IconProps } from './types';

export const Atom16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.9191 15.0197C12.5959 15.1081 13.5373 15.0525 14.248 14.3418C14.9588 13.631 15.0144 12.6896 14.926 12.0128C14.8341 11.3094 14.5549 10.571 14.1947 9.86364C13.8992 9.28341 13.522 8.67129 13.0762 8.0468C13.5221 7.42226 13.8993 6.8101 14.1948 6.22983C14.555 5.52243 14.8342 4.78405 14.9261 4.08066C15.0145 3.40389 14.9589 2.46246 14.2481 1.75172C13.5374 1.04098 12.596 0.985331 11.9192 1.07375C11.2158 1.16565 10.4774 1.4449 9.77003 1.8051C9.18976 2.10057 8.57761 2.47776 7.95309 2.9236C7.32853 2.47773 6.71635 2.10051 6.13606 1.80503C5.42866 1.44483 4.69028 1.16558 3.98689 1.07369C3.31012 0.985265 2.36869 1.04091 1.65795 1.75165C0.947204 2.46239 0.89156 3.40383 0.979981 4.08059C1.07188 4.78398 1.35113 5.52236 1.71133 6.22976C2.00681 6.81006 2.38403 7.42224 2.8299 8.0468C2.38407 8.67131 2.00688 9.28345 1.71142 9.8637C1.35122 10.5711 1.07197 11.3095 0.980073 12.0129C0.891652 12.6896 0.947295 13.6311 1.65804 14.3418C2.36878 15.0526 3.31021 15.1082 3.98698 15.0198C4.69037 14.9279 5.42875 14.6486 6.13615 14.2884C6.71641 13.993 7.32856 13.6158 7.95309 13.1699C8.57758 13.6157 9.1897 13.9929 9.76993 14.2884C10.4773 14.6486 11.2157 14.9278 11.9191 15.0197ZM13.1875 2.81238C12.5686 2.19352 11.0114 2.66724 9.19486 3.88784C9.70561 4.31626 10.2161 4.78386 10.716 5.28375C11.2159 5.78369 11.6835 6.29421 12.112 6.80502C13.3326 4.98843 13.8063 3.43124 13.1875 2.81238ZM2.71861 2.81231C3.33748 2.19344 4.8947 2.66719 6.71132 3.88783C6.20054 4.31628 5.69005 4.7839 5.19013 5.28381C4.69021 5.78374 4.22258 6.29423 3.79413 6.80502C2.57348 4.9884 2.09973 3.43118 2.71861 2.81231ZM6.25079 6.34447C5.68564 6.90963 5.17052 7.483 4.71452 8.04679C5.1705 8.61055 5.68558 9.18387 6.2507 9.74899C6.81588 10.3142 7.38927 10.8293 7.95308 11.2853C8.51687 10.8293 9.09023 10.3142 9.65538 9.74906C10.2205 9.18392 10.7356 8.61057 11.1916 8.04679C10.7356 7.48298 10.2205 6.90959 9.65529 6.34441C9.09017 5.77928 8.51684 5.2642 7.95308 4.80822C7.3893 5.26422 6.81594 5.77932 6.25079 6.34447ZM2.7187 13.2812C2.09984 12.6623 2.57355 11.1051 3.79414 9.28857C4.22256 9.79932 4.69016 10.3098 5.19004 10.8097C5.68998 11.3096 6.2005 11.7772 6.7113 12.2057C4.89473 13.4263 3.33756 13.9 2.7187 13.2812ZM13.1874 13.2811C12.5685 13.8999 11.0114 13.4262 9.19486 12.2057C9.70564 11.7773 10.2161 11.3096 10.716 10.8097C11.2159 10.3098 11.6836 9.79934 12.112 9.28857C13.3325 11.1051 13.8062 12.6622 13.1874 13.2811ZM8 8.99998C8.55229 8.99998 9 8.55227 9 7.99998C9 7.4477 8.55229 6.99998 8 6.99998C7.44772 6.99998 7 7.4477 7 7.99998C7 8.55227 7.44772 8.99998 8 8.99998Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Atom16;
