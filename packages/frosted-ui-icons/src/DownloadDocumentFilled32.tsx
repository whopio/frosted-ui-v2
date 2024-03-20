import * as React from 'react';
import { IconProps } from './types';

export const DownloadDocumentFilled32 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M23.8559 11.5833L17.7499 5.4773V9.66666C17.7499 10.7252 18.608 11.5833 19.6666 11.5833H23.8559ZM8.99992 2.91666C7.11295 2.91666 5.58325 4.44635 5.58325 6.33332V25.6667C5.58325 27.5537 7.11295 29.0833 8.99992 29.0833H22.9999C24.8869 29.0833 26.4166 27.5537 26.4166 25.6667V13.4379C26.4166 12.5317 26.0566 11.6627 25.4158 11.0219L25.4158 11.0219L18.3113 3.91738L18.3113 3.91737C17.6705 3.27663 16.8015 2.91666 15.8954 2.91666H8.99992ZM16.3124 14.75C16.7266 14.75 17.0624 15.0858 17.0624 15.5V21.3621L18.1265 20.2981C18.4194 20.0052 18.8942 20.0052 19.1871 20.2981C19.48 20.591 19.48 21.0659 19.1871 21.3588L17.1265 23.4194C16.6383 23.9076 15.8469 23.9076 15.3587 23.4194L13.4696 21.5303C13.1767 21.2374 13.1767 20.7626 13.4696 20.4697C13.7625 20.1768 14.2374 20.1768 14.5303 20.4697L15.5624 21.5018V15.5C15.5624 15.0858 15.8982 14.75 16.3124 14.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity=".875"
      />
    </svg>
  );
});

export default DownloadDocumentFilled32;
