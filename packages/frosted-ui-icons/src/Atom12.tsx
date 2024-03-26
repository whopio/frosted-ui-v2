import * as React from 'react';
import { IconProps } from './types';

export const Atom12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_882_279)">
          <path
            d="M11.8706 9.09116C11.9126 9.72425 11.7928 10.5379 11.1654 11.1654C10.5379 11.7928 9.72426 11.9126 9.09117 11.8706C8.45417 11.8284 7.8044 11.6176 7.20123 11.3405C6.81072 11.161 6.40773 10.9389 6 10.6795C5.59226 10.9389 5.18928 11.161 4.79877 11.3405C4.1956 11.6176 3.54582 11.8284 2.90883 11.8706C2.27574 11.9126 1.46206 11.7928 0.834617 11.1654C0.207171 10.5379 0.0874042 9.72425 0.129375 9.09116C0.171604 8.45417 0.382385 7.80439 0.659517 7.20122C0.83894 6.81071 1.06105 6.40773 1.32045 6C1.06105 5.59226 0.838931 5.18926 0.659504 4.79875C0.382372 4.19558 0.171593 3.5458 0.129363 2.90881C0.0873923 2.27572 0.207159 1.46204 0.834605 0.834597C1.46205 0.207151 2.27572 0.0873846 2.90882 0.129356C3.54581 0.171585 4.19558 0.382365 4.79875 0.659497C5.18927 0.838923 5.59226 1.06104 6 1.32044C6.40773 1.06104 6.81072 0.838923 7.20124 0.659497C7.80441 0.382365 8.45418 0.171585 9.09118 0.129356C9.72427 0.0873846 10.5379 0.207151 11.1654 0.834597C11.7928 1.46204 11.9126 2.27572 11.8706 2.90881C11.8284 3.5458 11.6176 4.19558 11.3405 4.79875C11.1611 5.18926 10.9389 5.59226 10.6795 5.99999C10.9389 6.40772 11.1611 6.81071 11.3405 7.20122C11.6176 7.80439 11.8284 8.45417 11.8706 9.09116ZM1.89528 10.1047C1.40765 9.61708 1.59351 8.56321 2.27913 7.3212C2.62688 7.74791 3.0089 8.17075 3.41906 8.58091C3.82923 8.99108 4.25207 9.37311 4.67879 9.72086C3.43678 10.4065 2.38291 10.5923 1.89528 10.1047ZM4.47972 7.52025C4.98114 8.02167 5.49486 8.46879 6 8.85202C6.50513 8.46879 7.01885 8.02167 7.52027 7.52025C8.02169 7.01884 8.4688 6.50512 8.85203 5.99999C8.4688 5.49486 8.02168 4.98114 7.52026 4.47972C7.01884 3.9783 6.50513 3.53118 6 3.14796C5.49487 3.53118 4.98115 3.9783 4.47973 4.47972C3.97831 4.98114 3.53119 5.49486 3.14796 5.99999C3.53119 6.50512 3.97831 7.01884 4.47972 7.52025ZM10.1047 10.1047C9.61709 10.5923 8.56321 10.4065 7.3212 9.72086C7.74792 9.37311 8.17076 8.99108 8.58093 8.58091C8.9911 8.17075 9.37312 7.74791 9.72086 7.3212C10.4065 8.56321 10.5923 9.61708 10.1047 10.1047ZM10.1047 1.89526C10.5924 2.38289 10.4065 3.43677 9.72087 4.67879C9.37312 4.25207 8.99109 3.82923 8.58092 3.41906C8.17075 3.00889 7.74792 2.62687 7.3212 2.27912C8.56322 1.59349 9.6171 1.40763 10.1047 1.89526ZM3.41907 3.41906C3.82924 3.00889 4.25208 2.62687 4.67879 2.27912C3.43678 1.59349 2.3829 1.40763 1.89526 1.89526C1.40763 2.38289 1.5935 3.43677 2.27913 4.67879C2.62688 4.25207 3.0089 3.82923 3.41907 3.41906ZM6 6.99998C6.55228 6.99998 6.99999 6.55227 6.99999 5.99998C6.99999 5.4477 6.55228 4.99998 6 4.99998C5.44771 4.99998 5 5.4477 5 5.99998C5 6.55227 5.44771 6.99998 6 6.99998Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_279">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Atom12;
