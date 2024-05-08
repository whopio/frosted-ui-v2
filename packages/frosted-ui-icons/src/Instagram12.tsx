import * as React from 'react';
import { IconProps } from './types';

export const Instagram12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M10.4026 9.07115L10.4026 9.07113C10.2859 9.37355 10.1072 9.64834 9.87784 9.87767 9.87778 9.87772 9.87772 9.87778 9.87766 9.87784M10.4026 9.07115L9.87766 9.87784M10.4026 9.07115L10.4061 9.06182M10.4026 9.07115L10.4061 9.06182M9.87766 9.87784C9.64834 10.1072 9.37355 10.2859 9.07113 10.4026L9.06184 10.4061 9.06182 10.4061C8.70306 10.539 8.32432 10.6101 7.94189 10.6162M9.87766 9.87784L7.94189 10.6162M7.94189 10.6162C7.4327 10.6395 7.26164 10.6441 5.99997 10.6441 4.73839 10.6441 4.56724 10.6395 4.05817 10.6162 3.67576 10.6101 3.2971 10.5392 2.93836 10.4063 2.63049 10.2925 2.35173 10.112 2.12207 9.87771 1.88774 9.64786 1.7072 9.3689 1.59351 9.06083L7.94189 10.6162zM10.4061 9.06182C10.539 8.70306 10.6101 8.32432 10.6162 7.94189 10.6395 7.4327 10.6441 7.26164 10.6441 5.99997 10.6441 4.73833 10.6395 4.56722 10.6162 4.0581 10.6101 3.67597 10.5392 3.2976 10.4064 2.93911 10.2927 2.63101 10.1122 2.352 9.87777 2.12213 9.64804 1.88792 9.36926 1.70743 9.06139 1.59372 8.70276 1.46084 8.32415 1.38984 7.94184 1.38371M10.4061 9.06182L7.94184 1.38371M7.94184 1.38371C7.43268 1.3605 7.26162 1.35583 5.99997 1.35583 4.73832 1.35583 4.56723 1.3605 4.05812 1.38371 3.6756 1.38984 3.29688 1.4609 2.9381 1.59388L7.94184 1.38371zM1.35583 5.99997C1.35583 7.26162 1.3605 7.43268 1.38371 7.94184L2.12215 2.12215C1.8879 2.35189 1.70742 2.63069 1.59372 2.93856 1.46084 3.2972 1.38984 3.67577 1.38371 4.05812 1.3605 4.56723 1.35583 4.73832 1.35583 5.99997zM5.99998 7.58348C5.68678 7.58348 5.38063 7.49058 5.12023 7.31658 4.85985 7.14258 4.65689 6.89528 4.53704 6.60593 4.41719 6.31663 4.38583 5.99823 4.44693 5.69108 4.50803 5.38388 4.65884 5.10173 4.8803 4.8803 5.10173 4.65884 5.38388 4.50803 5.69108 4.44693 5.99823 4.38583 6.31663 4.41719 6.60593 4.53704 6.89528 4.65689 7.14258 4.85985 7.31658 5.12023 7.49058 5.38063 7.58348 5.68678 7.58348 5.99998 7.58348 6.41993 7.41663 6.82273 7.11968 7.11968 6.82273 7.41663 6.41993 7.58348 5.99998 7.58348z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Instagram12;
