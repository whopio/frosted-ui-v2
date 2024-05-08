import * as React from 'react';
import { IconProps } from './types';

export const RotateCard12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.48055 0.0815913C5.97128 -0.320931 4.49057 0.816629 4.49057 2.37866V3.52266C4.49057 3.96032 4.84536 4.31511 5.28302 4.31511C5.72068 4.31511 6.07547 3.96032 6.07547 3.52266V2.37866C6.07547 1.85798 6.56904 1.4788 7.07213 1.61297L11.8269 2.88105C12.1737 2.97356 12.4151 3.28773 12.4151 3.64674V9.13597C12.4151 9.495 12.1737 9.80917 11.8268 9.90167L7.07209 11.1694C6.56901 11.3036 6.07547 10.9244 6.07547 10.4037V9.56108C6.07547 9.12342 5.72068 8.76862 5.28302 8.76862C4.84536 8.76862 4.49057 9.12342 4.49057 9.56108V10.4037C4.49057 11.9657 5.97117 13.1033 7.48041 12.7008L12.2351 11.4331C13.2759 11.1556 14 10.2131 14 9.13597V3.64674C14 2.5697 13.2759 1.62721 12.2353 1.34967L7.48055 0.0815913ZM8.74903 3.98156C8.43956 3.67209 7.9378 3.67209 7.62833 3.98156C7.31886 4.29103 7.31886 4.79279 7.62833 5.10226L8.12472 5.59865L7.2641 5.59871L2.90566 5.5989C2.25981 5.5989 1.56864 5.75797 1.01326 6.12822C0.434388 6.51413 0 7.14056 0 7.97626C0 8.62672 0.16315 9.26011 0.628331 9.72529C1.09351 10.1905 1.7269 10.3536 2.37736 10.3536C2.81502 10.3536 3.16981 9.99883 3.16981 9.56117C3.16981 9.12351 2.81502 8.76871 2.37736 8.76871C1.97121 8.76871 1.81215 8.66771 1.74903 8.60459C1.68591 8.54147 1.58491 8.38241 1.58491 7.97626C1.58491 7.75536 1.67882 7.58933 1.8924 7.44694C2.12947 7.28889 2.49491 7.18381 2.90566 7.18381L7.2642 7.18362L8.12445 7.18356L7.62833 7.67968C7.31886 7.98915 7.31886 8.4909 7.62833 8.80037C7.9378 9.10985 8.43956 9.10985 8.74903 8.80037L10.5981 6.95132C10.9076 6.64185 10.9076 6.14009 10.5981 5.83062L8.74903 3.98156Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default RotateCard12;