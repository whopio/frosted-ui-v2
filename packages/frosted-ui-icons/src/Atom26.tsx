import * as React from 'react';
import { IconProps } from './types';

export const Atom26 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.9191 15.0197C12.5959 15.1082 13.5373 15.0525 14.2481 14.3418C14.9588 13.631 15.0144 12.6896 14.926 12.0128C14.8341 11.3094 14.5549 10.5711 14.1947 9.86366C13.8992 9.28342 13.5221 8.6713 13.0762 8.04681C13.5221 7.42228 13.8993 6.81012 14.1948 6.22984C14.555 5.52245 14.8342 4.78406 14.9261 4.08067C15.0145 3.40391 14.9589 2.46247 14.2482 1.75173C13.5374 1.04099 12.596 0.985347 11.9192 1.07377C11.2158 1.16567 10.4774 1.44491 9.77004 1.80511C9.18978 2.10058 8.57763 2.47777 7.9531 2.92362C7.32855 2.47774 6.71637 2.10053 6.13607 1.80505C5.42868 1.44485 4.69029 1.1656 3.9869 1.0737C3.31014 0.98528 2.3687 1.04092 1.65796 1.75166C0.947219 2.46241 0.891576 3.40384 0.979996 4.08061C1.0719 4.784 1.35114 5.52238 1.71134 6.22978C2.00682 6.81007 2.38404 7.42226 2.82991 8.04681C2.38408 8.67133 2.0069 9.28347 1.71144 9.86372C1.35124 10.5711 1.07199 11.3095 0.980088 12.0129C0.891667 12.6897 0.94731 13.6311 1.65805 14.3418C2.36879 15.0526 3.31023 15.1082 3.98699 15.0198C4.69038 14.9279 5.42877 14.6486 6.13616 14.2884C6.71643 13.993 7.32858 13.6158 7.9531 13.1699C8.57759 13.6158 9.18971 13.9929 9.76995 14.2884C10.4773 14.6486 11.2157 14.9278 11.9191 15.0197ZM13.1875 2.81239C12.5686 2.19353 11.0115 2.66725 9.19487 3.88786C9.70562 4.31628 10.2161 4.78388 10.716 5.28376C11.2159 5.7837 11.6836 6.29422 12.112 6.80503C13.3326 4.98844 13.8064 3.43126 13.1875 2.81239ZM2.71862 2.81233C3.33749 2.19345 4.89471 2.6672 6.71133 3.88785C6.20055 4.31629 5.69006 4.78391 5.19015 5.28383C4.69023 5.78375 4.22259 6.29425 3.79415 6.80504C2.5735 4.98842 2.09975 3.4312 2.71862 2.81233ZM6.25081 6.34449C5.68565 6.90965 5.17054 7.48302 4.71453 8.04681C5.17052 8.61056 5.6856 9.18389 6.25072 9.74901C6.8159 10.3142 7.38929 10.8293 7.9531 11.2853C8.51688 10.8293 9.09025 10.3142 9.6554 9.74908C10.2205 9.18393 10.7356 8.61058 11.1916 8.04681C10.7356 7.48299 10.2205 6.9096 9.6553 6.34442C9.09018 5.7793 8.51685 5.26422 7.9531 4.80824C7.38932 5.26424 6.81596 5.77934 6.25081 6.34449ZM2.71871 13.2812C2.09986 12.6623 2.57357 11.1052 3.79416 9.28858C4.22258 9.79933 4.69017 10.3098 5.19006 10.8097C5.69 11.3096 6.20051 11.7773 6.71132 12.2057C4.89474 13.4263 3.33757 13.9 2.71871 13.2812ZM13.1874 13.2811C12.5686 13.9 11.0114 13.4263 9.19488 12.2057C9.70566 11.7773 10.2161 11.3096 10.7161 10.8097C11.216 10.3098 11.6836 9.79936 12.112 9.28859C13.3326 11.1051 13.8062 12.6623 13.1874 13.2811ZM8.00002 9C8.5523 9 9.00002 8.55228 9.00002 8C9.00002 7.44772 8.5523 7 8.00002 7C7.44773 7 7.00002 7.44772 7.00002 8C7.00002 8.55228 7.44773 9 8.00002 9Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Atom26;
