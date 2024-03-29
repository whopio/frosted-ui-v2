import * as React from 'react';
import { IconProps } from './types';

export const Swords12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_1083_206)">
          <path
            d="M2.89668 0.46975C2.7011 0.274168 2.41374 0.202109 2.14902 0.282259C1.88429 0.362409 1.68517 0.581758 1.63092 0.85298C1.39841 2.01539 1.76227 3.21708 2.60047 4.05528L4.05907 5.51388L3.64061 5.93234L3.16661 5.45834C2.87372 5.16544 2.39884 5.16544 2.10595 5.45834C1.81306 5.75123 1.81306 6.2261 2.10595 6.519L2.58 6.99304L0.476059 9.09698L0.46967 9.10329C0.176777 9.39618 0.176777 9.87106 0.46967 10.164L1.34987 11.0442C2.29093 11.9852 3.81669 11.9852 4.75775 11.0442L5.05115 10.7508C5.80705 9.99485 5.95578 8.86171 5.49734 7.95736L5.99994 7.45475L6.50261 7.95742C6.04422 8.86176 6.19296 9.99487 6.94884 10.7507L7.24224 11.0441C8.1833 11.9852 9.70905 11.9852 10.6501 11.0441L11.5278 10.1664L11.5303 10.1639C11.6951 9.9992 11.7671 9.77686 11.7466 9.56173C11.7305 9.39441 11.6585 9.23144 11.5303 9.1033L11.5303 9.10329L11.5291 9.10204L9.42002 6.993L9.89403 6.51899C10.1869 6.2261 10.1869 5.75122 9.89403 5.45833C9.60114 5.16544 9.12626 5.16544 8.83337 5.45833L8.35932 5.93239L7.94083 5.5139L9.39944 4.05529L9.39945 4.05528C10.2377 3.21707 10.6015 2.01538 10.369 0.852996C10.3148 0.58177 10.1157 0.362416 9.85094 0.282261C9.58621 0.202107 9.29885 0.274166 9.10327 0.46975L5.99997 3.57304L2.89668 0.46975ZM8.0095 8.40353L8.35938 8.05365L9.93933 9.63361L9.58946 9.98349C9.23418 10.3388 8.65817 10.3388 8.3029 9.98349L8.0095 9.69009C7.65422 9.33481 7.65422 8.7588 8.0095 8.40353ZM2.06069 9.63365L3.64065 8.05369L3.99049 8.40353C4.34576 8.75881 4.34576 9.33482 3.99049 9.69009L3.69709 9.98349C3.34181 10.3388 2.7658 10.3388 2.41053 9.98349L2.06069 9.63365Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_1083_206">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Swords12;