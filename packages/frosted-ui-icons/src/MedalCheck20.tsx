import * as React from 'react';
import { IconProps } from './types';

export const MedalCheck20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_622_704)">
          <path
            d="M0.148633 2.37997C-0.106372 1.00924 1.05419 0 2.24989 0H3.95111C5.49755 0 6.61511 1.24629 6.88474 2.58945C7.12966 3.80951 7.57755 4.80072 7.96426 5.48608C8.12888 5.77783 8.28141 6.01238 8.40063 6.18356C8.91431 6.0635 9.44975 6 10 6C10.5503 6 11.0857 6.06349 11.5993 6.18353C11.7185 6.01236 11.8711 5.77782 12.0357 5.48608C12.4224 4.80072 12.8703 3.80951 13.1152 2.58945C13.3848 1.24629 14.5024 0 16.0488 0H17.7501C18.9458 0 20.1063 1.00924 19.8513 2.37997C19.4196 4.70068 18.128 6.39802 16.9751 7.50052C16.4329 8.01906 15.914 8.41335 15.5139 8.68703C16.445 9.87569 17 11.373 17 13C17 16.866 13.866 20 10 20C6.13403 20 3.00002 16.866 3.00002 13C3.00002 11.373 3.55507 9.87573 4.48613 8.68708C4.08605 8.4134 3.56709 8.01909 3.02483 7.50052C1.87197 6.39802 0.580366 4.70068 0.148633 2.37997ZM14.4477 7.59437C14.495 7.56404 14.5457 7.53084 14.5995 7.49474C14.9528 7.25759 15.4342 6.89858 15.9384 6.41644C16.9507 5.4484 18.021 4.01714 18.3766 2.10563C18.4049 1.95385 18.3604 1.81839 18.2543 1.706C18.1418 1.58693 17.9612 1.5 17.7501 1.5H16.0488C15.3861 1.5 14.751 2.06191 14.5859 2.88468C14.3029 4.29426 13.7871 5.43452 13.3421 6.22321C13.2424 6.39979 13.1461 6.55924 13.0563 6.70066C13.5562 6.94369 14.023 7.24448 14.4477 7.59437ZM6.65787 6.22321C6.75752 6.39981 6.85389 6.55927 6.9437 6.7007C6.44373 6.94373 5.97704 7.24452 5.55229 7.59441C5.50502 7.56407 5.45429 7.53085 5.40048 7.49474C5.04716 7.25759 4.56571 6.89858 4.06155 6.41644C3.04929 5.4484 1.97894 4.01714 1.62333 2.10563C1.5951 1.95385 1.6395 1.81839 1.74567 1.706C1.85815 1.58693 2.03876 1.5 2.24989 1.5H3.95111C4.61381 1.5 5.24892 2.06191 5.41408 2.88468C5.69704 4.29426 6.21286 5.43452 6.65787 6.22321ZM10 18.5C13.0376 18.5 15.5 16.0376 15.5 13C15.5 9.96243 13.0376 7.5 10 7.5C6.96246 7.5 4.50002 9.96243 4.50002 13C4.50002 16.0376 6.96246 18.5 10 18.5Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.5 13.5L9 15L12.5 11.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_622_704">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default MedalCheck20;
