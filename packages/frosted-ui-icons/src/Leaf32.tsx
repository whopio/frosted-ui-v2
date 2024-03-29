import * as React from 'react';
import { IconProps } from './types';

export const Leaf32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M28.8651 2.26225C29.1074 2.21792 29.3561 2.29546 29.5303 2.46968C29.7046 2.6439 29.7821 2.89259 29.7378 3.13495L29.7376 3.13606L29.7351 3.14947L29.7275 3.19044L29.6978 3.34878C29.6716 3.48728 29.6328 3.69035 29.582 3.94993C29.4803 4.46906 29.3305 5.21444 29.1377 6.12165C28.7522 7.93531 28.1941 10.3993 27.5037 12.9971C26.8141 15.5921 25.9889 18.3348 25.0673 20.7007C24.158 23.0352 23.1145 25.1129 21.947 26.2803C17.6441 30.5832 10.7741 30.7543 6.26705 26.7936L3.53033 29.5303C3.23744 29.8232 2.76256 29.8232 2.46967 29.5303C2.17678 29.2374 2.17678 28.7626 2.46967 28.4697L5.20639 25.7329C1.24571 21.2259 1.4168 14.3559 5.71968 10.053C6.88717 8.88551 8.96484 7.84205 11.2994 6.9327C13.6652 6.01114 16.4079 5.18588 19.0029 4.49627C21.6007 3.80593 24.0647 3.24777 25.8784 2.86233C26.7856 2.66953 27.531 2.51974 28.0501 2.41806C28.3097 2.36722 28.5127 2.32839 28.6512 2.30221L28.8096 2.27251L28.8505 2.26492L28.8651 2.26225ZM20.8864 25.2197C17.1695 28.9365 11.249 29.1068 7.3303 25.7304L13.0607 20H19.25C19.6642 20 20 19.6642 20 19.25C20 18.8358 19.6642 18.5 19.25 18.5H14.5607L23.0303 10.0303C23.3232 9.73744 23.3232 9.26256 23.0303 8.96967C22.7374 8.67678 22.2626 8.67678 21.9697 8.96967L16.75 14.1893V11.433C16.75 11.0188 16.4142 10.683 16 10.683C15.5858 10.683 15.25 11.0188 15.25 11.433V15.6893L10.1012 20.8381L10.2496 16.0231C10.2624 15.6091 9.93712 15.2631 9.5231 15.2504C9.10909 15.2376 8.76311 15.5629 8.75035 15.9769L8.55275 22.3866L6.26964 24.6697C2.89324 20.751 3.06347 14.8305 6.78033 11.1137C7.70692 10.1871 9.52003 9.23557 11.8438 8.33041C14.1362 7.43745 16.8192 6.62865 19.3882 5.94595C21.9544 5.26398 24.3926 4.71159 26.1902 4.32956C26.9338 4.17153 27.5671 4.04278 28.0538 3.94621C27.9572 4.4329 27.8285 5.06624 27.6705 5.80983C27.2884 7.6074 26.736 10.0456 26.0541 12.6118C25.3714 15.1808 24.5626 17.8638 23.6696 20.1562C22.7644 22.48 21.8129 24.2931 20.8864 25.2197Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default Leaf32;