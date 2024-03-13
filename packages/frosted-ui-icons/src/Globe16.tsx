import * as React from 'react';
import { IconProps } from './types';

export const Globe16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          fill={color}
          clipPath="url(#clip0_517_555)"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8Z" />
          <path d="M6.75003 3.51C6.29723 4.6214 6 6.20848 6 8C6 9.79152 6.29723 11.3786 6.75003 12.49C6.97719 13.0476 7.22877 13.4491 7.46975 13.6992C7.7087 13.9473 7.8878 14 8 14C8.1122 14 8.2913 13.9473 8.53025 13.6992C8.77123 13.4491 9.02281 13.0476 9.24997 12.49C9.70277 11.3786 10 9.79152 10 8C10 6.20848 9.70277 4.6214 9.24997 3.51C9.02281 2.95242 8.77123 2.55093 8.53025 2.30075C8.2913 2.05267 8.1122 2 8 2C7.8878 2 7.7087 2.05267 7.46975 2.30075C7.22877 2.55093 6.97719 2.95242 6.75003 3.51ZM6.3894 1.26015C6.80846 0.825088 7.35281 0.5 8 0.5C8.64719 0.5 9.19154 0.825088 9.6106 1.26015C10.0276 1.6931 10.3686 2.28013 10.6391 2.94406C11.1816 4.27568 11.5 6.06359 11.5 8C11.5 9.93641 11.1816 11.7243 10.6391 13.0559C10.3686 13.7199 10.0276 14.3069 9.6106 14.7399C9.19154 15.1749 8.64719 15.5 8 15.5C7.35281 15.5 6.80846 15.1749 6.3894 14.7399C5.97237 14.3069 5.63138 13.7199 5.36089 13.0559C4.81838 11.7243 4.5 9.93641 4.5 8C4.5 6.06359 4.81838 4.27568 5.36089 2.94406C5.63138 2.28013 5.97237 1.6931 6.3894 1.26015Z" />
          <path d="M.913574 5.74988C.913574 6.16409 1.24936 6.49988 1.66357 6.49988L14.3346 6.49988C14.7488 6.49988 15.0846 6.16409 15.0846 5.74988 15.0846 5.33566 14.7488 4.99988 14.3346 4.99988L1.66357 4.99988C1.24936 4.99988.913574 5.33566.913574 5.74988zM.913574 10.2501C.913574 10.6643 1.24936 11.0001 1.66357 11.0001L14.3346 11.0001C14.7488 11.0001 15.0846 10.6643 15.0846 10.2501 15.0846 9.83591 14.7488 9.50012 14.3346 9.50012L1.66357 9.50012C1.24936 9.50012.913574 9.83591.913574 10.2501z" />
        </g>
        <defs>
          <clipPath id="clip0_517_555">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Globe16;
